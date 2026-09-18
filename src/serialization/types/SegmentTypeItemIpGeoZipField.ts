//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemIpGeoZipField: core.serialization.Schema<
    serializers.SegmentTypeItemIpGeoZipField.Raw,
    Mailchimp.SegmentTypeItemIpGeoZipField
> = core.serialization.enum_(["ipgeo"]);

export declare namespace SegmentTypeItemIpGeoZipField {
    export type Raw = "ipgeo";
}
