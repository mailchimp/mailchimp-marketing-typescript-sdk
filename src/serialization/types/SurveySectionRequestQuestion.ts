//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SurveySectionRequestQuestionOptionsItem } from "./SurveySectionRequestQuestionOptionsItem.js";
import { SurveySectionRequestQuestionType } from "./SurveySectionRequestQuestionType.js";

export const SurveySectionRequestQuestion: core.serialization.ObjectSchema<
    serializers.SurveySectionRequestQuestion.Raw,
    Mailchimp.SurveySectionRequestQuestion
> = core.serialization.object({
    id: core.serialization.string().optional(),
    query: core.serialization.string(),
    type: SurveySectionRequestQuestionType,
    isRequired: core.serialization.property("is_required", core.serialization.boolean().optional()),
    hasOther: core.serialization.property("has_other", core.serialization.boolean().optional()),
    otherLabel: core.serialization.property("other_label", core.serialization.string().optional()),
    rangeLowLabel: core.serialization.property("range_low_label", core.serialization.string().optional()),
    rangeHighLabel: core.serialization.property("range_high_label", core.serialization.string().optional()),
    rangeLowValue: core.serialization.property("range_low_value", core.serialization.number().optional()),
    rangeHighValue: core.serialization.property("range_high_value", core.serialization.number().optional()),
    rangePresentation: core.serialization.property("range_presentation", core.serialization.string().optional()),
    placeholderLabel: core.serialization.property("placeholder_label", core.serialization.string().optional()),
    subscribeCheckboxEnabled: core.serialization.property(
        "subscribe_checkbox_enabled",
        core.serialization.boolean().optional(),
    ),
    subscribeCheckboxLabel: core.serialization.property(
        "subscribe_checkbox_label",
        core.serialization.string().optional(),
    ),
    shouldAutoTag: core.serialization.property("should_auto_tag", core.serialization.boolean().optional()),
    options: core.serialization.list(SurveySectionRequestQuestionOptionsItem).optional(),
    mergeField: core.serialization.property(
        "merge_field",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    ),
});

export declare namespace SurveySectionRequestQuestion {
    export interface Raw {
        id?: string | null;
        query: string;
        type: SurveySectionRequestQuestionType.Raw;
        is_required?: boolean | null;
        has_other?: boolean | null;
        other_label?: string | null;
        range_low_label?: string | null;
        range_high_label?: string | null;
        range_low_value?: number | null;
        range_high_value?: number | null;
        range_presentation?: string | null;
        placeholder_label?: string | null;
        subscribe_checkbox_enabled?: boolean | null;
        subscribe_checkbox_label?: string | null;
        should_auto_tag?: boolean | null;
        options?: SurveySectionRequestQuestionOptionsItem.Raw[] | null;
        merge_field?: Record<string, unknown> | null;
    }
}
