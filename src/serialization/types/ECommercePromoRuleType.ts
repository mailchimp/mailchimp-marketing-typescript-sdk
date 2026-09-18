//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ECommercePromoRuleType: core.serialization.Schema<
    serializers.ECommercePromoRuleType.Raw,
    Mailchimp.ECommercePromoRuleType
> = core.serialization.enum_(["fixed", "percentage"]);

export declare namespace ECommercePromoRuleType {
    export type Raw = "fixed" | "percentage";
}
