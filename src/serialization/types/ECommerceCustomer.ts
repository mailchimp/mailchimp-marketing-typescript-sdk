//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceCustomerAddress } from "./ECommerceCustomerAddress.js";
import { ECommerceCustomerLinksItem } from "./ECommerceCustomerLinksItem.js";
import { ECommerceCustomerTotalSpent } from "./ECommerceCustomerTotalSpent.js";

export const ECommerceCustomer: core.serialization.ObjectSchema<
    serializers.ECommerceCustomer.Raw,
    Mailchimp.ECommerceCustomer
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ECommerceCustomerLinksItem).optional()),
    address: ECommerceCustomerAddress.optional(),
    company: core.serialization.string().optional(),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
    firstName: core.serialization.property("first_name", core.serialization.string().optional()),
    id: core.serialization.string().optional(),
    lastName: core.serialization.property("last_name", core.serialization.string().optional()),
    optInStatus: core.serialization.property("opt_in_status", core.serialization.boolean().optional()),
    ordersCount: core.serialization.property("orders_count", core.serialization.number().optional()),
    smsPhoneNumber: core.serialization.property("sms_phone_number", core.serialization.string().optional()),
    totalSpent: core.serialization.property("total_spent", ECommerceCustomerTotalSpent.optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
});

export declare namespace ECommerceCustomer {
    export interface Raw {
        _links?: ECommerceCustomerLinksItem.Raw[] | null;
        address?: ECommerceCustomerAddress.Raw | null;
        company?: string | null;
        created_at?: string | null;
        email_address?: string | null;
        first_name?: string | null;
        id?: string | null;
        last_name?: string | null;
        opt_in_status?: boolean | null;
        orders_count?: number | null;
        sms_phone_number?: string | null;
        total_spent?: ECommerceCustomerTotalSpent.Raw | null;
        updated_at?: string | null;
    }
}
