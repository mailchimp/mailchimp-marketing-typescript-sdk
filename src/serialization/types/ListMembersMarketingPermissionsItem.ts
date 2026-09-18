//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ListMembersMarketingPermissionsItem: core.serialization.ObjectSchema<
    serializers.ListMembersMarketingPermissionsItem.Raw,
    Mailchimp.ListMembersMarketingPermissionsItem
> = core.serialization.object({
    enabled: core.serialization.boolean().optional(),
    marketingPermissionId: core.serialization.property(
        "marketing_permission_id",
        core.serialization.string().optional(),
    ),
    text: core.serialization.string().optional(),
});

export declare namespace ListMembersMarketingPermissionsItem {
    export interface Raw {
        enabled?: boolean | null;
        marketing_permission_id?: string | null;
        text?: string | null;
    }
}
