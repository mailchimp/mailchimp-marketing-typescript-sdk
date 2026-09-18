//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignFoldersLinksItemMethod } from "./CampaignFoldersLinksItemMethod.js";

export const CampaignFoldersLinksItem: core.serialization.ObjectSchema<
    serializers.CampaignFoldersLinksItem.Raw,
    Mailchimp.CampaignFoldersLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: CampaignFoldersLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace CampaignFoldersLinksItem {
    export interface Raw {
        href?: string | null;
        method?: CampaignFoldersLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
