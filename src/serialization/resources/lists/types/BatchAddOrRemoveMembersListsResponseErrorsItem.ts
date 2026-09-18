//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const BatchAddOrRemoveMembersListsResponseErrorsItem: core.serialization.ObjectSchema<
    serializers.BatchAddOrRemoveMembersListsResponseErrorsItem.Raw,
    Mailchimp.BatchAddOrRemoveMembersListsResponseErrorsItem
> = core.serialization.object({
    emailAddresses: core.serialization.property(
        "email_addresses",
        core.serialization.list(core.serialization.string()).optional(),
    ),
    error: core.serialization.string().optional(),
});

export declare namespace BatchAddOrRemoveMembersListsResponseErrorsItem {
    export interface Raw {
        email_addresses?: string[] | null;
        error?: string | null;
    }
}
