//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSurveyQuestionsReportingResponseLinksItemMethod } from "./ListSurveyQuestionsReportingResponseLinksItemMethod.js";

export const ListSurveyQuestionsReportingResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListSurveyQuestionsReportingResponseLinksItem.Raw,
    Mailchimp.ListSurveyQuestionsReportingResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListSurveyQuestionsReportingResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListSurveyQuestionsReportingResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListSurveyQuestionsReportingResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
