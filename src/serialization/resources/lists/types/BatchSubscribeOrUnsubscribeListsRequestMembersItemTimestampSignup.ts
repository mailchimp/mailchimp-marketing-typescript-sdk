//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { BatchSubscribeOrUnsubscribeListsRequestMembersItemTimestampSignupOne } from "./BatchSubscribeOrUnsubscribeListsRequestMembersItemTimestampSignupOne.js";

export const BatchSubscribeOrUnsubscribeListsRequestMembersItemTimestampSignup: core.serialization.Schema<
    serializers.BatchSubscribeOrUnsubscribeListsRequestMembersItemTimestampSignup.Raw,
    Mailchimp.BatchSubscribeOrUnsubscribeListsRequestMembersItemTimestampSignup
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    BatchSubscribeOrUnsubscribeListsRequestMembersItemTimestampSignupOne,
]);

export declare namespace BatchSubscribeOrUnsubscribeListsRequestMembersItemTimestampSignup {
    export type Raw = string | BatchSubscribeOrUnsubscribeListsRequestMembersItemTimestampSignupOne.Raw;
}
