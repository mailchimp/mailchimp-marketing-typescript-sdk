//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateStorePromoRuleEcommerceRequestEndsAtOne } from "./UpdateStorePromoRuleEcommerceRequestEndsAtOne.js";
import { UpdateStorePromoRuleEcommerceRequestEndsAtZero } from "./UpdateStorePromoRuleEcommerceRequestEndsAtZero.js";

export const UpdateStorePromoRuleEcommerceRequestEndsAt: core.serialization.Schema<
    serializers.UpdateStorePromoRuleEcommerceRequestEndsAt.Raw,
    Mailchimp.UpdateStorePromoRuleEcommerceRequestEndsAt
> = core.serialization.undiscriminatedUnion([
    UpdateStorePromoRuleEcommerceRequestEndsAtZero,
    UpdateStorePromoRuleEcommerceRequestEndsAtOne,
]);

export declare namespace UpdateStorePromoRuleEcommerceRequestEndsAt {
    export type Raw =
        | UpdateStorePromoRuleEcommerceRequestEndsAtZero.Raw
        | UpdateStorePromoRuleEcommerceRequestEndsAtOne.Raw;
}
