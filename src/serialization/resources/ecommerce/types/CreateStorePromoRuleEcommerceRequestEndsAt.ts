//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateStorePromoRuleEcommerceRequestEndsAtOne } from "./CreateStorePromoRuleEcommerceRequestEndsAtOne.js";
import { CreateStorePromoRuleEcommerceRequestEndsAtZero } from "./CreateStorePromoRuleEcommerceRequestEndsAtZero.js";

export const CreateStorePromoRuleEcommerceRequestEndsAt: core.serialization.Schema<
    serializers.CreateStorePromoRuleEcommerceRequestEndsAt.Raw,
    Mailchimp.CreateStorePromoRuleEcommerceRequestEndsAt
> = core.serialization.undiscriminatedUnion([
    CreateStorePromoRuleEcommerceRequestEndsAtZero,
    CreateStorePromoRuleEcommerceRequestEndsAtOne,
]);

export declare namespace CreateStorePromoRuleEcommerceRequestEndsAt {
    export type Raw =
        | CreateStorePromoRuleEcommerceRequestEndsAtZero.Raw
        | CreateStorePromoRuleEcommerceRequestEndsAtOne.Raw;
}
