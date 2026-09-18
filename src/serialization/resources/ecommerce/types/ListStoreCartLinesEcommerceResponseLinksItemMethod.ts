//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListStoreCartLinesEcommerceResponseLinksItemMethod: core.serialization.Schema<
    serializers.ListStoreCartLinesEcommerceResponseLinksItemMethod.Raw,
    Mailchimp.ListStoreCartLinesEcommerceResponseLinksItemMethod
> = core.serialization.enum_(["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"]);

export declare namespace ListStoreCartLinesEcommerceResponseLinksItemMethod {
    export type Raw = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
}
