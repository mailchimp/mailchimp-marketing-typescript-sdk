//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { FacebookAdsContentAttachmentsItem } from "./FacebookAdsContentAttachmentsItem.js";

export const FacebookAdsContent: core.serialization.ObjectSchema<
    serializers.FacebookAdsContent.Raw,
    Mailchimp.FacebookAdsContent
> = core.serialization.object({
    attachments: core.serialization.list(FacebookAdsContentAttachmentsItem).optional(),
    callToAction: core.serialization.property("call_to_action", core.serialization.string().optional()),
    description: core.serialization.string().optional(),
    imageUrl: core.serialization.property("image_url", core.serialization.string().optional()),
    linkUrl: core.serialization.property("link_url", core.serialization.string().optional()),
    message: core.serialization.string().optional(),
    title: core.serialization.string().optional(),
});

export declare namespace FacebookAdsContent {
    export interface Raw {
        attachments?: FacebookAdsContentAttachmentsItem.Raw[] | null;
        call_to_action?: string | null;
        description?: string | null;
        image_url?: string | null;
        link_url?: string | null;
        message?: string | null;
        title?: string | null;
    }
}
