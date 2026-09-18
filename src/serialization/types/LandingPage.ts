//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { LandingPageLinksItem } from "./LandingPageLinksItem.js";
import { LandingPageStatus } from "./LandingPageStatus.js";
import { LandingPageTracking } from "./LandingPageTracking.js";

export const LandingPage: core.serialization.ObjectSchema<serializers.LandingPage.Raw, Mailchimp.LandingPage> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(LandingPageLinksItem).optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        createdBySource: core.serialization.property("created_by_source", core.serialization.string().optional()),
        description: core.serialization.string().optional(),
        id: core.serialization.string().optional(),
        listId: core.serialization.property("list_id", core.serialization.string().optional()),
        name: core.serialization.string().optional(),
        publishedAt: core.serialization.property("published_at", core.serialization.date().optional()),
        status: LandingPageStatus.optional(),
        storeId: core.serialization.property("store_id", core.serialization.string().optional()),
        templateId: core.serialization.property("template_id", core.serialization.number().optional()),
        title: core.serialization.string().optional(),
        tracking: LandingPageTracking.optional(),
        unpublishedAt: core.serialization.property("unpublished_at", core.serialization.date().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
        url: core.serialization.string().optional(),
        webId: core.serialization.property("web_id", core.serialization.number().optional()),
    });

export declare namespace LandingPage {
    export interface Raw {
        _links?: LandingPageLinksItem.Raw[] | null;
        created_at?: string | null;
        created_by_source?: string | null;
        description?: string | null;
        id?: string | null;
        list_id?: string | null;
        name?: string | null;
        published_at?: string | null;
        status?: LandingPageStatus.Raw | null;
        store_id?: string | null;
        template_id?: number | null;
        title?: string | null;
        tracking?: LandingPageTracking.Raw | null;
        unpublished_at?: string | null;
        updated_at?: string | null;
        url?: string | null;
        web_id?: number | null;
    }
}
