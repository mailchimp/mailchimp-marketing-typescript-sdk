//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateCampaignsRequestRecipientsSegmentOpts } from "./CreateCampaignsRequestRecipientsSegmentOpts.js";

export const CreateCampaignsRequestRecipients: core.serialization.ObjectSchema<
    serializers.CreateCampaignsRequestRecipients.Raw,
    Mailchimp.CreateCampaignsRequestRecipients
> = core.serialization.object({
    listId: core.serialization.property("list_id", core.serialization.string()),
    segmentOpts: core.serialization.property("segment_opts", CreateCampaignsRequestRecipientsSegmentOpts.optional()),
});

export declare namespace CreateCampaignsRequestRecipients {
    export interface Raw {
        list_id: string;
        segment_opts?: CreateCampaignsRequestRecipientsSegmentOpts.Raw | null;
    }
}
