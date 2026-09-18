//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { UpdateSegmentListsRequestOptions } from "../../types/UpdateSegmentListsRequestOptions.js";

export const UpdateSegmentListsRequest: core.serialization.Schema<
    serializers.UpdateSegmentListsRequest.Raw,
    Omit<Mailchimp.UpdateSegmentListsRequest, "listId" | "segmentId">
> = core.serialization.object({
    name: core.serialization.string().optional(),
    options: UpdateSegmentListsRequestOptions.optional(),
    staticSegment: core.serialization.property(
        "static_segment",
        core.serialization.list(core.serialization.string()).optional(),
    ),
});

export declare namespace UpdateSegmentListsRequest {
    export interface Raw {
        name?: string | null;
        options?: UpdateSegmentListsRequestOptions.Raw | null;
        static_segment?: string[] | null;
    }
}
