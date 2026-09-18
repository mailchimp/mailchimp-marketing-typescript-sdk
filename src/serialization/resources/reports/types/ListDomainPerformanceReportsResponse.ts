//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListDomainPerformanceReportsResponseDomainsItem } from "./ListDomainPerformanceReportsResponseDomainsItem.js";
import { ListDomainPerformanceReportsResponseLinksItem } from "./ListDomainPerformanceReportsResponseLinksItem.js";

export const ListDomainPerformanceReportsResponse: core.serialization.ObjectSchema<
    serializers.ListDomainPerformanceReportsResponse.Raw,
    Mailchimp.ListDomainPerformanceReportsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListDomainPerformanceReportsResponseLinksItem).optional(),
    ),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    domains: core.serialization.list(ListDomainPerformanceReportsResponseDomainsItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
    totalSent: core.serialization.property("total_sent", core.serialization.number().optional()),
});

export declare namespace ListDomainPerformanceReportsResponse {
    export interface Raw {
        _links?: ListDomainPerformanceReportsResponseLinksItem.Raw[] | null;
        campaign_id?: string | null;
        domains?: ListDomainPerformanceReportsResponseDomainsItem.Raw[] | null;
        total_items?: number | null;
        total_sent?: number | null;
    }
}
