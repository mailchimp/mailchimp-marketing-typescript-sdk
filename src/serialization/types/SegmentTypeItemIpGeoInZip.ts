//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemIpGeoInZipField } from "./SegmentTypeItemIpGeoInZipField.js";
import { SegmentTypeItemIpGeoInZipOp } from "./SegmentTypeItemIpGeoInZipOp.js";

export const SegmentTypeItemIpGeoInZip: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemIpGeoInZip.Raw,
    Mailchimp.SegmentTypeItemIpGeoInZip
> = core.serialization.object({
    extra: core.serialization.number(),
    field: SegmentTypeItemIpGeoInZipField,
    op: SegmentTypeItemIpGeoInZipOp,
    value: core.serialization.number(),
});

export declare namespace SegmentTypeItemIpGeoInZip {
    export interface Raw {
        extra: number;
        field: SegmentTypeItemIpGeoInZipField.Raw;
        op: SegmentTypeItemIpGeoInZipOp.Raw;
        value: number;
    }
}
