//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AbuseComplaintMergeFieldsValueAddr1 } from "./AbuseComplaintMergeFieldsValueAddr1.js";

export const AbuseComplaintMergeFieldsValue: core.serialization.Schema<
    serializers.AbuseComplaintMergeFieldsValue.Raw,
    Mailchimp.AbuseComplaintMergeFieldsValue
> = core.serialization.undiscriminatedUnion([
    AbuseComplaintMergeFieldsValueAddr1,
    core.serialization.string(),
    core.serialization.number(),
]);

export declare namespace AbuseComplaintMergeFieldsValue {
    export type Raw = AbuseComplaintMergeFieldsValueAddr1.Raw | string | number;
}
