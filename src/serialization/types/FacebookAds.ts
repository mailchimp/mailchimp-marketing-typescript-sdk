//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { FacebookAd } from "./FacebookAd.js";
import { FacebookAdsAudience } from "./FacebookAdsAudience.js";
import { FacebookAdsBudget } from "./FacebookAdsBudget.js";
import { FacebookAdsChannel } from "./FacebookAdsChannel.js";
import { FacebookAdsContent } from "./FacebookAdsContent.js";
import { FacebookAdsFeedback } from "./FacebookAdsFeedback.js";
import { FacebookAdsLinksItem } from "./FacebookAdsLinksItem.js";
import { FacebookAdsSite } from "./FacebookAdsSite.js";

export const FacebookAds: core.serialization.ObjectSchema<serializers.FacebookAds.Raw, Mailchimp.FacebookAds> =
    core.serialization
        .object({
            emailSourceName: core.serialization.property("email_source_name", core.serialization.string().optional()),
            endTime: core.serialization.property("end_time", core.serialization.date().optional()),
            needsAttention: core.serialization.property("needs_attention", core.serialization.boolean().optional()),
            pausedAt: core.serialization.property("paused_at", core.serialization.date().optional()),
            thumbnail: core.serialization.string().optional(),
            wasCanceledByFacebook: core.serialization.property(
                "was_canceled_by_facebook",
                core.serialization.boolean().optional(),
            ),
            audience: FacebookAdsAudience.optional(),
            budget: FacebookAdsBudget.optional(),
            channel: FacebookAdsChannel.optional(),
            content: FacebookAdsContent.optional(),
            feedback: FacebookAdsFeedback.optional(),
            hasAudience: core.serialization.property("has_audience", core.serialization.boolean().optional()),
            hasContent: core.serialization.property("has_content", core.serialization.boolean().optional()),
            isConnected: core.serialization.property("is_connected", core.serialization.boolean().optional()),
            site: FacebookAdsSite.optional(),
            links: core.serialization.property("_links", core.serialization.list(FacebookAdsLinksItem).optional()),
        })
        .extend(FacebookAd);

export declare namespace FacebookAds {
    export interface Raw extends FacebookAd.Raw {
        email_source_name?: string | null;
        end_time?: string | null;
        needs_attention?: boolean | null;
        paused_at?: string | null;
        thumbnail?: string | null;
        was_canceled_by_facebook?: boolean | null;
        audience?: FacebookAdsAudience.Raw | null;
        budget?: FacebookAdsBudget.Raw | null;
        channel?: FacebookAdsChannel.Raw | null;
        content?: FacebookAdsContent.Raw | null;
        feedback?: FacebookAdsFeedback.Raw | null;
        has_audience?: boolean | null;
        has_content?: boolean | null;
        is_connected?: boolean | null;
        site?: FacebookAdsSite.Raw | null;
        _links?: FacebookAdsLinksItem.Raw[] | null;
    }
}
