//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateStoreProductEcommerceRequestImagesItemVariantIdsItem } from "./UpdateStoreProductEcommerceRequestImagesItemVariantIdsItem.js";

export const UpdateStoreProductEcommerceRequestImagesItem: core.serialization.ObjectSchema<
    serializers.UpdateStoreProductEcommerceRequestImagesItem.Raw,
    Mailchimp.UpdateStoreProductEcommerceRequestImagesItem
> = core.serialization.object({
    id: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
    variantIds: core.serialization.property(
        "variant_ids",
        core.serialization.list(UpdateStoreProductEcommerceRequestImagesItemVariantIdsItem).optional(),
    ),
});

export declare namespace UpdateStoreProductEcommerceRequestImagesItem {
    export interface Raw {
        id?: string | null;
        url?: string | null;
        variant_ids?: UpdateStoreProductEcommerceRequestImagesItemVariantIdsItem.Raw[] | null;
    }
}
