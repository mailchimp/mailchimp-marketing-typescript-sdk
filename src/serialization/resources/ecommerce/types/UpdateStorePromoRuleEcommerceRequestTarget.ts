//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateStorePromoRuleEcommerceRequestTarget: core.serialization.Schema<
    serializers.UpdateStorePromoRuleEcommerceRequestTarget.Raw,
    Mailchimp.UpdateStorePromoRuleEcommerceRequestTarget
> = core.serialization.enum_(["per_item", "total", "shipping"]);

export declare namespace UpdateStorePromoRuleEcommerceRequestTarget {
    export type Raw = "per_item" | "total" | "shipping";
}
