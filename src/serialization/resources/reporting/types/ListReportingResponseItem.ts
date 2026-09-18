//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListReportingResponseItemMethod } from "./ListReportingResponseItemMethod.js";

export const ListReportingResponseItem: core.serialization.ObjectSchema<
    serializers.ListReportingResponseItem.Raw,
    Mailchimp.ListReportingResponseItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListReportingResponseItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListReportingResponseItem {
    export interface Raw {
        href?: string | null;
        method?: ListReportingResponseItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
