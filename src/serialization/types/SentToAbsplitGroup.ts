//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SentToAbsplitGroup: core.serialization.Schema<
    serializers.SentToAbsplitGroup.Raw,
    Mailchimp.SentToAbsplitGroup
> = core.serialization.enum_(["a", "b", "winner"]);

export declare namespace SentToAbsplitGroup {
    export type Raw = "a" | "b" | "winner";
}
