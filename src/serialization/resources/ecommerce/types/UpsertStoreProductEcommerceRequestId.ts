//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpsertStoreProductEcommerceRequestId: core.serialization.Schema<
    serializers.UpsertStoreProductEcommerceRequestId.Raw,
    Mailchimp.UpsertStoreProductEcommerceRequestId
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.number()]);

export declare namespace UpsertStoreProductEcommerceRequestId {
    export type Raw = string | number;
}
