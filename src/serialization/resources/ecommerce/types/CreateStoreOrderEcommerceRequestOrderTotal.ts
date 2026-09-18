//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateStoreOrderEcommerceRequestOrderTotal: core.serialization.Schema<
    serializers.CreateStoreOrderEcommerceRequestOrderTotal.Raw,
    Mailchimp.CreateStoreOrderEcommerceRequestOrderTotal
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string()]);

export declare namespace CreateStoreOrderEcommerceRequestOrderTotal {
    export type Raw = number | string;
}
