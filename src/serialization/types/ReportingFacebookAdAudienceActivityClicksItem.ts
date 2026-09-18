//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ReportingFacebookAdAudienceActivityClicksItem: core.serialization.ObjectSchema<
    serializers.ReportingFacebookAdAudienceActivityClicksItem.Raw,
    Mailchimp.ReportingFacebookAdAudienceActivityClicksItem
> = core.serialization.object({
    clicks: core.serialization.number().optional(),
    date: core.serialization.string().optional(),
});

export declare namespace ReportingFacebookAdAudienceActivityClicksItem {
    export interface Raw {
        clicks?: number | null;
        date?: string | null;
    }
}
