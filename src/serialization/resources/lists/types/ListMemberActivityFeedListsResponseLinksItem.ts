//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListMemberActivityFeedListsResponseLinksItemMethod } from "./ListMemberActivityFeedListsResponseLinksItemMethod.js";

export const ListMemberActivityFeedListsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListMemberActivityFeedListsResponseLinksItem.Raw,
    Mailchimp.ListMemberActivityFeedListsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListMemberActivityFeedListsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListMemberActivityFeedListsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListMemberActivityFeedListsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
