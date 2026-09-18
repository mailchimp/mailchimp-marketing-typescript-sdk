//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateStoreProductImageEcommerceRequestVariantIdsItem: core.serialization.Schema<
    serializers.UpdateStoreProductImageEcommerceRequestVariantIdsItem.Raw,
    Mailchimp.UpdateStoreProductImageEcommerceRequestVariantIdsItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.number()]);

export declare namespace UpdateStoreProductImageEcommerceRequestVariantIdsItem {
    export type Raw = string | number;
}
