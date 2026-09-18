//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSurveyResponsesReportingResponseLinksItemMethod } from "./ListSurveyResponsesReportingResponseLinksItemMethod.js";

export const ListSurveyResponsesReportingResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListSurveyResponsesReportingResponseLinksItem.Raw,
    Mailchimp.ListSurveyResponsesReportingResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListSurveyResponsesReportingResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListSurveyResponsesReportingResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListSurveyResponsesReportingResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
