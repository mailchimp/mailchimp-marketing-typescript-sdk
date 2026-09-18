//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpsertMemberListsRequestTimestampSignupOne } from "./UpsertMemberListsRequestTimestampSignupOne.js";

export const UpsertMemberListsRequestTimestampSignup: core.serialization.Schema<
    serializers.UpsertMemberListsRequestTimestampSignup.Raw,
    Mailchimp.UpsertMemberListsRequestTimestampSignup
> = core.serialization.undiscriminatedUnion([core.serialization.string(), UpsertMemberListsRequestTimestampSignupOne]);

export declare namespace UpsertMemberListsRequestTimestampSignup {
    export type Raw = string | UpsertMemberListsRequestTimestampSignupOne.Raw;
}
