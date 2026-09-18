//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateStoreCartEcommerceRequestTaxTotal: core.serialization.Schema<
    serializers.UpdateStoreCartEcommerceRequestTaxTotal.Raw,
    Mailchimp.UpdateStoreCartEcommerceRequestTaxTotal
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string()]);

export declare namespace UpdateStoreCartEcommerceRequestTaxTotal {
    export type Raw = number | string;
}
