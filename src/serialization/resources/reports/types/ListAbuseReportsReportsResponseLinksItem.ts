//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListAbuseReportsReportsResponseLinksItemMethod } from "./ListAbuseReportsReportsResponseLinksItemMethod.js";

export const ListAbuseReportsReportsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListAbuseReportsReportsResponseLinksItem.Raw,
    Mailchimp.ListAbuseReportsReportsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListAbuseReportsReportsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListAbuseReportsReportsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListAbuseReportsReportsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
