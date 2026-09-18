//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemCampaignPollField } from "./SegmentTypeItemCampaignPollField.js";
import { SegmentTypeItemCampaignPollOp } from "./SegmentTypeItemCampaignPollOp.js";

export const SegmentTypeItemCampaignPoll: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemCampaignPoll.Raw,
    Mailchimp.SegmentTypeItemCampaignPoll
> = core.serialization.object({
    field: SegmentTypeItemCampaignPollField,
    op: SegmentTypeItemCampaignPollOp,
    value: core.serialization.number(),
});

export declare namespace SegmentTypeItemCampaignPoll {
    export interface Raw {
        field: SegmentTypeItemCampaignPollField.Raw;
        op: SegmentTypeItemCampaignPollOp.Raw;
        value: number;
    }
}
