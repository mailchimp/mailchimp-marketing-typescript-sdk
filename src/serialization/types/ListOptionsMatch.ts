//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ListOptionsMatch: core.serialization.Schema<serializers.ListOptionsMatch.Raw, Mailchimp.ListOptionsMatch> =
    core.serialization.enum_(["any", "all"]);

export declare namespace ListOptionsMatch {
    export type Raw = "any" | "all";
}
