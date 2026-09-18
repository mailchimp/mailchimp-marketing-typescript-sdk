//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListAccountExportsResponseExportsItem } from "./ListAccountExportsResponseExportsItem.js";
import { ListAccountExportsResponseLinksItem } from "./ListAccountExportsResponseLinksItem.js";

export const ListAccountExportsResponse: core.serialization.ObjectSchema<
    serializers.ListAccountExportsResponse.Raw,
    Mailchimp.ListAccountExportsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListAccountExportsResponseLinksItem).optional(),
    ),
    exports: core.serialization.list(ListAccountExportsResponseExportsItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListAccountExportsResponse {
    export interface Raw {
        _links?: ListAccountExportsResponseLinksItem.Raw[] | null;
        exports?: ListAccountExportsResponseExportsItem.Raw[] | null;
        total_items?: number | null;
    }
}
