//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateCampaignsRequestRecipientsSegmentOpts } from "./UpdateCampaignsRequestRecipientsSegmentOpts.js";

export const UpdateCampaignsRequestRecipients: core.serialization.ObjectSchema<
    serializers.UpdateCampaignsRequestRecipients.Raw,
    Mailchimp.UpdateCampaignsRequestRecipients
> = core.serialization.object({
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    segmentOpts: core.serialization.property("segment_opts", UpdateCampaignsRequestRecipientsSegmentOpts.optional()),
});

export declare namespace UpdateCampaignsRequestRecipients {
    export interface Raw {
        list_id?: string | null;
        segment_opts?: UpdateCampaignsRequestRecipientsSegmentOpts.Raw | null;
    }
}
