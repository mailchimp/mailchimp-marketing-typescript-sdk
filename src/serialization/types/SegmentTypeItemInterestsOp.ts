//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemInterestsOp: core.serialization.Schema<
    serializers.SegmentTypeItemInterestsOp.Raw,
    Mailchimp.SegmentTypeItemInterestsOp
> = core.serialization.enum_(["interestcontains", "interestcontainsall", "interestnotcontains"]);

export declare namespace SegmentTypeItemInterestsOp {
    export type Raw = "interestcontains" | "interestcontainsall" | "interestnotcontains";
}
