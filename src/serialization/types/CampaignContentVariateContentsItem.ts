//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignContentVariateContentsItem: core.serialization.ObjectSchema<
    serializers.CampaignContentVariateContentsItem.Raw,
    Mailchimp.CampaignContentVariateContentsItem
> = core.serialization.object({
    contentLabel: core.serialization.property("content_label", core.serialization.string().optional()),
    html: core.serialization.string().optional(),
    plainText: core.serialization.property("plain_text", core.serialization.string().optional()),
});

export declare namespace CampaignContentVariateContentsItem {
    export interface Raw {
        content_label?: string | null;
        html?: string | null;
        plain_text?: string | null;
    }
}
