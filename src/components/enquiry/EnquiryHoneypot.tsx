/*
  Honeypot: hidden from people, bots tend to fill it in. The enquiry route
  quietly discards any submission where the "website" field has a value.
*/
export default function EnquiryHoneypot({ idPrefix }: { idPrefix: string }) {
  const id = `${idPrefix}-website`;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-9999px",
        width: "1px",
        height: "1px",
        overflow: "hidden",
      }}
    >
      <label htmlFor={id}>Website</label>
      <input
        id={id}
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
