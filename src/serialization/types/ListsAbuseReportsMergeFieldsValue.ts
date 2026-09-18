//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ListsAbuseReportsMergeFieldsValueAddr1 } from "./ListsAbuseReportsMergeFieldsValueAddr1.js";

export const ListsAbuseReportsMergeFieldsValue: core.serialization.Schema<
    serializers.ListsAbuseReportsMergeFieldsValue.Raw,
    Mailchimp.ListsAbuseReportsMergeFieldsValue
> = core.serialization.undiscriminatedUnion([
    ListsAbuseReportsMergeFieldsValueAddr1,
    core.serialization.string(),
    core.serialization.number(),
]);

export declare namespace ListsAbuseReportsMergeFieldsValue {
    export type Raw = ListsAbuseReportsMergeFieldsValueAddr1.Raw | string | number;
}
