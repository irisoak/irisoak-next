"use client";

import { Analytics } from "@vercel/analytics/next";

const ANALYTICS_OPT_OUT_KEY = "irisoak-analytics-disabled";

export default function SiteAnalytics() {
  return (
    <Analytics
      beforeSend={(event) => {
        const analyticsDisabled =
          localStorage.getItem(ANALYTICS_OPT_OUT_KEY) === "true";

        if (analyticsDisabled) {
          return null;
        }

        return event;
      }}
    />
  );
}