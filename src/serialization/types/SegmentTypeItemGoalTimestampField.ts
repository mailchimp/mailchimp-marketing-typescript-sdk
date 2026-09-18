//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemGoalTimestampField: core.serialization.Schema<
    serializers.SegmentTypeItemGoalTimestampField.Raw,
    Mailchimp.SegmentTypeItemGoalTimestampField
> = core.serialization.enum_(["goal_last_visited"]);

export declare namespace SegmentTypeItemGoalTimestampField {
    export type Raw = "goal_last_visited";
}
