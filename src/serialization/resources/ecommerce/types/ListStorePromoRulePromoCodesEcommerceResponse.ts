//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ECommercePromoCode } from "../../../types/ECommercePromoCode.js";
import { ListStorePromoRulePromoCodesEcommerceResponseLinksItem } from "./ListStorePromoRulePromoCodesEcommerceResponseLinksItem.js";

export const ListStorePromoRulePromoCodesEcommerceResponse: core.serialization.ObjectSchema<
    serializers.ListStorePromoRulePromoCodesEcommerceResponse.Raw,
    Mailchimp.ListStorePromoRulePromoCodesEcommerceResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListStorePromoRulePromoCodesEcommerceResponseLinksItem).optional(),
    ),
    promoCodes: core.serialization.property("promo_codes", core.serialization.list(ECommercePromoCode).optional()),
    storeId: core.serialization.property("store_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListStorePromoRulePromoCodesEcommerceResponse {
    export interface Raw {
        _links?: ListStorePromoRulePromoCodesEcommerceResponseLinksItem.Raw[] | null;
        promo_codes?: ECommercePromoCode.Raw[] | null;
        store_id?: string | null;
        total_items?: number | null;
    }
}
