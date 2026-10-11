"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./SiteCheckupReport.module.css";

type Platform = "custom" | "wordpress" | "squarespace" | "wix" | "godaddy" | "shopify" | "webflow";
type Status = "not-checked" | "passed" | "to-fix" | "fixed" | "managed" | "not-applicable";
type Priority = "high" | "medium" | "low";
type Check = { id: string; group: string; title: string; method: string; managedOn?: Platform[]; optional?: boolean };
type Result = { status: Status; priority: Priority; note: string };
type Snapshot = { score: number; grade: string; checked: number; scored: number; savedAt: string; results: Record<string, Result> };
type Draft = { client: string; website: string; platform: Platform; reviewDate: string; reviewedBy: string; results: Record<string, Result>; notes: string; baseline: Snapshot | null };

const PLATFORMS: { id: Platform; name: string }[] = [
  { id: "custom", name: "Custom-built" },
  { id: "wordpress", name: "WordPress" },
  { id: "squarespace", name: "Squarespace" },
  { id: "wix", name: "Wix" },
  { id: "godaddy", name: "GoDaddy Website Builder" },
  { id: "shopify", name: "Shopify" },
  { id: "webflow", name: "Webflow" },
];

const CHECKS: Check[] = [
  { id: "https", group: "Availability and speed", title: "Website opens securely over HTTPS", method: "Open the site and check the browser connection." },
  { id: "uptime", group: "Availability and speed", title: "Recent uptime status reviewed", method: "Check the configured UptimeRobot monitor and state the period reviewed." },
  { id: "mobile-speed", group: "Availability and speed", title: "Mobile PageSpeed result recorded", method: "Run PageSpeed Insights for the agreed key page; record the score and date." },
  { id: "desktop-speed", group: "Availability and speed", title: "Desktop PageSpeed result recorded", method: "Run PageSpeed Insights for the same page; record the score and date." },
  { id: "images", group: "Availability and speed", title: "Large images and obvious loading issues reviewed", method: "Note specific images or visible loading problems; avoid treating one file-size target as a universal rule." },
  { id: "key-pages", group: "Pages and journeys", title: "Agreed key pages load and display correctly", method: "Review up to five pages agreed with the client." },
  { id: "mobile-layout", group: "Pages and journeys", title: "Mobile layout spot-checked", method: "Check the agreed pages at a phone-width viewport." },
  { id: "navigation", group: "Pages and journeys", title: "Main navigation works as expected", method: "Open the primary navigation links and menus." },
  { id: "links", group: "Pages and journeys", title: "Important internal links reviewed", method: "Check key calls to action and use a link checker where appropriate." },
  { id: "contact-form", group: "Pages and journeys", title: "Contact form submission checked", method: "Submit an agreed test and confirm where it is delivered. Get permission before sending." , optional: true },
  { id: "booking", group: "Pages and journeys", title: "Booking or purchase links checked", method: "Confirm the link opens the intended service; do not place a real order unless agreed.", optional: true },
  { id: "page-titles", group: "Content and findability", title: "Page titles reviewed", method: "Check the agreed pages have clear, relevant titles." },
  { id: "descriptions", group: "Content and findability", title: "Meta descriptions reviewed", method: "Check the agreed pages for useful descriptions; this is not an SEO ranking audit." },
  { id: "headings", group: "Content and findability", title: "Heading structure spot-checked", method: "Look for a clear page heading and sensible section hierarchy." },
  { id: "alt-text", group: "Content and findability", title: "Meaningful images spot-checked for alt text", method: "Review a sample of meaningful images; decorative images may correctly use empty alt text." },
  { id: "keyboard", group: "Usability observations", title: "Keyboard navigation spot-checked", method: "Use Tab and Enter on key navigation and form controls." },
  { id: "contrast", group: "Usability observations", title: "Text contrast spot-checked", method: "Record specific observations. This is not a WCAG conformance audit." },
  { id: "platform-updates", group: "Platform and access", title: "Platform or core updates status recorded", method: "For custom or WordPress sites, check only with the agreed access. Hosted providers manage their platform updates.", managedOn: ["squarespace", "wix", "godaddy", "shopify", "webflow"] },
];

