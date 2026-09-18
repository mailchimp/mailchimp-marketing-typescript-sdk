//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateAutomationsRequestRecipients: core.serialization.ObjectSchema<
    serializers.CreateAutomationsRequestRecipients.Raw,
    Mailchimp.CreateAutomationsRequestRecipients
> = core.serialization.object({
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    storeId: core.serialization.property("store_id", core.serialization.string().optional()),
});

export declare namespace CreateAutomationsRequestRecipients {
    export interface Raw {
        list_id?: string | null;
        store_id?: string | null;
    }
}
