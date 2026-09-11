//  This file was auto-generated from our API Definition.

/**
 * The status of a batch request
 */
export interface Batch {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: Batch.Links.Item[] | undefined;
    /** The date and time when all operations in the batch request completed in ISO 8601 format. */
    completed_at?: Batch.CompletedAt | undefined;
    /** The number of completed operations that returned an error. */
    errored_operations?: number | undefined;
    /** The number of completed operations. This includes operations that returned an error. */
    finished_operations?: number | undefined;
    /** A string that uniquely identifies this batch request. */
    id?: string | undefined;
    /** The URL of the gzipped archive of the results of all the operations. */
    response_body_url?: string | undefined;
    /** The status of the batch call. [Learn more](https://mailchimp.com/developer/marketing/guides/run-async-requests-batch-endpoint/#check-the-status-of-a-batch-operation) about the batch operation status. */
    status?: Batch.Status | undefined;
    /** The date and time when the server received the batch request in ISO 8601 format. */
    submitted_at?: string | undefined;
    /** The total number of operations to complete as part of this batch request. For GET requests requiring pagination, each page counts as a separate operation. */
    total_operations?: number | undefined;
}

export namespace Batch {
    export type Links = Links.Item[];

    export namespace Links {
        /**
         * This object represents a link from the resource where it is found to another resource or action that may be performed.
         */
        export interface Item {
            /** This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action. */
            href?: string | undefined;
            /** The HTTP method that should be used when accessing the URL defined in 'href'. */
            method?: Item.Method | undefined;
            /** As with an HTML 'rel' attribute, this describes the type of link. */
            rel?: string | undefined;
            /** For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to. */
            schema?: string | undefined;
            /** For GETs, this is a URL representing the schema that the response should conform to. */
            targetSchema?: string | undefined;
        }

        export namespace Item {
            /** The HTTP method that should be used when accessing the URL defined in 'href'. */
            export const Method = {
                Get: "GET",
                Post: "POST",
                Put: "PUT",
                Patch: "PATCH",
                Delete: "DELETE",
                Options: "OPTIONS",
                Head: "HEAD",
            } as const;
            export type Method = (typeof Method)[keyof typeof Method];
        }
    }

    /**
     * The date and time when all operations in the batch request completed in ISO 8601 format.
     */
    export type CompletedAt = string | "";
    /** The status of the batch call. [Learn more](https://mailchimp.com/developer/marketing/guides/run-async-requests-batch-endpoint/#check-the-status-of-a-batch-operation) about the batch operation status. */
    export const Status = {
        Pending: "pending",
        Preprocessing: "preprocessing",
        Started: "started",
        Finalizing: "finalizing",
        Finished: "finished",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];
}
