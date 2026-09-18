//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListEmailQueueAutomationsResponseQueueItemLinksItemItemMethod: core.serialization.Schema<
    serializers.ListEmailQueueAutomationsResponseQueueItemLinksItemItemMethod.Raw,
    Mailchimp.ListEmailQueueAutomationsResponseQueueItemLinksItemItemMethod
> = core.serialization.enum_(["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"]);

export declare namespace ListEmailQueueAutomationsResponseQueueItemLinksItemItemMethod {
    export type Raw = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
}
