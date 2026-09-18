//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListActivityFeedResponseItemMethod } from "./ListActivityFeedResponseItemMethod.js";

export const ListActivityFeedResponseItem: core.serialization.ObjectSchema<
    serializers.ListActivityFeedResponseItem.Raw,
    Mailchimp.ListActivityFeedResponseItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListActivityFeedResponseItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListActivityFeedResponseItem {
    export interface Raw {
        href?: string | null;
        method?: ListActivityFeedResponseItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
