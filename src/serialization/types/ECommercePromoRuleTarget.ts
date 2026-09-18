//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ECommercePromoRuleTarget: core.serialization.Schema<
    serializers.ECommercePromoRuleTarget.Raw,
    Mailchimp.ECommercePromoRuleTarget
> = core.serialization.enum_(["per_item", "total", "shipping"]);

export declare namespace ECommercePromoRuleTarget {
    export type Raw = "per_item" | "total" | "shipping";
}
