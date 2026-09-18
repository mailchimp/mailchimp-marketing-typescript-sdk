//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A single survey response.
 */
export interface GetSurveyResponsReportingResponse {
    /** Information about the contact. */
    contact?: Mailchimp.GetSurveyResponsReportingResponseContact;
    /** If this contact was added to the Mailchimp audience via this survey. */
    isNewContact?: boolean;
    /** The ID for the survey response. */
    responseId?: string;
    /** The survey questions and the answers to those questions. */
    results?: Mailchimp.GetSurveyResponsReportingResponseResultsItem[];
    /** The date and time when the survey response was submitted in ISO 8601 format. */
    submittedAt?: Date;
}
