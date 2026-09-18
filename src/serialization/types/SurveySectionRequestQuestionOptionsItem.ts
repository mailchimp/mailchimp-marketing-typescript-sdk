//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SurveySectionRequestQuestionOptionsItem: core.serialization.ObjectSchema<
    serializers.SurveySectionRequestQuestionOptionsItem.Raw,
    Mailchimp.SurveySectionRequestQuestionOptionsItem
> = core.serialization.object({
    label: core.serialization.string(),
    value: core.serialization.string(),
});

export declare namespace SurveySectionRequestQuestionOptionsItem {
    export interface Raw {
        label: string;
        value: string;
    }
}
