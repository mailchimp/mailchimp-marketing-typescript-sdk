//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemIpGeoZipOp: core.serialization.Schema<
    serializers.SegmentTypeItemIpGeoZipOp.Raw,
    Mailchimp.SegmentTypeItemIpGeoZipOp
> = core.serialization.enum_(["ipgeoiszip", "ipgeonotzip"]);

export declare namespace SegmentTypeItemIpGeoZipOp {
    export type Raw = "ipgeoiszip" | "ipgeonotzip";
}
