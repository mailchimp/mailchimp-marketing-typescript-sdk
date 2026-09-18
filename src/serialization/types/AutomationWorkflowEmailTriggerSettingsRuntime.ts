//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AutomationWorkflowEmailTriggerSettingsRuntimeDaysItem } from "./AutomationWorkflowEmailTriggerSettingsRuntimeDaysItem.js";
import { AutomationWorkflowEmailTriggerSettingsRuntimeHours } from "./AutomationWorkflowEmailTriggerSettingsRuntimeHours.js";

export const AutomationWorkflowEmailTriggerSettingsRuntime: core.serialization.ObjectSchema<
    serializers.AutomationWorkflowEmailTriggerSettingsRuntime.Raw,
    Mailchimp.AutomationWorkflowEmailTriggerSettingsRuntime
> = core.serialization.object({
    days: core.serialization.list(AutomationWorkflowEmailTriggerSettingsRuntimeDaysItem).optional(),
    hours: AutomationWorkflowEmailTriggerSettingsRuntimeHours.optional(),
});

export declare namespace AutomationWorkflowEmailTriggerSettingsRuntime {
    export interface Raw {
        days?: AutomationWorkflowEmailTriggerSettingsRuntimeDaysItem.Raw[] | null;
        hours?: AutomationWorkflowEmailTriggerSettingsRuntimeHours.Raw | null;
    }
}
