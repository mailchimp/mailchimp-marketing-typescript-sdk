//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AutomationWorkflowLinksItem } from "./AutomationWorkflowLinksItem.js";
import { AutomationWorkflowRecipients } from "./AutomationWorkflowRecipients.js";
import { AutomationWorkflowReportSummary } from "./AutomationWorkflowReportSummary.js";
import { AutomationWorkflowSettings } from "./AutomationWorkflowSettings.js";
import { AutomationWorkflowStatus } from "./AutomationWorkflowStatus.js";
import { AutomationWorkflowTracking } from "./AutomationWorkflowTracking.js";
import { AutomationWorkflowTriggerSettings } from "./AutomationWorkflowTriggerSettings.js";

export const AutomationWorkflow: core.serialization.ObjectSchema<
    serializers.AutomationWorkflow.Raw,
    Mailchimp.AutomationWorkflow
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(AutomationWorkflowLinksItem).optional()),
    createTime: core.serialization.property("create_time", core.serialization.date().optional()),
    emailsSent: core.serialization.property("emails_sent", core.serialization.number().optional()),
    id: core.serialization.string().optional(),
    recipients: AutomationWorkflowRecipients.optional(),
    reportSummary: core.serialization.property("report_summary", AutomationWorkflowReportSummary.optional()),
    settings: AutomationWorkflowSettings.optional(),
    startTime: core.serialization.property("start_time", core.serialization.date().optional()),
    status: AutomationWorkflowStatus.optional(),
    tracking: AutomationWorkflowTracking.optional(),
    triggerSettings: core.serialization.property("trigger_settings", AutomationWorkflowTriggerSettings.optional()),
});

export declare namespace AutomationWorkflow {
    export interface Raw {
        _links?: AutomationWorkflowLinksItem.Raw[] | null;
        create_time?: string | null;
        emails_sent?: number | null;
        id?: string | null;
        recipients?: AutomationWorkflowRecipients.Raw | null;
        report_summary?: AutomationWorkflowReportSummary.Raw | null;
        settings?: AutomationWorkflowSettings.Raw | null;
        start_time?: string | null;
        status?: AutomationWorkflowStatus.Raw | null;
        tracking?: AutomationWorkflowTracking.Raw | null;
        trigger_settings?: AutomationWorkflowTriggerSettings.Raw | null;
    }
}
