import Link from "next/link";

type ConceptBarProps = {
  number: string;
  packageName: string;
};

export default function ConceptBar({
  number,
  packageName,
}: ConceptBarProps) {
  return (
    <div className="concept-bar">
      <Link href="/concepts" className="concept-bar__back">
        ← Back to Concepts
      </Link>

      <span className="concept-bar__identity">
        Iris & Oak / Concept {number}
      </span>

      <span className="concept-bar__package">
        {packageName}
      </span>
    </div>
  );
}