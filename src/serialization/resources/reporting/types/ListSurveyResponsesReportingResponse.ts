//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSurveyResponsesReportingResponseLinksItem } from "./ListSurveyResponsesReportingResponseLinksItem.js";
import { ListSurveyResponsesReportingResponseResponsesItem } from "./ListSurveyResponsesReportingResponseResponsesItem.js";

export const ListSurveyResponsesReportingResponse: core.serialization.ObjectSchema<
    serializers.ListSurveyResponsesReportingResponse.Raw,
    Mailchimp.ListSurveyResponsesReportingResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListSurveyResponsesReportingResponseLinksItem).optional(),
    ),
    responses: core.serialization.list(ListSurveyResponsesReportingResponseResponsesItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListSurveyResponsesReportingResponse {
    export interface Raw {
        _links?: ListSurveyResponsesReportingResponseLinksItem.Raw[] | null;
        responses?: ListSurveyResponsesReportingResponseResponsesItem.Raw[] | null;
        total_items?: number | null;
    }
}
