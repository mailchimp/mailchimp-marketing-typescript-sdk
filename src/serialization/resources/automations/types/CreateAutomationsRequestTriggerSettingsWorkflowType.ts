//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateAutomationsRequestTriggerSettingsWorkflowType: core.serialization.Schema<
    serializers.CreateAutomationsRequestTriggerSettingsWorkflowType.Raw,
    Mailchimp.CreateAutomationsRequestTriggerSettingsWorkflowType
> = core.serialization.enum_(["abandonedBrowse", "abandonedCart", "emailFollowup", "singleWelcome"]);

export declare namespace CreateAutomationsRequestTriggerSettingsWorkflowType {
    export type Raw = "abandonedBrowse" | "abandonedCart" | "emailFollowup" | "singleWelcome";
}
