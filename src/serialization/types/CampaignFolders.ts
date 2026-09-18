//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignFoldersFoldersItem } from "./CampaignFoldersFoldersItem.js";
import { CampaignFoldersLinksItem } from "./CampaignFoldersLinksItem.js";

export const CampaignFolders: core.serialization.ObjectSchema<
    serializers.CampaignFolders.Raw,
    Mailchimp.CampaignFolders
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(CampaignFoldersLinksItem).optional()),
    folders: core.serialization.list(CampaignFoldersFoldersItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace CampaignFolders {
    export interface Raw {
        _links?: CampaignFoldersLinksItem.Raw[] | null;
        folders?: CampaignFoldersFoldersItem.Raw[] | null;
        total_items?: number | null;
    }
}
