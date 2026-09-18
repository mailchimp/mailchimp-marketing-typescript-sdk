//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateAutomationsRequestTriggerSettingsWorkflowType } from "./CreateAutomationsRequestTriggerSettingsWorkflowType.js";

export const CreateAutomationsRequestTriggerSettings: core.serialization.ObjectSchema<
    serializers.CreateAutomationsRequestTriggerSettings.Raw,
    Mailchimp.CreateAutomationsRequestTriggerSettings
> = core.serialization.object({
    workflowType: core.serialization.property("workflow_type", CreateAutomationsRequestTriggerSettingsWorkflowType),
});

export declare namespace CreateAutomationsRequestTriggerSettings {
    export interface Raw {
        workflow_type: CreateAutomationsRequestTriggerSettingsWorkflowType.Raw;
    }
}
