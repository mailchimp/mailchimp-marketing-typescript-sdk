//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { UpdateStoreProductImageEcommerceRequestVariantIdsItem } from "../../types/UpdateStoreProductImageEcommerceRequestVariantIdsItem.js";

export const UpdateStoreProductImageEcommerceRequest: core.serialization.Schema<
    serializers.UpdateStoreProductImageEcommerceRequest.Raw,
    Omit<Mailchimp.UpdateStoreProductImageEcommerceRequest, "storeId" | "productId" | "imageId">
> = core.serialization.object({
    id: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
    variantIds: core.serialization.property(
        "variant_ids",
        core.serialization.list(UpdateStoreProductImageEcommerceRequestVariantIdsItem).optional(),
    ),
});

export declare namespace UpdateStoreProductImageEcommerceRequest {
    export interface Raw {
        id?: string | null;
        url?: string | null;
        variant_ids?: UpdateStoreProductImageEcommerceRequestVariantIdsItem.Raw[] | null;
    }
}
