//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateStorePromoRuleEcommerceRequestType: core.serialization.Schema<
    serializers.UpdateStorePromoRuleEcommerceRequestType.Raw,
    Mailchimp.UpdateStorePromoRuleEcommerceRequestType
> = core.serialization.enum_(["fixed", "percentage"]);

export declare namespace UpdateStorePromoRuleEcommerceRequestType {
    export type Raw = "fixed" | "percentage";
}
