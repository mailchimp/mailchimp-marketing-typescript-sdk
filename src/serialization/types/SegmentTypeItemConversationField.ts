//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemConversationField: core.serialization.Schema<
    serializers.SegmentTypeItemConversationField.Raw,
    Mailchimp.SegmentTypeItemConversationField
> = core.serialization.enum_(["conversation"]);

export declare namespace SegmentTypeItemConversationField {
    export type Raw = "conversation";
}
