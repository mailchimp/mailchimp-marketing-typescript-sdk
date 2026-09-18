//  This file was auto-generated from our API Definition.

/** The HTTP method that should be used when accessing the URL defined in 'href'. */
export const CampaignContentLinksItemMethod = {
    Get: "GET",
    Post: "POST",
    Put: "PUT",
    Patch: "PATCH",
    Delete: "DELETE",
    Options: "OPTIONS",
    Head: "HEAD",
} as const;
export type CampaignContentLinksItemMethod =
    (typeof CampaignContentLinksItemMethod)[keyof typeof CampaignContentLinksItemMethod];
