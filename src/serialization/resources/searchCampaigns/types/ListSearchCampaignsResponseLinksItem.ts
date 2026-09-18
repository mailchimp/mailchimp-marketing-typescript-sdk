//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSearchCampaignsResponseLinksItemMethod } from "./ListSearchCampaignsResponseLinksItemMethod.js";

export const ListSearchCampaignsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListSearchCampaignsResponseLinksItem.Raw,
    Mailchimp.ListSearchCampaignsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListSearchCampaignsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListSearchCampaignsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListSearchCampaignsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
