//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const CreateListSurveyActionReplicateListsRequest: core.serialization.Schema<
    serializers.CreateListSurveyActionReplicateListsRequest.Raw,
    Omit<Mailchimp.CreateListSurveyActionReplicateListsRequest, "listIdPathParam" | "surveyId">
> = core.serialization.object({
    title: core.serialization.string().optional(),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
});

export declare namespace CreateListSurveyActionReplicateListsRequest {
    export interface Raw {
        title?: string | null;
        list_id?: string | null;
    }
}
