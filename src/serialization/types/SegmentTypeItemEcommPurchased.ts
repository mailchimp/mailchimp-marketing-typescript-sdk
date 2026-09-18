//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemEcommPurchasedField } from "./SegmentTypeItemEcommPurchasedField.js";
import { SegmentTypeItemEcommPurchasedOp } from "./SegmentTypeItemEcommPurchasedOp.js";

export const SegmentTypeItemEcommPurchased: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemEcommPurchased.Raw,
    Mailchimp.SegmentTypeItemEcommPurchased
> = core.serialization.object({
    field: SegmentTypeItemEcommPurchasedField.optional(),
    op: SegmentTypeItemEcommPurchasedOp.optional(),
});

export declare namespace SegmentTypeItemEcommPurchased {
    export interface Raw {
        field?: SegmentTypeItemEcommPurchasedField.Raw | null;
        op?: SegmentTypeItemEcommPurchasedOp.Raw | null;
    }
}
