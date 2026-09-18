//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemEcommCategoryField: core.serialization.Schema<
    serializers.SegmentTypeItemEcommCategoryField.Raw,
    Mailchimp.SegmentTypeItemEcommCategoryField
> = core.serialization.enum_(["ecomm_cat", "ecomm_prod"]);

export declare namespace SegmentTypeItemEcommCategoryField {
    export type Raw = "ecomm_cat" | "ecomm_prod";
}
