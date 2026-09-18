//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateStoreOrderEcommerceRequestCartId: core.serialization.Schema<
    serializers.UpdateStoreOrderEcommerceRequestCartId.Raw,
    Mailchimp.UpdateStoreOrderEcommerceRequestCartId
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.number()]);

export declare namespace UpdateStoreOrderEcommerceRequestCartId {
    export type Raw = string | number;
}
