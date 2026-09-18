//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemEcommStoreOp: core.serialization.Schema<
    serializers.SegmentTypeItemEcommStoreOp.Raw,
    Mailchimp.SegmentTypeItemEcommStoreOp
> = core.serialization.enum_(["is", "not"]);

export declare namespace SegmentTypeItemEcommStoreOp {
    export type Raw = "is" | "not";
}
