//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

export interface CreateBatchesRequestOperationsItem {
    /** A string containing the JSON body to use with the request. */
    body?: string;
    /** Any HTTP headers to include with the request. */
    headers?: Mailchimp.CreateBatchesRequestOperationsItemHeaders;
    /** The HTTP method to use for the operation. */
    method: Mailchimp.CreateBatchesRequestOperationsItemMethod;
    /** An optional client-supplied id returned with the operation results. */
    operationId?: string;
    /** Any request query parameters. Example parameters: {"count":10, "offset":0} */
    params?: Mailchimp.CreateBatchesRequestOperationsItemParams;
    /** The relative path to use for the operation. */
    path: string;
}
