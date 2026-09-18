//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateStoreCustomerEcommerceRequestAddress } from "../../types/CreateStoreCustomerEcommerceRequestAddress.js";
import { CreateStoreCustomerEcommerceRequestTotalSpent } from "../../types/CreateStoreCustomerEcommerceRequestTotalSpent.js";

export const CreateStoreCustomerEcommerceRequest: core.serialization.Schema<
    serializers.CreateStoreCustomerEcommerceRequest.Raw,
    Omit<Mailchimp.CreateStoreCustomerEcommerceRequest, "storeId">
> = core.serialization.object({
    address: CreateStoreCustomerEcommerceRequestAddress.optional(),
    company: core.serialization.string().optional(),
    emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
    firstName: core.serialization.property("first_name", core.serialization.string().optional()),
    id: core.serialization.string(),
    lastName: core.serialization.property("last_name", core.serialization.string().optional()),
    optInStatus: core.serialization.property("opt_in_status", core.serialization.boolean()),
    smsPhoneNumber: core.serialization.property("sms_phone_number", core.serialization.string().optional()),
    totalSpent: core.serialization.property("total_spent", CreateStoreCustomerEcommerceRequestTotalSpent.optional()),
});

export declare namespace CreateStoreCustomerEcommerceRequest {
    export interface Raw {
        address?: CreateStoreCustomerEcommerceRequestAddress.Raw | null;
        company?: string | null;
        email_address?: string | null;
        first_name?: string | null;
        id: string;
        last_name?: string | null;
        opt_in_status: boolean;
        sms_phone_number?: string | null;
        total_spent?: CreateStoreCustomerEcommerceRequestTotalSpent.Raw | null;
    }
}
