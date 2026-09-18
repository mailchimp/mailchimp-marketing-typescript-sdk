//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { SegmentType } from "../../../types/SegmentType.js";
import { CreateCampaignsRequestRecipientsSegmentOptsMatch } from "./CreateCampaignsRequestRecipientsSegmentOptsMatch.js";

export const CreateCampaignsRequestRecipientsSegmentOpts: core.serialization.ObjectSchema<
    serializers.CreateCampaignsRequestRecipientsSegmentOpts.Raw,
    Mailchimp.CreateCampaignsRequestRecipientsSegmentOpts
> = core.serialization.object({
    conditions: SegmentType.optional(),
    match: CreateCampaignsRequestRecipientsSegmentOptsMatch.optional(),
    savedSegmentId: core.serialization.property("saved_segment_id", core.serialization.number().optional()),
});

export declare namespace CreateCampaignsRequestRecipientsSegmentOpts {
    export interface Raw {
        conditions?: SegmentType.Raw | null;
        match?: CreateCampaignsRequestRecipientsSegmentOptsMatch.Raw | null;
        saved_segment_id?: number | null;
    }
}
