//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListChimpChatterActivityFeedResponseLinksItemMethod } from "./ListChimpChatterActivityFeedResponseLinksItemMethod.js";

export const ListChimpChatterActivityFeedResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListChimpChatterActivityFeedResponseLinksItem.Raw,
    Mailchimp.ListChimpChatterActivityFeedResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListChimpChatterActivityFeedResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListChimpChatterActivityFeedResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListChimpChatterActivityFeedResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
