//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         list_idPathParam: "list_id",
 *         survey_id: "survey_id"
 *     }
 */
export interface CreateListSurveyActionReplicateListsRequest {
    /** The unique ID for the list. */
    list_idPathParam: string;
    /** The ID of the survey. */
    survey_id: string;
    /** The title for the replicated survey. */
    title?: string;
    /** The unique ID of the audience for the replicated survey. Defaults to the source survey audience. */
    list_id?: string;
}
