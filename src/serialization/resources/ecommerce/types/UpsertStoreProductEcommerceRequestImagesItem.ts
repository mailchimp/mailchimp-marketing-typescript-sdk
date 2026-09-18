//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpsertStoreProductEcommerceRequestImagesItemVariantIdsItem } from "./UpsertStoreProductEcommerceRequestImagesItemVariantIdsItem.js";

export const UpsertStoreProductEcommerceRequestImagesItem: core.serialization.ObjectSchema<
    serializers.UpsertStoreProductEcommerceRequestImagesItem.Raw,
    Mailchimp.UpsertStoreProductEcommerceRequestImagesItem
> = core.serialization.object({
    id: core.serialization.string(),
    url: core.serialization.string(),
    variantIds: core.serialization.property(
        "variant_ids",
        core.serialization.list(UpsertStoreProductEcommerceRequestImagesItemVariantIdsItem).optional(),
    ),
});

export declare namespace UpsertStoreProductEcommerceRequestImagesItem {
    export interface Raw {
        id: string;
        url: string;
        variant_ids?: UpsertStoreProductEcommerceRequestImagesItemVariantIdsItem.Raw[] | null;
    }
}
