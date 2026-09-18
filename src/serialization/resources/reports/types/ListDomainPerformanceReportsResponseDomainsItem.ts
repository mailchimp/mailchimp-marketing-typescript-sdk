//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListDomainPerformanceReportsResponseDomainsItem: core.serialization.ObjectSchema<
    serializers.ListDomainPerformanceReportsResponseDomainsItem.Raw,
    Mailchimp.ListDomainPerformanceReportsResponseDomainsItem
> = core.serialization.object({
    bounces: core.serialization.number().optional(),
    bouncesPct: core.serialization.property("bounces_pct", core.serialization.number().optional()),
    clicks: core.serialization.number().optional(),
    clicksPct: core.serialization.property("clicks_pct", core.serialization.number().optional()),
    delivered: core.serialization.number().optional(),
    domain: core.serialization.string().optional(),
    emailsPct: core.serialization.property("emails_pct", core.serialization.number().optional()),
    emailsSent: core.serialization.property("emails_sent", core.serialization.number().optional()),
    opens: core.serialization.number().optional(),
    opensPct: core.serialization.property("opens_pct", core.serialization.number().optional()),
    unsubs: core.serialization.number().optional(),
    unsubsPct: core.serialization.property("unsubs_pct", core.serialization.number().optional()),
});

export declare namespace ListDomainPerformanceReportsResponseDomainsItem {
    export interface Raw {
        bounces?: number | null;
        bounces_pct?: number | null;
        clicks?: number | null;
        clicks_pct?: number | null;
        delivered?: number | null;
        domain?: string | null;
        emails_pct?: number | null;
        emails_sent?: number | null;
        opens?: number | null;
        opens_pct?: number | null;
        unsubs?: number | null;
        unsubs_pct?: number | null;
    }
}
