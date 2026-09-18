//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { SurveySectionRequest } from "../../../../types/SurveySectionRequest.js";

export const UpdateSurveyListsRequest: core.serialization.Schema<
    serializers.UpdateSurveyListsRequest.Raw,
    Omit<Mailchimp.UpdateSurveyListsRequest, "listId" | "surveyId">
> = core.serialization.object({
    title: core.serialization.string().optional(),
    isPipedToInbox: core.serialization.property("is_piped_to_inbox", core.serialization.boolean().optional()),
    sections: core.serialization.list(SurveySectionRequest).optional(),
});

export declare namespace UpdateSurveyListsRequest {
    export interface Raw {
        title?: string | null;
        is_piped_to_inbox?: boolean | null;
        sections?: SurveySectionRequest.Raw[] | null;
    }
}
