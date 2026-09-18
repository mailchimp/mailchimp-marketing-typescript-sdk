//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { GetSurveyResponsReportingResponseContact } from "./GetSurveyResponsReportingResponseContact.js";
import { GetSurveyResponsReportingResponseResultsItem } from "./GetSurveyResponsReportingResponseResultsItem.js";

export const GetSurveyResponsReportingResponse: core.serialization.ObjectSchema<
    serializers.GetSurveyResponsReportingResponse.Raw,
    Mailchimp.GetSurveyResponsReportingResponse
> = core.serialization.object({
    contact: GetSurveyResponsReportingResponseContact.optional(),
    isNewContact: core.serialization.property("is_new_contact", core.serialization.boolean().optional()),
    responseId: core.serialization.property("response_id", core.serialization.string().optional()),
    results: core.serialization.list(GetSurveyResponsReportingResponseResultsItem).optional(),
    submittedAt: core.serialization.property("submitted_at", core.serialization.date().optional()),
});

export declare namespace GetSurveyResponsReportingResponse {
    export interface Raw {
        contact?: GetSurveyResponsReportingResponseContact.Raw | null;
        is_new_contact?: boolean | null;
        response_id?: string | null;
        results?: GetSurveyResponsReportingResponseResultsItem.Raw[] | null;
        submitted_at?: string | null;
    }
}
