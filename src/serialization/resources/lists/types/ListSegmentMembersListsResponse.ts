//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListsSegmentsMembers } from "../../../types/ListsSegmentsMembers.js";
import { ListSegmentMembersListsResponseLinksItem } from "./ListSegmentMembersListsResponseLinksItem.js";

export const ListSegmentMembersListsResponse: core.serialization.ObjectSchema<
    serializers.ListSegmentMembersListsResponse.Raw,
    Mailchimp.ListSegmentMembersListsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListSegmentMembersListsResponseLinksItem).optional(),
    ),
    members: core.serialization.list(ListsSegmentsMembers).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListSegmentMembersListsResponse {
    export interface Raw {
        _links?: ListSegmentMembersListsResponseLinksItem.Raw[] | null;
        members?: ListsSegmentsMembers.Raw[] | null;
        total_items?: number | null;
    }
}
