//  This file was auto-generated from our API Definition.

/** Whether the email address is/not exactly, contains/doesn't contain, starts/ends with a string. */
export const SegmentTypeItemEmailAddressOp = {
    Is: "is",
    Not: "not",
    Contains: "contains",
    Notcontain: "notcontain",
    Starts: "starts",
    Ends: "ends",
    Greater: "greater",
    Less: "less",
} as const;
export type SegmentTypeItemEmailAddressOp =
    (typeof SegmentTypeItemEmailAddressOp)[keyof typeof SegmentTypeItemEmailAddressOp];
