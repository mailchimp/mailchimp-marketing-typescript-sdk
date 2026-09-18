//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { SegmentType } from "../../../types/SegmentType.js";
import { UpdateCampaignsRequestRecipientsSegmentOptsMatch } from "./UpdateCampaignsRequestRecipientsSegmentOptsMatch.js";
import { UpdateCampaignsRequestRecipientsSegmentOptsSavedSegmentId } from "./UpdateCampaignsRequestRecipientsSegmentOptsSavedSegmentId.js";

export const UpdateCampaignsRequestRecipientsSegmentOpts: core.serialization.ObjectSchema<
    serializers.UpdateCampaignsRequestRecipientsSegmentOpts.Raw,
    Mailchimp.UpdateCampaignsRequestRecipientsSegmentOpts
> = core.serialization.object({
    conditions: SegmentType.optional(),
    match: UpdateCampaignsRequestRecipientsSegmentOptsMatch.optional(),
    prebuiltSegmentId: core.serialization.property("prebuilt_segment_id", core.serialization.string().optional()),
    savedSegmentId: core.serialization.property(
        "saved_segment_id",
        UpdateCampaignsRequestRecipientsSegmentOptsSavedSegmentId.optional(),
    ),
});

export declare namespace UpdateCampaignsRequestRecipientsSegmentOpts {
    export interface Raw {
        conditions?: SegmentType.Raw | null;
        match?: UpdateCampaignsRequestRecipientsSegmentOptsMatch.Raw | null;
        prebuilt_segment_id?: string | null;
        saved_segment_id?: UpdateCampaignsRequestRecipientsSegmentOptsSavedSegmentId.Raw | null;
    }
}
