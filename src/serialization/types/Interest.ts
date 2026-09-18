//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { InterestLinksItem } from "./InterestLinksItem.js";

export const Interest: core.serialization.ObjectSchema<serializers.Interest.Raw, Mailchimp.Interest> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(InterestLinksItem).optional()),
        categoryId: core.serialization.property("category_id", core.serialization.string().optional()),
        displayOrder: core.serialization.property("display_order", core.serialization.number().optional()),
        id: core.serialization.string().optional(),
        listId: core.serialization.property("list_id", core.serialization.string().optional()),
        name: core.serialization.string().optional(),
        subscriberCount: core.serialization.property("subscriber_count", core.serialization.string().optional()),
    });

export declare namespace Interest {
    export interface Raw {
        _links?: InterestLinksItem.Raw[] | null;
        category_id?: string | null;
        display_order?: number | null;
        id?: string | null;
        list_id?: string | null;
        name?: string | null;
        subscriber_count?: string | null;
    }
}
