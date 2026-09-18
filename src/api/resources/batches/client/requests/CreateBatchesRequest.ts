//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         operations: [{
 *                 method: "GET",
 *                 path: "/lists"
 *             }]
 *     }
 */
export interface CreateBatchesRequest {
    /** An array of objects that describes operations to perform. */
    operations: Mailchimp.CreateBatchesRequestOperationsItem[];
}
