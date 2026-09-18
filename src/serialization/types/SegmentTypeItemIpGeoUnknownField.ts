//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemIpGeoUnknownField: core.serialization.Schema<
    serializers.SegmentTypeItemIpGeoUnknownField.Raw,
    Mailchimp.SegmentTypeItemIpGeoUnknownField
> = core.serialization.enum_(["ipgeo"]);

export declare namespace SegmentTypeItemIpGeoUnknownField {
    export type Raw = "ipgeo";
}
