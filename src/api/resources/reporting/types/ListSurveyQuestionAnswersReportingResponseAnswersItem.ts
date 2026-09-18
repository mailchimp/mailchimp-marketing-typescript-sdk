//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * The details of a survey question's answer.
 */
export interface ListSurveyQuestionAnswersReportingResponseAnswersItem {
    /** Information about the contact. */
    contact?: Mailchimp.ListSurveyQuestionAnswersReportingResponseAnswersItemContact;
    /** The ID of the answer. */
    id?: string;
    /** If this contact was added to the Mailchimp audience via this survey. */
    isNewContact?: boolean;
    /** The ID of the survey response. */
    responseId?: string;
    /** The date and time when the survey response was submitted in ISO 8601 format. */
    submittedAt?: Date;
    /** The raw text answer. */
    value?: string;
}
