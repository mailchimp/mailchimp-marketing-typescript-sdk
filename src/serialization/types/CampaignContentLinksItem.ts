//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignContentLinksItemMethod } from "./CampaignContentLinksItemMethod.js";

export const CampaignContentLinksItem: core.serialization.ObjectSchema<
    serializers.CampaignContentLinksItem.Raw,
    Mailchimp.CampaignContentLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: CampaignContentLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace CampaignContentLinksItem {
    export interface Raw {
        href?: string | null;
        method?: CampaignContentLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
