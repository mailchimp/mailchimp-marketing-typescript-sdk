//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceProductImagesItem } from "./ECommerceProductImagesItem.js";
import { ECommerceProductLinksItem } from "./ECommerceProductLinksItem.js";
import { ECommerceProductVariant } from "./ECommerceProductVariant.js";

export const ECommerceProduct: core.serialization.ObjectSchema<
    serializers.ECommerceProduct.Raw,
    Mailchimp.ECommerceProduct
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ECommerceProductLinksItem).optional()),
    currencyCode: core.serialization.property("currency_code", core.serialization.string().optional()),
    description: core.serialization.string().optional(),
    handle: core.serialization.string().optional(),
    id: core.serialization.string().optional(),
    imageUrl: core.serialization.property("image_url", core.serialization.string().optional()),
    images: core.serialization.list(ECommerceProductImagesItem).optional(),
    publishedAtForeign: core.serialization.property("published_at_foreign", core.serialization.date().optional()),
    title: core.serialization.string().optional(),
    type: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
    variants: core.serialization.list(ECommerceProductVariant).optional(),
    vendor: core.serialization.string().optional(),
});

export declare namespace ECommerceProduct {
    export interface Raw {
        _links?: ECommerceProductLinksItem.Raw[] | null;
        currency_code?: string | null;
        description?: string | null;
        handle?: string | null;
        id?: string | null;
        image_url?: string | null;
        images?: ECommerceProductImagesItem.Raw[] | null;
        published_at_foreign?: string | null;
        title?: string | null;
        type?: string | null;
        url?: string | null;
        variants?: ECommerceProductVariant.Raw[] | null;
        vendor?: string | null;
    }
}
