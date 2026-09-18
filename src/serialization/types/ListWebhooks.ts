//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ListWebhooksEvents } from "./ListWebhooksEvents.js";
import { ListWebhooksLinksItem } from "./ListWebhooksLinksItem.js";
import { ListWebhooksSources } from "./ListWebhooksSources.js";

export const ListWebhooks: core.serialization.ObjectSchema<serializers.ListWebhooks.Raw, Mailchimp.ListWebhooks> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(ListWebhooksLinksItem).optional()),
        events: ListWebhooksEvents.optional(),
        id: core.serialization.string().optional(),
        listId: core.serialization.property("list_id", core.serialization.string().optional()),
        signingEnabled: core.serialization.property("signing_enabled", core.serialization.boolean().optional()),
        sources: ListWebhooksSources.optional(),
        url: core.serialization.string().optional(),
    });

export declare namespace ListWebhooks {
    export interface Raw {
        _links?: ListWebhooksLinksItem.Raw[] | null;
        events?: ListWebhooksEvents.Raw | null;
        id?: string | null;
        list_id?: string | null;
        signing_enabled?: boolean | null;
        sources?: ListWebhooksSources.Raw | null;
        url?: string | null;
    }
}
