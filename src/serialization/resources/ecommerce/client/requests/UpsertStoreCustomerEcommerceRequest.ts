//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { UpsertStoreCustomerEcommerceRequestAddress } from "../../types/UpsertStoreCustomerEcommerceRequestAddress.js";
import { UpsertStoreCustomerEcommerceRequestTotalSpent } from "../../types/UpsertStoreCustomerEcommerceRequestTotalSpent.js";

export const UpsertStoreCustomerEcommerceRequest: core.serialization.Schema<
    serializers.UpsertStoreCustomerEcommerceRequest.Raw,
    Omit<Mailchimp.UpsertStoreCustomerEcommerceRequest, "storeId" | "customerId">
> = core.serialization.object({
    address: UpsertStoreCustomerEcommerceRequestAddress.optional(),
    company: core.serialization.string().optional(),
    emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
    firstName: core.serialization.property("first_name", core.serialization.string().optional()),
    id: core.serialization.string().optional(),
    lastName: core.serialization.property("last_name", core.serialization.string().optional()),
    optInStatus: core.serialization.property("opt_in_status", core.serialization.boolean().optional()),
    smsPhoneNumber: core.serialization.property("sms_phone_number", core.serialization.string().optional()),
    totalSpent: core.serialization.property("total_spent", UpsertStoreCustomerEcommerceRequestTotalSpent.optional()),
});

export declare namespace UpsertStoreCustomerEcommerceRequest {
    export interface Raw {
        address?: UpsertStoreCustomerEcommerceRequestAddress.Raw | null;
        company?: string | null;
        email_address?: string | null;
        first_name?: string | null;
        id?: string | null;
        last_name?: string | null;
        opt_in_status?: boolean | null;
        sms_phone_number?: string | null;
        total_spent?: UpsertStoreCustomerEcommerceRequestTotalSpent.Raw | null;
    }
}
