//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         listIdPathParam: "list_id",
 *         surveyId: "survey_id"
 *     }
 */
export interface CreateListSurveyActionReplicateListsRequest {
    /** The unique ID for the list. */
    listIdPathParam: string;
    /** The ID of the survey. */
    surveyId: string;
    /** The title for the replicated survey. */
    title?: string;
    /** The unique ID of the audience for the replicated survey. Defaults to the source survey audience. */
    listId?: string;
}
