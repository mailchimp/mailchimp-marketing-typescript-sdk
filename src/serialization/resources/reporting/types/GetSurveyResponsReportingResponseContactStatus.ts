//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const GetSurveyResponsReportingResponseContactStatus: core.serialization.Schema<
    serializers.GetSurveyResponsReportingResponseContactStatus.Raw,
    Mailchimp.GetSurveyResponsReportingResponseContactStatus
> = core.serialization.enum_(["Subscribed", "Unsubscribed", "Non-Subscribed", "Cleaned", "Archived"]);

export declare namespace GetSurveyResponsReportingResponseContactStatus {
    export type Raw = "Subscribed" | "Unsubscribed" | "Non-Subscribed" | "Cleaned" | "Archived";
}
