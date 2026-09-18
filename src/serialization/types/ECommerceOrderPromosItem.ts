//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceOrderPromosItemType } from "./ECommerceOrderPromosItemType.js";

export const ECommerceOrderPromosItem: core.serialization.ObjectSchema<
    serializers.ECommerceOrderPromosItem.Raw,
    Mailchimp.ECommerceOrderPromosItem
> = core.serialization.object({
    amountDiscounted: core.serialization.property("amount_discounted", core.serialization.number().optional()),
    code: core.serialization.string().optional(),
    type: ECommerceOrderPromosItemType.optional(),
});

export declare namespace ECommerceOrderPromosItem {
    export interface Raw {
        amount_discounted?: number | null;
        code?: string | null;
        type?: ECommerceOrderPromosItemType.Raw | null;
    }
}
