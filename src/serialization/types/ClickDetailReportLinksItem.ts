//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ClickDetailReportLinksItemMethod } from "./ClickDetailReportLinksItemMethod.js";

export const ClickDetailReportLinksItem: core.serialization.ObjectSchema<
    serializers.ClickDetailReportLinksItem.Raw,
    Mailchimp.ClickDetailReportLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ClickDetailReportLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ClickDetailReportLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ClickDetailReportLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
