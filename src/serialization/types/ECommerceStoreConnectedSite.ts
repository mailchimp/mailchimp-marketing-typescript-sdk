//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceStoreConnectedSiteSiteScript } from "./ECommerceStoreConnectedSiteSiteScript.js";

export const ECommerceStoreConnectedSite: core.serialization.ObjectSchema<
    serializers.ECommerceStoreConnectedSite.Raw,
    Mailchimp.ECommerceStoreConnectedSite
> = core.serialization.object({
    siteForeignId: core.serialization.property("site_foreign_id", core.serialization.string().optional()),
    siteScript: core.serialization.property("site_script", ECommerceStoreConnectedSiteSiteScript.optional()),
});

export declare namespace ECommerceStoreConnectedSite {
    export interface Raw {
        site_foreign_id?: string | null;
        site_script?: ECommerceStoreConnectedSiteSiteScript.Raw | null;
    }
}
