//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateStorePromoRuleEcommerceRequestStartsAtOne } from "./CreateStorePromoRuleEcommerceRequestStartsAtOne.js";
import { CreateStorePromoRuleEcommerceRequestStartsAtZero } from "./CreateStorePromoRuleEcommerceRequestStartsAtZero.js";

export const CreateStorePromoRuleEcommerceRequestStartsAt: core.serialization.Schema<
    serializers.CreateStorePromoRuleEcommerceRequestStartsAt.Raw,
    Mailchimp.CreateStorePromoRuleEcommerceRequestStartsAt
> = core.serialization.undiscriminatedUnion([
    CreateStorePromoRuleEcommerceRequestStartsAtZero,
    CreateStorePromoRuleEcommerceRequestStartsAtOne,
]);

export declare namespace CreateStorePromoRuleEcommerceRequestStartsAt {
    export type Raw =
        | CreateStorePromoRuleEcommerceRequestStartsAtZero.Raw
        | CreateStorePromoRuleEcommerceRequestStartsAtOne.Raw;
}
