//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ReportingFacebookAdAudienceActivityRevenueItem: core.serialization.ObjectSchema<
    serializers.ReportingFacebookAdAudienceActivityRevenueItem.Raw,
    Mailchimp.ReportingFacebookAdAudienceActivityRevenueItem
> = core.serialization.object({
    date: core.serialization.string().optional(),
    revenue: core.serialization.number().optional(),
});

export declare namespace ReportingFacebookAdAudienceActivityRevenueItem {
    export interface Raw {
        date?: string | null;
        revenue?: number | null;
    }
}
