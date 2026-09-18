//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpsertContentSmsCampaignsRequestMediaItem: core.serialization.ObjectSchema<
    serializers.UpsertContentSmsCampaignsRequestMediaItem.Raw,
    Mailchimp.UpsertContentSmsCampaignsRequestMediaItem
> = core.serialization.object({
    url: core.serialization.string().optional(),
});

export declare namespace UpsertContentSmsCampaignsRequestMediaItem {
    export interface Raw {
        url?: string | null;
    }
}
