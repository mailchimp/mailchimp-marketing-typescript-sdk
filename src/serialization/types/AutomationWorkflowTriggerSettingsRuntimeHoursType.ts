//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AutomationWorkflowTriggerSettingsRuntimeHoursType: core.serialization.Schema<
    serializers.AutomationWorkflowTriggerSettingsRuntimeHoursType.Raw,
    Mailchimp.AutomationWorkflowTriggerSettingsRuntimeHoursType
> = core.serialization.enum_(["send_asap", "send_between", "send_at"]);

export declare namespace AutomationWorkflowTriggerSettingsRuntimeHoursType {
    export type Raw = "send_asap" | "send_between" | "send_at";
}
