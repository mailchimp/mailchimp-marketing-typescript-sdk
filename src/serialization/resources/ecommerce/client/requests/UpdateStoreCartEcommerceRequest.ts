//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { EcommerceStoresCartsPatch } from "../../../../types/EcommerceStoresCartsPatch.js";
import { UpdateStoreCartEcommerceRequestId } from "../../types/UpdateStoreCartEcommerceRequestId.js";
import { UpdateStoreCartEcommerceRequestLinesItem } from "../../types/UpdateStoreCartEcommerceRequestLinesItem.js";
import { UpdateStoreCartEcommerceRequestOrderTotal } from "../../types/UpdateStoreCartEcommerceRequestOrderTotal.js";
import { UpdateStoreCartEcommerceRequestTaxTotal } from "../../types/UpdateStoreCartEcommerceRequestTaxTotal.js";

export const UpdateStoreCartEcommerceRequest: core.serialization.Schema<
    serializers.UpdateStoreCartEcommerceRequest.Raw,
    Omit<Mailchimp.UpdateStoreCartEcommerceRequest, "storeId" | "cartId">
> = core.serialization.object({
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    checkoutUrl: core.serialization.property("checkout_url", core.serialization.string().optional()),
    currencyCode: core.serialization.property("currency_code", core.serialization.string().optional()),
    customer: EcommerceStoresCartsPatch.optional(),
    id: UpdateStoreCartEcommerceRequestId.optional(),
    lines: core.serialization.list(UpdateStoreCartEcommerceRequestLinesItem).optional(),
    orderTotal: core.serialization.property("order_total", UpdateStoreCartEcommerceRequestOrderTotal.optional()),
    taxTotal: core.serialization.property("tax_total", UpdateStoreCartEcommerceRequestTaxTotal.optional()),
});

export declare namespace UpdateStoreCartEcommerceRequest {
    export interface Raw {
        campaign_id?: string | null;
        checkout_url?: string | null;
        currency_code?: string | null;
        customer?: EcommerceStoresCartsPatch.Raw | null;
        id?: UpdateStoreCartEcommerceRequestId.Raw | null;
        lines?: UpdateStoreCartEcommerceRequestLinesItem.Raw[] | null;
        order_total?: UpdateStoreCartEcommerceRequestOrderTotal.Raw | null;
        tax_total?: UpdateStoreCartEcommerceRequestTaxTotal.Raw | null;
    }
}
