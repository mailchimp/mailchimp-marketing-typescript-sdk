//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceStoreAutomationsAbandonedBrowseStatus } from "./ECommerceStoreAutomationsAbandonedBrowseStatus.js";

export const ECommerceStoreAutomationsAbandonedBrowse: core.serialization.ObjectSchema<
    serializers.ECommerceStoreAutomationsAbandonedBrowse.Raw,
    Mailchimp.ECommerceStoreAutomationsAbandonedBrowse
> = core.serialization.object({
    id: core.serialization.string().optional(),
    isSupported: core.serialization.property("is_supported", core.serialization.boolean().optional()),
    status: ECommerceStoreAutomationsAbandonedBrowseStatus.optional(),
});

export declare namespace ECommerceStoreAutomationsAbandonedBrowse {
    export interface Raw {
        id?: string | null;
        is_supported?: boolean | null;
        status?: ECommerceStoreAutomationsAbandonedBrowseStatus.Raw | null;
    }
}
