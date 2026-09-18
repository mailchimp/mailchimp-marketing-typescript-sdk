//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemIpGeoUnknownField } from "./SegmentTypeItemIpGeoUnknownField.js";
import { SegmentTypeItemIpGeoUnknownOp } from "./SegmentTypeItemIpGeoUnknownOp.js";

export const SegmentTypeItemIpGeoUnknown: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemIpGeoUnknown.Raw,
    Mailchimp.SegmentTypeItemIpGeoUnknown
> = core.serialization.object({
    field: SegmentTypeItemIpGeoUnknownField,
    op: SegmentTypeItemIpGeoUnknownOp,
});

export declare namespace SegmentTypeItemIpGeoUnknown {
    export interface Raw {
        field: SegmentTypeItemIpGeoUnknownField.Raw;
        op: SegmentTypeItemIpGeoUnknownOp.Raw;
    }
}
