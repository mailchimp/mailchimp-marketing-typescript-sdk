//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const FacebookAdsContentAttachmentsItem: core.serialization.ObjectSchema<
    serializers.FacebookAdsContentAttachmentsItem.Raw,
    Mailchimp.FacebookAdsContentAttachmentsItem
> = core.serialization.object({
    callToAction: core.serialization.property("call_to_action", core.serialization.string().optional()),
    description: core.serialization.string().optional(),
    imageUrl: core.serialization.property("image_url", core.serialization.string().optional()),
    linkUrl: core.serialization.property("link_url", core.serialization.string().optional()),
    name: core.serialization.string().optional(),
});

export declare namespace FacebookAdsContentAttachmentsItem {
    export interface Raw {
        call_to_action?: string | null;
        description?: string | null;
        image_url?: string | null;
        link_url?: string | null;
        name?: string | null;
    }
}
