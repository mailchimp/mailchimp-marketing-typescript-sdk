//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AutomationWorkflowStatus: core.serialization.Schema<
    serializers.AutomationWorkflowStatus.Raw,
    Mailchimp.AutomationWorkflowStatus
> = core.serialization.enum_(["save", "paused", "sending"]);

export declare namespace AutomationWorkflowStatus {
    export type Raw = "save" | "paused" | "sending";
}
