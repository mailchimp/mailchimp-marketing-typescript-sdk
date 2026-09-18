//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateStorePromoRuleEcommerceRequestStartsAtZero: core.serialization.Schema<
    serializers.CreateStorePromoRuleEcommerceRequestStartsAtZero.Raw,
    Mailchimp.CreateStorePromoRuleEcommerceRequestStartsAtZero
> = core.serialization.undiscriminatedUnion([
    core.serialization.date(),
    core.serialization.string(),
    core.serialization.string(),
]);

export declare namespace CreateStorePromoRuleEcommerceRequestStartsAtZero {
    export type Raw = string | string | string;
}
