//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SurveyQuestionReportMergeFieldType } from "./SurveyQuestionReportMergeFieldType.js";

export const SurveyQuestionReportMergeField: core.serialization.ObjectSchema<
    serializers.SurveyQuestionReportMergeField.Raw,
    Mailchimp.SurveyQuestionReportMergeField
> = core.serialization.object({
    id: core.serialization.number().optional(),
    label: core.serialization.string().optional(),
    type: SurveyQuestionReportMergeFieldType.optional(),
});

export declare namespace SurveyQuestionReportMergeField {
    export interface Raw {
        id?: number | null;
        label?: string | null;
        type?: SurveyQuestionReportMergeFieldType.Raw | null;
    }
}
