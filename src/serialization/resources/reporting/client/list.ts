//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListReportingResponseItem } from "../types/ListReportingResponseItem.js";

export const Response: core.serialization.Schema<
    serializers.reporting.list.Response.Raw,
    Mailchimp.ListReportingResponseItem[]
> = core.serialization.list(ListReportingResponseItem);

export declare namespace Response {
    export type Raw = ListReportingResponseItem.Raw[];
}
