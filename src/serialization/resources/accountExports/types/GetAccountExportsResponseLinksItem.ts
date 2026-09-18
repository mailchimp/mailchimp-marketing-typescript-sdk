//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { GetAccountExportsResponseLinksItemMethod } from "./GetAccountExportsResponseLinksItemMethod.js";

export const GetAccountExportsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.GetAccountExportsResponseLinksItem.Raw,
    Mailchimp.GetAccountExportsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: GetAccountExportsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace GetAccountExportsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: GetAccountExportsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
