//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemEmailAddressOp: core.serialization.Schema<
    serializers.SegmentTypeItemEmailAddressOp.Raw,
    Mailchimp.SegmentTypeItemEmailAddressOp
> = core.serialization.enum_(["is", "not", "contains", "notcontain", "starts", "ends", "greater", "less"]);

export declare namespace SegmentTypeItemEmailAddressOp {
    export type Raw = "is" | "not" | "contains" | "notcontain" | "starts" | "ends" | "greater" | "less";
}
