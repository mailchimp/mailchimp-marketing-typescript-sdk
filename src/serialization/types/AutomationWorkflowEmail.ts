//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AutomationWorkflowEmailDelay } from "./AutomationWorkflowEmailDelay.js";
import { AutomationWorkflowEmailLinksItem } from "./AutomationWorkflowEmailLinksItem.js";
import { AutomationWorkflowEmailRecipients } from "./AutomationWorkflowEmailRecipients.js";
import { AutomationWorkflowEmailReportSummary } from "./AutomationWorkflowEmailReportSummary.js";
import { AutomationWorkflowEmailSettings } from "./AutomationWorkflowEmailSettings.js";
import { AutomationWorkflowEmailSocialCard } from "./AutomationWorkflowEmailSocialCard.js";
import { AutomationWorkflowEmailStatus } from "./AutomationWorkflowEmailStatus.js";
import { AutomationWorkflowEmailTracking } from "./AutomationWorkflowEmailTracking.js";
import { AutomationWorkflowEmailTriggerSettings } from "./AutomationWorkflowEmailTriggerSettings.js";

export const AutomationWorkflowEmail: core.serialization.ObjectSchema<
    serializers.AutomationWorkflowEmail.Raw,
    Mailchimp.AutomationWorkflowEmail
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(AutomationWorkflowEmailLinksItem).optional()),
    archiveUrl: core.serialization.property("archive_url", core.serialization.string().optional()),
    contentType: core.serialization.property("content_type", core.serialization.string().optional()),
    createTime: core.serialization.property("create_time", core.serialization.date().optional()),
    delay: AutomationWorkflowEmailDelay.optional(),
    emailsSent: core.serialization.property("emails_sent", core.serialization.number().optional()),
    hasLogoMergeTag: core.serialization.property("has_logo_merge_tag", core.serialization.boolean().optional()),
    id: core.serialization.string().optional(),
    needsBlockRefresh: core.serialization.property("needs_block_refresh", core.serialization.boolean().optional()),
    position: core.serialization.number().optional(),
    recipients: AutomationWorkflowEmailRecipients.optional(),
    reportSummary: core.serialization.property("report_summary", AutomationWorkflowEmailReportSummary.optional()),
    sendTime: core.serialization.property("send_time", core.serialization.date().optional()),
    settings: AutomationWorkflowEmailSettings.optional(),
    socialCard: core.serialization.property("social_card", AutomationWorkflowEmailSocialCard.optional()),
    startTime: core.serialization.property("start_time", core.serialization.date().optional()),
    status: AutomationWorkflowEmailStatus.optional(),
    tracking: AutomationWorkflowEmailTracking.optional(),
    triggerSettings: core.serialization.property("trigger_settings", AutomationWorkflowEmailTriggerSettings.optional()),
    webId: core.serialization.property("web_id", core.serialization.number().optional()),
    workflowId: core.serialization.property("workflow_id", core.serialization.string().optional()),
});

export declare namespace AutomationWorkflowEmail {
    export interface Raw {
        _links?: AutomationWorkflowEmailLinksItem.Raw[] | null;
        archive_url?: string | null;
        content_type?: string | null;
        create_time?: string | null;
        delay?: AutomationWorkflowEmailDelay.Raw | null;
        emails_sent?: number | null;
        has_logo_merge_tag?: boolean | null;
        id?: string | null;
        needs_block_refresh?: boolean | null;
        position?: number | null;
        recipients?: AutomationWorkflowEmailRecipients.Raw | null;
        report_summary?: AutomationWorkflowEmailReportSummary.Raw | null;
        send_time?: string | null;
        settings?: AutomationWorkflowEmailSettings.Raw | null;
        social_card?: AutomationWorkflowEmailSocialCard.Raw | null;
        start_time?: string | null;
        status?: AutomationWorkflowEmailStatus.Raw | null;
        tracking?: AutomationWorkflowEmailTracking.Raw | null;
        trigger_settings?: AutomationWorkflowEmailTriggerSettings.Raw | null;
        web_id?: number | null;
        workflow_id?: string | null;
    }
}
