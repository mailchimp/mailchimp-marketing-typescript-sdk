//  This file was auto-generated from our API Definition.

/** The operation to determine whether we select clients that match the value, or clients that do not match the value. */
export const SegmentTypeItemEmailClientOp = {
    ClientIs: "client_is",
    ClientNot: "client_not",
} as const;
export type SegmentTypeItemEmailClientOp =
    (typeof SegmentTypeItemEmailClientOp)[keyof typeof SegmentTypeItemEmailClientOp];
