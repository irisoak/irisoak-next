"use client";

import {
  KeyboardEvent,
  PointerEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./Carousel.module.css";

type CarouselProps = {
  slides: ReactNode[];
  label: string;
  autoPlay?: boolean;
  interval?: number;
};

const SWIPE_THRESHOLD = 50;
const MAX_DRAG = 180;

const pad = (number: number) =>
  String(number).padStart(2, "0");

export default function Carousel({
  slides,
  label,
  autoPlay = false,
  interval = 6000,
}: CarouselProps) {
  const [index, setIndex] = useState(0);

  const [isHovered, setIsHovered] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);

  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const startX = useRef<number | null>(null);

  const total = slides.length;

  const isPaused =
    isHovered ||
    isFocusWithin ||
    isDragging;

  const next = useCallback(() => {
    if (total < 2) return;

    setIndex((current) => (current + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    if (total < 2) return;

    setIndex(
      (current) =>
        (current - 1 + total) % total
    );
  }, [total]);

  const goTo = (target: number) => {
    if (total < 2) return;

    setIndex(
      ((target % total) + total) % total
    );
  };

  /* ========================================
     Autoplay
  ======================================== */

  useEffect(() => {
    if (
      !autoPlay ||
      isPaused ||
      total < 2
    ) {
      return;
    }

    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const timer = window.setInterval(
      next,
      interval
    );

    return () => {
      window.clearInterval(timer);
    };
  }, [
    autoPlay,
    interval,
    isPaused,
    next,
    total,
  ]);

  /* ========================================
     Keyboard
  ======================================== */

  const handleKeyDown = (
    event: KeyboardEvent<HTMLDivElement>
  ) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    }
  };

  /* ========================================
     Pointer / Swipe
  ======================================== */

  const handlePointerDown = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    if (total < 2) return;

    if (
      event.pointerType === "mouse" &&
      event.button !== 0
    ) {
      return;
    }

    startX.current = event.clientX;

    setDragOffset(0);
    setIsDragging(true);

    event.currentTarget.setPointerCapture(
      event.pointerId
    );
  };

  const handlePointerMove = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    if (
      !isDragging ||
      startX.current === null
    ) {
      return;
    }

    const offset =
      event.clientX - startX.current;

    const clampedOffset = Math.max(
      -MAX_DRAG,
      Math.min(MAX_DRAG, offset)
    );

    setDragOffset(clampedOffset);
  };

  const endDrag = () => {
    if (!isDragging) return;

    if (dragOffset < -SWIPE_THRESHOLD) {
      next();
    } else if (
      dragOffset > SWIPE_THRESHOLD
    ) {
      prev();
    }

    startX.current = null;

    setDragOffset(0);
    setIsDragging(false);
  };

  /* ========================================
     Empty State
  ======================================== */

  if (total === 0) {
    return null;
  }

  return (
    <section
      className={styles.carousel}
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() =>
        setIsHovered(true)
      }
      onMouseLeave={() =>
        setIsHovered(false)
      }
      onFocusCapture={() =>
        setIsFocusWithin(true)
      }
      onBlurCapture={(event) => {
        const nextTarget =
          event.relatedTarget as Node | null;

        if (
          !event.currentTarget.contains(
            nextTarget
          )
        ) {
          setIsFocusWithin(false);
        }
      }}
    >
      <div
        className={styles.viewport}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onLostPointerCapture={endDrag}
      >
        <div
          className={`${styles.track} ${
            isDragging
              ? styles.dragging
              : ""
          }`}
          style={{
            transform: `translateX(calc(${
              -index * 100
            }% + ${dragOffset}px))`,
          }}
          aria-live={
            autoPlay && !isPaused
              ? "off"
              : "polite"
          }
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={styles.slide}
              role="group"
              aria-roledescription="slide"
              aria-label={`${
                slideIndex + 1
              } of ${total}`}
              aria-hidden={
                slideIndex !== index
              }
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {total > 1 && (
        <div className={styles.controls}>
          <p
            className={styles.counter}
            aria-hidden="true"
          >
            <span
              className={
                styles.counterCurrent
              }
            >
              {pad(index + 1)}
            </span>

            <span
              className={
                styles.counterDivider
              }
            >
              /
            </span>

            <span>{pad(total)}</span>
          </p>

          <div className={styles.dots}>
            {slides.map(
              (_, slideIndex) => (
                <button
                  key={slideIndex}
                  type="button"
                  className={`${styles.dot} ${
                    slideIndex === index
                      ? styles.dotActive
                      : ""
                  }`}
                  onClick={() =>
                    goTo(slideIndex)
                  }
                  aria-label={`Go to slide ${
                    slideIndex + 1
                  }`}
                  aria-current={
                    slideIndex === index
                      ? "true"
                      : undefined
                  }
                >
                  <span
                    className={
                      styles.dotBar
                    }
                  />
                </button>
              )
            )}
          </div>

          <div className={styles.arrows}>
            <button
              type="button"
              className={styles.arrow}
              onClick={prev}
              aria-label="Previous slide"
            >
              ←
            </button>

            <button
              type="button"
              className={styles.arrow}
              onClick={next}
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}