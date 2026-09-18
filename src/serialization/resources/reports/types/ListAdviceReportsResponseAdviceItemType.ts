//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListAdviceReportsResponseAdviceItemType: core.serialization.Schema<
    serializers.ListAdviceReportsResponseAdviceItemType.Raw,
    Mailchimp.ListAdviceReportsResponseAdviceItemType
> = core.serialization.enum_(["negative", "positive", "neutral"]);

export declare namespace ListAdviceReportsResponseAdviceItemType {
    export type Raw = "negative" | "positive" | "neutral";
}
