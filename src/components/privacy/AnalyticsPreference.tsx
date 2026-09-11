"use client";

import { useSyncExternalStore } from "react";

const ANALYTICS_OPT_OUT_KEY = "irisoak-analytics-disabled";
const ANALYTICS_PREFERENCE_EVENT = "irisoak-analytics-preference-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(ANALYTICS_PREFERENCE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(ANALYTICS_PREFERENCE_EVENT, callback);
  };
}

function getSnapshot() {
  return localStorage.getItem(ANALYTICS_OPT_OUT_KEY) === "true";
}

function getServerSnapshot() {
  return false;
}

export default function AnalyticsPreference() {
  const analyticsDisabled = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const handlePreferenceChange = () => {
    localStorage.setItem(
      ANALYTICS_OPT_OUT_KEY,
      String(!analyticsDisabled)
    );

    window.dispatchEvent(
      new Event(ANALYTICS_PREFERENCE_EVENT)
    );
  };

  return (
    <div className="privacy-page__analytics-control">
      <p>
        Analytics are currently{" "}
        <strong>{analyticsDisabled ? "disabled" : "enabled"}</strong> on this
        device.
      </p>

      <button type="button" onClick={handlePreferenceChange}>
        {analyticsDisabled ? "Enable analytics" : "Disable analytics"}
      </button>
    </div>
  );
}