//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { SegmentType } from "../../../types/SegmentType.js";
import { UpdateSegmentListsRequestOptionsMatch } from "./UpdateSegmentListsRequestOptionsMatch.js";

export const UpdateSegmentListsRequestOptions: core.serialization.ObjectSchema<
    serializers.UpdateSegmentListsRequestOptions.Raw,
    Mailchimp.UpdateSegmentListsRequestOptions
> = core.serialization.object({
    conditions: SegmentType.optional(),
    match: UpdateSegmentListsRequestOptionsMatch.optional(),
});

export declare namespace UpdateSegmentListsRequestOptions {
    export interface Raw {
        conditions?: SegmentType.Raw | null;
        match?: UpdateSegmentListsRequestOptionsMatch.Raw | null;
    }
}
