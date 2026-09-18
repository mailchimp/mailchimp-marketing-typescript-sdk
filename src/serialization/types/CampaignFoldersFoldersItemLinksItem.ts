//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignFoldersFoldersItemLinksItemMethod } from "./CampaignFoldersFoldersItemLinksItemMethod.js";

export const CampaignFoldersFoldersItemLinksItem: core.serialization.ObjectSchema<
    serializers.CampaignFoldersFoldersItemLinksItem.Raw,
    Mailchimp.CampaignFoldersFoldersItemLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: CampaignFoldersFoldersItemLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace CampaignFoldersFoldersItemLinksItem {
    export interface Raw {
        href?: string | null;
        method?: CampaignFoldersFoldersItemLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
