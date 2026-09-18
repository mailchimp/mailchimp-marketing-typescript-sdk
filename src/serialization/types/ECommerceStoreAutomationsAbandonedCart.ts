//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceStoreAutomationsAbandonedCartStatus } from "./ECommerceStoreAutomationsAbandonedCartStatus.js";

export const ECommerceStoreAutomationsAbandonedCart: core.serialization.ObjectSchema<
    serializers.ECommerceStoreAutomationsAbandonedCart.Raw,
    Mailchimp.ECommerceStoreAutomationsAbandonedCart
> = core.serialization.object({
    id: core.serialization.string().optional(),
    isSupported: core.serialization.property("is_supported", core.serialization.boolean().optional()),
    status: ECommerceStoreAutomationsAbandonedCartStatus.optional(),
});

export declare namespace ECommerceStoreAutomationsAbandonedCart {
    export interface Raw {
        id?: string | null;
        is_supported?: boolean | null;
        status?: ECommerceStoreAutomationsAbandonedCartStatus.Raw | null;
    }
}
