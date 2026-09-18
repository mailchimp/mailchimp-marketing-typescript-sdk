//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SmsCampaignContentLinksItem } from "./SmsCampaignContentLinksItem.js";
import { SmsCampaignContentMediaItem } from "./SmsCampaignContentMediaItem.js";
import { SmsCampaignContentProperties } from "./SmsCampaignContentProperties.js";
import { SmsCampaignContentSource } from "./SmsCampaignContentSource.js";

export const SmsCampaignContent: core.serialization.ObjectSchema<
    serializers.SmsCampaignContent.Raw,
    Mailchimp.SmsCampaignContent
> = core.serialization.object({
    messageBody: core.serialization.property("message_body", core.serialization.string().optional()),
    estimatedSegments: core.serialization.property("estimated_segments", core.serialization.number().optional()),
    mergeFields: core.serialization.property(
        "merge_fields",
        core.serialization.list(core.serialization.string()).optional(),
    ),
    media: core.serialization.list(SmsCampaignContentMediaItem).optional(),
    source: SmsCampaignContentSource.optional(),
    properties: SmsCampaignContentProperties.optional(),
    links: core.serialization.property("_links", core.serialization.list(SmsCampaignContentLinksItem).optional()),
});

export declare namespace SmsCampaignContent {
    export interface Raw {
        message_body?: string | null;
        estimated_segments?: number | null;
        merge_fields?: string[] | null;
        media?: SmsCampaignContentMediaItem.Raw[] | null;
        source?: SmsCampaignContentSource.Raw | null;
        properties?: SmsCampaignContentProperties.Raw | null;
        _links?: SmsCampaignContentLinksItem.Raw[] | null;
    }
}
