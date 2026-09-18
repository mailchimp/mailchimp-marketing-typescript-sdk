//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSurveysReportingResponseLinksItem } from "./ListSurveysReportingResponseLinksItem.js";
import { ListSurveysReportingResponseSurveysItem } from "./ListSurveysReportingResponseSurveysItem.js";

export const ListSurveysReportingResponse: core.serialization.ObjectSchema<
    serializers.ListSurveysReportingResponse.Raw,
    Mailchimp.ListSurveysReportingResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListSurveysReportingResponseLinksItem).optional(),
    ),
    surveys: core.serialization.list(ListSurveysReportingResponseSurveysItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListSurveysReportingResponse {
    export interface Raw {
        _links?: ListSurveysReportingResponseLinksItem.Raw[] | null;
        surveys?: ListSurveysReportingResponseSurveysItem.Raw[] | null;
        total_items?: number | null;
    }
}
