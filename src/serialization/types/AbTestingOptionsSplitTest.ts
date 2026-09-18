//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AbTestingOptionsSplitTest: core.serialization.Schema<
    serializers.AbTestingOptionsSplitTest.Raw,
    Mailchimp.AbTestingOptionsSplitTest
> = core.serialization.enum_(["subject", "from_name", "schedule"]);

export declare namespace AbTestingOptionsSplitTest {
    export type Raw = "subject" | "from_name" | "schedule";
}
