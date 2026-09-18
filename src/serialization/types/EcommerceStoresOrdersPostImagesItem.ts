//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { EcommerceStoresOrdersPostImagesItemVariantIdsItem } from "./EcommerceStoresOrdersPostImagesItemVariantIdsItem.js";

export const EcommerceStoresOrdersPostImagesItem: core.serialization.ObjectSchema<
    serializers.EcommerceStoresOrdersPostImagesItem.Raw,
    Mailchimp.EcommerceStoresOrdersPostImagesItem
> = core.serialization.object({
    id: core.serialization.string(),
    url: core.serialization.string(),
    variantIds: core.serialization.property(
        "variant_ids",
        core.serialization.list(EcommerceStoresOrdersPostImagesItemVariantIdsItem).optional(),
    ),
});

export declare namespace EcommerceStoresOrdersPostImagesItem {
    export interface Raw {
        id: string;
        url: string;
        variant_ids?: EcommerceStoresOrdersPostImagesItemVariantIdsItem.Raw[] | null;
    }
}
