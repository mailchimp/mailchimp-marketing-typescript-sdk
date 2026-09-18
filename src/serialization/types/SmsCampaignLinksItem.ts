//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SmsCampaignLinksItemMethod } from "./SmsCampaignLinksItemMethod.js";

export const SmsCampaignLinksItem: core.serialization.ObjectSchema<
    serializers.SmsCampaignLinksItem.Raw,
    Mailchimp.SmsCampaignLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: SmsCampaignLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace SmsCampaignLinksItem {
    export interface Raw {
        href?: string | null;
        method?: SmsCampaignLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
