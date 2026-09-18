//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { OpenActivityLinksItem } from "./OpenActivityLinksItem.js";
import { OpenActivityMergeFieldsValue } from "./OpenActivityMergeFieldsValue.js";
import { OpenActivityOpensItem } from "./OpenActivityOpensItem.js";

export const OpenActivity: core.serialization.ObjectSchema<serializers.OpenActivity.Raw, Mailchimp.OpenActivity> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(OpenActivityLinksItem).optional()),
        campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
        contactStatus: core.serialization.property("contact_status", core.serialization.string().optional()),
        emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
        emailId: core.serialization.property("email_id", core.serialization.string().optional()),
        listId: core.serialization.property("list_id", core.serialization.string().optional()),
        listIsActive: core.serialization.property("list_is_active", core.serialization.boolean().optional()),
        mergeFields: core.serialization.property(
            "merge_fields",
            core.serialization.record(core.serialization.string(), OpenActivityMergeFieldsValue).optional(),
        ),
        opens: core.serialization.list(OpenActivityOpensItem).optional(),
        opensCount: core.serialization.property("opens_count", core.serialization.number().optional()),
        proxyExcludedOpensCount: core.serialization.property(
            "proxy_excluded_opens_count",
            core.serialization.number().optional(),
        ),
        vip: core.serialization.boolean().optional(),
    });

export declare namespace OpenActivity {
    export interface Raw {
        _links?: OpenActivityLinksItem.Raw[] | null;
        campaign_id?: string | null;
        contact_status?: string | null;
        email_address?: string | null;
        email_id?: string | null;
        list_id?: string | null;
        list_is_active?: boolean | null;
        merge_fields?: Record<string, OpenActivityMergeFieldsValue.Raw> | null;
        opens?: OpenActivityOpensItem.Raw[] | null;
        opens_count?: number | null;
        proxy_excluded_opens_count?: number | null;
        vip?: boolean | null;
    }
}
