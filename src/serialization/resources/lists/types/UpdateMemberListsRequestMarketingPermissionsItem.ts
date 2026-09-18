//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateMemberListsRequestMarketingPermissionsItem: core.serialization.ObjectSchema<
    serializers.UpdateMemberListsRequestMarketingPermissionsItem.Raw,
    Mailchimp.UpdateMemberListsRequestMarketingPermissionsItem
> = core.serialization.object({
    enabled: core.serialization.boolean().optional(),
    marketingPermissionId: core.serialization.property(
        "marketing_permission_id",
        core.serialization.string().optional(),
    ),
});

export declare namespace UpdateMemberListsRequestMarketingPermissionsItem {
    export interface Raw {
        enabled?: boolean | null;
        marketing_permission_id?: string | null;
    }
}
