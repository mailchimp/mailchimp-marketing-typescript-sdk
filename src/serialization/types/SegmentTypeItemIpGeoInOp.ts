//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemIpGeoInOp: core.serialization.Schema<
    serializers.SegmentTypeItemIpGeoInOp.Raw,
    Mailchimp.SegmentTypeItemIpGeoInOp
> = core.serialization.enum_(["ipgeoin", "ipgeonotin"]);

export declare namespace SegmentTypeItemIpGeoInOp {
    export type Raw = "ipgeoin" | "ipgeonotin";
}
