//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateMemberListsRequestTimestampSignupOne } from "./UpdateMemberListsRequestTimestampSignupOne.js";

export const UpdateMemberListsRequestTimestampSignup: core.serialization.Schema<
    serializers.UpdateMemberListsRequestTimestampSignup.Raw,
    Mailchimp.UpdateMemberListsRequestTimestampSignup
> = core.serialization.undiscriminatedUnion([core.serialization.string(), UpdateMemberListsRequestTimestampSignupOne]);

export declare namespace UpdateMemberListsRequestTimestampSignup {
    export type Raw = string | UpdateMemberListsRequestTimestampSignupOne.Raw;
}
