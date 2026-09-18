//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListEmailQueueAutomationsResponseLinksItemItem } from "./ListEmailQueueAutomationsResponseLinksItemItem.js";
import { ListEmailQueueAutomationsResponseQueueItem } from "./ListEmailQueueAutomationsResponseQueueItem.js";

export const ListEmailQueueAutomationsResponse: core.serialization.ObjectSchema<
    serializers.ListEmailQueueAutomationsResponse.Raw,
    Mailchimp.ListEmailQueueAutomationsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(core.serialization.list(ListEmailQueueAutomationsResponseLinksItemItem)).optional(),
    ),
    emailId: core.serialization.property("email_id", core.serialization.string().optional()),
    queue: core.serialization.list(ListEmailQueueAutomationsResponseQueueItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
    workflowId: core.serialization.property("workflow_id", core.serialization.string().optional()),
});

export declare namespace ListEmailQueueAutomationsResponse {
    export interface Raw {
        _links?: ListEmailQueueAutomationsResponseLinksItemItem.Raw[][] | null;
        email_id?: string | null;
        queue?: ListEmailQueueAutomationsResponseQueueItem.Raw[] | null;
        total_items?: number | null;
        workflow_id?: string | null;
    }
}
