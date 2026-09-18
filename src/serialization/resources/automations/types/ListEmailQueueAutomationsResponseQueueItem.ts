//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListEmailQueueAutomationsResponseQueueItemLinksItemItem } from "./ListEmailQueueAutomationsResponseQueueItemLinksItemItem.js";

export const ListEmailQueueAutomationsResponseQueueItem: core.serialization.ObjectSchema<
    serializers.ListEmailQueueAutomationsResponseQueueItem.Raw,
    Mailchimp.ListEmailQueueAutomationsResponseQueueItem
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization
            .list(core.serialization.list(ListEmailQueueAutomationsResponseQueueItemLinksItemItem))
            .optional(),
    ),
    emailAddress: core.serialization.property("email_address", core.serialization.string()),
    emailId: core.serialization.property("email_id", core.serialization.string().optional()),
    id: core.serialization.string().optional(),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    nextSend: core.serialization.property("next_send", core.serialization.date().optional()),
    workflowId: core.serialization.property("workflow_id", core.serialization.string().optional()),
});

export declare namespace ListEmailQueueAutomationsResponseQueueItem {
    export interface Raw {
        _links?: ListEmailQueueAutomationsResponseQueueItemLinksItemItem.Raw[][] | null;
        email_address: string;
        email_id?: string | null;
        id?: string | null;
        list_id?: string | null;
        next_send?: string | null;
        workflow_id?: string | null;
    }
}
