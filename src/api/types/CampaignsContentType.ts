//  This file was auto-generated from our API Definition.

/** How the campaign's content is put together. */
export const CampaignsContentType = {
    Template: "template",
    Html: "html",
    Url: "url",
    Multichannel: "multichannel",
} as const;
export type CampaignsContentType = (typeof CampaignsContentType)[keyof typeof CampaignsContentType];
