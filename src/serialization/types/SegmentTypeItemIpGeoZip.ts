//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemIpGeoZipField } from "./SegmentTypeItemIpGeoZipField.js";
import { SegmentTypeItemIpGeoZipOp } from "./SegmentTypeItemIpGeoZipOp.js";

export const SegmentTypeItemIpGeoZip: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemIpGeoZip.Raw,
    Mailchimp.SegmentTypeItemIpGeoZip
> = core.serialization.object({
    field: SegmentTypeItemIpGeoZipField,
    op: SegmentTypeItemIpGeoZipOp,
    value: core.serialization.number(),
});

export declare namespace SegmentTypeItemIpGeoZip {
    export interface Raw {
        field: SegmentTypeItemIpGeoZipField.Raw;
        op: SegmentTypeItemIpGeoZipOp.Raw;
        value: number;
    }
}
