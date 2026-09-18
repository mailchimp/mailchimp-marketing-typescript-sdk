//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSurveyQuestionAnswersReportingResponseAnswersItemContact } from "./ListSurveyQuestionAnswersReportingResponseAnswersItemContact.js";

export const ListSurveyQuestionAnswersReportingResponseAnswersItem: core.serialization.ObjectSchema<
    serializers.ListSurveyQuestionAnswersReportingResponseAnswersItem.Raw,
    Mailchimp.ListSurveyQuestionAnswersReportingResponseAnswersItem
> = core.serialization.object({
    contact: ListSurveyQuestionAnswersReportingResponseAnswersItemContact.optional(),
    id: core.serialization.string().optional(),
    isNewContact: core.serialization.property("is_new_contact", core.serialization.boolean().optional()),
    responseId: core.serialization.property("response_id", core.serialization.string().optional()),
    submittedAt: core.serialization.property("submitted_at", core.serialization.date().optional()),
    value: core.serialization.string().optional(),
});

export declare namespace ListSurveyQuestionAnswersReportingResponseAnswersItem {
    export interface Raw {
        contact?: ListSurveyQuestionAnswersReportingResponseAnswersItemContact.Raw | null;
        id?: string | null;
        is_new_contact?: boolean | null;
        response_id?: string | null;
        submitted_at?: string | null;
        value?: string | null;
    }
}
