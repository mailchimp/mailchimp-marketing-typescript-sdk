//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListAbuseReportsListsResponseLinksItemMethod } from "./ListAbuseReportsListsResponseLinksItemMethod.js";

export const ListAbuseReportsListsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListAbuseReportsListsResponseLinksItem.Raw,
    Mailchimp.ListAbuseReportsListsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListAbuseReportsListsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListAbuseReportsListsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListAbuseReportsListsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
