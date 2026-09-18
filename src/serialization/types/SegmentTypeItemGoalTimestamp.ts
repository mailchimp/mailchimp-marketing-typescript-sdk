//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemGoalTimestampField } from "./SegmentTypeItemGoalTimestampField.js";
import { SegmentTypeItemGoalTimestampOp } from "./SegmentTypeItemGoalTimestampOp.js";

export const SegmentTypeItemGoalTimestamp: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemGoalTimestamp.Raw,
    Mailchimp.SegmentTypeItemGoalTimestamp
> = core.serialization.object({
    field: SegmentTypeItemGoalTimestampField,
    op: SegmentTypeItemGoalTimestampOp,
    value: core.serialization.string(),
});

export declare namespace SegmentTypeItemGoalTimestamp {
    export interface Raw {
        field: SegmentTypeItemGoalTimestampField.Raw;
        op: SegmentTypeItemGoalTimestampOp.Raw;
        value: string;
    }
}
