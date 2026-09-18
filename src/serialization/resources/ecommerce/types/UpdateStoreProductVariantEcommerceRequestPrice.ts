//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateStoreProductVariantEcommerceRequestPrice: core.serialization.Schema<
    serializers.UpdateStoreProductVariantEcommerceRequestPrice.Raw,
    Mailchimp.UpdateStoreProductVariantEcommerceRequestPrice
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string()]);

export declare namespace UpdateStoreProductVariantEcommerceRequestPrice {
    export type Raw = number | string;
}
