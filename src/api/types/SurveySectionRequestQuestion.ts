//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A survey question. On PATCH, include the question id to update it. Omitting question id creates a new question; it does not delete an existing one. To delete a question, omit its section from the sections array.
 */
export interface SurveySectionRequestQuestion {
    /** The question ID. On PATCH, include to update an existing question; omit to add a new question. */
    id?: string;
    /** The question text. */
    query: string;
    /** The response type of the survey question. */
    type: Mailchimp.SurveySectionRequestQuestionType;
    /** Whether this question is required. */
    isRequired?: boolean;
    /** Whether this question has an 'other' option. */
    hasOther?: boolean;
    /** Label for the 'other' option. */
    otherLabel?: string;
    /** Label for the low end of a range question. */
    rangeLowLabel?: string;
    /** Label for the high end of a range question. */
    rangeHighLabel?: string;
    /** Low value for a range question. */
    rangeLowValue?: number;
    /** High value for a range question. */
    rangeHighValue?: number;
    /** How a range question is presented. */
    rangePresentation?: string;
    /** Placeholder text for text or email questions. */
    placeholderLabel?: string;
    /** Whether the subscribe checkbox is enabled. */
    subscribeCheckboxEnabled?: boolean;
    /** Label for the subscribe checkbox. */
    subscribeCheckboxLabel?: string;
    /** Whether responses should automatically apply tags. */
    shouldAutoTag?: boolean;
    /** Answer options for pickOne, pickMany, or dropdown questions. */
    options?: Mailchimp.SurveySectionRequestQuestionOptionsItem[];
    /** Merge field mapping for contact information questions. */
    mergeField?: Record<string, unknown>;
}
