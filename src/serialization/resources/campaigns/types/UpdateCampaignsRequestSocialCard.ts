//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateCampaignsRequestSocialCard: core.serialization.ObjectSchema<
    serializers.UpdateCampaignsRequestSocialCard.Raw,
    Mailchimp.UpdateCampaignsRequestSocialCard
> = core.serialization.object({
    description: core.serialization.string().optional(),
    imageUrl: core.serialization.property("image_url", core.serialization.string().optional()),
    title: core.serialization.string().optional(),
});

export declare namespace UpdateCampaignsRequestSocialCard {
    export interface Raw {
        description?: string | null;
        image_url?: string | null;
        title?: string | null;
    }
}
