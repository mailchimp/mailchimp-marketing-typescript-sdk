//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { GetCampaignFoldersResponseLinksItemMethod } from "./GetCampaignFoldersResponseLinksItemMethod.js";

export const GetCampaignFoldersResponseLinksItem: core.serialization.ObjectSchema<
    serializers.GetCampaignFoldersResponseLinksItem.Raw,
    Mailchimp.GetCampaignFoldersResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: GetCampaignFoldersResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace GetCampaignFoldersResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: GetCampaignFoldersResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
