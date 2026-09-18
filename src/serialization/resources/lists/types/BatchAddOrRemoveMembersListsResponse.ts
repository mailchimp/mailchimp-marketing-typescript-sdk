//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListsPost } from "../../../types/ListsPost.js";
import { BatchAddOrRemoveMembersListsResponseErrorsItem } from "./BatchAddOrRemoveMembersListsResponseErrorsItem.js";
import { BatchAddOrRemoveMembersListsResponseLinksItem } from "./BatchAddOrRemoveMembersListsResponseLinksItem.js";

export const BatchAddOrRemoveMembersListsResponse: core.serialization.ObjectSchema<
    serializers.BatchAddOrRemoveMembersListsResponse.Raw,
    Mailchimp.BatchAddOrRemoveMembersListsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(BatchAddOrRemoveMembersListsResponseLinksItem).optional(),
    ),
    errorCount: core.serialization.property("error_count", core.serialization.number().optional()),
    errors: core.serialization.list(BatchAddOrRemoveMembersListsResponseErrorsItem).optional(),
    membersAdded: core.serialization.property("members_added", core.serialization.list(ListsPost).optional()),
    membersRemoved: core.serialization.property("members_removed", core.serialization.list(ListsPost).optional()),
    totalAdded: core.serialization.property("total_added", core.serialization.number().optional()),
    totalRemoved: core.serialization.property("total_removed", core.serialization.number().optional()),
});

export declare namespace BatchAddOrRemoveMembersListsResponse {
    export interface Raw {
        _links?: BatchAddOrRemoveMembersListsResponseLinksItem.Raw[] | null;
        error_count?: number | null;
        errors?: BatchAddOrRemoveMembersListsResponseErrorsItem.Raw[] | null;
        members_added?: ListsPost.Raw[] | null;
        members_removed?: ListsPost.Raw[] | null;
        total_added?: number | null;
        total_removed?: number | null;
    }
}
