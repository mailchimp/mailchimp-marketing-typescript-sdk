//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SurveyQuestionReportContactCounts: core.serialization.ObjectSchema<
    serializers.SurveyQuestionReportContactCounts.Raw,
    Mailchimp.SurveyQuestionReportContactCounts
> = core.serialization.object({
    known: core.serialization.number().optional(),
    "new": core.serialization.number().optional(),
    unknown: core.serialization.number().optional(),
});

export declare namespace SurveyQuestionReportContactCounts {
    export interface Raw {
        known?: number | null;
        "new"?: number | null;
        unknown?: number | null;
    }
}
