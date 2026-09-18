//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ListOptionsMatch } from "./ListOptionsMatch.js";
import { SegmentType } from "./SegmentType.js";

export const ListOptions: core.serialization.ObjectSchema<serializers.ListOptions.Raw, Mailchimp.ListOptions> =
    core.serialization.object({
        conditions: SegmentType.optional(),
        match: ListOptionsMatch.optional(),
    });

export declare namespace ListOptions {
    export interface Raw {
        conditions?: SegmentType.Raw | null;
        match?: ListOptionsMatch.Raw | null;
    }
}
