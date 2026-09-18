//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateStoreOrderEcommerceRequestOutreach: core.serialization.ObjectSchema<
    serializers.CreateStoreOrderEcommerceRequestOutreach.Raw,
    Mailchimp.CreateStoreOrderEcommerceRequestOutreach
> = core.serialization.object({
    id: core.serialization.string().optional(),
});

export declare namespace CreateStoreOrderEcommerceRequestOutreach {
    export interface Raw {
        id?: string | null;
    }
}
