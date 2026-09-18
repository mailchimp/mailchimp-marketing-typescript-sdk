//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { UpdateMergeFieldListsRequestOptions } from "../../types/UpdateMergeFieldListsRequestOptions.js";

export const UpdateMergeFieldListsRequest: core.serialization.Schema<
    serializers.UpdateMergeFieldListsRequest.Raw,
    Omit<Mailchimp.UpdateMergeFieldListsRequest, "listId" | "mergeId">
> = core.serialization.object({
    defaultValue: core.serialization.property("default_value", core.serialization.string().optional()),
    displayOrder: core.serialization.property("display_order", core.serialization.number().optional()),
    helpText: core.serialization.property("help_text", core.serialization.string().optional()),
    name: core.serialization.string().optional(),
    options: UpdateMergeFieldListsRequestOptions.optional(),
    public: core.serialization.boolean().optional(),
    required: core.serialization.boolean().optional(),
    tag: core.serialization.string().optional(),
});

export declare namespace UpdateMergeFieldListsRequest {
    export interface Raw {
        default_value?: string | null;
        display_order?: number | null;
        help_text?: string | null;
        name?: string | null;
        options?: UpdateMergeFieldListsRequestOptions.Raw | null;
        public?: boolean | null;
        required?: boolean | null;
        tag?: string | null;
    }
}
