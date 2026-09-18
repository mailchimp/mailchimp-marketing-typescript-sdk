//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSurveysReportingResponseLinksItemMethod } from "./ListSurveysReportingResponseLinksItemMethod.js";

export const ListSurveysReportingResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListSurveysReportingResponseLinksItem.Raw,
    Mailchimp.ListSurveysReportingResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListSurveysReportingResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListSurveysReportingResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListSurveysReportingResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
