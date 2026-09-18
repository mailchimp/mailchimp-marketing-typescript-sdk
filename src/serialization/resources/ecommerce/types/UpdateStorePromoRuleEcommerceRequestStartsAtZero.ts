//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateStorePromoRuleEcommerceRequestStartsAtZero: core.serialization.Schema<
    serializers.UpdateStorePromoRuleEcommerceRequestStartsAtZero.Raw,
    Mailchimp.UpdateStorePromoRuleEcommerceRequestStartsAtZero
> = core.serialization.undiscriminatedUnion([
    core.serialization.date(),
    core.serialization.string(),
    core.serialization.string(),
]);

export declare namespace UpdateStorePromoRuleEcommerceRequestStartsAtZero {
    export type Raw = string | string | string;
}
