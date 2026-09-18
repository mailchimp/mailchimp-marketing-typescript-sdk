//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ClickDetailReportAbSplitA } from "./ClickDetailReportAbSplitA.js";
import { ClickDetailReportAbSplitB } from "./ClickDetailReportAbSplitB.js";

export const ClickDetailReportAbSplit: core.serialization.ObjectSchema<
    serializers.ClickDetailReportAbSplit.Raw,
    Mailchimp.ClickDetailReportAbSplit
> = core.serialization.object({
    a: ClickDetailReportAbSplitA.optional(),
    b: ClickDetailReportAbSplitB.optional(),
});

export declare namespace ClickDetailReportAbSplit {
    export interface Raw {
        a?: ClickDetailReportAbSplitA.Raw | null;
        b?: ClickDetailReportAbSplitB.Raw | null;
    }
}
