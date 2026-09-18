//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListChimpChatterActivityFeedResponseChimpChatterItem } from "./ListChimpChatterActivityFeedResponseChimpChatterItem.js";
import { ListChimpChatterActivityFeedResponseLinksItem } from "./ListChimpChatterActivityFeedResponseLinksItem.js";

export const ListChimpChatterActivityFeedResponse: core.serialization.ObjectSchema<
    serializers.ListChimpChatterActivityFeedResponse.Raw,
    Mailchimp.ListChimpChatterActivityFeedResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListChimpChatterActivityFeedResponseLinksItem).optional(),
    ),
    chimpChatter: core.serialization.property(
        "chimp_chatter",
        core.serialization.list(ListChimpChatterActivityFeedResponseChimpChatterItem).optional(),
    ),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListChimpChatterActivityFeedResponse {
    export interface Raw {
        _links?: ListChimpChatterActivityFeedResponseLinksItem.Raw[] | null;
        chimp_chatter?: ListChimpChatterActivityFeedResponseChimpChatterItem.Raw[] | null;
        total_items?: number | null;
    }
}
