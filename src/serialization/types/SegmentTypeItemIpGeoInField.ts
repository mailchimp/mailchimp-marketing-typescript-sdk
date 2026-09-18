//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemIpGeoInField: core.serialization.Schema<
    serializers.SegmentTypeItemIpGeoInField.Raw,
    Mailchimp.SegmentTypeItemIpGeoInField
> = core.serialization.enum_(["ipgeo"]);

export declare namespace SegmentTypeItemIpGeoInField {
    export type Raw = "ipgeo";
}
