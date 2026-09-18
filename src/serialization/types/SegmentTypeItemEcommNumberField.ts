//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemEcommNumberField: core.serialization.Schema<
    serializers.SegmentTypeItemEcommNumberField.Raw,
    Mailchimp.SegmentTypeItemEcommNumberField
> = core.serialization.enum_(["ecomm_spent_avg", "ecomm_orders", "ecomm_prod_all", "ecomm_avg_ord"]);

export declare namespace SegmentTypeItemEcommNumberField {
    export type Raw = "ecomm_spent_avg" | "ecomm_orders" | "ecomm_prod_all" | "ecomm_avg_ord";
}
