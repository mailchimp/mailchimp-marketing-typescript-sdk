//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemZipMergeOp: core.serialization.Schema<
    serializers.SegmentTypeItemZipMergeOp.Raw,
    Mailchimp.SegmentTypeItemZipMergeOp
> = core.serialization.enum_(["geoin"]);

export declare namespace SegmentTypeItemZipMergeOp {
    export type Raw = "geoin";
}
