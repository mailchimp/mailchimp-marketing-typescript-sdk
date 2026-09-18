//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListMemberEventsListsResponseLinksItemMethod } from "./ListMemberEventsListsResponseLinksItemMethod.js";

export const ListMemberEventsListsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListMemberEventsListsResponseLinksItem.Raw,
    Mailchimp.ListMemberEventsListsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListMemberEventsListsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListMemberEventsListsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListMemberEventsListsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
