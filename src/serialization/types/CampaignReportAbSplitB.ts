//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignReportAbSplitB: core.serialization.ObjectSchema<
    serializers.CampaignReportAbSplitB.Raw,
    Mailchimp.CampaignReportAbSplitB
> = core.serialization.object({
    abuseReports: core.serialization.property("abuse_reports", core.serialization.number().optional()),
    bounces: core.serialization.number().optional(),
    forwards: core.serialization.number().optional(),
    forwardsOpens: core.serialization.property("forwards_opens", core.serialization.number().optional()),
    lastOpen: core.serialization.property("last_open", core.serialization.string().optional()),
    opens: core.serialization.number().optional(),
    recipientClicks: core.serialization.property("recipient_clicks", core.serialization.number().optional()),
    uniqueOpens: core.serialization.property("unique_opens", core.serialization.number().optional()),
    unsubs: core.serialization.number().optional(),
});

export declare namespace CampaignReportAbSplitB {
    export interface Raw {
        abuse_reports?: number | null;
        bounces?: number | null;
        forwards?: number | null;
        forwards_opens?: number | null;
        last_open?: string | null;
        opens?: number | null;
        recipient_clicks?: number | null;
        unique_opens?: number | null;
        unsubs?: number | null;
    }
}
