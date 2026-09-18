//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { SurveyQuestionReport } from "../../../types/SurveyQuestionReport.js";
import { ListSurveyQuestionsReportingResponseLinksItem } from "./ListSurveyQuestionsReportingResponseLinksItem.js";

export const ListSurveyQuestionsReportingResponse: core.serialization.ObjectSchema<
    serializers.ListSurveyQuestionsReportingResponse.Raw,
    Mailchimp.ListSurveyQuestionsReportingResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListSurveyQuestionsReportingResponseLinksItem).optional(),
    ),
    questions: core.serialization.list(SurveyQuestionReport).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListSurveyQuestionsReportingResponse {
    export interface Raw {
        _links?: ListSurveyQuestionsReportingResponseLinksItem.Raw[] | null;
        questions?: SurveyQuestionReport.Raw[] | null;
        total_items?: number | null;
    }
}
