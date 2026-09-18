//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemIpGeoCountryStateField } from "./SegmentTypeItemIpGeoCountryStateField.js";
import { SegmentTypeItemIpGeoCountryStateOp } from "./SegmentTypeItemIpGeoCountryStateOp.js";

export const SegmentTypeItemIpGeoCountryState: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemIpGeoCountryState.Raw,
    Mailchimp.SegmentTypeItemIpGeoCountryState
> = core.serialization.object({
    field: SegmentTypeItemIpGeoCountryStateField,
    op: SegmentTypeItemIpGeoCountryStateOp,
    value: core.serialization.string(),
});

export declare namespace SegmentTypeItemIpGeoCountryState {
    export interface Raw {
        field: SegmentTypeItemIpGeoCountryStateField.Raw;
        op: SegmentTypeItemIpGeoCountryStateOp.Raw;
        value: string;
    }
}
