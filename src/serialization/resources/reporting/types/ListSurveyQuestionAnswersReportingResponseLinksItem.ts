//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSurveyQuestionAnswersReportingResponseLinksItemMethod } from "./ListSurveyQuestionAnswersReportingResponseLinksItemMethod.js";

export const ListSurveyQuestionAnswersReportingResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListSurveyQuestionAnswersReportingResponseLinksItem.Raw,
    Mailchimp.ListSurveyQuestionAnswersReportingResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListSurveyQuestionAnswersReportingResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListSurveyQuestionAnswersReportingResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListSurveyQuestionAnswersReportingResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
