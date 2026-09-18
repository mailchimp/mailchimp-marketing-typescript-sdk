//  This file was auto-generated from our API Definition.

/** How the campaign's content is put together. The old drag and drop editor uses 'template' while the new editor uses 'multichannel'. Defaults to template. */
export const CreateCampaignsRequestContentType = {
    Template: "template",
    Multichannel: "multichannel",
} as const;
export type CreateCampaignsRequestContentType =
    (typeof CreateCampaignsRequestContentType)[keyof typeof CreateCampaignsRequestContentType];
