//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpsertMemberListsRequestTimestampOptOne } from "./UpsertMemberListsRequestTimestampOptOne.js";

export const UpsertMemberListsRequestTimestampOpt: core.serialization.Schema<
    serializers.UpsertMemberListsRequestTimestampOpt.Raw,
    Mailchimp.UpsertMemberListsRequestTimestampOpt
> = core.serialization.undiscriminatedUnion([core.serialization.string(), UpsertMemberListsRequestTimestampOptOne]);

export declare namespace UpsertMemberListsRequestTimestampOpt {
    export type Raw = string | UpsertMemberListsRequestTimestampOptOne.Raw;
}
