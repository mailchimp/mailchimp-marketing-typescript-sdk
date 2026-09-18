//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateMergeFieldListsRequestOptions } from "../../types/CreateMergeFieldListsRequestOptions.js";
import { CreateMergeFieldListsRequestType } from "../../types/CreateMergeFieldListsRequestType.js";

export const CreateMergeFieldListsRequest: core.serialization.Schema<
    serializers.CreateMergeFieldListsRequest.Raw,
    Omit<Mailchimp.CreateMergeFieldListsRequest, "listId">
> = core.serialization.object({
    defaultValue: core.serialization.property("default_value", core.serialization.string().optional()),
    displayOrder: core.serialization.property("display_order", core.serialization.number().optional()),
    helpText: core.serialization.property("help_text", core.serialization.string().optional()),
    name: core.serialization.string(),
    options: CreateMergeFieldListsRequestOptions.optional(),
    public: core.serialization.boolean().optional(),
    required: core.serialization.boolean().optional(),
    tag: core.serialization.string().optional(),
    type: CreateMergeFieldListsRequestType,
});

export declare namespace CreateMergeFieldListsRequest {
    export interface Raw {
        default_value?: string | null;
        display_order?: number | null;
        help_text?: string | null;
        name: string;
        options?: CreateMergeFieldListsRequestOptions.Raw | null;
        public?: boolean | null;
        required?: boolean | null;
        tag?: string | null;
        type: CreateMergeFieldListsRequestType.Raw;
    }
}
