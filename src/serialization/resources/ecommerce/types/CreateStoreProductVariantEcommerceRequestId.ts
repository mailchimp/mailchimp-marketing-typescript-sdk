//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateStoreProductVariantEcommerceRequestId: core.serialization.Schema<
    serializers.CreateStoreProductVariantEcommerceRequestId.Raw,
    Mailchimp.CreateStoreProductVariantEcommerceRequestId
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.number()]);

export declare namespace CreateStoreProductVariantEcommerceRequestId {
    export type Raw = string | number;
}
