//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListSurveyQuestionAnswersReportingRequestRespondentFamiliarityIs: core.serialization.Schema<
    serializers.ListSurveyQuestionAnswersReportingRequestRespondentFamiliarityIs.Raw,
    Mailchimp.ListSurveyQuestionAnswersReportingRequestRespondentFamiliarityIs
> = core.serialization.enum_(["new", "known", "unknown"]);

export declare namespace ListSurveyQuestionAnswersReportingRequestRespondentFamiliarityIs {
    export type Raw = "new" | "known" | "unknown";
}
