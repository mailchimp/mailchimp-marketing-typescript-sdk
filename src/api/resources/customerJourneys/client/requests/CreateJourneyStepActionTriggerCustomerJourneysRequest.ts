//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         journey_id: 1,
 *         step_id: 1,
 *         email_address: "email_address"
 *     }
 */
export interface CreateJourneyStepActionTriggerCustomerJourneysRequest {
    /** The id for the flow. */
    journey_id: number;
    /** The id for the Step. */
    step_id: number;
    /** The list member's email address. */
    email_address: string;
}
