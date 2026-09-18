//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemEcommCategoryField } from "./SegmentTypeItemEcommCategoryField.js";
import { SegmentTypeItemEcommCategoryOp } from "./SegmentTypeItemEcommCategoryOp.js";

export const SegmentTypeItemEcommCategory: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemEcommCategory.Raw,
    Mailchimp.SegmentTypeItemEcommCategory
> = core.serialization.object({
    field: SegmentTypeItemEcommCategoryField.optional(),
    op: SegmentTypeItemEcommCategoryOp.optional(),
    value: core.serialization.string().optional(),
});

export declare namespace SegmentTypeItemEcommCategory {
    export interface Raw {
        field?: SegmentTypeItemEcommCategoryField.Raw | null;
        op?: SegmentTypeItemEcommCategoryOp.Raw | null;
        value?: string | null;
    }
}
