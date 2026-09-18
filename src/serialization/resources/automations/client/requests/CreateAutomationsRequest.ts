//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateAutomationsRequestRecipients } from "../../types/CreateAutomationsRequestRecipients.js";
import { CreateAutomationsRequestSettings } from "../../types/CreateAutomationsRequestSettings.js";
import { CreateAutomationsRequestTriggerSettings } from "../../types/CreateAutomationsRequestTriggerSettings.js";

export const CreateAutomationsRequest: core.serialization.Schema<
    serializers.CreateAutomationsRequest.Raw,
    Mailchimp.CreateAutomationsRequest
> = core.serialization.object({
    recipients: CreateAutomationsRequestRecipients,
    settings: CreateAutomationsRequestSettings.optional(),
    triggerSettings: core.serialization.property("trigger_settings", CreateAutomationsRequestTriggerSettings),
});

export declare namespace CreateAutomationsRequest {
    export interface Raw {
        recipients: CreateAutomationsRequestRecipients.Raw;
        settings?: CreateAutomationsRequestSettings.Raw | null;
        trigger_settings: CreateAutomationsRequestTriggerSettings.Raw;
    }
}
