//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { UpsertStoreProductEcommerceRequestId } from "../../types/UpsertStoreProductEcommerceRequestId.js";
import { UpsertStoreProductEcommerceRequestImagesItem } from "../../types/UpsertStoreProductEcommerceRequestImagesItem.js";
import { UpsertStoreProductEcommerceRequestVariantsItem } from "../../types/UpsertStoreProductEcommerceRequestVariantsItem.js";

export const UpsertStoreProductEcommerceRequest: core.serialization.Schema<
    serializers.UpsertStoreProductEcommerceRequest.Raw,
    Omit<Mailchimp.UpsertStoreProductEcommerceRequest, "storeId" | "productId">
> = core.serialization.object({
    description: core.serialization.string().optional(),
    handle: core.serialization.string().optional(),
    id: UpsertStoreProductEcommerceRequestId,
    imageUrl: core.serialization.property("image_url", core.serialization.string().optional()),
    images: core.serialization.list(UpsertStoreProductEcommerceRequestImagesItem).optional(),
    publishedAtForeign: core.serialization.property("published_at_foreign", core.serialization.string().optional()),
    title: core.serialization.string().optional(),
    type: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
    variants: core.serialization.list(UpsertStoreProductEcommerceRequestVariantsItem).optional(),
    vendor: core.serialization.string().optional(),
});

export declare namespace UpsertStoreProductEcommerceRequest {
    export interface Raw {
        description?: string | null;
        handle?: string | null;
        id: UpsertStoreProductEcommerceRequestId.Raw;
        image_url?: string | null;
        images?: UpsertStoreProductEcommerceRequestImagesItem.Raw[] | null;
        published_at_foreign?: string | null;
        title?: string | null;
        type?: string | null;
        url?: string | null;
        variants?: UpsertStoreProductEcommerceRequestVariantsItem.Raw[] | null;
        vendor?: string | null;
    }
}
