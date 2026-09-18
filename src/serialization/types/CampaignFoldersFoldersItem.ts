//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignFoldersFoldersItemLinksItem } from "./CampaignFoldersFoldersItemLinksItem.js";

export const CampaignFoldersFoldersItem: core.serialization.ObjectSchema<
    serializers.CampaignFoldersFoldersItem.Raw,
    Mailchimp.CampaignFoldersFoldersItem
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(CampaignFoldersFoldersItemLinksItem).optional(),
    ),
    count: core.serialization.number().optional(),
    id: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
});

export declare namespace CampaignFoldersFoldersItem {
    export interface Raw {
        _links?: CampaignFoldersFoldersItemLinksItem.Raw[] | null;
        count?: number | null;
        id?: string | null;
        name?: string | null;
    }
}
