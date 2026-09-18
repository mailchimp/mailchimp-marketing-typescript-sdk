//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AutomationWorkflowTriggerSettingsRuntime } from "./AutomationWorkflowTriggerSettingsRuntime.js";
import { AutomationWorkflowTriggerSettingsWorkflowType } from "./AutomationWorkflowTriggerSettingsWorkflowType.js";

export const AutomationWorkflowTriggerSettings: core.serialization.ObjectSchema<
    serializers.AutomationWorkflowTriggerSettings.Raw,
    Mailchimp.AutomationWorkflowTriggerSettings
> = core.serialization.object({
    runtime: AutomationWorkflowTriggerSettingsRuntime.optional(),
    workflowEmailsCount: core.serialization.property("workflow_emails_count", core.serialization.number().optional()),
    workflowTitle: core.serialization.property("workflow_title", core.serialization.string().optional()),
    workflowType: core.serialization.property("workflow_type", AutomationWorkflowTriggerSettingsWorkflowType),
});

export declare namespace AutomationWorkflowTriggerSettings {
    export interface Raw {
        runtime?: AutomationWorkflowTriggerSettingsRuntime.Raw | null;
        workflow_emails_count?: number | null;
        workflow_title?: string | null;
        workflow_type: AutomationWorkflowTriggerSettingsWorkflowType.Raw;
    }
}
