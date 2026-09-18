//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const BatchSubscribeOrUnsubscribeListsRequestMembersItem: core.serialization.Schema<
    serializers.BatchSubscribeOrUnsubscribeListsRequestMembersItem.Raw,
    Mailchimp.BatchSubscribeOrUnsubscribeListsRequestMembersItem
> = core.serialization.undiscriminatedUnion([core.serialization.unknown()]);

export declare namespace BatchSubscribeOrUnsubscribeListsRequestMembersItem {
    export type Raw = unknown;
}
