//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateMemberTagListsRequestTagsItem } from "../../types/CreateMemberTagListsRequestTagsItem.js";

export const CreateMemberTagListsRequest: core.serialization.Schema<
    serializers.CreateMemberTagListsRequest.Raw,
    Omit<Mailchimp.CreateMemberTagListsRequest, "listId" | "subscriberHash">
> = core.serialization.object({
    isSyncing: core.serialization.property("is_syncing", core.serialization.boolean().optional()),
    tags: core.serialization.list(CreateMemberTagListsRequestTagsItem),
});

export declare namespace CreateMemberTagListsRequest {
    export interface Raw {
        is_syncing?: boolean | null;
        tags: CreateMemberTagListsRequestTagsItem.Raw[];
    }
}
