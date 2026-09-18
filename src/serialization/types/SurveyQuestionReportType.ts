//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SurveyQuestionReportType: core.serialization.Schema<
    serializers.SurveyQuestionReportType.Raw,
    Mailchimp.SurveyQuestionReportType
> = core.serialization.enum_(["pickOne", "pickMany", "range", "text", "email", "contactInformation", "dropdown"]);

export declare namespace SurveyQuestionReportType {
    export type Raw = "pickOne" | "pickMany" | "range" | "text" | "email" | "contactInformation" | "dropdown";
}
