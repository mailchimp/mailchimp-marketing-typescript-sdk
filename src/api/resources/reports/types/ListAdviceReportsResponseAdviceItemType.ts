//  This file was auto-generated from our API Definition.

/** The sentiment type for a feedback message. */
export const ListAdviceReportsResponseAdviceItemType = {
    Negative: "negative",
    Positive: "positive",
    Neutral: "neutral",
} as const;
export type ListAdviceReportsResponseAdviceItemType =
    (typeof ListAdviceReportsResponseAdviceItemType)[keyof typeof ListAdviceReportsResponseAdviceItemType];
