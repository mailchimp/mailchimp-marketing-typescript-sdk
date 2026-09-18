//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateLandingPagesRequestTracking } from "../../types/CreateLandingPagesRequestTracking.js";
import { CreateLandingPagesRequestType } from "../../types/CreateLandingPagesRequestType.js";

export const CreateLandingPagesRequest: core.serialization.Schema<
    serializers.CreateLandingPagesRequest.Raw,
    Omit<Mailchimp.CreateLandingPagesRequest, "useDefaultList">
> = core.serialization.object({
    description: core.serialization.string().optional(),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    name: core.serialization.string().optional(),
    storeId: core.serialization.property("store_id", core.serialization.string().optional()),
    templateId: core.serialization.property("template_id", core.serialization.number().optional()),
    title: core.serialization.string().optional(),
    tracking: CreateLandingPagesRequestTracking.optional(),
    type: CreateLandingPagesRequestType.optional(),
});

export declare namespace CreateLandingPagesRequest {
    export interface Raw {
        description?: string | null;
        list_id?: string | null;
        name?: string | null;
        store_id?: string | null;
        template_id?: number | null;
        title?: string | null;
        tracking?: CreateLandingPagesRequestTracking.Raw | null;
        type?: CreateLandingPagesRequestType.Raw | null;
    }
}
