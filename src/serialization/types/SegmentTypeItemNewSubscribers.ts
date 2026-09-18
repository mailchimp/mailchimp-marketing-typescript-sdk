//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemNewSubscribersField } from "./SegmentTypeItemNewSubscribersField.js";
import { SegmentTypeItemNewSubscribersOp } from "./SegmentTypeItemNewSubscribersOp.js";

export const SegmentTypeItemNewSubscribers: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemNewSubscribers.Raw,
    Mailchimp.SegmentTypeItemNewSubscribers
> = core.serialization.object({
    field: SegmentTypeItemNewSubscribersField.optional(),
    op: SegmentTypeItemNewSubscribersOp.optional(),
    value: core.serialization.string().optional(),
});

export declare namespace SegmentTypeItemNewSubscribers {
    export interface Raw {
        field?: SegmentTypeItemNewSubscribersField.Raw | null;
        op?: SegmentTypeItemNewSubscribersOp.Raw | null;
        value?: string | null;
    }
}
