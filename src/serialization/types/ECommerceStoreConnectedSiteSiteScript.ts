//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ECommerceStoreConnectedSiteSiteScript: core.serialization.ObjectSchema<
    serializers.ECommerceStoreConnectedSiteSiteScript.Raw,
    Mailchimp.ECommerceStoreConnectedSiteSiteScript
> = core.serialization.object({
    fragment: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
});

export declare namespace ECommerceStoreConnectedSiteSiteScript {
    export interface Raw {
        fragment?: string | null;
        url?: string | null;
    }
}
