//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AbTestingOptionsPickWinner: core.serialization.Schema<
    serializers.AbTestingOptionsPickWinner.Raw,
    Mailchimp.AbTestingOptionsPickWinner
> = core.serialization.enum_(["opens", "clicks", "manual"]);

export declare namespace AbTestingOptionsPickWinner {
    export type Raw = "opens" | "clicks" | "manual";
}
