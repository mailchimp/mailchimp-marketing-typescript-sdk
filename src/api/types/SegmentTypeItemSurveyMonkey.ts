//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by interaction with a SurveyMonkey survey.
 */
export interface SegmentTypeItemSurveyMonkey {
    /** Segment by interaction with a SurveyMonkey survey. */
    field: Mailchimp.SegmentTypeItemSurveyMonkeyField;
    /** The status of the member with regard to the survey.One of the following: has started the survey, has completed the survey, has not started the survey, or has not completed the survey. */
    op: Mailchimp.SegmentTypeItemSurveyMonkeyOp;
    /** The unique ID of the survey monkey survey. */
    value: string;
}
