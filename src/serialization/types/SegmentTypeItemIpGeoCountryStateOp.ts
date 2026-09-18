//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemIpGeoCountryStateOp: core.serialization.Schema<
    serializers.SegmentTypeItemIpGeoCountryStateOp.Raw,
    Mailchimp.SegmentTypeItemIpGeoCountryStateOp
> = core.serialization.enum_(["ipgeocountry", "ipgeonotcountry", "ipgeostate", "ipgeonotstate"]);

export declare namespace SegmentTypeItemIpGeoCountryStateOp {
    export type Raw = "ipgeocountry" | "ipgeonotcountry" | "ipgeostate" | "ipgeonotstate";
}
