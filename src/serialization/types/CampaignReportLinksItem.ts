//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignReportLinksItemMethod } from "./CampaignReportLinksItemMethod.js";

export const CampaignReportLinksItem: core.serialization.ObjectSchema<
    serializers.CampaignReportLinksItem.Raw,
    Mailchimp.CampaignReportLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: CampaignReportLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace CampaignReportLinksItem {
    export interface Raw {
        href?: string | null;
        method?: CampaignReportLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
