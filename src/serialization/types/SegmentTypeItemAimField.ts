//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemAimField: core.serialization.Schema<
    serializers.SegmentTypeItemAimField.Raw,
    Mailchimp.SegmentTypeItemAimField
> = core.serialization.enum_(["aim"]);

export declare namespace SegmentTypeItemAimField {
    export type Raw = "aim";
}
