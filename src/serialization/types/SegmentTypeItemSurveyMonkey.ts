//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemSurveyMonkeyField } from "./SegmentTypeItemSurveyMonkeyField.js";
import { SegmentTypeItemSurveyMonkeyOp } from "./SegmentTypeItemSurveyMonkeyOp.js";

export const SegmentTypeItemSurveyMonkey: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemSurveyMonkey.Raw,
    Mailchimp.SegmentTypeItemSurveyMonkey
> = core.serialization.object({
    field: SegmentTypeItemSurveyMonkeyField,
    op: SegmentTypeItemSurveyMonkeyOp,
    value: core.serialization.string(),
});

export declare namespace SegmentTypeItemSurveyMonkey {
    export interface Raw {
        field: SegmentTypeItemSurveyMonkeyField.Raw;
        op: SegmentTypeItemSurveyMonkeyOp.Raw;
        value: string;
    }
}
