//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { LandingPageReport } from "../../../types/LandingPageReport.js";
import { ListLandingPagesReportingResponseLinksItem } from "./ListLandingPagesReportingResponseLinksItem.js";

export const ListLandingPagesReportingResponse: core.serialization.ObjectSchema<
    serializers.ListLandingPagesReportingResponse.Raw,
    Mailchimp.ListLandingPagesReportingResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListLandingPagesReportingResponseLinksItem).optional(),
    ),
    landingPages: core.serialization.property("landing_pages", core.serialization.list(LandingPageReport).optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListLandingPagesReportingResponse {
    export interface Raw {
        _links?: ListLandingPagesReportingResponseLinksItem.Raw[] | null;
        landing_pages?: LandingPageReport.Raw[] | null;
        total_items?: number | null;
    }
}
