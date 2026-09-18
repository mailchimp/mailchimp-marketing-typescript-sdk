//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListStoreProductsEcommerceResponseLinksItemMethod: core.serialization.Schema<
    serializers.ListStoreProductsEcommerceResponseLinksItemMethod.Raw,
    Mailchimp.ListStoreProductsEcommerceResponseLinksItemMethod
> = core.serialization.enum_(["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"]);

export declare namespace ListStoreProductsEcommerceResponseLinksItemMethod {
    export type Raw = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
}
