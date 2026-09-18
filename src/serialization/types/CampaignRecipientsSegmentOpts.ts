//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignRecipientsSegmentOptsMatch } from "./CampaignRecipientsSegmentOptsMatch.js";
import { CampaignRecipientsSegmentOptsSavedSegmentId } from "./CampaignRecipientsSegmentOptsSavedSegmentId.js";
import { SegmentType } from "./SegmentType.js";

export const CampaignRecipientsSegmentOpts: core.serialization.ObjectSchema<
    serializers.CampaignRecipientsSegmentOpts.Raw,
    Mailchimp.CampaignRecipientsSegmentOpts
> = core.serialization.object({
    conditions: SegmentType.optional(),
    match: CampaignRecipientsSegmentOptsMatch.optional(),
    prebuiltSegmentId: core.serialization.property("prebuilt_segment_id", core.serialization.string().optional()),
    savedSegmentId: core.serialization.property(
        "saved_segment_id",
        CampaignRecipientsSegmentOptsSavedSegmentId.optional(),
    ),
});

export declare namespace CampaignRecipientsSegmentOpts {
    export interface Raw {
        conditions?: SegmentType.Raw | null;
        match?: CampaignRecipientsSegmentOptsMatch.Raw | null;
        prebuilt_segment_id?: string | null;
        saved_segment_id?: CampaignRecipientsSegmentOptsSavedSegmentId.Raw | null;
    }
}
