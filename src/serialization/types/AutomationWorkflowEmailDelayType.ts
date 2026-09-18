//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AutomationWorkflowEmailDelayType: core.serialization.Schema<
    serializers.AutomationWorkflowEmailDelayType.Raw,
    Mailchimp.AutomationWorkflowEmailDelayType
> = core.serialization.enum_(["now", "day", "hour", "week"]);

export declare namespace AutomationWorkflowEmailDelayType {
    export type Raw = "now" | "day" | "hour" | "week";
}
