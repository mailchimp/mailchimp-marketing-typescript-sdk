//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AutomationWorkflowEmailDelayDirection: core.serialization.Schema<
    serializers.AutomationWorkflowEmailDelayDirection.Raw,
    Mailchimp.AutomationWorkflowEmailDelayDirection
> = core.serialization.enum_(["before", "after"]);

export declare namespace AutomationWorkflowEmailDelayDirection {
    export type Raw = "before" | "after";
}
