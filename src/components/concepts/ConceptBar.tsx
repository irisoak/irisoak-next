import Link from "next/link";
import styles from "./ConceptBar.module.css";

type ConceptBarProps = {
  number: string;
  packageName: string;
};

export default function ConceptBar({
  number,
  packageName,
}: ConceptBarProps) {
  return (
    <div className={styles.bar}>
      <Link href="/concepts" className={styles.back}>
        ← Back to Concepts
      </Link>

      <span className={styles.identity}>
        Iris & Oak / Concept {number}
      </span>

      <span className={styles.package}>
        {packageName}
      </span>
    </div>
  );
}