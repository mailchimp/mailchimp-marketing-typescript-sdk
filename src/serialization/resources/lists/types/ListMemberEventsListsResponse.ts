//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListMemberEventsListsResponseEventsItem } from "./ListMemberEventsListsResponseEventsItem.js";
import { ListMemberEventsListsResponseLinksItem } from "./ListMemberEventsListsResponseLinksItem.js";

export const ListMemberEventsListsResponse: core.serialization.ObjectSchema<
    serializers.ListMemberEventsListsResponse.Raw,
    Mailchimp.ListMemberEventsListsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListMemberEventsListsResponseLinksItem).optional(),
    ),
    events: core.serialization.list(ListMemberEventsListsResponseEventsItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListMemberEventsListsResponse {
    export interface Raw {
        _links?: ListMemberEventsListsResponseLinksItem.Raw[] | null;
        events?: ListMemberEventsListsResponseEventsItem.Raw[] | null;
        total_items?: number | null;
    }
}
