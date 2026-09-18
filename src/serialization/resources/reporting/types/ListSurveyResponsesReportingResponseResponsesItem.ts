//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSurveyResponsesReportingResponseResponsesItemContact } from "./ListSurveyResponsesReportingResponseResponsesItemContact.js";

export const ListSurveyResponsesReportingResponseResponsesItem: core.serialization.ObjectSchema<
    serializers.ListSurveyResponsesReportingResponseResponsesItem.Raw,
    Mailchimp.ListSurveyResponsesReportingResponseResponsesItem
> = core.serialization.object({
    contact: ListSurveyResponsesReportingResponseResponsesItemContact.optional(),
    isNewContact: core.serialization.property("is_new_contact", core.serialization.boolean().optional()),
    responseId: core.serialization.property("response_id", core.serialization.string().optional()),
    submittedAt: core.serialization.property("submitted_at", core.serialization.date().optional()),
});

export declare namespace ListSurveyResponsesReportingResponseResponsesItem {
    export interface Raw {
        contact?: ListSurveyResponsesReportingResponseResponsesItemContact.Raw | null;
        is_new_contact?: boolean | null;
        response_id?: string | null;
        submitted_at?: string | null;
    }
}
