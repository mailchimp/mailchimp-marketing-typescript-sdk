//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { EcommerceStoresCartsPatchAddress } from "./EcommerceStoresCartsPatchAddress.js";
import { EcommerceStoresCartsPatchTotalSpent } from "./EcommerceStoresCartsPatchTotalSpent.js";

export const EcommerceStoresCartsPatch: core.serialization.ObjectSchema<
    serializers.EcommerceStoresCartsPatch.Raw,
    Mailchimp.EcommerceStoresCartsPatch
> = core.serialization.object({
    id: core.serialization.string().optional(),
    address: EcommerceStoresCartsPatchAddress.optional(),
    company: core.serialization.string().optional(),
    firstName: core.serialization.property("first_name", core.serialization.string().optional()),
    lastName: core.serialization.property("last_name", core.serialization.string().optional()),
    optInStatus: core.serialization.property("opt_in_status", core.serialization.boolean().optional()),
    totalSpent: core.serialization.property("total_spent", EcommerceStoresCartsPatchTotalSpent.optional()),
});

export declare namespace EcommerceStoresCartsPatch {
    export interface Raw {
        id?: string | null;
        address?: EcommerceStoresCartsPatchAddress.Raw | null;
        company?: string | null;
        first_name?: string | null;
        last_name?: string | null;
        opt_in_status?: boolean | null;
        total_spent?: EcommerceStoresCartsPatchTotalSpent.Raw | null;
    }
}
