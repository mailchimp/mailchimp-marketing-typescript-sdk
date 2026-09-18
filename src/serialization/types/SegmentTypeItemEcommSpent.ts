//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemEcommSpentField } from "./SegmentTypeItemEcommSpentField.js";
import { SegmentTypeItemEcommSpentOp } from "./SegmentTypeItemEcommSpentOp.js";
import { SegmentTypeItemEcommSpentValue } from "./SegmentTypeItemEcommSpentValue.js";

export const SegmentTypeItemEcommSpent: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemEcommSpent.Raw,
    Mailchimp.SegmentTypeItemEcommSpent
> = core.serialization.object({
    field: SegmentTypeItemEcommSpentField.optional(),
    op: SegmentTypeItemEcommSpentOp.optional(),
    value: SegmentTypeItemEcommSpentValue.optional(),
});

export declare namespace SegmentTypeItemEcommSpent {
    export interface Raw {
        field?: SegmentTypeItemEcommSpentField.Raw | null;
        op?: SegmentTypeItemEcommSpentOp.Raw | null;
        value?: SegmentTypeItemEcommSpentValue.Raw | null;
    }
}
