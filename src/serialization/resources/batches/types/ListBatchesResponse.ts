//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { Batch } from "../../../types/Batch.js";
import { ListBatchesResponseLinksItem } from "./ListBatchesResponseLinksItem.js";

export const ListBatchesResponse: core.serialization.ObjectSchema<
    serializers.ListBatchesResponse.Raw,
    Mailchimp.ListBatchesResponse
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ListBatchesResponseLinksItem).optional()),
    batches: core.serialization.list(Batch).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListBatchesResponse {
    export interface Raw {
        _links?: ListBatchesResponseLinksItem.Raw[] | null;
        batches?: Batch.Raw[] | null;
        total_items?: number | null;
    }
}
