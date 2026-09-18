//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListAdviceReportsResponseAdviceItemLinksItemMethod: core.serialization.Schema<
    serializers.ListAdviceReportsResponseAdviceItemLinksItemMethod.Raw,
    Mailchimp.ListAdviceReportsResponseAdviceItemLinksItemMethod
> = core.serialization.enum_(["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"]);

export declare namespace ListAdviceReportsResponseAdviceItemLinksItemMethod {
    export type Raw = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
}
