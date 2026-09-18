//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ECommercePromoRule } from "../../../types/ECommercePromoRule.js";
import { ListStorePromoRulesEcommerceResponseLinksItem } from "./ListStorePromoRulesEcommerceResponseLinksItem.js";

export const ListStorePromoRulesEcommerceResponse: core.serialization.ObjectSchema<
    serializers.ListStorePromoRulesEcommerceResponse.Raw,
    Mailchimp.ListStorePromoRulesEcommerceResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListStorePromoRulesEcommerceResponseLinksItem).optional(),
    ),
    promoRules: core.serialization.property("promo_rules", core.serialization.list(ECommercePromoRule).optional()),
    storeId: core.serialization.property("store_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListStorePromoRulesEcommerceResponse {
    export interface Raw {
        _links?: ListStorePromoRulesEcommerceResponseLinksItem.Raw[] | null;
        promo_rules?: ECommercePromoRule.Raw[] | null;
        store_id?: string | null;
        total_items?: number | null;
    }
}
