//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignContentLinksItem } from "./CampaignContentLinksItem.js";
import { CampaignContentVariateContentsItem } from "./CampaignContentVariateContentsItem.js";

export const CampaignContent: core.serialization.ObjectSchema<
    serializers.CampaignContent.Raw,
    Mailchimp.CampaignContent
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(CampaignContentLinksItem).optional()),
    archiveHtml: core.serialization.property("archive_html", core.serialization.string().optional()),
    html: core.serialization.string().optional(),
    plainText: core.serialization.property("plain_text", core.serialization.string().optional()),
    variateContents: core.serialization.property(
        "variate_contents",
        core.serialization.list(CampaignContentVariateContentsItem).optional(),
    ),
});

export declare namespace CampaignContent {
    export interface Raw {
        _links?: CampaignContentLinksItem.Raw[] | null;
        archive_html?: string | null;
        html?: string | null;
        plain_text?: string | null;
        variate_contents?: CampaignContentVariateContentsItem.Raw[] | null;
    }
}
