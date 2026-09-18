//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSendChecklistCampaignsResponseLinksItemMethod } from "./ListSendChecklistCampaignsResponseLinksItemMethod.js";

export const ListSendChecklistCampaignsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListSendChecklistCampaignsResponseLinksItem.Raw,
    Mailchimp.ListSendChecklistCampaignsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListSendChecklistCampaignsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListSendChecklistCampaignsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListSendChecklistCampaignsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
