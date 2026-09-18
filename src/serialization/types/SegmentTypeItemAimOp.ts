//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemAimOp: core.serialization.Schema<
    serializers.SegmentTypeItemAimOp.Raw,
    Mailchimp.SegmentTypeItemAimOp
> = core.serialization.enum_(["open", "click", "sent", "noopen", "noclick", "nosent"]);

export declare namespace SegmentTypeItemAimOp {
    export type Raw = "open" | "click" | "sent" | "noopen" | "noclick" | "nosent";
}
