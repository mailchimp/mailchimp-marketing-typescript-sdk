//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateCampaignFoldersResponseLinksItemMethod } from "./UpdateCampaignFoldersResponseLinksItemMethod.js";

export const UpdateCampaignFoldersResponseLinksItem: core.serialization.ObjectSchema<
    serializers.UpdateCampaignFoldersResponseLinksItem.Raw,
    Mailchimp.UpdateCampaignFoldersResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: UpdateCampaignFoldersResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace UpdateCampaignFoldersResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: UpdateCampaignFoldersResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
