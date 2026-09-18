//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSmsCampaignsResponseLinksItemMethod } from "./ListSmsCampaignsResponseLinksItemMethod.js";

export const ListSmsCampaignsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListSmsCampaignsResponseLinksItem.Raw,
    Mailchimp.ListSmsCampaignsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListSmsCampaignsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListSmsCampaignsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListSmsCampaignsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
