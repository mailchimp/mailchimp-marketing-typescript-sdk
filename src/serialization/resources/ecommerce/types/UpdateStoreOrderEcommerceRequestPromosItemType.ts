//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateStoreOrderEcommerceRequestPromosItemType: core.serialization.Schema<
    serializers.UpdateStoreOrderEcommerceRequestPromosItemType.Raw,
    Mailchimp.UpdateStoreOrderEcommerceRequestPromosItemType
> = core.serialization.enum_(["fixed", "percentage"]);

export declare namespace UpdateStoreOrderEcommerceRequestPromosItemType {
    export type Raw = "fixed" | "percentage";
}
