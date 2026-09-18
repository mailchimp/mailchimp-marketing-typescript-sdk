//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SubscriberListCampaignDefaults } from "./SubscriberListCampaignDefaults.js";
import { SubscriberListContact } from "./SubscriberListContact.js";
import { SubscriberListLinksItem } from "./SubscriberListLinksItem.js";
import { SubscriberListStats } from "./SubscriberListStats.js";
import { SubscriberListVisibility } from "./SubscriberListVisibility.js";

export const SubscriberList: core.serialization.ObjectSchema<serializers.SubscriberList.Raw, Mailchimp.SubscriberList> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(SubscriberListLinksItem).optional()),
        beamerAddress: core.serialization.property("beamer_address", core.serialization.string().optional()),
        campaignDefaults: core.serialization.property("campaign_defaults", SubscriberListCampaignDefaults.optional()),
        contact: SubscriberListContact.optional(),
        dateCreated: core.serialization.property("date_created", core.serialization.date().optional()),
        doubleOptin: core.serialization.property("double_optin", core.serialization.boolean().optional()),
        emailTypeOption: core.serialization.property("email_type_option", core.serialization.boolean().optional()),
        hasWelcome: core.serialization.property("has_welcome", core.serialization.boolean().optional()),
        id: core.serialization.string().optional(),
        listRating: core.serialization.property("list_rating", core.serialization.number().optional()),
        marketingPermissions: core.serialization.property(
            "marketing_permissions",
            core.serialization.boolean().optional(),
        ),
        modules: core.serialization.list(core.serialization.string()).optional(),
        name: core.serialization.string().optional(),
        notifyOnSubscribe: core.serialization.property("notify_on_subscribe", core.serialization.string().optional()),
        notifyOnUnsubscribe: core.serialization.property(
            "notify_on_unsubscribe",
            core.serialization.string().optional(),
        ),
        permissionReminder: core.serialization.property("permission_reminder", core.serialization.string().optional()),
        stats: SubscriberListStats.optional(),
        subscribeUrlLong: core.serialization.property("subscribe_url_long", core.serialization.string().optional()),
        subscribeUrlShort: core.serialization.property("subscribe_url_short", core.serialization.string().optional()),
        useArchiveBar: core.serialization.property("use_archive_bar", core.serialization.boolean().optional()),
        visibility: SubscriberListVisibility.optional(),
        webId: core.serialization.property("web_id", core.serialization.number().optional()),
    });

export declare namespace SubscriberList {
    export interface Raw {
        _links?: SubscriberListLinksItem.Raw[] | null;
        beamer_address?: string | null;
        campaign_defaults?: SubscriberListCampaignDefaults.Raw | null;
        contact?: SubscriberListContact.Raw | null;
        date_created?: string | null;
        double_optin?: boolean | null;
        email_type_option?: boolean | null;
        has_welcome?: boolean | null;
        id?: string | null;
        list_rating?: number | null;
        marketing_permissions?: boolean | null;
        modules?: string[] | null;
        name?: string | null;
        notify_on_subscribe?: string | null;
        notify_on_unsubscribe?: string | null;
        permission_reminder?: string | null;
        stats?: SubscriberListStats.Raw | null;
        subscribe_url_long?: string | null;
        subscribe_url_short?: string | null;
        use_archive_bar?: boolean | null;
        visibility?: SubscriberListVisibility.Raw | null;
        web_id?: number | null;
    }
}
