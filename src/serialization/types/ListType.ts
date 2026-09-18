//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ListType: core.serialization.Schema<serializers.ListType.Raw, Mailchimp.ListType> =
    core.serialization.enum_(["saved", "static", "fuzzy"]);

export declare namespace ListType {
    export type Raw = "saved" | "static" | "fuzzy";
}
