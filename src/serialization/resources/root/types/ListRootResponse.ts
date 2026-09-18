//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListRootResponseContact } from "./ListRootResponseContact.js";
import { ListRootResponseFirstPayment } from "./ListRootResponseFirstPayment.js";
import { ListRootResponseIndustryStats } from "./ListRootResponseIndustryStats.js";
import { ListRootResponseLinksItem } from "./ListRootResponseLinksItem.js";
import { ListRootResponsePricingPlanType } from "./ListRootResponsePricingPlanType.js";

export const ListRootResponse: core.serialization.ObjectSchema<
    serializers.ListRootResponse.Raw,
    Mailchimp.ListRootResponse
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ListRootResponseLinksItem).optional()),
    accountId: core.serialization.property("account_id", core.serialization.string().optional()),
    accountIndustry: core.serialization.property("account_industry", core.serialization.string().optional()),
    accountName: core.serialization.property("account_name", core.serialization.string().optional()),
    accountTimezone: core.serialization.property("account_timezone", core.serialization.string().optional()),
    avatarUrl: core.serialization.property("avatar_url", core.serialization.string().optional()),
    contact: ListRootResponseContact.optional(),
    email: core.serialization.string().optional(),
    firstName: core.serialization.property("first_name", core.serialization.string().optional()),
    firstPayment: core.serialization.property("first_payment", ListRootResponseFirstPayment.optional()),
    industryStats: core.serialization.property("industry_stats", ListRootResponseIndustryStats.optional()),
    lastLogin: core.serialization.property("last_login", core.serialization.date().optional()),
    lastName: core.serialization.property("last_name", core.serialization.string().optional()),
    loginId: core.serialization.property("login_id", core.serialization.string().optional()),
    memberSince: core.serialization.property("member_since", core.serialization.date().optional()),
    pricingPlanType: core.serialization.property("pricing_plan_type", ListRootResponsePricingPlanType.optional()),
    proEnabled: core.serialization.property("pro_enabled", core.serialization.boolean().optional()),
    role: core.serialization.string().optional(),
    totalSubscribers: core.serialization.property("total_subscribers", core.serialization.number().optional()),
    username: core.serialization.string().optional(),
});

export declare namespace ListRootResponse {
    export interface Raw {
        _links?: ListRootResponseLinksItem.Raw[] | null;
        account_id?: string | null;
        account_industry?: string | null;
        account_name?: string | null;
        account_timezone?: string | null;
        avatar_url?: string | null;
        contact?: ListRootResponseContact.Raw | null;
        email?: string | null;
        first_name?: string | null;
        first_payment?: ListRootResponseFirstPayment.Raw | null;
        industry_stats?: ListRootResponseIndustryStats.Raw | null;
        last_login?: string | null;
        last_name?: string | null;
        login_id?: string | null;
        member_since?: string | null;
        pricing_plan_type?: ListRootResponsePricingPlanType.Raw | null;
        pro_enabled?: boolean | null;
        role?: string | null;
        total_subscribers?: number | null;
        username?: string | null;
    }
}
