//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateStorePromoRuleEcommerceRequestEndsAtZero: core.serialization.Schema<
    serializers.CreateStorePromoRuleEcommerceRequestEndsAtZero.Raw,
    Mailchimp.CreateStorePromoRuleEcommerceRequestEndsAtZero
> = core.serialization.undiscriminatedUnion([
    core.serialization.date(),
    core.serialization.string(),
    core.serialization.string(),
]);

export declare namespace CreateStorePromoRuleEcommerceRequestEndsAtZero {
    export type Raw = string | string | string;
}
