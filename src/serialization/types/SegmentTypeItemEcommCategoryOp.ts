//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemEcommCategoryOp: core.serialization.Schema<
    serializers.SegmentTypeItemEcommCategoryOp.Raw,
    Mailchimp.SegmentTypeItemEcommCategoryOp
> = core.serialization.enum_(["is", "not", "contains", "notcontain", "starts", "ends"]);

export declare namespace SegmentTypeItemEcommCategoryOp {
    export type Raw = "is" | "not" | "contains" | "notcontain" | "starts" | "ends";
}
