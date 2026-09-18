//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListClientsListsResponseClientsItem: core.serialization.ObjectSchema<
    serializers.ListClientsListsResponseClientsItem.Raw,
    Mailchimp.ListClientsListsResponseClientsItem
> = core.serialization.object({
    client: core.serialization.string().optional(),
    members: core.serialization.number().optional(),
});

export declare namespace ListClientsListsResponseClientsItem {
    export interface Raw {
        client?: string | null;
        members?: number | null;
    }
}
