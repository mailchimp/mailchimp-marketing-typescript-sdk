//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AutomationWorkflowTriggerSettingsRuntimeDaysItem } from "./AutomationWorkflowTriggerSettingsRuntimeDaysItem.js";
import { AutomationWorkflowTriggerSettingsRuntimeHours } from "./AutomationWorkflowTriggerSettingsRuntimeHours.js";

export const AutomationWorkflowTriggerSettingsRuntime: core.serialization.ObjectSchema<
    serializers.AutomationWorkflowTriggerSettingsRuntime.Raw,
    Mailchimp.AutomationWorkflowTriggerSettingsRuntime
> = core.serialization.object({
    days: core.serialization.list(AutomationWorkflowTriggerSettingsRuntimeDaysItem).optional(),
    hours: AutomationWorkflowTriggerSettingsRuntimeHours.optional(),
});

export declare namespace AutomationWorkflowTriggerSettingsRuntime {
    export interface Raw {
        days?: AutomationWorkflowTriggerSettingsRuntimeDaysItem.Raw[] | null;
        hours?: AutomationWorkflowTriggerSettingsRuntimeHours.Raw | null;
    }
}
