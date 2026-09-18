//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SubscriberListVisibility: core.serialization.Schema<
    serializers.SubscriberListVisibility.Raw,
    Mailchimp.SubscriberListVisibility
> = core.serialization.enum_(["pub", "prv"]);

export declare namespace SubscriberListVisibility {
    export type Raw = "pub" | "prv";
}
