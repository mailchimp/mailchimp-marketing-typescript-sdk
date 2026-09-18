//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { UpdateStoreProductEcommerceRequestId } from "../../types/UpdateStoreProductEcommerceRequestId.js";
import { UpdateStoreProductEcommerceRequestImagesItem } from "../../types/UpdateStoreProductEcommerceRequestImagesItem.js";
import { UpdateStoreProductEcommerceRequestVariantsItem } from "../../types/UpdateStoreProductEcommerceRequestVariantsItem.js";

export const UpdateStoreProductEcommerceRequest: core.serialization.Schema<
    serializers.UpdateStoreProductEcommerceRequest.Raw,
    Omit<Mailchimp.UpdateStoreProductEcommerceRequest, "storeId" | "productId">
> = core.serialization.object({
    description: core.serialization.string().optional(),
    handle: core.serialization.string().optional(),
    id: UpdateStoreProductEcommerceRequestId.optional(),
    imageUrl: core.serialization.property("image_url", core.serialization.string().optional()),
    images: core.serialization.list(UpdateStoreProductEcommerceRequestImagesItem).optional(),
    publishedAtForeign: core.serialization.property("published_at_foreign", core.serialization.string().optional()),
    title: core.serialization.string().optional(),
    type: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
    variants: core.serialization.list(UpdateStoreProductEcommerceRequestVariantsItem).optional(),
    vendor: core.serialization.string().optional(),
});

export declare namespace UpdateStoreProductEcommerceRequest {
    export interface Raw {
        description?: string | null;
        handle?: string | null;
        id?: UpdateStoreProductEcommerceRequestId.Raw | null;
        image_url?: string | null;
        images?: UpdateStoreProductEcommerceRequestImagesItem.Raw[] | null;
        published_at_foreign?: string | null;
        title?: string | null;
        type?: string | null;
        url?: string | null;
        variants?: UpdateStoreProductEcommerceRequestVariantsItem.Raw[] | null;
        vendor?: string | null;
    }
}
