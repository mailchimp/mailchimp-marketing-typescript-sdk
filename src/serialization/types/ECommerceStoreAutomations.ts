//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceStoreAutomationsAbandonedBrowse } from "./ECommerceStoreAutomationsAbandonedBrowse.js";
import { ECommerceStoreAutomationsAbandonedCart } from "./ECommerceStoreAutomationsAbandonedCart.js";

export const ECommerceStoreAutomations: core.serialization.ObjectSchema<
    serializers.ECommerceStoreAutomations.Raw,
    Mailchimp.ECommerceStoreAutomations
> = core.serialization.object({
    abandonedBrowse: core.serialization.property(
        "abandoned_browse",
        ECommerceStoreAutomationsAbandonedBrowse.optional(),
    ),
    abandonedCart: core.serialization.property("abandoned_cart", ECommerceStoreAutomationsAbandonedCart.optional()),
});

export declare namespace ECommerceStoreAutomations {
    export interface Raw {
        abandoned_browse?: ECommerceStoreAutomationsAbandonedBrowse.Raw | null;
        abandoned_cart?: ECommerceStoreAutomationsAbandonedCart.Raw | null;
    }
}
