//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListEepurlReportsResponseReferrersItem: core.serialization.ObjectSchema<
    serializers.ListEepurlReportsResponseReferrersItem.Raw,
    Mailchimp.ListEepurlReportsResponseReferrersItem
> = core.serialization.object({
    clicks: core.serialization.number().optional(),
    firstClick: core.serialization.property("first_click", core.serialization.date().optional()),
    lastClick: core.serialization.property("last_click", core.serialization.date().optional()),
    referrer: core.serialization.string().optional(),
});

export declare namespace ListEepurlReportsResponseReferrersItem {
    export interface Raw {
        clicks?: number | null;
        first_click?: string | null;
        last_click?: string | null;
        referrer?: string | null;
    }
}
