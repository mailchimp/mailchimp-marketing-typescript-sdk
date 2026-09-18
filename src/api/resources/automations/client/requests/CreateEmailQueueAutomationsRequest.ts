//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         workflowId: "workflow_id",
 *         workflowEmailId: "workflow_email_id",
 *         emailAddress: "email_address"
 *     }
 */
export interface CreateEmailQueueAutomationsRequest {
    /** The unique id for the Automation workflow. */
    workflowId: string;
    /** The unique id for the Automation workflow email. */
    workflowEmailId: string;
    /** The list member's email address. */
    emailAddress: string;
}
