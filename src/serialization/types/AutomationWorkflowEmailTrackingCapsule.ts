//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AutomationWorkflowEmailTrackingCapsule: core.serialization.ObjectSchema<
    serializers.AutomationWorkflowEmailTrackingCapsule.Raw,
    Mailchimp.AutomationWorkflowEmailTrackingCapsule
> = core.serialization.object({
    notes: core.serialization.boolean().optional(),
});

export declare namespace AutomationWorkflowEmailTrackingCapsule {
    export interface Raw {
        notes?: boolean | null;
    }
}
