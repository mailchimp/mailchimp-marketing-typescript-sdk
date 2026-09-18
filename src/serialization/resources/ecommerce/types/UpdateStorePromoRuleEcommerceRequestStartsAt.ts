//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateStorePromoRuleEcommerceRequestStartsAtOne } from "./UpdateStorePromoRuleEcommerceRequestStartsAtOne.js";
import { UpdateStorePromoRuleEcommerceRequestStartsAtZero } from "./UpdateStorePromoRuleEcommerceRequestStartsAtZero.js";

export const UpdateStorePromoRuleEcommerceRequestStartsAt: core.serialization.Schema<
    serializers.UpdateStorePromoRuleEcommerceRequestStartsAt.Raw,
    Mailchimp.UpdateStorePromoRuleEcommerceRequestStartsAt
> = core.serialization.undiscriminatedUnion([
    UpdateStorePromoRuleEcommerceRequestStartsAtZero,
    UpdateStorePromoRuleEcommerceRequestStartsAtOne,
]);

export declare namespace UpdateStorePromoRuleEcommerceRequestStartsAt {
    export type Raw =
        | UpdateStorePromoRuleEcommerceRequestStartsAtZero.Raw
        | UpdateStorePromoRuleEcommerceRequestStartsAtOne.Raw;
}
