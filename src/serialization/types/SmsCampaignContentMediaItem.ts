//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SmsCampaignContentMediaItem: core.serialization.ObjectSchema<
    serializers.SmsCampaignContentMediaItem.Raw,
    Mailchimp.SmsCampaignContentMediaItem
> = core.serialization.object({
    url: core.serialization.string().optional(),
});

export declare namespace SmsCampaignContentMediaItem {
    export interface Raw {
        url?: string | null;
    }
}
