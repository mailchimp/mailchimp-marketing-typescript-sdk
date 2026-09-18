//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { BatchSubscribeOrUnsubscribeListsRequestMembersItem } from "../../types/BatchSubscribeOrUnsubscribeListsRequestMembersItem.js";

export const BatchSubscribeOrUnsubscribeListsRequest: core.serialization.Schema<
    serializers.BatchSubscribeOrUnsubscribeListsRequest.Raw,
    Omit<Mailchimp.BatchSubscribeOrUnsubscribeListsRequest, "listId" | "skipMergeValidation" | "skipDuplicateCheck">
> = core.serialization.object({
    members: core.serialization.list(BatchSubscribeOrUnsubscribeListsRequestMembersItem),
    syncTags: core.serialization.property("sync_tags", core.serialization.boolean().optionalNullable()),
    updateExisting: core.serialization.property("update_existing", core.serialization.boolean().optionalNullable()),
});

export declare namespace BatchSubscribeOrUnsubscribeListsRequest {
    export interface Raw {
        members: BatchSubscribeOrUnsubscribeListsRequestMembersItem.Raw[];
        sync_tags?: (boolean | null | undefined) | null;
        update_existing?: (boolean | null | undefined) | null;
    }
}
