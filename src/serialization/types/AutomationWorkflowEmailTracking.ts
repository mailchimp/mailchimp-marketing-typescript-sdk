//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AutomationWorkflowEmailTrackingCapsule } from "./AutomationWorkflowEmailTrackingCapsule.js";
import { AutomationWorkflowEmailTrackingSalesforce } from "./AutomationWorkflowEmailTrackingSalesforce.js";

export const AutomationWorkflowEmailTracking: core.serialization.ObjectSchema<
    serializers.AutomationWorkflowEmailTracking.Raw,
    Mailchimp.AutomationWorkflowEmailTracking
> = core.serialization.object({
    capsule: AutomationWorkflowEmailTrackingCapsule.optional(),
    clicktale: core.serialization.string().optional(),
    ecomm360: core.serialization.boolean().optional(),
    goalTracking: core.serialization.property("goal_tracking", core.serialization.boolean().optional()),
    googleAnalytics: core.serialization.property("google_analytics", core.serialization.string().optional()),
    htmlClicks: core.serialization.property("html_clicks", core.serialization.boolean().optional()),
    opens: core.serialization.boolean().optional(),
    salesforce: AutomationWorkflowEmailTrackingSalesforce.optional(),
    textClicks: core.serialization.property("text_clicks", core.serialization.boolean().optional()),
});

export declare namespace AutomationWorkflowEmailTracking {
    export interface Raw {
        capsule?: AutomationWorkflowEmailTrackingCapsule.Raw | null;
        clicktale?: string | null;
        ecomm360?: boolean | null;
        goal_tracking?: boolean | null;
        google_analytics?: string | null;
        html_clicks?: boolean | null;
        opens?: boolean | null;
        salesforce?: AutomationWorkflowEmailTrackingSalesforce.Raw | null;
        text_clicks?: boolean | null;
    }
}
