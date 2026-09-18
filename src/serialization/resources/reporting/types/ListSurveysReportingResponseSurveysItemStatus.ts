//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListSurveysReportingResponseSurveysItemStatus: core.serialization.Schema<
    serializers.ListSurveysReportingResponseSurveysItemStatus.Raw,
    Mailchimp.ListSurveysReportingResponseSurveysItemStatus
> = core.serialization.enum_(["published", "unpublished"]);

export declare namespace ListSurveysReportingResponseSurveysItemStatus {
    export type Raw = "published" | "unpublished";
}
