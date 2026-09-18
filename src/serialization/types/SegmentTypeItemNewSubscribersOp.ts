//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemNewSubscribersOp: core.serialization.Schema<
    serializers.SegmentTypeItemNewSubscribersOp.Raw,
    Mailchimp.SegmentTypeItemNewSubscribersOp
> = core.serialization.enum_(["date_within"]);

export declare namespace SegmentTypeItemNewSubscribersOp {
    export type Raw = "date_within";
}
