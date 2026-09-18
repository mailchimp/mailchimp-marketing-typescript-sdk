//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AutomationWorkflowEmailTriggerSettingsRuntimeHoursType: core.serialization.Schema<
    serializers.AutomationWorkflowEmailTriggerSettingsRuntimeHoursType.Raw,
    Mailchimp.AutomationWorkflowEmailTriggerSettingsRuntimeHoursType
> = core.serialization.enum_(["send_asap", "send_between", "send_at"]);

export declare namespace AutomationWorkflowEmailTriggerSettingsRuntimeHoursType {
    export type Raw = "send_asap" | "send_between" | "send_at";
}
