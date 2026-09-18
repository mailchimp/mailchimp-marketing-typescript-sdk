//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ListsSegmentsMembersMergeFieldsValueAddr1 } from "./ListsSegmentsMembersMergeFieldsValueAddr1.js";

export const ListsSegmentsMembersMergeFieldsValue: core.serialization.Schema<
    serializers.ListsSegmentsMembersMergeFieldsValue.Raw,
    Mailchimp.ListsSegmentsMembersMergeFieldsValue
> = core.serialization.undiscriminatedUnion([
    ListsSegmentsMembersMergeFieldsValueAddr1,
    core.serialization.string(),
    core.serialization.number(),
]);

export declare namespace ListsSegmentsMembersMergeFieldsValue {
    export type Raw = ListsSegmentsMembersMergeFieldsValueAddr1.Raw | string | number;
}
