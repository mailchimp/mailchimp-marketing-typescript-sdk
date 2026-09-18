//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignRecipientsSegmentOpts } from "./CampaignRecipientsSegmentOpts.js";

export const CampaignRecipients: core.serialization.ObjectSchema<
    serializers.CampaignRecipients.Raw,
    Mailchimp.CampaignRecipients
> = core.serialization.object({
    listId: core.serialization.property("list_id", core.serialization.string()),
    listName: core.serialization.property("list_name", core.serialization.string().optional()),
    recipientCount: core.serialization.property("recipient_count", core.serialization.number().optional()),
    segmentOpts: core.serialization.property("segment_opts", CampaignRecipientsSegmentOpts.optional()),
    segmentText: core.serialization.property("segment_text", core.serialization.string().optional()),
});

export declare namespace CampaignRecipients {
    export interface Raw {
        list_id: string;
        list_name?: string | null;
        recipient_count?: number | null;
        segment_opts?: CampaignRecipientsSegmentOpts.Raw | null;
        segment_text?: string | null;
    }
}
