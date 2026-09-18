//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignReportAbSplitA } from "./CampaignReportAbSplitA.js";
import { CampaignReportAbSplitB } from "./CampaignReportAbSplitB.js";

export const CampaignReportAbSplit: core.serialization.ObjectSchema<
    serializers.CampaignReportAbSplit.Raw,
    Mailchimp.CampaignReportAbSplit
> = core.serialization.object({
    a: CampaignReportAbSplitA.optional(),
    b: CampaignReportAbSplitB.optional(),
});

export declare namespace CampaignReportAbSplit {
    export interface Raw {
        a?: CampaignReportAbSplitA.Raw | null;
        b?: CampaignReportAbSplitB.Raw | null;
    }
}
