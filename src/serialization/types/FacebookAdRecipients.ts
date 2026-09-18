//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { FacebookAdRecipientsSegmentOpts } from "./FacebookAdRecipientsSegmentOpts.js";

export const FacebookAdRecipients: core.serialization.ObjectSchema<
    serializers.FacebookAdRecipients.Raw,
    Mailchimp.FacebookAdRecipients
> = core.serialization.object({
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    listIsActive: core.serialization.property("list_is_active", core.serialization.boolean().optional()),
    listName: core.serialization.property("list_name", core.serialization.string().optional()),
    recipientCount: core.serialization.property("recipient_count", core.serialization.number().optional()),
    segmentOpts: core.serialization.property("segment_opts", FacebookAdRecipientsSegmentOpts.optional()),
    segmentText: core.serialization.property("segment_text", core.serialization.string().optional()),
});

export declare namespace FacebookAdRecipients {
    export interface Raw {
        list_id?: string | null;
        list_is_active?: boolean | null;
        list_name?: string | null;
        recipient_count?: number | null;
        segment_opts?: FacebookAdRecipientsSegmentOpts.Raw | null;
        segment_text?: string | null;
    }
}
