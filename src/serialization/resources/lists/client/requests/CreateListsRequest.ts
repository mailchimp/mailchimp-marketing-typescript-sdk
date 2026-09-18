//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateListsRequestCampaignDefaults } from "../../types/CreateListsRequestCampaignDefaults.js";
import { CreateListsRequestContact } from "../../types/CreateListsRequestContact.js";

export const CreateListsRequest: core.serialization.Schema<
    serializers.CreateListsRequest.Raw,
    Mailchimp.CreateListsRequest
> = core.serialization.object({
    campaignDefaults: core.serialization.property("campaign_defaults", CreateListsRequestCampaignDefaults),
    contact: CreateListsRequestContact,
    doubleOptin: core.serialization.property("double_optin", core.serialization.boolean().optional()),
    emailTypeOption: core.serialization.property("email_type_option", core.serialization.boolean()),
    marketingPermissions: core.serialization.property("marketing_permissions", core.serialization.boolean().optional()),
    name: core.serialization.string(),
    notifyOnSubscribe: core.serialization.property("notify_on_subscribe", core.serialization.string().optional()),
    notifyOnUnsubscribe: core.serialization.property("notify_on_unsubscribe", core.serialization.string().optional()),
    permissionReminder: core.serialization.property("permission_reminder", core.serialization.string()),
    useArchiveBar: core.serialization.property("use_archive_bar", core.serialization.boolean().optional()),
});

export declare namespace CreateListsRequest {
    export interface Raw {
        campaign_defaults: CreateListsRequestCampaignDefaults.Raw;
        contact: CreateListsRequestContact.Raw;
        double_optin?: boolean | null;
        email_type_option: boolean;
        marketing_permissions?: boolean | null;
        name: string;
        notify_on_subscribe?: string | null;
        notify_on_unsubscribe?: string | null;
        permission_reminder: string;
        use_archive_bar?: boolean | null;
    }
}
