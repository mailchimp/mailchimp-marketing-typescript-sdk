//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListCampaignsResponseLinksItemMethod } from "./ListCampaignsResponseLinksItemMethod.js";

export const ListCampaignsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListCampaignsResponseLinksItem.Raw,
    Mailchimp.ListCampaignsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListCampaignsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListCampaignsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListCampaignsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
