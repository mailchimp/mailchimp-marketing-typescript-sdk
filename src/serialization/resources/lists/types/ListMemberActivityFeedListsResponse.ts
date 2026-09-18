//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListMemberActivityFeedListsResponseLinksItem } from "./ListMemberActivityFeedListsResponseLinksItem.js";

export const ListMemberActivityFeedListsResponse: core.serialization.ObjectSchema<
    serializers.ListMemberActivityFeedListsResponse.Raw,
    Mailchimp.ListMemberActivityFeedListsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListMemberActivityFeedListsResponseLinksItem).optional(),
    ),
    activity: core.serialization.list(core.serialization.unknown()).optional(),
    emailId: core.serialization.property("email_id", core.serialization.string().optional()),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
});

export declare namespace ListMemberActivityFeedListsResponse {
    export interface Raw {
        _links?: ListMemberActivityFeedListsResponseLinksItem.Raw[] | null;
        activity?: unknown[] | null;
        email_id?: string | null;
        list_id?: string | null;
    }
}
