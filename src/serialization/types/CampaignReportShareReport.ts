//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignReportShareReport: core.serialization.ObjectSchema<
    serializers.CampaignReportShareReport.Raw,
    Mailchimp.CampaignReportShareReport
> = core.serialization.object({
    sharePassword: core.serialization.property("share_password", core.serialization.string().optional()),
    shareUrl: core.serialization.property("share_url", core.serialization.string().optional()),
});

export declare namespace CampaignReportShareReport {
    export interface Raw {
        share_password?: string | null;
        share_url?: string | null;
    }
}
