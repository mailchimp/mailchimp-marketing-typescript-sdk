//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemLanguageOp: core.serialization.Schema<
    serializers.SegmentTypeItemLanguageOp.Raw,
    Mailchimp.SegmentTypeItemLanguageOp
> = core.serialization.enum_(["is", "not"]);

export declare namespace SegmentTypeItemLanguageOp {
    export type Raw = "is" | "not";
}
