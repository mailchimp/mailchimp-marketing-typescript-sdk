//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { EcommerceStoresCartsPost } from "../../../../types/EcommerceStoresCartsPost.js";
import { CreateStoreCartEcommerceRequestId } from "../../types/CreateStoreCartEcommerceRequestId.js";
import { CreateStoreCartEcommerceRequestLinesItem } from "../../types/CreateStoreCartEcommerceRequestLinesItem.js";
import { CreateStoreCartEcommerceRequestOrderTotal } from "../../types/CreateStoreCartEcommerceRequestOrderTotal.js";
import { CreateStoreCartEcommerceRequestTaxTotal } from "../../types/CreateStoreCartEcommerceRequestTaxTotal.js";

export const CreateStoreCartEcommerceRequest: core.serialization.Schema<
    serializers.CreateStoreCartEcommerceRequest.Raw,
    Omit<Mailchimp.CreateStoreCartEcommerceRequest, "storeId">
> = core.serialization.object({
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    checkoutUrl: core.serialization.property("checkout_url", core.serialization.string().optional()),
    currencyCode: core.serialization.property("currency_code", core.serialization.string()),
    customer: EcommerceStoresCartsPost,
    id: CreateStoreCartEcommerceRequestId,
    lines: core.serialization.list(CreateStoreCartEcommerceRequestLinesItem),
    orderTotal: core.serialization.property("order_total", CreateStoreCartEcommerceRequestOrderTotal),
    taxTotal: core.serialization.property("tax_total", CreateStoreCartEcommerceRequestTaxTotal.optional()),
});

export declare namespace CreateStoreCartEcommerceRequest {
    export interface Raw {
        campaign_id?: string | null;
        checkout_url?: string | null;
        currency_code: string;
        customer: EcommerceStoresCartsPost.Raw;
        id: CreateStoreCartEcommerceRequestId.Raw;
        lines: CreateStoreCartEcommerceRequestLinesItem.Raw[];
        order_total: CreateStoreCartEcommerceRequestOrderTotal.Raw;
        tax_total?: CreateStoreCartEcommerceRequestTaxTotal.Raw | null;
    }
}
