//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         workflow_id: "workflow_id",
 *         workflow_email_id: "workflow_email_id",
 *         subscriber_hash: "subscriber_hash"
 *     }
 */
export interface GetEmailQueueAutomationsRequest {
    /** The unique id for the Automation workflow. */
    workflow_id: string;
    /** The unique id for the Automation workflow email. */
    workflow_email_id: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    subscriber_hash: string;
}
