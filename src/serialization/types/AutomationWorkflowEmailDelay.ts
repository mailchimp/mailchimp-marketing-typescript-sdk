//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AutomationWorkflowEmailDelayAction } from "./AutomationWorkflowEmailDelayAction.js";
import { AutomationWorkflowEmailDelayDirection } from "./AutomationWorkflowEmailDelayDirection.js";
import { AutomationWorkflowEmailDelayType } from "./AutomationWorkflowEmailDelayType.js";

export const AutomationWorkflowEmailDelay: core.serialization.ObjectSchema<
    serializers.AutomationWorkflowEmailDelay.Raw,
    Mailchimp.AutomationWorkflowEmailDelay
> = core.serialization.object({
    action: AutomationWorkflowEmailDelayAction.optional(),
    actionDescription: core.serialization.property("action_description", core.serialization.string().optional()),
    amount: core.serialization.number().optional(),
    direction: AutomationWorkflowEmailDelayDirection.optional(),
    fullDescription: core.serialization.property("full_description", core.serialization.string().optional()),
    type: AutomationWorkflowEmailDelayType.optional(),
});

export declare namespace AutomationWorkflowEmailDelay {
    export interface Raw {
        action?: AutomationWorkflowEmailDelayAction.Raw | null;
        action_description?: string | null;
        amount?: number | null;
        direction?: AutomationWorkflowEmailDelayDirection.Raw | null;
        full_description?: string | null;
        type?: AutomationWorkflowEmailDelayType.Raw | null;
    }
}
