//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const BatchAddOrRemoveMembersListsRequest: core.serialization.Schema<
    serializers.BatchAddOrRemoveMembersListsRequest.Raw,
    Omit<Mailchimp.BatchAddOrRemoveMembersListsRequest, "listId" | "segmentId">
> = core.serialization.object({
    membersToAdd: core.serialization.property(
        "members_to_add",
        core.serialization.list(core.serialization.string()).optional(),
    ),
    membersToRemove: core.serialization.property(
        "members_to_remove",
        core.serialization.list(core.serialization.string()).optional(),
    ),
});

export declare namespace BatchAddOrRemoveMembersListsRequest {
    export interface Raw {
        members_to_add?: string[] | null;
        members_to_remove?: string[] | null;
    }
}
