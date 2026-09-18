//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemIpGeoInField } from "./SegmentTypeItemIpGeoInField.js";
import { SegmentTypeItemIpGeoInOp } from "./SegmentTypeItemIpGeoInOp.js";

export const SegmentTypeItemIpGeoIn: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemIpGeoIn.Raw,
    Mailchimp.SegmentTypeItemIpGeoIn
> = core.serialization.object({
    addr: core.serialization.string(),
    field: SegmentTypeItemIpGeoInField,
    lat: core.serialization.string(),
    lng: core.serialization.string(),
    op: SegmentTypeItemIpGeoInOp,
    value: core.serialization.number(),
});

export declare namespace SegmentTypeItemIpGeoIn {
    export interface Raw {
        addr: string;
        field: SegmentTypeItemIpGeoInField.Raw;
        lat: string;
        lng: string;
        op: SegmentTypeItemIpGeoInOp.Raw;
        value: number;
    }
}
