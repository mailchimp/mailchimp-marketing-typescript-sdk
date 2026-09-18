//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AutomationWorkflowTrackingSalesforce: core.serialization.ObjectSchema<
    serializers.AutomationWorkflowTrackingSalesforce.Raw,
    Mailchimp.AutomationWorkflowTrackingSalesforce
> = core.serialization.object({
    campaign: core.serialization.boolean().optional(),
    notes: core.serialization.boolean().optional(),
});

export declare namespace AutomationWorkflowTrackingSalesforce {
    export interface Raw {
        campaign?: boolean | null;
        notes?: boolean | null;
    }
}
