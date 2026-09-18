//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { UpdateListsRequestCampaignDefaults } from "../../types/UpdateListsRequestCampaignDefaults.js";
import { UpdateListsRequestContact } from "../../types/UpdateListsRequestContact.js";

export const UpdateListsRequest: core.serialization.Schema<
    serializers.UpdateListsRequest.Raw,
    Omit<Mailchimp.UpdateListsRequest, "listId">
> = core.serialization.object({
    campaignDefaults: core.serialization.property("campaign_defaults", UpdateListsRequestCampaignDefaults.optional()),
    contact: UpdateListsRequestContact.optional(),
    doubleOptin: core.serialization.property("double_optin", core.serialization.boolean().optional()),
    emailTypeOption: core.serialization.property("email_type_option", core.serialization.boolean().optional()),
    marketingPermissions: core.serialization.property("marketing_permissions", core.serialization.boolean().optional()),
    name: core.serialization.string().optional(),
    notifyOnSubscribe: core.serialization.property("notify_on_subscribe", core.serialization.string().optional()),
    notifyOnUnsubscribe: core.serialization.property("notify_on_unsubscribe", core.serialization.string().optional()),
    permissionReminder: core.serialization.property("permission_reminder", core.serialization.string().optional()),
    useArchiveBar: core.serialization.property("use_archive_bar", core.serialization.boolean().optional()),
});

export declare namespace UpdateListsRequest {
    export interface Raw {
        campaign_defaults?: UpdateListsRequestCampaignDefaults.Raw | null;
        contact?: UpdateListsRequestContact.Raw | null;
        double_optin?: boolean | null;
        email_type_option?: boolean | null;
        marketing_permissions?: boolean | null;
        name?: string | null;
        notify_on_subscribe?: string | null;
        notify_on_unsubscribe?: string | null;
        permission_reminder?: string | null;
        use_archive_bar?: boolean | null;
    }
}
