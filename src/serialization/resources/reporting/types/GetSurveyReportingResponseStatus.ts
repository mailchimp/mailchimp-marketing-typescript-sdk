//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const GetSurveyReportingResponseStatus: core.serialization.Schema<
    serializers.GetSurveyReportingResponseStatus.Raw,
    Mailchimp.GetSurveyReportingResponseStatus
> = core.serialization.enum_(["published", "unpublished"]);

export declare namespace GetSurveyReportingResponseStatus {
    export type Raw = "published" | "unpublished";
}
