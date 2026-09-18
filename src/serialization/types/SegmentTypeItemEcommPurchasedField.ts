//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemEcommPurchasedField: core.serialization.Schema<
    serializers.SegmentTypeItemEcommPurchasedField.Raw,
    Mailchimp.SegmentTypeItemEcommPurchasedField
> = core.serialization.enum_(["ecomm_purchased"]);

export declare namespace SegmentTypeItemEcommPurchasedField {
    export type Raw = "ecomm_purchased";
}
