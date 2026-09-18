//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemSurveyMonkeyField: core.serialization.Schema<
    serializers.SegmentTypeItemSurveyMonkeyField.Raw,
    Mailchimp.SegmentTypeItemSurveyMonkeyField
> = core.serialization.enum_(["survey_monkey"]);

export declare namespace SegmentTypeItemSurveyMonkeyField {
    export type Raw = "survey_monkey";
}
