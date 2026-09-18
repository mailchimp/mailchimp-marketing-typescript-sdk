//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateStorePromoRuleEcommerceRequestStartsAtOne: core.serialization.Schema<
    serializers.UpdateStorePromoRuleEcommerceRequestStartsAtOne.Raw,
    Mailchimp.UpdateStorePromoRuleEcommerceRequestStartsAtOne
> = core.serialization.enum_(["", "0000-00-00", "0000-00-00 00:00:00"]);

export declare namespace UpdateStorePromoRuleEcommerceRequestStartsAtOne {
    export type Raw = "" | "0000-00-00" | "0000-00-00 00:00:00";
}
