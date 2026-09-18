//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AutomationWorkflowTrackingCapsule } from "./AutomationWorkflowTrackingCapsule.js";
import { AutomationWorkflowTrackingSalesforce } from "./AutomationWorkflowTrackingSalesforce.js";

export const AutomationWorkflowTracking: core.serialization.ObjectSchema<
    serializers.AutomationWorkflowTracking.Raw,
    Mailchimp.AutomationWorkflowTracking
> = core.serialization.object({
    capsule: AutomationWorkflowTrackingCapsule.optional(),
    clicktale: core.serialization.string().optional(),
    ecomm360: core.serialization.boolean().optional(),
    goalTracking: core.serialization.property("goal_tracking", core.serialization.boolean().optional()),
    googleAnalytics: core.serialization.property("google_analytics", core.serialization.string().optional()),
    htmlClicks: core.serialization.property("html_clicks", core.serialization.boolean().optional()),
    opens: core.serialization.boolean().optional(),
    salesforce: AutomationWorkflowTrackingSalesforce.optional(),
    textClicks: core.serialization.property("text_clicks", core.serialization.boolean().optional()),
});

export declare namespace AutomationWorkflowTracking {
    export interface Raw {
        capsule?: AutomationWorkflowTrackingCapsule.Raw | null;
        clicktale?: string | null;
        ecomm360?: boolean | null;
        goal_tracking?: boolean | null;
        google_analytics?: string | null;
        html_clicks?: boolean | null;
        opens?: boolean | null;
        salesforce?: AutomationWorkflowTrackingSalesforce.Raw | null;
        text_clicks?: boolean | null;
    }
}
