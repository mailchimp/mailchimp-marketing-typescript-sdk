//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateStoreOrderLineEcommerceRequestPrice: core.serialization.Schema<
    serializers.CreateStoreOrderLineEcommerceRequestPrice.Raw,
    Mailchimp.CreateStoreOrderLineEcommerceRequestPrice
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string()]);

export declare namespace CreateStoreOrderLineEcommerceRequestPrice {
    export type Raw = number | string;
}
