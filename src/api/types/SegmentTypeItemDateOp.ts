//  This file was auto-generated from our API Definition.

/** When the event took place:  Before, after, is a specific date, is not a specific date, is blank, or is not blank. */
export const SegmentTypeItemDateOp = {
    Greater: "greater",
    Less: "less",
    Is: "is",
    Not: "not",
    Blank: "blank",
    BlankNot: "blank_not",
    Within: "within",
    Notwithin: "notwithin",
} as const;
export type SegmentTypeItemDateOp = (typeof SegmentTypeItemDateOp)[keyof typeof SegmentTypeItemDateOp];
