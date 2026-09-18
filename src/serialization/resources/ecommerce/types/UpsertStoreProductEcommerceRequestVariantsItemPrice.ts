//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpsertStoreProductEcommerceRequestVariantsItemPrice: core.serialization.Schema<
    serializers.UpsertStoreProductEcommerceRequestVariantsItemPrice.Raw,
    Mailchimp.UpsertStoreProductEcommerceRequestVariantsItemPrice
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string()]);

export declare namespace UpsertStoreProductEcommerceRequestVariantsItemPrice {
    export type Raw = number | string;
}
