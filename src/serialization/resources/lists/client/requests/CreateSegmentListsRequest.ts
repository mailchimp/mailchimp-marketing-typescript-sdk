//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateSegmentListsRequestOptions } from "../../types/CreateSegmentListsRequestOptions.js";

export const CreateSegmentListsRequest: core.serialization.Schema<
    serializers.CreateSegmentListsRequest.Raw,
    Omit<Mailchimp.CreateSegmentListsRequest, "listId">
> = core.serialization.object({
    name: core.serialization.string(),
    options: CreateSegmentListsRequestOptions.optional(),
    staticSegment: core.serialization.property(
        "static_segment",
        core.serialization.list(core.serialization.string()).optional(),
    ),
});

export declare namespace CreateSegmentListsRequest {
    export interface Raw {
        name: string;
        options?: CreateSegmentListsRequestOptions.Raw | null;
        static_segment?: string[] | null;
    }
}
