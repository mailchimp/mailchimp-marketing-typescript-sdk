//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListDomainPerformanceReportsResponseLinksItemMethod } from "./ListDomainPerformanceReportsResponseLinksItemMethod.js";

export const ListDomainPerformanceReportsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListDomainPerformanceReportsResponseLinksItem.Raw,
    Mailchimp.ListDomainPerformanceReportsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListDomainPerformanceReportsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListDomainPerformanceReportsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListDomainPerformanceReportsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
