//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemIpGeoCountryStateField: core.serialization.Schema<
    serializers.SegmentTypeItemIpGeoCountryStateField.Raw,
    Mailchimp.SegmentTypeItemIpGeoCountryStateField
> = core.serialization.enum_(["ipgeo"]);

export declare namespace SegmentTypeItemIpGeoCountryStateField {
    export type Raw = "ipgeo";
}
