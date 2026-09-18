//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { BatchAddOrRemoveMembersListsResponseLinksItemMethod } from "./BatchAddOrRemoveMembersListsResponseLinksItemMethod.js";

export const BatchAddOrRemoveMembersListsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.BatchAddOrRemoveMembersListsResponseLinksItem.Raw,
    Mailchimp.BatchAddOrRemoveMembersListsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: BatchAddOrRemoveMembersListsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace BatchAddOrRemoveMembersListsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: BatchAddOrRemoveMembersListsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
