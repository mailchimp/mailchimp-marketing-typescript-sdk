//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         listId: "list_id"
 *     }
 */
export interface CreateSurveyListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The title of the survey. */
    title?: string;
    /** Initial survey sections. */
    sections?: Mailchimp.SurveySectionRequest[];
}
