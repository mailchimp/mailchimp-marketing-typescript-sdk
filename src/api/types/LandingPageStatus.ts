//  This file was auto-generated from our API Definition.

/** The status of this landing page. */
export const LandingPageStatus = {
    Published: "published",
    Unpublished: "unpublished",
    Draft: "draft",
} as const;
export type LandingPageStatus = (typeof LandingPageStatus)[keyof typeof LandingPageStatus];
