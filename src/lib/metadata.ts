import type { Metadata } from "next";

const SITE_NAME = "Iris & Oak Digital Studio";

/* 1200 × 630 sharing image built from the Iris & Oak logo badge. */
export const SOCIAL_IMAGE = {
  url: "/images/social/iris-oak-share.png",
  width: 1200,
  height: 630,
  alt: "Iris & Oak Digital Studio, websites and digital products for independent businesses",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

/*
  Page metadata with matching canonical and social sharing details.
  A page's openGraph replaces the root layout's, so the sharing image
  is included here as well.
*/
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const socialTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: "Iris & Oak",
      url: path,
      title: socialTitle,
      description,
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [SOCIAL_IMAGE],
    },
  };
}
