//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListEepurlReportsResponseClicksLocationsItem } from "./ListEepurlReportsResponseClicksLocationsItem.js";

export const ListEepurlReportsResponseClicks: core.serialization.ObjectSchema<
    serializers.ListEepurlReportsResponseClicks.Raw,
    Mailchimp.ListEepurlReportsResponseClicks
> = core.serialization.object({
    clicks: core.serialization.number().optional(),
    firstClick: core.serialization.property("first_click", core.serialization.date().optional()),
    lastClick: core.serialization.property("last_click", core.serialization.date().optional()),
    locations: core.serialization.list(ListEepurlReportsResponseClicksLocationsItem).optional(),
});

export declare namespace ListEepurlReportsResponseClicks {
    export interface Raw {
        clicks?: number | null;
        first_click?: string | null;
        last_click?: string | null;
        locations?: ListEepurlReportsResponseClicksLocationsItem.Raw[] | null;
    }
}
