//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Survey respondent details.
 */
export interface ListSurveyResponsesReportingResponseResponsesItem {
    /** Information about the contact. */
    contact?: Mailchimp.ListSurveyResponsesReportingResponseResponsesItemContact;
    /** If this contact was added to the Mailchimp audience via this survey. */
    isNewContact?: boolean;
    /** The ID for the survey response. */
    responseId?: string;
    /** The date and time when the survey response was submitted in ISO 8601 format. */
    submittedAt?: Date;
}
