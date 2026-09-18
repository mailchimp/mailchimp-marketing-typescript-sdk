//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SurveyQuestionReportContactCounts } from "./SurveyQuestionReportContactCounts.js";
import { SurveyQuestionReportMergeField } from "./SurveyQuestionReportMergeField.js";
import { SurveyQuestionReportOptionsItem } from "./SurveyQuestionReportOptionsItem.js";
import { SurveyQuestionReportType } from "./SurveyQuestionReportType.js";

export const SurveyQuestionReport: core.serialization.ObjectSchema<
    serializers.SurveyQuestionReport.Raw,
    Mailchimp.SurveyQuestionReport
> = core.serialization.object({
    averageRating: core.serialization.property("average_rating", core.serialization.number().optional()),
    contactCounts: core.serialization.property("contact_counts", SurveyQuestionReportContactCounts.optional()),
    hasOther: core.serialization.property("has_other", core.serialization.boolean().optional()),
    id: core.serialization.string().optional(),
    isRequired: core.serialization.property("is_required", core.serialization.boolean().optional()),
    mergeField: core.serialization.property("merge_field", SurveyQuestionReportMergeField.optional()),
    options: core.serialization.list(SurveyQuestionReportOptionsItem).optional(),
    otherLabel: core.serialization.property("other_label", core.serialization.string().optional()),
    placeholderLabel: core.serialization.property("placeholder_label", core.serialization.string().optional()),
    query: core.serialization.string().optional(),
    rangeHighLabel: core.serialization.property("range_high_label", core.serialization.string().optional()),
    rangeLowLabel: core.serialization.property("range_low_label", core.serialization.string().optional()),
    subscribeCheckboxEnabled: core.serialization.property(
        "subscribe_checkbox_enabled",
        core.serialization.boolean().optional(),
    ),
    subscribeCheckboxLabel: core.serialization.property(
        "subscribe_checkbox_label",
        core.serialization.string().optional(),
    ),
    surveyId: core.serialization.property("survey_id", core.serialization.string().optional()),
    totalResponses: core.serialization.property("total_responses", core.serialization.number().optional()),
    type: SurveyQuestionReportType.optional(),
});

export declare namespace SurveyQuestionReport {
    export interface Raw {
        average_rating?: number | null;
        contact_counts?: SurveyQuestionReportContactCounts.Raw | null;
        has_other?: boolean | null;
        id?: string | null;
        is_required?: boolean | null;
        merge_field?: SurveyQuestionReportMergeField.Raw | null;
        options?: SurveyQuestionReportOptionsItem.Raw[] | null;
        other_label?: string | null;
        placeholder_label?: string | null;
        query?: string | null;
        range_high_label?: string | null;
        range_low_label?: string | null;
        subscribe_checkbox_enabled?: boolean | null;
        subscribe_checkbox_label?: string | null;
        survey_id?: string | null;
        total_responses?: number | null;
        type?: SurveyQuestionReportType.Raw | null;
    }
}
