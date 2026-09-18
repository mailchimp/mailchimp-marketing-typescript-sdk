//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateBatchesRequestOperationsItemMethod: core.serialization.Schema<
    serializers.CreateBatchesRequestOperationsItemMethod.Raw,
    Mailchimp.CreateBatchesRequestOperationsItemMethod
> = core.serialization.enum_(["GET", "POST", "PUT", "PATCH", "DELETE"]);

export declare namespace CreateBatchesRequestOperationsItemMethod {
    export type Raw = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
}
