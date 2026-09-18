//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AutomationWorkflowTriggerSettingsRuntimeHoursType } from "./AutomationWorkflowTriggerSettingsRuntimeHoursType.js";

export const AutomationWorkflowTriggerSettingsRuntimeHours: core.serialization.ObjectSchema<
    serializers.AutomationWorkflowTriggerSettingsRuntimeHours.Raw,
    Mailchimp.AutomationWorkflowTriggerSettingsRuntimeHours
> = core.serialization.object({
    type: AutomationWorkflowTriggerSettingsRuntimeHoursType,
});

export declare namespace AutomationWorkflowTriggerSettingsRuntimeHours {
    export interface Raw {
        type: AutomationWorkflowTriggerSettingsRuntimeHoursType.Raw;
    }
}
