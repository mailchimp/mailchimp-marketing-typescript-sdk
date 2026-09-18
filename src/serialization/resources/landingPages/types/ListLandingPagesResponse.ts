//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { LandingPage } from "../../../types/LandingPage.js";
import { ListLandingPagesResponseLinksItem } from "./ListLandingPagesResponseLinksItem.js";

export const ListLandingPagesResponse: core.serialization.ObjectSchema<
    serializers.ListLandingPagesResponse.Raw,
    Mailchimp.ListLandingPagesResponse
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ListLandingPagesResponseLinksItem).optional()),
    landingPages: core.serialization.property("landing_pages", core.serialization.list(LandingPage).optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListLandingPagesResponse {
    export interface Raw {
        _links?: ListLandingPagesResponseLinksItem.Raw[] | null;
        landing_pages?: LandingPage.Raw[] | null;
        total_items?: number | null;
    }
}
