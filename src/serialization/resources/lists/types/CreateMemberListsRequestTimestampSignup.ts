//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateMemberListsRequestTimestampSignupOne } from "./CreateMemberListsRequestTimestampSignupOne.js";

export const CreateMemberListsRequestTimestampSignup: core.serialization.Schema<
    serializers.CreateMemberListsRequestTimestampSignup.Raw,
    Mailchimp.CreateMemberListsRequestTimestampSignup
> = core.serialization.undiscriminatedUnion([core.serialization.string(), CreateMemberListsRequestTimestampSignupOne]);

export declare namespace CreateMemberListsRequestTimestampSignup {
    export type Raw = string | CreateMemberListsRequestTimestampSignupOne.Raw;
}