const STORAGE_KEY = "io-site-checkup-draft-v2";
const HOSTED = new Set<Platform>(["squarespace", "wix", "godaddy", "shopify", "webflow"]);
const PRIORITIES: Priority[] = ["high", "medium", "low"];

function emptyResults(platform: Platform): Record<string, Result> {
  return Object.fromEntries(CHECKS.map((check) => [check.id, {
    status: check.id === "platform-updates" && HOSTED.has(platform) ? "managed" : "not-checked",
    priority: "medium",
    note: "",
  }]));
}

function blankDraft(): Draft {
  return {
    client: "", website: "", platform: "custom", reviewDate: "", reviewedBy: "Iris & Oak",
    results: emptyResults("custom"), notes: "", baseline: null,
  };
}

function gradeFor(score: number): { grade: string; label: string } {
  if (score >= 90) return { grade: "A", label: "Strong overall result" };
  if (score >= 80) return { grade: "B", label: "Good, with a few improvements" };
  if (score >= 70) return { grade: "C", label: "Several useful improvements identified" };
  if (score >= 60) return { grade: "D", label: "A number of areas need attention" };
  return { grade: "F", label: "Priority issues need attention" };
}

function statusLabel(status: Status, platform: Platform) {
  if (status === "managed") return `Managed by ${PLATFORMS.find((item) => item.id === platform)?.name ?? "platform"}`;
  return ({ "not-checked": "Not checked", passed: "Passed", "to-fix": "To fix", fixed: "Fixed after retest", "not-applicable": "Not applicable" } as Record<Exclude<Status, "managed">, string>)[status];
}

function getMetrics(results: Record<string, Result>) {
  const finalized = Object.values(results).filter((result) => result.status !== "not-checked");
  const applicable = finalized.filter((result) => result.status !== "not-applicable");
  const scored = applicable.filter((result) => result.status !== "managed");
  const complete = Object.values(results).every((result) => result.status !== "not-checked");
  const passed = scored.filter((result) => result.status === "passed" || result.status === "fixed").length;
  const score = scored.length ? Math.round((passed / scored.length) * 100) : null;
  const grade = score === null ? null : gradeFor(score);
  return { finalized: finalized.length, applicable: applicable.length, scored: scored.length, passed, complete, score, grade };
}

function sampleDraft(): Draft {
  const draft = blankDraft();
  draft.client = "Example client (sample)";
  draft.website = "https://example.com";
  draft.platform = "squarespace";
  draft.reviewDate = new Date().toISOString().slice(0, 10);
  draft.results = emptyResults("squarespace");
  for (const check of CHECKS) {
    const status: Status = ["https", "key-pages", "mobile-layout", "navigation", "page-titles", "keyboard"].includes(check.id) ? "passed" :
      ["mobile-speed", "images", "links", "descriptions", "contrast"].includes(check.id) ? "to-fix" :
      check.id === "platform-updates" ? "managed" : "not-checked";
    draft.results[check.id] = { status, priority: status === "to-fix" ? "medium" : "medium", note: status === "to-fix" ? "Example finding only. Replace with an observation from the actual review." : "" };
  }
  return draft;
}

