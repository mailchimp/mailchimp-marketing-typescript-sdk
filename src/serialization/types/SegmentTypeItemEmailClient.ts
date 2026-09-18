//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemEmailClientField } from "./SegmentTypeItemEmailClientField.js";
import { SegmentTypeItemEmailClientOp } from "./SegmentTypeItemEmailClientOp.js";

export const SegmentTypeItemEmailClient: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemEmailClient.Raw,
    Mailchimp.SegmentTypeItemEmailClient
> = core.serialization.object({
    field: SegmentTypeItemEmailClientField,
    op: SegmentTypeItemEmailClientOp,
    value: core.serialization.string(),
});

export declare namespace SegmentTypeItemEmailClient {
    export interface Raw {
        field: SegmentTypeItemEmailClientField.Raw;
        op: SegmentTypeItemEmailClientOp.Raw;
        value: string;
    }
}
