//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListReportsRequestType: core.serialization.Schema<
    serializers.ListReportsRequestType.Raw,
    Mailchimp.ListReportsRequestType
> = core.serialization.enum_(["regular", "plaintext", "absplit", "rss", "variate"]);

export declare namespace ListReportsRequestType {
    export type Raw = "regular" | "plaintext" | "absplit" | "rss" | "variate";
}
