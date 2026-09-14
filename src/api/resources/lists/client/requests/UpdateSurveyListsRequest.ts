//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         list_id: "list_id",
 *         survey_id: "survey_id"
 *     }
 */
export interface UpdateSurveyListsRequest {
    /** The unique ID for the list. */
    list_id: string;
    /** The ID of the survey. */
    survey_id: string;
    /** The title of the survey. */
    title?: string;
    /** Whether responses are sent to Mailchimp Inbox. */
    is_piped_to_inbox?: boolean;
    /** The complete survey section list in display order. On update, sections omitted from this array are deleted. Include section id to update an existing section; omit section id to add a new section. */
    sections?: Mailchimp.SurveySectionRequest[];
}
