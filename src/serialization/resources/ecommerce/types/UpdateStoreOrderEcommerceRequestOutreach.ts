//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateStoreOrderEcommerceRequestOutreach: core.serialization.ObjectSchema<
    serializers.UpdateStoreOrderEcommerceRequestOutreach.Raw,
    Mailchimp.UpdateStoreOrderEcommerceRequestOutreach
> = core.serialization.object({
    id: core.serialization.string().optional(),
});

export declare namespace UpdateStoreOrderEcommerceRequestOutreach {
    export interface Raw {
        id?: string | null;
    }
}
