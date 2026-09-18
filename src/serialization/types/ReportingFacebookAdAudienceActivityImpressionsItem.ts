//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ReportingFacebookAdAudienceActivityImpressionsItem: core.serialization.ObjectSchema<
    serializers.ReportingFacebookAdAudienceActivityImpressionsItem.Raw,
    Mailchimp.ReportingFacebookAdAudienceActivityImpressionsItem
> = core.serialization.object({
    date: core.serialization.string().optional(),
    impressions: core.serialization.number().optional(),
});

export declare namespace ReportingFacebookAdAudienceActivityImpressionsItem {
    export interface Raw {
        date?: string | null;
        impressions?: number | null;
    }
}
