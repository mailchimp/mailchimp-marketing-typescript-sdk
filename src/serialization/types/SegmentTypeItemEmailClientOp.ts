//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemEmailClientOp: core.serialization.Schema<
    serializers.SegmentTypeItemEmailClientOp.Raw,
    Mailchimp.SegmentTypeItemEmailClientOp
> = core.serialization.enum_(["client_is", "client_not"]);

export declare namespace SegmentTypeItemEmailClientOp {
    export type Raw = "client_is" | "client_not";
}
