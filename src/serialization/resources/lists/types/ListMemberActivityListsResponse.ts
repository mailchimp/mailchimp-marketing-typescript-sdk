//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListMemberActivityListsResponseActivityItem } from "./ListMemberActivityListsResponseActivityItem.js";
import { ListMemberActivityListsResponseLinksItem } from "./ListMemberActivityListsResponseLinksItem.js";

export const ListMemberActivityListsResponse: core.serialization.ObjectSchema<
    serializers.ListMemberActivityListsResponse.Raw,
    Mailchimp.ListMemberActivityListsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListMemberActivityListsResponseLinksItem).optional(),
    ),
    activity: core.serialization.list(ListMemberActivityListsResponseActivityItem).optional(),
    contactId: core.serialization.property("contact_id", core.serialization.string().optional()),
    emailId: core.serialization.property("email_id", core.serialization.string().optional()),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListMemberActivityListsResponse {
    export interface Raw {
        _links?: ListMemberActivityListsResponseLinksItem.Raw[] | null;
        activity?: ListMemberActivityListsResponseActivityItem.Raw[] | null;
        contact_id?: string | null;
        email_id?: string | null;
        list_id?: string | null;
        total_items?: number | null;
    }
}
