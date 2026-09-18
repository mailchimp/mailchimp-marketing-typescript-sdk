//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         workflowId: "workflow_id",
 *         workflowEmailId: "workflow_email_id",
 *         subscriberHash: "subscriber_hash"
 *     }
 */
export interface GetEmailQueueAutomationsRequest {
    /** The unique id for the Automation workflow. */
    workflowId: string;
    /** The unique id for the Automation workflow email. */
    workflowEmailId: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    subscriberHash: string;
}
