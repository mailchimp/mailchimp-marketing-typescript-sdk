//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListLandingPagesReportingResponseLinksItemMethod } from "./ListLandingPagesReportingResponseLinksItemMethod.js";

export const ListLandingPagesReportingResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListLandingPagesReportingResponseLinksItem.Raw,
    Mailchimp.ListLandingPagesReportingResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListLandingPagesReportingResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListLandingPagesReportingResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListLandingPagesReportingResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
