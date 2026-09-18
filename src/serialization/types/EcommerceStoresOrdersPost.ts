//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { EcommerceStoresOrdersPostId } from "./EcommerceStoresOrdersPostId.js";
import { EcommerceStoresOrdersPostImagesItem } from "./EcommerceStoresOrdersPostImagesItem.js";
import { EcommerceStoresOrdersPostVariantsItem } from "./EcommerceStoresOrdersPostVariantsItem.js";

export const EcommerceStoresOrdersPost: core.serialization.ObjectSchema<
    serializers.EcommerceStoresOrdersPost.Raw,
    Mailchimp.EcommerceStoresOrdersPost
> = core.serialization.object({
    description: core.serialization.string().optional(),
    handle: core.serialization.string().optional(),
    id: EcommerceStoresOrdersPostId,
    imageUrl: core.serialization.property("image_url", core.serialization.string().optional()),
    images: core.serialization.list(EcommerceStoresOrdersPostImagesItem).optional(),
    publishedAtForeign: core.serialization.property("published_at_foreign", core.serialization.string().optional()),
    title: core.serialization.string(),
    type: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
    variants: core.serialization.list(EcommerceStoresOrdersPostVariantsItem),
    vendor: core.serialization.string().optional(),
});

export declare namespace EcommerceStoresOrdersPost {
    export interface Raw {
        description?: string | null;
        handle?: string | null;
        id: EcommerceStoresOrdersPostId.Raw;
        image_url?: string | null;
        images?: EcommerceStoresOrdersPostImagesItem.Raw[] | null;
        published_at_foreign?: string | null;
        title: string;
        type?: string | null;
        url?: string | null;
        variants: EcommerceStoresOrdersPostVariantsItem.Raw[];
        vendor?: string | null;
    }
}
