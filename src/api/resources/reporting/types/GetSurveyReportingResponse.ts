//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * The report for a survey.
 */
export interface GetSurveyReportingResponse {
    /** The date and time the survey was created in ISO 8601 format. */
    createdAt?: Date;
    /** A string that uniquely identifies this survey. */
    id?: string;
    /** The ID of the list connected to this survey. */
    listId?: string;
    /** The name of the list connected to this survey. */
    listName?: string;
    /** The date and time the survey was published in ISO 8601 format. */
    publishedAt?: Date;
    /** The survey's status. */
    status?: Mailchimp.GetSurveyReportingResponseStatus;
    /** The title of the survey. */
    title?: string;
    /** The total number of responses to this survey. */
    totalResponses?: number;
    /** The date and time the survey was last updated in ISO 8601 format. */
    updatedAt?: Date;
    /** The URL for the survey. */
    url?: string;
    /** The ID used in the Mailchimp web application. View this survey report in your Mailchimp account at `https://{dc}.admin.mailchimp.com/lists/surveys/results?survey_id={web_id}`. */
    webId?: number;
}
