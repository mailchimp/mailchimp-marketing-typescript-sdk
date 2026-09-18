//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A [merge field](https://mailchimp.com/developer/marketing/docs/merge-fields/) for an audience.
 */
export interface SurveyQuestionReportMergeField {
    /** An unchanging id for the merge field. */
    id?: number;
    /** The [label](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for the merge field. */
    label?: string;
    /** The [type](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for the merge field. */
    type?: Mailchimp.SurveyQuestionReportMergeFieldType;
}
