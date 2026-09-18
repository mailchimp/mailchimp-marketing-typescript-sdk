//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListSurveyResponsesReportingResponseResponsesItemContactStatus: core.serialization.Schema<
    serializers.ListSurveyResponsesReportingResponseResponsesItemContactStatus.Raw,
    Mailchimp.ListSurveyResponsesReportingResponseResponsesItemContactStatus
> = core.serialization.enum_(["Subscribed", "Unsubscribed", "Non-Subscribed", "Cleaned", "Archived"]);

export declare namespace ListSurveyResponsesReportingResponseResponsesItemContactStatus {
    export type Raw = "Subscribed" | "Unsubscribed" | "Non-Subscribed" | "Cleaned" | "Archived";
}
