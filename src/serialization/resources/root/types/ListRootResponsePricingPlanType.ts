//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListRootResponsePricingPlanType: core.serialization.Schema<
    serializers.ListRootResponsePricingPlanType.Raw,
    Mailchimp.ListRootResponsePricingPlanType
> = core.serialization.enum_(["monthly", "pay_as_you_go", "forever_free"]);

export declare namespace ListRootResponsePricingPlanType {
    export type Raw = "monthly" | "pay_as_you_go" | "forever_free";
}
