//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SubscriberListLinksItemMethod } from "./SubscriberListLinksItemMethod.js";

export const SubscriberListLinksItem: core.serialization.ObjectSchema<
    serializers.SubscriberListLinksItem.Raw,
    Mailchimp.SubscriberListLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: SubscriberListLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace SubscriberListLinksItem {
    export interface Raw {
        href?: string | null;
        method?: SubscriberListLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
