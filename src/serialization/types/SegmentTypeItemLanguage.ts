//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemLanguageField } from "./SegmentTypeItemLanguageField.js";
import { SegmentTypeItemLanguageOp } from "./SegmentTypeItemLanguageOp.js";

export const SegmentTypeItemLanguage: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemLanguage.Raw,
    Mailchimp.SegmentTypeItemLanguage
> = core.serialization.object({
    field: SegmentTypeItemLanguageField,
    op: SegmentTypeItemLanguageOp,
    value: core.serialization.string(),
});

export declare namespace SegmentTypeItemLanguage {
    export interface Raw {
        field: SegmentTypeItemLanguageField.Raw;
        op: SegmentTypeItemLanguageOp.Raw;
        value: string;
    }
}
