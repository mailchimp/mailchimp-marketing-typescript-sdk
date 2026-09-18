//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListSurveyQuestionAnswersReportingResponseAnswersItemContactStatus: core.serialization.Schema<
    serializers.ListSurveyQuestionAnswersReportingResponseAnswersItemContactStatus.Raw,
    Mailchimp.ListSurveyQuestionAnswersReportingResponseAnswersItemContactStatus
> = core.serialization.enum_(["Subscribed", "Unsubscribed", "Non-Subscribed", "Cleaned", "Archived"]);

export declare namespace ListSurveyQuestionAnswersReportingResponseAnswersItemContactStatus {
    export type Raw = "Subscribed" | "Unsubscribed" | "Non-Subscribed" | "Cleaned" | "Archived";
}
