//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { BatchSubscribeOrUnsubscribeListsRequestMembersItemTimestampOptOne } from "./BatchSubscribeOrUnsubscribeListsRequestMembersItemTimestampOptOne.js";

export const BatchSubscribeOrUnsubscribeListsRequestMembersItemTimestampOpt: core.serialization.Schema<
    serializers.BatchSubscribeOrUnsubscribeListsRequestMembersItemTimestampOpt.Raw,
    Mailchimp.BatchSubscribeOrUnsubscribeListsRequestMembersItemTimestampOpt
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    BatchSubscribeOrUnsubscribeListsRequestMembersItemTimestampOptOne,
]);

export declare namespace BatchSubscribeOrUnsubscribeListsRequestMembersItemTimestampOpt {
    export type Raw = string | BatchSubscribeOrUnsubscribeListsRequestMembersItemTimestampOptOne.Raw;
}
