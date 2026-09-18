//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemGoalActivityField: core.serialization.Schema<
    serializers.SegmentTypeItemGoalActivityField.Raw,
    Mailchimp.SegmentTypeItemGoalActivityField
> = core.serialization.enum_(["goal"]);

export declare namespace SegmentTypeItemGoalActivityField {
    export type Raw = "goal";
}
