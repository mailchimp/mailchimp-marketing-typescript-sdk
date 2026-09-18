//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateMemberListsRequestTimestampOptOne } from "./UpdateMemberListsRequestTimestampOptOne.js";

export const UpdateMemberListsRequestTimestampOpt: core.serialization.Schema<
    serializers.UpdateMemberListsRequestTimestampOpt.Raw,
    Mailchimp.UpdateMemberListsRequestTimestampOpt
> = core.serialization.undiscriminatedUnion([core.serialization.string(), UpdateMemberListsRequestTimestampOptOne]);

export declare namespace UpdateMemberListsRequestTimestampOpt {
    export type Raw = string | UpdateMemberListsRequestTimestampOptOne.Raw;
}
