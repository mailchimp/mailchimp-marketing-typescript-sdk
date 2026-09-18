//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemLanguageField: core.serialization.Schema<
    serializers.SegmentTypeItemLanguageField.Raw,
    Mailchimp.SegmentTypeItemLanguageField
> = core.serialization.enum_(["language"]);

export declare namespace SegmentTypeItemLanguageField {
    export type Raw = "language";
}
