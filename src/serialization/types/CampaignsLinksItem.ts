//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignsLinksItemMethod } from "./CampaignsLinksItemMethod.js";

export const CampaignsLinksItem: core.serialization.ObjectSchema<
    serializers.CampaignsLinksItem.Raw,
    Mailchimp.CampaignsLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: CampaignsLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace CampaignsLinksItem {
    export interface Raw {
        href?: string | null;
        method?: CampaignsLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
