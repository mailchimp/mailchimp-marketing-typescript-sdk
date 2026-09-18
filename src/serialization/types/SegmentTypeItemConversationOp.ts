//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemConversationOp: core.serialization.Schema<
    serializers.SegmentTypeItemConversationOp.Raw,
    Mailchimp.SegmentTypeItemConversationOp
> = core.serialization.enum_(["member", "notmember"]);

export declare namespace SegmentTypeItemConversationOp {
    export type Raw = "member" | "notmember";
}
