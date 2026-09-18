//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSurveyQuestionAnswersReportingResponseAnswersItem } from "./ListSurveyQuestionAnswersReportingResponseAnswersItem.js";
import { ListSurveyQuestionAnswersReportingResponseLinksItem } from "./ListSurveyQuestionAnswersReportingResponseLinksItem.js";

export const ListSurveyQuestionAnswersReportingResponse: core.serialization.ObjectSchema<
    serializers.ListSurveyQuestionAnswersReportingResponse.Raw,
    Mailchimp.ListSurveyQuestionAnswersReportingResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListSurveyQuestionAnswersReportingResponseLinksItem).optional(),
    ),
    answers: core.serialization.list(ListSurveyQuestionAnswersReportingResponseAnswersItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListSurveyQuestionAnswersReportingResponse {
    export interface Raw {
        _links?: ListSurveyQuestionAnswersReportingResponseLinksItem.Raw[] | null;
        answers?: ListSurveyQuestionAnswersReportingResponseAnswersItem.Raw[] | null;
        total_items?: number | null;
    }
}
