//  This file was auto-generated from our API Definition.

/** How we should evaluate a winner. Based on 'opens', 'clicks', or 'manual'. */
export const AbTestingOptionsPickWinner = {
    Opens: "opens",
    Clicks: "clicks",
    Manual: "manual",
} as const;
export type AbTestingOptionsPickWinner = (typeof AbTestingOptionsPickWinner)[keyof typeof AbTestingOptionsPickWinner];
