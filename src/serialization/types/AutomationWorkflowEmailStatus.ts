//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AutomationWorkflowEmailStatus: core.serialization.Schema<
    serializers.AutomationWorkflowEmailStatus.Raw,
    Mailchimp.AutomationWorkflowEmailStatus
> = core.serialization.enum_(["save", "paused", "sending"]);

export declare namespace AutomationWorkflowEmailStatus {
    export type Raw = "save" | "paused" | "sending";
}
