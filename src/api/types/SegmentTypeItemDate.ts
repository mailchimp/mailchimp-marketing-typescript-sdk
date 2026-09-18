//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by a specific date field.
 */
export interface SegmentTypeItemDate {
    /** When segmenting on 'date' or 'campaign', the date for the segment formatted as YYYY-MM-DD or the web id for the campaign. */
    extra?: string;
    /** The type of date field to segment on: The opt-in time for a signup, the date the subscriber was last updated, or the date of their last ecomm purchase. */
    field: Mailchimp.SegmentTypeItemDateField;
    /** When the event took place:  Before, after, is a specific date, is not a specific date, is blank, or is not blank. */
    op: Mailchimp.SegmentTypeItemDateOp;
    /** What type of data to segment on: a specific date, a specific campaign, or the last campaign sent. */
    value: string;
}
