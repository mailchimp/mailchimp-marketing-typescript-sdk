//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSurveysReportingResponseSurveysItemStatus } from "./ListSurveysReportingResponseSurveysItemStatus.js";

export const ListSurveysReportingResponseSurveysItem: core.serialization.ObjectSchema<
    serializers.ListSurveysReportingResponseSurveysItem.Raw,
    Mailchimp.ListSurveysReportingResponseSurveysItem
> = core.serialization.object({
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    id: core.serialization.string().optional(),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    listName: core.serialization.property("list_name", core.serialization.string().optional()),
    publishedAt: core.serialization.property("published_at", core.serialization.date().optional()),
    status: ListSurveysReportingResponseSurveysItemStatus.optional(),
    title: core.serialization.string().optional(),
    totalResponses: core.serialization.property("total_responses", core.serialization.number().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
    url: core.serialization.string().optional(),
    webId: core.serialization.property("web_id", core.serialization.number().optional()),
});

export declare namespace ListSurveysReportingResponseSurveysItem {
    export interface Raw {
        created_at?: string | null;
        id?: string | null;
        list_id?: string | null;
        list_name?: string | null;
        published_at?: string | null;
        status?: ListSurveysReportingResponseSurveysItemStatus.Raw | null;
        title?: string | null;
        total_responses?: number | null;
        updated_at?: string | null;
        url?: string | null;
        web_id?: number | null;
    }
}
