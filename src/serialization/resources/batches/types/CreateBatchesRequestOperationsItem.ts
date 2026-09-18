//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateBatchesRequestOperationsItemHeaders } from "./CreateBatchesRequestOperationsItemHeaders.js";
import { CreateBatchesRequestOperationsItemMethod } from "./CreateBatchesRequestOperationsItemMethod.js";
import { CreateBatchesRequestOperationsItemParams } from "./CreateBatchesRequestOperationsItemParams.js";

export const CreateBatchesRequestOperationsItem: core.serialization.ObjectSchema<
    serializers.CreateBatchesRequestOperationsItem.Raw,
    Mailchimp.CreateBatchesRequestOperationsItem
> = core.serialization.object({
    body: core.serialization.string().optional(),
    headers: CreateBatchesRequestOperationsItemHeaders.optional(),
    method: CreateBatchesRequestOperationsItemMethod,
    operationId: core.serialization.property("operation_id", core.serialization.string().optional()),
    params: CreateBatchesRequestOperationsItemParams.optional(),
    path: core.serialization.string(),
});

export declare namespace CreateBatchesRequestOperationsItem {
    export interface Raw {
        body?: string | null;
        headers?: CreateBatchesRequestOperationsItemHeaders.Raw | null;
        method: CreateBatchesRequestOperationsItemMethod.Raw;
        operation_id?: string | null;
        params?: CreateBatchesRequestOperationsItemParams.Raw | null;
        path: string;
    }
}
