//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateBatchesRequestOperationsItem } from "../../types/CreateBatchesRequestOperationsItem.js";

export const CreateBatchesRequest: core.serialization.Schema<
    serializers.CreateBatchesRequest.Raw,
    Mailchimp.CreateBatchesRequest
> = core.serialization.object({
    operations: core.serialization.list(CreateBatchesRequestOperationsItem),
});

export declare namespace CreateBatchesRequest {
    export interface Raw {
        operations: CreateBatchesRequestOperationsItem.Raw[];
    }
}
