//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { LandingPageReportEcommerce } from "./LandingPageReportEcommerce.js";
import { LandingPageReportLinksItem } from "./LandingPageReportLinksItem.js";
import { LandingPageReportSignupTagsItem } from "./LandingPageReportSignupTagsItem.js";
import { LandingPageReportTimeseries } from "./LandingPageReportTimeseries.js";

export const LandingPageReport: core.serialization.ObjectSchema<
    serializers.LandingPageReport.Raw,
    Mailchimp.LandingPageReport
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(LandingPageReportLinksItem).optional()),
    clicks: core.serialization.number().optional(),
    conversionRate: core.serialization.property("conversion_rate", core.serialization.number().optional()),
    ecommerce: LandingPageReportEcommerce.optional(),
    id: core.serialization.string().optional(),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    listName: core.serialization.property("list_name", core.serialization.string().optional()),
    name: core.serialization.string().optional(),
    publishedAt: core.serialization.property("published_at", core.serialization.date().optional()),
    signupTags: core.serialization.property(
        "signup_tags",
        core.serialization.list(LandingPageReportSignupTagsItem).optional(),
    ),
    status: core.serialization.string().optional(),
    subscribes: core.serialization.number().optional(),
    timeseries: LandingPageReportTimeseries.optional(),
    title: core.serialization.string().optional(),
    uniqueVisits: core.serialization.property("unique_visits", core.serialization.number().optional()),
    unpublishedAt: core.serialization.property("unpublished_at", core.serialization.date().optional()),
    url: core.serialization.string().optional(),
    visits: core.serialization.number().optional(),
    webId: core.serialization.property("web_id", core.serialization.number().optional()),
});

export declare namespace LandingPageReport {
    export interface Raw {
        _links?: LandingPageReportLinksItem.Raw[] | null;
        clicks?: number | null;
        conversion_rate?: number | null;
        ecommerce?: LandingPageReportEcommerce.Raw | null;
        id?: string | null;
        list_id?: string | null;
        list_name?: string | null;
        name?: string | null;
        published_at?: string | null;
        signup_tags?: LandingPageReportSignupTagsItem.Raw[] | null;
        status?: string | null;
        subscribes?: number | null;
        timeseries?: LandingPageReportTimeseries.Raw | null;
        title?: string | null;
        unique_visits?: number | null;
        unpublished_at?: string | null;
        url?: string | null;
        visits?: number | null;
        web_id?: number | null;
    }
}
