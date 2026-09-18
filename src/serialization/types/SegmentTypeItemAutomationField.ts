//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemAutomationField: core.serialization.Schema<
    serializers.SegmentTypeItemAutomationField.Raw,
    Mailchimp.SegmentTypeItemAutomationField
> = core.serialization.enum_(["automation"]);

export declare namespace SegmentTypeItemAutomationField {
    export type Raw = "automation";
}
