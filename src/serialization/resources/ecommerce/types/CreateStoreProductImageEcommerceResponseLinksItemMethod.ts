//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateStoreProductImageEcommerceResponseLinksItemMethod: core.serialization.Schema<
    serializers.CreateStoreProductImageEcommerceResponseLinksItemMethod.Raw,
    Mailchimp.CreateStoreProductImageEcommerceResponseLinksItemMethod
> = core.serialization.enum_(["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"]);

export declare namespace CreateStoreProductImageEcommerceResponseLinksItemMethod {
    export type Raw = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
}
