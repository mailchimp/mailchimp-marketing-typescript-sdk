//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListEmailsAutomationsResponseLinksItemItemMethod } from "./ListEmailsAutomationsResponseLinksItemItemMethod.js";

export const ListEmailsAutomationsResponseLinksItemItem: core.serialization.ObjectSchema<
    serializers.ListEmailsAutomationsResponseLinksItemItem.Raw,
    Mailchimp.ListEmailsAutomationsResponseLinksItemItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListEmailsAutomationsResponseLinksItemItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListEmailsAutomationsResponseLinksItemItem {
    export interface Raw {
        href?: string | null;
        method?: ListEmailsAutomationsResponseLinksItemItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
