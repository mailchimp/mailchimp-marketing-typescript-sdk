//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateStoreProductImageEcommerceRequestVariantIdsItem } from "../../types/CreateStoreProductImageEcommerceRequestVariantIdsItem.js";

export const CreateStoreProductImageEcommerceRequest: core.serialization.Schema<
    serializers.CreateStoreProductImageEcommerceRequest.Raw,
    Omit<Mailchimp.CreateStoreProductImageEcommerceRequest, "storeId" | "productId">
> = core.serialization.object({
    id: core.serialization.string(),
    url: core.serialization.string(),
    variantIds: core.serialization.property(
        "variant_ids",
        core.serialization.list(CreateStoreProductImageEcommerceRequestVariantIdsItem).optional(),
    ),
});

export declare namespace CreateStoreProductImageEcommerceRequest {
    export interface Raw {
        id: string;
        url: string;
        variant_ids?: CreateStoreProductImageEcommerceRequestVariantIdsItem.Raw[] | null;
    }
}
