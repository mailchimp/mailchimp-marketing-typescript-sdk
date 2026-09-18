//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemAutomationField } from "./SegmentTypeItemAutomationField.js";
import { SegmentTypeItemAutomationOp } from "./SegmentTypeItemAutomationOp.js";

export const SegmentTypeItemAutomation: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemAutomation.Raw,
    Mailchimp.SegmentTypeItemAutomation
> = core.serialization.object({
    field: SegmentTypeItemAutomationField,
    op: SegmentTypeItemAutomationOp,
    value: core.serialization.string(),
});

export declare namespace SegmentTypeItemAutomation {
    export interface Raw {
        field: SegmentTypeItemAutomationField.Raw;
        op: SegmentTypeItemAutomationOp.Raw;
        value: string;
    }
}
