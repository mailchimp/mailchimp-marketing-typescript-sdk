//  This file was auto-generated from our API Definition.

/** How the template's content is put together. */
export const TemplateInstanceContentType = {
    Template: "template",
    Multichannel: "multichannel",
    Html: "html",
} as const;
export type TemplateInstanceContentType =
    (typeof TemplateInstanceContentType)[keyof typeof TemplateInstanceContentType];
