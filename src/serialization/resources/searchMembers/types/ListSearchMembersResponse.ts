//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSearchMembersResponseExactMatches } from "./ListSearchMembersResponseExactMatches.js";
import { ListSearchMembersResponseFullSearch } from "./ListSearchMembersResponseFullSearch.js";
import { ListSearchMembersResponseLinksItem } from "./ListSearchMembersResponseLinksItem.js";

export const ListSearchMembersResponse: core.serialization.ObjectSchema<
    serializers.ListSearchMembersResponse.Raw,
    Mailchimp.ListSearchMembersResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListSearchMembersResponseLinksItem).optional(),
    ),
    exactMatches: core.serialization.property("exact_matches", ListSearchMembersResponseExactMatches.optional()),
    fullSearch: core.serialization.property("full_search", ListSearchMembersResponseFullSearch.optional()),
});

export declare namespace ListSearchMembersResponse {
    export interface Raw {
        _links?: ListSearchMembersResponseLinksItem.Raw[] | null;
        exact_matches?: ListSearchMembersResponseExactMatches.Raw | null;
        full_search?: ListSearchMembersResponseFullSearch.Raw | null;
    }
}
