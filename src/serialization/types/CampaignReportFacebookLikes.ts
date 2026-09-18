//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignReportFacebookLikes: core.serialization.ObjectSchema<
    serializers.CampaignReportFacebookLikes.Raw,
    Mailchimp.CampaignReportFacebookLikes
> = core.serialization.object({
    facebookLikes: core.serialization.property("facebook_likes", core.serialization.number().optional()),
    recipientLikes: core.serialization.property("recipient_likes", core.serialization.number().optional()),
    uniqueLikes: core.serialization.property("unique_likes", core.serialization.number().optional()),
});

export declare namespace CampaignReportFacebookLikes {
    export interface Raw {
        facebook_likes?: number | null;
        recipient_likes?: number | null;
        unique_likes?: number | null;
    }
}
