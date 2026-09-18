//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { GetAudienceContactListResponseLinksItemMethod } from "./GetAudienceContactListResponseLinksItemMethod.js";

export const GetAudienceContactListResponseLinksItem: core.serialization.ObjectSchema<
    serializers.GetAudienceContactListResponseLinksItem.Raw,
    Mailchimp.GetAudienceContactListResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: GetAudienceContactListResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace GetAudienceContactListResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: GetAudienceContactListResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
