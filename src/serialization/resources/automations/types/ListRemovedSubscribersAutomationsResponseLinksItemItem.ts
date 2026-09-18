//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListRemovedSubscribersAutomationsResponseLinksItemItemMethod } from "./ListRemovedSubscribersAutomationsResponseLinksItemItemMethod.js";

export const ListRemovedSubscribersAutomationsResponseLinksItemItem: core.serialization.ObjectSchema<
    serializers.ListRemovedSubscribersAutomationsResponseLinksItemItem.Raw,
    Mailchimp.ListRemovedSubscribersAutomationsResponseLinksItemItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListRemovedSubscribersAutomationsResponseLinksItemItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListRemovedSubscribersAutomationsResponseLinksItemItem {
    export interface Raw {
        href?: string | null;
        method?: ListRemovedSubscribersAutomationsResponseLinksItemItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
