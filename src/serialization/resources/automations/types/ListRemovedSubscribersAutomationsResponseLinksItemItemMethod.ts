//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListRemovedSubscribersAutomationsResponseLinksItemItemMethod: core.serialization.Schema<
    serializers.ListRemovedSubscribersAutomationsResponseLinksItemItemMethod.Raw,
    Mailchimp.ListRemovedSubscribersAutomationsResponseLinksItemItemMethod
> = core.serialization.enum_(["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"]);

export declare namespace ListRemovedSubscribersAutomationsResponseLinksItemItemMethod {
    export type Raw = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
}
