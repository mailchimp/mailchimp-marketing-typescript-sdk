//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ListMembersMergeFieldsValueAddr1 } from "./ListMembersMergeFieldsValueAddr1.js";

export const ListMembersMergeFieldsValue: core.serialization.Schema<
    serializers.ListMembersMergeFieldsValue.Raw,
    Mailchimp.ListMembersMergeFieldsValue
> = core.serialization.undiscriminatedUnion([
    ListMembersMergeFieldsValueAddr1,
    core.serialization.string(),
    core.serialization.number(),
]);

export declare namespace ListMembersMergeFieldsValue {
    export type Raw = ListMembersMergeFieldsValueAddr1.Raw | string | number;
}
