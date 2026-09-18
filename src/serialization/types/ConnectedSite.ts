//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ConnectedSiteLinksItem } from "./ConnectedSiteLinksItem.js";
import { ConnectedSiteSiteScript } from "./ConnectedSiteSiteScript.js";

export const ConnectedSite: core.serialization.ObjectSchema<serializers.ConnectedSite.Raw, Mailchimp.ConnectedSite> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(ConnectedSiteLinksItem).optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        domain: core.serialization.string().optional(),
        foreignId: core.serialization.property("foreign_id", core.serialization.string().optional()),
        platform: core.serialization.string().optional(),
        siteScript: core.serialization.property("site_script", ConnectedSiteSiteScript.optional()),
        storeId: core.serialization.property("store_id", core.serialization.string().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
    });

export declare namespace ConnectedSite {
    export interface Raw {
        _links?: ConnectedSiteLinksItem.Raw[] | null;
        created_at?: string | null;
        domain?: string | null;
        foreign_id?: string | null;
        platform?: string | null;
        site_script?: ConnectedSiteSiteScript.Raw | null;
        store_id?: string | null;
        updated_at?: string | null;
    }
}
