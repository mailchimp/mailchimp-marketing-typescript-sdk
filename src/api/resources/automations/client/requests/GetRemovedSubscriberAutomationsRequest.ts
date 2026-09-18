//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         workflowId: "workflow_id",
 *         subscriberHash: "subscriber_hash"
 *     }
 */
export interface GetRemovedSubscriberAutomationsRequest {
    /** The unique id for the Automation workflow. */
    workflowId: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    subscriberHash: string;
}
