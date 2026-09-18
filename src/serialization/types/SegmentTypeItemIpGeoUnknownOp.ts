//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemIpGeoUnknownOp: core.serialization.Schema<
    serializers.SegmentTypeItemIpGeoUnknownOp.Raw,
    Mailchimp.SegmentTypeItemIpGeoUnknownOp
> = core.serialization.enum_(["ipgeounknown"]);

export declare namespace SegmentTypeItemIpGeoUnknownOp {
    export type Raw = "ipgeounknown";
}
