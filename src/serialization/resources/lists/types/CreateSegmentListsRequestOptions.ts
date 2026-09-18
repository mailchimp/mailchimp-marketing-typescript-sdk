//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { SegmentType } from "../../../types/SegmentType.js";
import { CreateSegmentListsRequestOptionsMatch } from "./CreateSegmentListsRequestOptionsMatch.js";

export const CreateSegmentListsRequestOptions: core.serialization.ObjectSchema<
    serializers.CreateSegmentListsRequestOptions.Raw,
    Mailchimp.CreateSegmentListsRequestOptions
> = core.serialization.object({
    conditions: SegmentType.optional(),
    match: CreateSegmentListsRequestOptionsMatch.optional(),
});

export declare namespace CreateSegmentListsRequestOptions {
    export interface Raw {
        conditions?: SegmentType.Raw | null;
        match?: CreateSegmentListsRequestOptionsMatch.Raw | null;
    }
}
