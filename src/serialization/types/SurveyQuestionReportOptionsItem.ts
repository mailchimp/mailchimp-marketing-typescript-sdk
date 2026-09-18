//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SurveyQuestionReportOptionsItem: core.serialization.ObjectSchema<
    serializers.SurveyQuestionReportOptionsItem.Raw,
    Mailchimp.SurveyQuestionReportOptionsItem
> = core.serialization.object({
    count: core.serialization.number().optional(),
    id: core.serialization.string().optional(),
    label: core.serialization.string().optional(),
});

export declare namespace SurveyQuestionReportOptionsItem {
    export interface Raw {
        count?: number | null;
        id?: string | null;
        label?: string | null;
    }
}
