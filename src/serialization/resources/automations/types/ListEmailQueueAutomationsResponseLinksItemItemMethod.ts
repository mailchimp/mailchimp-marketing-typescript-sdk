//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListEmailQueueAutomationsResponseLinksItemItemMethod: core.serialization.Schema<
    serializers.ListEmailQueueAutomationsResponseLinksItemItemMethod.Raw,
    Mailchimp.ListEmailQueueAutomationsResponseLinksItemItemMethod
> = core.serialization.enum_(["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"]);

export declare namespace ListEmailQueueAutomationsResponseLinksItemItemMethod {
    export type Raw = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
}
