//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListInterestCategoryInterestsListsResponseLinksItemMethod: core.serialization.Schema<
    serializers.ListInterestCategoryInterestsListsResponseLinksItemMethod.Raw,
    Mailchimp.ListInterestCategoryInterestsListsResponseLinksItemMethod
> = core.serialization.enum_(["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"]);

export declare namespace ListInterestCategoryInterestsListsResponseLinksItemMethod {
    export type Raw = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
}
