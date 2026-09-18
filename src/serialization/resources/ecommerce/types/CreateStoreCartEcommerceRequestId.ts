//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateStoreCartEcommerceRequestId: core.serialization.Schema<
    serializers.CreateStoreCartEcommerceRequestId.Raw,
    Mailchimp.CreateStoreCartEcommerceRequestId
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.number()]);

export declare namespace CreateStoreCartEcommerceRequestId {
    export type Raw = string | number;
}
