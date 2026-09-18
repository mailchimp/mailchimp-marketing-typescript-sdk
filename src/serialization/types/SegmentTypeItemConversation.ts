//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemConversationField } from "./SegmentTypeItemConversationField.js";
import { SegmentTypeItemConversationOp } from "./SegmentTypeItemConversationOp.js";

export const SegmentTypeItemConversation: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemConversation.Raw,
    Mailchimp.SegmentTypeItemConversation
> = core.serialization.object({
    field: SegmentTypeItemConversationField,
    op: SegmentTypeItemConversationOp,
    value: core.serialization.string(),
});

export declare namespace SegmentTypeItemConversation {
    export interface Raw {
        field: SegmentTypeItemConversationField.Raw;
        op: SegmentTypeItemConversationOp.Raw;
        value: string;
    }
}
