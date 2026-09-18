//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ReportingFacebookAdAudienceActivityClicksItem } from "./ReportingFacebookAdAudienceActivityClicksItem.js";
import { ReportingFacebookAdAudienceActivityImpressionsItem } from "./ReportingFacebookAdAudienceActivityImpressionsItem.js";
import { ReportingFacebookAdAudienceActivityRevenueItem } from "./ReportingFacebookAdAudienceActivityRevenueItem.js";

export const ReportingFacebookAdAudienceActivity: core.serialization.ObjectSchema<
    serializers.ReportingFacebookAdAudienceActivity.Raw,
    Mailchimp.ReportingFacebookAdAudienceActivity
> = core.serialization.object({
    clicks: core.serialization.list(ReportingFacebookAdAudienceActivityClicksItem).optional(),
    impressions: core.serialization.list(ReportingFacebookAdAudienceActivityImpressionsItem).optional(),
    revenue: core.serialization.list(ReportingFacebookAdAudienceActivityRevenueItem).optional(),
});

export declare namespace ReportingFacebookAdAudienceActivity {
    export interface Raw {
        clicks?: ReportingFacebookAdAudienceActivityClicksItem.Raw[] | null;
        impressions?: ReportingFacebookAdAudienceActivityImpressionsItem.Raw[] | null;
        revenue?: ReportingFacebookAdAudienceActivityRevenueItem.Raw[] | null;
    }
}
