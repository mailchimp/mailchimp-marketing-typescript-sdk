//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateStorePromoRuleEcommerceRequestType: core.serialization.Schema<
    serializers.CreateStorePromoRuleEcommerceRequestType.Raw,
    Mailchimp.CreateStorePromoRuleEcommerceRequestType
> = core.serialization.enum_(["fixed", "percentage"]);

export declare namespace CreateStorePromoRuleEcommerceRequestType {
    export type Raw = "fixed" | "percentage";
}
