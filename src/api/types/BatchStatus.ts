//  This file was auto-generated from our API Definition.

/** The status of the batch call. [Learn more](https://mailchimp.com/developer/marketing/guides/run-async-requests-batch-endpoint/#check-the-status-of-a-batch-operation) about the batch operation status. */
export const BatchStatus = {
    Pending: "pending",
    Preprocessing: "preprocessing",
    Started: "started",
    Finalizing: "finalizing",
    Finished: "finished",
} as const;
export type BatchStatus = (typeof BatchStatus)[keyof typeof BatchStatus];
