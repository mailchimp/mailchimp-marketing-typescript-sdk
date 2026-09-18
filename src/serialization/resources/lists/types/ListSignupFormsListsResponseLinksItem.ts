//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSignupFormsListsResponseLinksItemMethod } from "./ListSignupFormsListsResponseLinksItemMethod.js";

export const ListSignupFormsListsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListSignupFormsListsResponseLinksItem.Raw,
    Mailchimp.ListSignupFormsListsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListSignupFormsListsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListSignupFormsListsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListSignupFormsListsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
