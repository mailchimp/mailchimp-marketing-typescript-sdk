//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         journeyId: 1,
 *         stepId: 1,
 *         emailAddress: "email_address"
 *     }
 */
export interface CreateJourneyStepActionTriggerCustomerJourneysRequest {
    /** The id for the flow. */
    journeyId: number;
    /** The id for the Step. */
    stepId: number;
    /** The list member's email address. */
    emailAddress: string;
}
