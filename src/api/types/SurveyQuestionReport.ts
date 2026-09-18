//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * The details of a survey question's report.
 */
export interface SurveyQuestionReport {
    /** The average rating for this range question. */
    averageRating?: number;
    /** For email question types, how many are new, known, or unknown contacts. */
    contactCounts?: Mailchimp.SurveyQuestionReportContactCounts;
    /** Whether this survey question has an 'other' option. */
    hasOther?: boolean;
    /** The ID of the survey question. */
    id?: string;
    /** Whether this survey question is required to answer. */
    isRequired?: boolean;
    /** A [merge field](https://mailchimp.com/developer/marketing/docs/merge-fields/) for an audience. */
    mergeField?: Mailchimp.SurveyQuestionReportMergeField;
    /** The answer choices for this question. */
    options?: Mailchimp.SurveyQuestionReportOptionsItem[];
    /** Label used for the 'other' option of this survey question. */
    otherLabel?: string;
    /** Placeholder text for this survey question's answer box. */
    placeholderLabel?: string;
    /** The query of the survey question. */
    query?: string;
    /** Label for the high end of the range. */
    rangeHighLabel?: string;
    /** Label for the low end of the range. */
    rangeLowLabel?: string;
    /** Whether the subscribe checkbox is shown for this email question. */
    subscribeCheckboxEnabled?: boolean;
    /** Label used for the subscribe checkbox for this email question. */
    subscribeCheckboxLabel?: string;
    /** The unique ID of the survey. */
    surveyId?: string;
    /** The total number of responses to this question. */
    totalResponses?: number;
    /** The response type of the survey question. */
    type?: Mailchimp.SurveyQuestionReportType;
}
