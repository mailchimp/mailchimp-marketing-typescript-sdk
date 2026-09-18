//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { EcommerceStoresCartsPostAddress } from "./EcommerceStoresCartsPostAddress.js";

export const EcommerceStoresCartsPost: core.serialization.ObjectSchema<
    serializers.EcommerceStoresCartsPost.Raw,
    Mailchimp.EcommerceStoresCartsPost
> = core.serialization.object({
    address: EcommerceStoresCartsPostAddress.optional(),
    company: core.serialization.string().optional(),
    emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
    firstName: core.serialization.property("first_name", core.serialization.string().optional()),
    id: core.serialization.string(),
    lastName: core.serialization.property("last_name", core.serialization.string().optional()),
    optInStatus: core.serialization.property("opt_in_status", core.serialization.boolean().optional()),
});

export declare namespace EcommerceStoresCartsPost {
    export interface Raw {
        address?: EcommerceStoresCartsPostAddress.Raw | null;
        company?: string | null;
        email_address?: string | null;
        first_name?: string | null;
        id: string;
        last_name?: string | null;
        opt_in_status?: boolean | null;
    }
}