export default function SiteCheckupReport() {
  const [draft, setDraft] = useState<Draft>(blankDraft);
  const [view, setView] = useState<"edit" | "report">("edit");
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");
  const metrics = useMemo(() => getMetrics(draft.results), [draft.results]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Draft;
        if (parsed && parsed.results && parsed.platform) setDraft(parsed);
      }
    } catch {
      // Keep a clean blank draft if browser storage is unavailable or invalid.
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(draft)); } catch { /* Storage can be disabled. */ }
  }, [draft, ready]);

  function update<K extends keyof Draft>(key: K, value: Draft[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  function changePlatform(platform: Platform) {
    setDraft((current) => {
      const results = { ...current.results };
      const updateCheck = results["platform-updates"];
      if (updateCheck && updateCheck.status !== "passed" && updateCheck.status !== "to-fix" && updateCheck.status !== "fixed") {
        results["platform-updates"] = { ...updateCheck, status: HOSTED.has(platform) ? "managed" : "not-checked" };
      }
      return { ...current, platform, results, baseline: current.platform === platform ? current.baseline : null };
    });
  }

  function updateResult<K extends keyof Result>(id: string, key: K, value: Result[K]) {
    setDraft((current) => ({
      ...current,
      results: {
        ...current.results,
        [id]: { ...current.results[id], [key]: value },
      },
    }));
  }

  function saveBaseline() {
    if (!metrics.complete || metrics.score === null || !metrics.grade) return;
    const baseline: Snapshot = {
      score: metrics.score, grade: metrics.grade.grade, checked: metrics.finalized,
      scored: metrics.scored, savedAt: new Date().toISOString(), results: structuredClone(draft.results),
    };
    setDraft((current) => ({ ...current, baseline, results: emptyResults(current.platform) }));
    setView("edit");
    setMessage("Baseline saved. Enter the follow-up results after retesting.");
  }

  function loadExample() {
    setDraft(sampleDraft());
    setView("edit");
    setMessage("Sample loaded. Replace all sample details before using a real report.");
  }

  function newReport() {
    setDraft(blankDraft());
    setView("edit");
    setMessage("Started a blank report.");
  }

  async function copySummary() {
    const title = metrics.grade ? `${metrics.grade.grade} · ${metrics.score}/100` : "Grade pending";
    const lines = [
      `Website Site Check-up${draft.client ? ` — ${draft.client}` : ""}`,
      draft.website || "Website not entered",
      `Platform: ${PLATFORMS.find((item) => item.id === draft.platform)?.name}`,
      `Review date: ${draft.reviewDate || "Not entered"}`,
      `Checks reviewed: ${metrics.finalized}/${CHECKS.length}`,
      `Overall grade: ${title}`,
      ...CHECKS.filter((check) => draft.results[check.id]?.status === "to-fix").map((check) => {
        const result = draft.results[check.id];
        return `- ${result.priority.toUpperCase()}: ${check.title}${result.note ? ` — ${result.note}` : ""}`;
      }),
      draft.notes ? `Notes: ${draft.notes}` : "",
      "",
      "This report records a scoped review at the time shown. It is not a formal security, SEO or accessibility audit.",
    ].filter(Boolean);
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setMessage("Report summary copied.");
    } catch {
      setMessage("Copy was blocked by the browser. You can print the report instead.");
    }
  }

  const resultStatusCount = (status: Status) => CHECKS.filter((check) => draft.results[check.id]?.status === status).length;

  return (
    <section className={styles.report} aria-labelledby="checkup-report-title">
      <header className={styles.toolbar}>
        <div>
          <p className={styles.brand}>iris &amp; oak <span>Site Check-up</span></p>
          <p className={styles.localNote}>Drafts save in this browser only · No client link or cloud storage</p>
        </div>
        <div className={styles.toolbarActions}>
          <button type="button" className={styles.button} onClick={() => setView(view === "edit" ? "report" : "edit")}>
            {view === "edit" ? "Report preview" : "Edit report"}
          </button>
          <button type="button" className={styles.button} onClick={loadExample}>Load sample</button>
          <button type="button" className={styles.button} onClick={newReport}>New report</button>
        </div>
      </header>

      <div className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>One-off website review</p>
          <h1 id="checkup-report-title">Your website, clearly reviewed.</h1>
          <p>What was checked, what needs attention, and what to consider next. Findings are recorded from this review; provider-managed services are labelled clearly.</p>
        </div>
        <div className={styles.fields}>
          <label>Client<input value={draft.client} onChange={(event) => update("client", event.target.value)} readOnly={view === "report"} /></label>
          <label>Website<input value={draft.website} onChange={(event) => update("website", event.target.value)} readOnly={view === "report"} /></label>
          <label>Platform<select value={draft.platform} onChange={(event) => changePlatform(event.target.value as Platform)} disabled={view === "report"}>{PLATFORMS.map((platform) => <option key={platform.id} value={platform.id}>{platform.name}</option>)}</select></label>
          <label>Review date<input type="date" value={draft.reviewDate} onChange={(event) => update("reviewDate", event.target.value)} readOnly={view === "report"} /></label>
          <label>Reviewed by<input value={draft.reviewedBy} onChange={(event) => update("reviewedBy", event.target.value)} readOnly={view === "report"} /></label>
        </div>
      </div>

      <div className={styles.summary}>
        <div className={styles.gradeBlock}>
          <span className={styles.gradeLabel}>Overall grade</span>
          <strong className={styles.grade}>{metrics.complete && metrics.grade ? metrics.grade.grade : "—"}</strong>
          <span>{metrics.complete && metrics.grade ? metrics.grade.label : "Complete applicable checks to calculate"}</span>
        </div>
        <div className={styles.metric}><strong>{metrics.finalized}/{CHECKS.length}</strong><span>Checks reviewed</span></div>
        <div className={styles.metric}><strong>{metrics.score === null ? "—" : `${metrics.score}%`}</strong><span>Equal-weight score</span></div>
        <div className={styles.metric}><strong>{resultStatusCount("to-fix")}</strong><span>Findings to address</span></div>
        {draft.baseline && <div className={styles.metric}><strong>{draft.baseline.grade} → {metrics.complete && metrics.grade ? metrics.grade.grade : "—"}</strong><span>Before → after</span></div>}
      </div>

      {draft.baseline && <p className={styles.baselineNote}>Before: {draft.baseline.score}% ({draft.baseline.grade}), saved {new Date(draft.baseline.savedAt).toLocaleDateString("en-GB")} · After: shown when the follow-up review is complete. A “Fixed” result should only be selected after retesting.</p>}

      <div className={styles.legend}>
        <span><i className={styles.dotGood} /> {resultStatusCount("passed")} passed</span>
        <span><i className={styles.dotIssue} /> {resultStatusCount("to-fix")} to fix</span>
        <span><i className={styles.dotManaged} /> {resultStatusCount("managed")} managed by platform</span>
        <span><i className={styles.dotMuted} /> {CHECKS.length - metrics.finalized} not checked</span>
      </div>

      {view === "edit" ? (
        <div className={styles.checkGroups}>
          {[...new Set(CHECKS.map((check) => check.group))].map((group) => (
            <section className={styles.group} key={group}>
              <h2>{group}</h2>
              {CHECKS.filter((check) => check.group === group).map((check) => {
                const result = draft.results[check.id] ?? { status: "not-checked" as Status, priority: "medium" as Priority, note: "" };
                const isManaged = check.managedOn?.includes(draft.platform) && result.status === "managed";
                return (
                  <article className={styles.checkRow} key={check.id}>
                    <div className={styles.checkDescription}>
                      <h3>{check.title}{check.optional && <span className={styles.optional}>Optional</span>}</h3>
                      <p>{check.method}</p>
                    </div>
                    <div className={styles.checkControls}>
                      <label>Status<select value={result.status} onChange={(event) => updateResult(check.id, "status", event.target.value as Status)}>
                        <option value="not-checked">Not checked</option>
                        <option value="passed">Passed</option>
                        <option value="to-fix">To fix</option>
                        <option value="fixed">Fixed after retest</option>
                        {check.managedOn?.includes(draft.platform) && <option value="managed">Managed by platform</option>}
                        <option value="not-applicable">Not applicable</option>
                      </select></label>
                      {result.status === "to-fix" && <label>Priority<select value={result.priority} onChange={(event) => updateResult(check.id, "priority", event.target.value as Priority)}>{PRIORITIES.map((priority) => <option key={priority} value={priority}>{priority[0].toUpperCase() + priority.slice(1)}</option>)}</select></label>}
                      <label className={styles.noteField}>{isManaged ? `Provider status (${PLATFORMS.find((platform) => platform.id === draft.platform)?.name})` : "Finding or evidence"}<textarea value={result.note} onChange={(event) => updateResult(check.id, "note", event.target.value)} placeholder={isManaged ? "Platform-managed; add any relevant context" : "Record what you observed"} rows={2} /></label>
                    </div>
                  </article>
                );
              })}
            </section>
          ))}
          <label className={styles.generalNotes}>Additional notes<textarea value={draft.notes} onChange={(event) => update("notes", event.target.value)} rows={4} placeholder="Any context the client should know" /></label>
          {metrics.complete && !draft.baseline && <button type="button" className={styles.secondaryAction} onClick={saveBaseline}>Save this review as the before baseline</button>}
        </div>
      ) : (
        <div className={styles.clientReport}>
          <h2>Review summary</h2>
          <p>{metrics.complete && metrics.grade ? `${metrics.grade.label}. ${metrics.passed} of ${metrics.scored} scored checks passed or were fixed after retest.` : `${metrics.finalized} of ${CHECKS.length} checks reviewed. The grade is not shown until the applicable review is complete.`}</p>
          <h2>Findings</h2>
          {CHECKS.filter((check) => draft.results[check.id]?.status === "to-fix").length ? (
            <ol>{CHECKS.filter((check) => draft.results[check.id]?.status === "to-fix").map((check) => <li key={check.id}><strong>{draft.results[check.id].priority} priority · {check.title}</strong><p>{draft.results[check.id].note || "Details to be confirmed."}</p></li>)}</ol>
          ) : <p>No open findings recorded.</p>}
          <h2>Platform-managed items</h2>
          {CHECKS.filter((check) => draft.results[check.id]?.status === "managed").length ? <ul>{CHECKS.filter((check) => draft.results[check.id]?.status === "managed").map((check) => <li key={check.id}><strong>{statusLabel("managed", draft.platform)}:</strong> {check.title}</li>)}</ul> : <p>No provider-managed items recorded.</p>}
          <h2>Next steps</h2>
          <p>Use the priorities above to decide what to address. Work completed outside this review should be checked again before it is marked fixed.</p>
          {draft.notes && <><h2>Additional notes</h2><p>{draft.notes}</p></>}
          <p className={styles.scopeNote}>This is a scoped website review, not a formal security, SEO or accessibility audit. PageSpeed and uptime readings are point-in-time results; source and review date should be recorded with the relevant finding.</p>
          <div className={styles.reportActions}><button className={styles.button} type="button" onClick={() => window.print()}>Print / Save PDF</button><button className={styles.button} type="button" onClick={copySummary}>Copy email summary</button></div>
        </div>
      )}

      <details className={styles.scoring}>
        <summary>How the grade works</summary>
        <p>Every scored check has equal weight. Passed and fixed-after-retest checks earn one point; “To fix” earns zero. Managed-by-platform and not-applicable checks are shown but excluded from the score. The grade is withheld until every applicable check has a recorded status. Bands in this starter template: A 90–100%, B 80–89%, C 70–79%, D 60–69%, F below 60%. Agree or adjust these bands before using reports with clients.</p>
      </details>
      <footer className={styles.reportFooter}><span>Iris &amp; Oak · Site Check-up</span><span>{draft.reviewDate ? `Reviewed ${new Date(`${draft.reviewDate}T12:00:00`).toLocaleDateString("en-GB")}` : "Review date not entered"}</span></footer>
      <p className={styles.announcement} aria-live="polite">{message}</p>
    </section>
  );
}
