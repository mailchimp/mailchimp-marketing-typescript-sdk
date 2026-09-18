//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AutomationWorkflowEmailTriggerSettingsRuntime } from "./AutomationWorkflowEmailTriggerSettingsRuntime.js";
import { AutomationWorkflowEmailTriggerSettingsWorkflowType } from "./AutomationWorkflowEmailTriggerSettingsWorkflowType.js";

export const AutomationWorkflowEmailTriggerSettings: core.serialization.ObjectSchema<
    serializers.AutomationWorkflowEmailTriggerSettings.Raw,
    Mailchimp.AutomationWorkflowEmailTriggerSettings
> = core.serialization.object({
    runtime: AutomationWorkflowEmailTriggerSettingsRuntime.optional(),
    workflowEmailsCount: core.serialization.property("workflow_emails_count", core.serialization.number().optional()),
    workflowTitle: core.serialization.property("workflow_title", core.serialization.string().optional()),
    workflowType: core.serialization.property("workflow_type", AutomationWorkflowEmailTriggerSettingsWorkflowType),
});

export declare namespace AutomationWorkflowEmailTriggerSettings {
    export interface Raw {
        runtime?: AutomationWorkflowEmailTriggerSettingsRuntime.Raw | null;
        workflow_emails_count?: number | null;
        workflow_title?: string | null;
        workflow_type: AutomationWorkflowEmailTriggerSettingsWorkflowType.Raw;
    }
}
