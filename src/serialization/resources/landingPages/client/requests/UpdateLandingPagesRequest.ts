//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { UpdateLandingPagesRequestTracking } from "../../types/UpdateLandingPagesRequestTracking.js";

export const UpdateLandingPagesRequest: core.serialization.Schema<
    serializers.UpdateLandingPagesRequest.Raw,
    Omit<Mailchimp.UpdateLandingPagesRequest, "pageId">
> = core.serialization.object({
    description: core.serialization.string().optional(),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    name: core.serialization.string().optional(),
    storeId: core.serialization.property("store_id", core.serialization.string().optional()),
    title: core.serialization.string().optional(),
    tracking: UpdateLandingPagesRequestTracking.optional(),
});

export declare namespace UpdateLandingPagesRequest {
    export interface Raw {
        description?: string | null;
        list_id?: string | null;
        name?: string | null;
        store_id?: string | null;
        title?: string | null;
        tracking?: UpdateLandingPagesRequestTracking.Raw | null;
    }
}
