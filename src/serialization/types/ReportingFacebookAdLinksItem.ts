//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ReportingFacebookAdLinksItemMethod } from "./ReportingFacebookAdLinksItemMethod.js";

export const ReportingFacebookAdLinksItem: core.serialization.ObjectSchema<
    serializers.ReportingFacebookAdLinksItem.Raw,
    Mailchimp.ReportingFacebookAdLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ReportingFacebookAdLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ReportingFacebookAdLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ReportingFacebookAdLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
