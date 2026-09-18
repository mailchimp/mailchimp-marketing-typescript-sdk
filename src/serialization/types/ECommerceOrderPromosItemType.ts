//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ECommerceOrderPromosItemType: core.serialization.Schema<
    serializers.ECommerceOrderPromosItemType.Raw,
    Mailchimp.ECommerceOrderPromosItemType
> = core.serialization.enum_(["fixed", "percentage"]);

export declare namespace ECommerceOrderPromosItemType {
    export type Raw = "fixed" | "percentage";
}
