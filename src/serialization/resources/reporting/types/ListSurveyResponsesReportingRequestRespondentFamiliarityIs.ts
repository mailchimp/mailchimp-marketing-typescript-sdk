//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListSurveyResponsesReportingRequestRespondentFamiliarityIs: core.serialization.Schema<
    serializers.ListSurveyResponsesReportingRequestRespondentFamiliarityIs.Raw,
    Mailchimp.ListSurveyResponsesReportingRequestRespondentFamiliarityIs
> = core.serialization.enum_(["new", "known", "unknown"]);

export declare namespace ListSurveyResponsesReportingRequestRespondentFamiliarityIs {
    export type Raw = "new" | "known" | "unknown";
}
