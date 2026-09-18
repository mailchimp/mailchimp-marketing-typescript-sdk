//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AutomationWorkflowEmailTrackingSalesforce: core.serialization.ObjectSchema<
    serializers.AutomationWorkflowEmailTrackingSalesforce.Raw,
    Mailchimp.AutomationWorkflowEmailTrackingSalesforce
> = core.serialization.object({
    campaign: core.serialization.boolean().optional(),
    notes: core.serialization.boolean().optional(),
});

export declare namespace AutomationWorkflowEmailTrackingSalesforce {
    export interface Raw {
        campaign?: boolean | null;
        notes?: boolean | null;
    }
}
