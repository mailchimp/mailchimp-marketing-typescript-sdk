//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemSignupSourceField: core.serialization.Schema<
    serializers.SegmentTypeItemSignupSourceField.Raw,
    Mailchimp.SegmentTypeItemSignupSourceField
> = core.serialization.enum_(["source"]);

export declare namespace SegmentTypeItemSignupSourceField {
    export type Raw = "source";
}
