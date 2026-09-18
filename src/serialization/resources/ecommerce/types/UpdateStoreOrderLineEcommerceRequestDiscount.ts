//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateStoreOrderLineEcommerceRequestDiscount: core.serialization.Schema<
    serializers.UpdateStoreOrderLineEcommerceRequestDiscount.Raw,
    Mailchimp.UpdateStoreOrderLineEcommerceRequestDiscount
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string()]);

export declare namespace UpdateStoreOrderLineEcommerceRequestDiscount {
    export type Raw = number | string;
}
