//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateStoreCartLineEcommerceRequestPrice: core.serialization.Schema<
    serializers.CreateStoreCartLineEcommerceRequestPrice.Raw,
    Mailchimp.CreateStoreCartLineEcommerceRequestPrice
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string()]);

export declare namespace CreateStoreCartLineEcommerceRequestPrice {
    export type Raw = number | string;
}
