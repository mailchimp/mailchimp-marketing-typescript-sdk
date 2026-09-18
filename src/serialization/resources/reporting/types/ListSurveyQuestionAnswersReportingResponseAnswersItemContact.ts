//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSurveyQuestionAnswersReportingResponseAnswersItemContactStatus } from "./ListSurveyQuestionAnswersReportingResponseAnswersItemContactStatus.js";

export const ListSurveyQuestionAnswersReportingResponseAnswersItemContact: core.serialization.ObjectSchema<
    serializers.ListSurveyQuestionAnswersReportingResponseAnswersItemContact.Raw,
    Mailchimp.ListSurveyQuestionAnswersReportingResponseAnswersItemContact
> = core.serialization.object({
    avatarUrl: core.serialization.property("avatar_url", core.serialization.string().optional()),
    consentsToOneToOneMessaging: core.serialization.property(
        "consents_to_one_to_one_messaging",
        core.serialization.boolean().optional(),
    ),
    contactId: core.serialization.property("contact_id", core.serialization.string().optional()),
    email: core.serialization.string().optional(),
    emailId: core.serialization.property("email_id", core.serialization.string().optional()),
    fullName: core.serialization.property("full_name", core.serialization.string().optional()),
    phone: core.serialization.string().optional(),
    status: ListSurveyQuestionAnswersReportingResponseAnswersItemContactStatus.optional(),
});

export declare namespace ListSurveyQuestionAnswersReportingResponseAnswersItemContact {
    export interface Raw {
        avatar_url?: string | null;
        consents_to_one_to_one_messaging?: boolean | null;
        contact_id?: string | null;
        email?: string | null;
        email_id?: string | null;
        full_name?: string | null;
        phone?: string | null;
        status?: ListSurveyQuestionAnswersReportingResponseAnswersItemContactStatus.Raw | null;
    }
}
