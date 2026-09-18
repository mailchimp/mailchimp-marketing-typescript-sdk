//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListEepurlReportsResponseLinksItemMethod } from "./ListEepurlReportsResponseLinksItemMethod.js";

export const ListEepurlReportsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListEepurlReportsResponseLinksItem.Raw,
    Mailchimp.ListEepurlReportsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListEepurlReportsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListEepurlReportsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListEepurlReportsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
