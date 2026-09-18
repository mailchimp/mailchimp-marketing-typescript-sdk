//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { FacebookAdRecipientsSegmentOptsMatch } from "./FacebookAdRecipientsSegmentOptsMatch.js";
import { FacebookAdRecipientsSegmentOptsSavedSegmentId } from "./FacebookAdRecipientsSegmentOptsSavedSegmentId.js";
import { SegmentType } from "./SegmentType.js";

export const FacebookAdRecipientsSegmentOpts: core.serialization.ObjectSchema<
    serializers.FacebookAdRecipientsSegmentOpts.Raw,
    Mailchimp.FacebookAdRecipientsSegmentOpts
> = core.serialization.object({
    conditions: SegmentType.optional(),
    match: FacebookAdRecipientsSegmentOptsMatch.optional(),
    prebuiltSegmentId: core.serialization.property("prebuilt_segment_id", core.serialization.string().optional()),
    savedSegmentId: core.serialization.property(
        "saved_segment_id",
        FacebookAdRecipientsSegmentOptsSavedSegmentId.optional(),
    ),
});

export declare namespace FacebookAdRecipientsSegmentOpts {
    export interface Raw {
        conditions?: SegmentType.Raw | null;
        match?: FacebookAdRecipientsSegmentOptsMatch.Raw | null;
        prebuilt_segment_id?: string | null;
        saved_segment_id?: FacebookAdRecipientsSegmentOptsSavedSegmentId.Raw | null;
    }
}
