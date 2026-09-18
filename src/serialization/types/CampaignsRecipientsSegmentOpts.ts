//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignsRecipientsSegmentOptsMatch } from "./CampaignsRecipientsSegmentOptsMatch.js";
import { CampaignsRecipientsSegmentOptsSavedSegmentId } from "./CampaignsRecipientsSegmentOptsSavedSegmentId.js";
import { SegmentType } from "./SegmentType.js";

export const CampaignsRecipientsSegmentOpts: core.serialization.ObjectSchema<
    serializers.CampaignsRecipientsSegmentOpts.Raw,
    Mailchimp.CampaignsRecipientsSegmentOpts
> = core.serialization.object({
    conditions: SegmentType.optional(),
    match: CampaignsRecipientsSegmentOptsMatch.optional(),
    prebuiltSegmentId: core.serialization.property("prebuilt_segment_id", core.serialization.string().optional()),
    savedSegmentId: core.serialization.property(
        "saved_segment_id",
        CampaignsRecipientsSegmentOptsSavedSegmentId.optional(),
    ),
});

export declare namespace CampaignsRecipientsSegmentOpts {
    export interface Raw {
        conditions?: SegmentType.Raw | null;
        match?: CampaignsRecipientsSegmentOptsMatch.Raw | null;
        prebuilt_segment_id?: string | null;
        saved_segment_id?: CampaignsRecipientsSegmentOptsSavedSegmentId.Raw | null;
    }
}
