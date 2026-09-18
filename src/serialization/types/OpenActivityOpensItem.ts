//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const OpenActivityOpensItem: core.serialization.ObjectSchema<
    serializers.OpenActivityOpensItem.Raw,
    Mailchimp.OpenActivityOpensItem
> = core.serialization.object({
    isProxyOpen: core.serialization.property("is_proxy_open", core.serialization.boolean().optional()),
    timestamp: core.serialization.date().optional(),
});

export declare namespace OpenActivityOpensItem {
    export interface Raw {
        is_proxy_open?: boolean | null;
        timestamp?: string | null;
    }
}
