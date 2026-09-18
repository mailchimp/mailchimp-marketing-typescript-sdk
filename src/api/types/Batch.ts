//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * The status of a batch request
 */
export interface Batch {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.BatchLinksItem[];
    /** The date and time when all operations in the batch request completed in ISO 8601 format. */
    completedAt?: Mailchimp.BatchCompletedAt;
    /** The number of completed operations that returned an error. */
    erroredOperations?: number;
    /** The number of completed operations. This includes operations that returned an error. */
    finishedOperations?: number;
    /** A string that uniquely identifies this batch request. */
    id?: string;
    /** The URL of the gzipped archive of the results of all the operations. */
    responseBodyUrl?: string;
    /** The status of the batch call. [Learn more](https://mailchimp.com/developer/marketing/guides/run-async-requests-batch-endpoint/#check-the-status-of-a-batch-operation) about the batch operation status. */
    status?: Mailchimp.BatchStatus;
    /** The date and time when the server received the batch request in ISO 8601 format. */
    submittedAt?: Date;
    /** The total number of operations to complete as part of this batch request. For GET requests requiring pagination, each page counts as a separate operation. */
    totalOperations?: number;
}
