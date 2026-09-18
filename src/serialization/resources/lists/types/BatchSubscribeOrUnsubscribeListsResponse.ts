//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListsPost } from "../../../types/ListsPost.js";
import { BatchSubscribeOrUnsubscribeListsResponseErrorsItem } from "./BatchSubscribeOrUnsubscribeListsResponseErrorsItem.js";
import { BatchSubscribeOrUnsubscribeListsResponseLinksItem } from "./BatchSubscribeOrUnsubscribeListsResponseLinksItem.js";

export const BatchSubscribeOrUnsubscribeListsResponse: core.serialization.ObjectSchema<
    serializers.BatchSubscribeOrUnsubscribeListsResponse.Raw,
    Mailchimp.BatchSubscribeOrUnsubscribeListsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(BatchSubscribeOrUnsubscribeListsResponseLinksItem).optional(),
    ),
    errorCount: core.serialization.property("error_count", core.serialization.number().optional()),
    errors: core.serialization.list(BatchSubscribeOrUnsubscribeListsResponseErrorsItem).optional(),
    newMembers: core.serialization.property("new_members", core.serialization.list(ListsPost).optional()),
    totalCreated: core.serialization.property("total_created", core.serialization.number().optional()),
    totalUpdated: core.serialization.property("total_updated", core.serialization.number().optional()),
    updatedMembers: core.serialization.property("updated_members", core.serialization.list(ListsPost).optional()),
});

export declare namespace BatchSubscribeOrUnsubscribeListsResponse {
    export interface Raw {
        _links?: BatchSubscribeOrUnsubscribeListsResponseLinksItem.Raw[] | null;
        error_count?: number | null;
        errors?: BatchSubscribeOrUnsubscribeListsResponseErrorsItem.Raw[] | null;
        new_members?: ListsPost.Raw[] | null;
        total_created?: number | null;
        total_updated?: number | null;
        updated_members?: ListsPost.Raw[] | null;
    }
}
