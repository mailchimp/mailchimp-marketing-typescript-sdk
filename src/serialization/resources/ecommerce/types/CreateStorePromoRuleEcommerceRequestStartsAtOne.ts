//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateStorePromoRuleEcommerceRequestStartsAtOne: core.serialization.Schema<
    serializers.CreateStorePromoRuleEcommerceRequestStartsAtOne.Raw,
    Mailchimp.CreateStorePromoRuleEcommerceRequestStartsAtOne
> = core.serialization.enum_(["", "0000-00-00", "0000-00-00 00:00:00"]);

export declare namespace CreateStorePromoRuleEcommerceRequestStartsAtOne {
    export type Raw = "" | "0000-00-00" | "0000-00-00 00:00:00";
}
