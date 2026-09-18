//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { SurveySectionRequest } from "../../../../types/SurveySectionRequest.js";

export const CreateSurveyListsRequest: core.serialization.Schema<
    serializers.CreateSurveyListsRequest.Raw,
    Omit<Mailchimp.CreateSurveyListsRequest, "listId">
> = core.serialization.object({
    title: core.serialization.string().optional(),
    sections: core.serialization.list(SurveySectionRequest).optional(),
});

export declare namespace CreateSurveyListsRequest {
    export interface Raw {
        title?: string | null;
        sections?: SurveySectionRequest.Raw[] | null;
    }
}
