//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateStoreCartEcommerceRequestId: core.serialization.Schema<
    serializers.UpdateStoreCartEcommerceRequestId.Raw,
    Mailchimp.UpdateStoreCartEcommerceRequestId
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.number()]);

export declare namespace UpdateStoreCartEcommerceRequestId {
    export type Raw = string | number;
}
