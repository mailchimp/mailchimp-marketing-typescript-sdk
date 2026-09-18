//  This file was auto-generated from our API Definition.

/**
 * A single instance of a goal activity.
 */
export interface ListMemberGoalsListsResponseGoalsItem {
    /** Any extra data passed with the Goal event. */
    data?: string;
    /** The name/type of Goal event triggered. */
    event?: string;
    /** The id for a Goal event. */
    goalId?: number;
    /** The date and time the user last triggered the Goal event in ISO 8601 format. */
    lastVisitedAt?: Date;
}
