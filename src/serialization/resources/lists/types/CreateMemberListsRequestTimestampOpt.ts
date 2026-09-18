//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateMemberListsRequestTimestampOptOne } from "./CreateMemberListsRequestTimestampOptOne.js";

export const CreateMemberListsRequestTimestampOpt: core.serialization.Schema<
    serializers.CreateMemberListsRequestTimestampOpt.Raw,
    Mailchimp.CreateMemberListsRequestTimestampOpt
> = core.serialization.undiscriminatedUnion([core.serialization.string(), CreateMemberListsRequestTimestampOptOne]);

export declare namespace CreateMemberListsRequestTimestampOpt {
    export type Raw = string | CreateMemberListsRequestTimestampOptOne.Raw;
}
