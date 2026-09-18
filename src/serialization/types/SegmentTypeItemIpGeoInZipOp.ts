//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemIpGeoInZipOp: core.serialization.Schema<
    serializers.SegmentTypeItemIpGeoInZipOp.Raw,
    Mailchimp.SegmentTypeItemIpGeoInZipOp
> = core.serialization.enum_(["ipgeoinzip"]);

export declare namespace SegmentTypeItemIpGeoInZipOp {
    export type Raw = "ipgeoinzip";
}
