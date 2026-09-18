//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { GetSurveyResponsReportingResponseResultsItemQuestionType } from "./GetSurveyResponsReportingResponseResultsItemQuestionType.js";

export const GetSurveyResponsReportingResponseResultsItem: core.serialization.ObjectSchema<
    serializers.GetSurveyResponsReportingResponseResultsItem.Raw,
    Mailchimp.GetSurveyResponsReportingResponseResultsItem
> = core.serialization.object({
    answer: core.serialization.string().optional(),
    query: core.serialization.string().optional(),
    questionId: core.serialization.property("question_id", core.serialization.string().optional()),
    questionType: core.serialization.property(
        "question_type",
        GetSurveyResponsReportingResponseResultsItemQuestionType.optional(),
    ),
});

export declare namespace GetSurveyResponsReportingResponseResultsItem {
    export interface Raw {
        answer?: string | null;
        query?: string | null;
        question_id?: string | null;
        question_type?: GetSurveyResponsReportingResponseResultsItemQuestionType.Raw | null;
    }
}
