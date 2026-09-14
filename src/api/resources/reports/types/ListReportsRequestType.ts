//  This file was auto-generated from our API Definition.

export const ListReportsRequestType = {
    Regular: "regular",
    Plaintext: "plaintext",
    Absplit: "absplit",
    Rss: "rss",
    Variate: "variate",
} as const;
export type ListReportsRequestType = (typeof ListReportsRequestType)[keyof typeof ListReportsRequestType];
