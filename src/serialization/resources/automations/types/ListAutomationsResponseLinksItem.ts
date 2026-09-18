//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListAutomationsResponseLinksItemMethod } from "./ListAutomationsResponseLinksItemMethod.js";

export const ListAutomationsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListAutomationsResponseLinksItem.Raw,
    Mailchimp.ListAutomationsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListAutomationsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListAutomationsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListAutomationsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
