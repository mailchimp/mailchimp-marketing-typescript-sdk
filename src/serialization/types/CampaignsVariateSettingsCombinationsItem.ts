//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignsVariateSettingsCombinationsItem: core.serialization.ObjectSchema<
    serializers.CampaignsVariateSettingsCombinationsItem.Raw,
    Mailchimp.CampaignsVariateSettingsCombinationsItem
> = core.serialization.object({
    contentDescription: core.serialization.property("content_description", core.serialization.number().optional()),
    fromName: core.serialization.property("from_name", core.serialization.number().optional()),
    id: core.serialization.string().optional(),
    recipients: core.serialization.number().optional(),
    replyTo: core.serialization.property("reply_to", core.serialization.number().optional()),
    sendTime: core.serialization.property("send_time", core.serialization.number().optional()),
    subjectLine: core.serialization.property("subject_line", core.serialization.number().optional()),
});

export declare namespace CampaignsVariateSettingsCombinationsItem {
    export interface Raw {
        content_description?: number | null;
        from_name?: number | null;
        id?: string | null;
        recipients?: number | null;
        reply_to?: number | null;
        send_time?: number | null;
        subject_line?: number | null;
    }
}
