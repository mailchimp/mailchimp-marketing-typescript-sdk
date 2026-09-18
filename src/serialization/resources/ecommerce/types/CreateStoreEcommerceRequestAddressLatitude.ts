//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateStoreEcommerceRequestAddressLatitude: core.serialization.Schema<
    serializers.CreateStoreEcommerceRequestAddressLatitude.Raw,
    Mailchimp.CreateStoreEcommerceRequestAddressLatitude
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string()]);

export declare namespace CreateStoreEcommerceRequestAddressLatitude {
    export type Raw = number | string;
}
