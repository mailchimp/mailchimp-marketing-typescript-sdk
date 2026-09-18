//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const EmailActivityActivityItem: core.serialization.ObjectSchema<
    serializers.EmailActivityActivityItem.Raw,
    Mailchimp.EmailActivityActivityItem
> = core.serialization.object({
    action: core.serialization.string().optional(),
    ip: core.serialization.string().optional(),
    timestamp: core.serialization.date().optional(),
    type: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
});

export declare namespace EmailActivityActivityItem {
    export interface Raw {
        action?: string | null;
        ip?: string | null;
        timestamp?: string | null;
        type?: string | null;
        url?: string | null;
    }
}
