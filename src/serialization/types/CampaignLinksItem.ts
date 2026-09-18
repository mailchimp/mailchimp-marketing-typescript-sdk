//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignLinksItemMethod } from "./CampaignLinksItemMethod.js";

export const CampaignLinksItem: core.serialization.ObjectSchema<
    serializers.CampaignLinksItem.Raw,
    Mailchimp.CampaignLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: CampaignLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace CampaignLinksItem {
    export interface Raw {
        href?: string | null;
        method?: CampaignLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
