//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const GetSurveyResponsReportingResponseResultsItemQuestionType: core.serialization.Schema<
    serializers.GetSurveyResponsReportingResponseResultsItemQuestionType.Raw,
    Mailchimp.GetSurveyResponsReportingResponseResultsItemQuestionType
> = core.serialization.enum_(["pickOne", "pickMany", "range", "text", "email", "contactInformation", "dropdown"]);

export declare namespace GetSurveyResponsReportingResponseResultsItemQuestionType {
    export type Raw = "pickOne" | "pickMany" | "range" | "text" | "email" | "contactInformation" | "dropdown";
}
