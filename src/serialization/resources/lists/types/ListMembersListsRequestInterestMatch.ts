//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListMembersListsRequestInterestMatch: core.serialization.Schema<
    serializers.ListMembersListsRequestInterestMatch.Raw,
    Mailchimp.ListMembersListsRequestInterestMatch
> = core.serialization.enum_(["any", "all", "none"]);

export declare namespace ListMembersListsRequestInterestMatch {
    export type Raw = "any" | "all" | "none";
}
