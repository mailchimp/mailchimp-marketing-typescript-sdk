//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListMemberActivityListsRequestActionItem: core.serialization.Schema<
    serializers.ListMemberActivityListsRequestActionItem.Raw,
    Mailchimp.ListMemberActivityListsRequestActionItem
> = core.serialization.enum_(["abuse", "bounce", "click", "open", "sent", "unsub", "ecomm"]);

export declare namespace ListMemberActivityListsRequestActionItem {
    export type Raw = "abuse" | "bounce" | "click" | "open" | "sent" | "unsub" | "ecomm";
}
