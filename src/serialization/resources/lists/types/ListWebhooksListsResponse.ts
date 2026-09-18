//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListWebhooks } from "../../../types/ListWebhooks.js";
import { ListWebhooksListsResponseLinksItem } from "./ListWebhooksListsResponseLinksItem.js";

export const ListWebhooksListsResponse: core.serialization.ObjectSchema<
    serializers.ListWebhooksListsResponse.Raw,
    Mailchimp.ListWebhooksListsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListWebhooksListsResponseLinksItem).optional(),
    ),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
    webhooks: core.serialization.list(ListWebhooks).optional(),
});

export declare namespace ListWebhooksListsResponse {
    export interface Raw {
        _links?: ListWebhooksListsResponseLinksItem.Raw[] | null;
        list_id?: string | null;
        total_items?: number | null;
        webhooks?: ListWebhooks.Raw[] | null;
    }
}
