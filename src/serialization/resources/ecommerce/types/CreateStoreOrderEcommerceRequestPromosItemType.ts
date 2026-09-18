//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateStoreOrderEcommerceRequestPromosItemType: core.serialization.Schema<
    serializers.CreateStoreOrderEcommerceRequestPromosItemType.Raw,
    Mailchimp.CreateStoreOrderEcommerceRequestPromosItemType
> = core.serialization.enum_(["fixed", "percentage"]);

export declare namespace CreateStoreOrderEcommerceRequestPromosItemType {
    export type Raw = "fixed" | "percentage";
}
