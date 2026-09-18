//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { OpenActivityMergeFieldsValueAddr1 } from "./OpenActivityMergeFieldsValueAddr1.js";

export const OpenActivityMergeFieldsValue: core.serialization.Schema<
    serializers.OpenActivityMergeFieldsValue.Raw,
    Mailchimp.OpenActivityMergeFieldsValue
> = core.serialization.undiscriminatedUnion([
    OpenActivityMergeFieldsValueAddr1,
    core.serialization.string(),
    core.serialization.number(),
]);

export declare namespace OpenActivityMergeFieldsValue {
    export type Raw = OpenActivityMergeFieldsValueAddr1.Raw | string | number;
}
