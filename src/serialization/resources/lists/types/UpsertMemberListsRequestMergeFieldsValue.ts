//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpsertMemberListsRequestMergeFieldsValueAddr1 } from "./UpsertMemberListsRequestMergeFieldsValueAddr1.js";

export const UpsertMemberListsRequestMergeFieldsValue: core.serialization.Schema<
    serializers.UpsertMemberListsRequestMergeFieldsValue.Raw,
    Mailchimp.UpsertMemberListsRequestMergeFieldsValue
> = core.serialization.undiscriminatedUnion([
    UpsertMemberListsRequestMergeFieldsValueAddr1,
    core.serialization.string(),
    core.serialization.number(),
]);

export declare namespace UpsertMemberListsRequestMergeFieldsValue {
    export type Raw = UpsertMemberListsRequestMergeFieldsValueAddr1.Raw | string | number;
}
