//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListEepurlReportsResponseClicksLocationsItem: core.serialization.ObjectSchema<
    serializers.ListEepurlReportsResponseClicksLocationsItem.Raw,
    Mailchimp.ListEepurlReportsResponseClicksLocationsItem
> = core.serialization.object({
    country: core.serialization.string().optional(),
    region: core.serialization.string().optional(),
});

export declare namespace ListEepurlReportsResponseClicksLocationsItem {
    export interface Raw {
        country?: string | null;
        region?: string | null;
    }
}
