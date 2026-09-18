//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ListLinksItem } from "./ListLinksItem.js";
import { ListOptions } from "./ListOptions.js";
import { ListType } from "./ListType.js";

export const List: core.serialization.ObjectSchema<serializers.List.Raw, Mailchimp.List> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ListLinksItem).optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    id: core.serialization.number().optional(),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    memberCount: core.serialization.property("member_count", core.serialization.number().optional()),
    name: core.serialization.string().optional(),
    options: ListOptions.optional(),
    type: ListType.optional(),
    updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
});

export declare namespace List {
    export interface Raw {
        _links?: ListLinksItem.Raw[] | null;
        created_at?: string | null;
        id?: number | null;
        list_id?: string | null;
        member_count?: number | null;
        name?: string | null;
        options?: ListOptions.Raw | null;
        type?: ListType.Raw | null;
        updated_at?: string | null;
    }
}
