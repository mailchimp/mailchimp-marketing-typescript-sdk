//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AutomationWorkflowEmailTriggerSettingsRuntimeHoursType } from "./AutomationWorkflowEmailTriggerSettingsRuntimeHoursType.js";

export const AutomationWorkflowEmailTriggerSettingsRuntimeHours: core.serialization.ObjectSchema<
    serializers.AutomationWorkflowEmailTriggerSettingsRuntimeHours.Raw,
    Mailchimp.AutomationWorkflowEmailTriggerSettingsRuntimeHours
> = core.serialization.object({
    type: AutomationWorkflowEmailTriggerSettingsRuntimeHoursType,
});

export declare namespace AutomationWorkflowEmailTriggerSettingsRuntimeHours {
    export interface Raw {
        type: AutomationWorkflowEmailTriggerSettingsRuntimeHoursType.Raw;
    }
}
