//  This file was auto-generated from our API Definition.

/** The type of date field to segment on: The opt-in time for a signup, the date the subscriber was last updated, or the date of their last ecomm purchase. */
export const SegmentTypeItemDateField = {
    TimestampOpt: "timestamp_opt",
    InfoChanged: "info_changed",
    EcommDate: "ecomm_date",
} as const;
export type SegmentTypeItemDateField = (typeof SegmentTypeItemDateField)[keyof typeof SegmentTypeItemDateField];
