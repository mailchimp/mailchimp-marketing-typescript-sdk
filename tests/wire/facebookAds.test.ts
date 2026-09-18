//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("FacebookAdsClient", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            facebook_ads: [
                {
                    canceled_at: "2024-01-15T09:30:00Z",
                    create_time: "2024-01-15T09:30:00Z",
                    has_segment: true,
                    id: "id",
                    name: "name",
                    published_time: "2024-01-15T09:30:00Z",
                    recipients: {
                        segment_opts: {
                            conditions: [{ condition_type: "Aim", value: "any" }],
                            prebuilt_segment_id: "subscribers-female",
                        },
                    },
                    show_report: true,
                    start_time: "2024-01-15T09:30:00Z",
                    status: "save",
                    type: "regular",
                    updated_at: "2024-01-15T09:30:00Z",
                    web_id: 1,
                    email_source_name: "email_source_name",
                    end_time: "2024-01-15T09:30:00Z",
                    needs_attention: true,
                    paused_at: "2024-01-15T09:30:00Z",
                    thumbnail: "thumbnail",
                    was_canceled_by_facebook: true,
                    budget: { currency_code: "USD", duration: 86400, total_amount: 500 },
                    channel: { fb_placement_audience: false, fb_placement_feed: true, ig_placement_feed: false },
                    has_audience: true,
                    has_content: true,
                    is_connected: true,
                    site: { id: 43, name: "My Connected Site", url: "www.example.com" },
                    _links: [{}],
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/facebook-ads")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = {
            links: [
                {
                    href: "href",
                    method: "GET",
                    rel: "rel",
                    schema: "schema",
                    targetSchema: "targetSchema",
                },
            ],
            facebookAds: [
                {
                    canceledAt: new Date("2024-01-15T09:30:00.000Z"),
                    createTime: new Date("2024-01-15T09:30:00.000Z"),
                    hasSegment: true,
                    id: "id",
                    name: "name",
                    publishedTime: new Date("2024-01-15T09:30:00.000Z"),
                    recipients: {
                        segmentOpts: {
                            conditions: [
                                {
                                    conditionType: "Aim",
                                    value: "any",
                                },
                            ],
                            prebuiltSegmentId: "subscribers-female",
                        },
                    },
                    showReport: true,
                    startTime: new Date("2024-01-15T09:30:00.000Z"),
                    status: "save",
                    type: "regular",
                    updatedAt: new Date("2024-01-15T09:30:00.000Z"),
                    webId: 1,
                    emailSourceName: "email_source_name",
                    endTime: new Date("2024-01-15T09:30:00.000Z"),
                    needsAttention: true,
                    pausedAt: new Date("2024-01-15T09:30:00.000Z"),
                    thumbnail: "thumbnail",
                    wasCanceledByFacebook: true,
                    budget: {
                        currencyCode: "USD",
                        duration: 86400,
                        totalAmount: 500,
                    },
                    channel: {
                        fbPlacementAudience: false,
                        fbPlacementFeed: true,
                        igPlacementFeed: false,
                    },
                    hasAudience: true,
                    hasContent: true,
                    isConnected: true,
                    site: {
                        id: 43,
                        name: "My Connected Site",
                        url: "www.example.com",
                    },
                    links: [{}],
                },
            ],
            totalItems: 1,
        };
        const page = await client.facebookAds.list();

        expect(expected.facebookAds).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.facebookAds).toEqual(nextPage.data);
    });

    test("get", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            canceled_at: "2024-01-15T09:30:00Z",
            create_time: "2024-01-15T09:30:00Z",
            has_segment: true,
            id: "id",
            name: "name",
            published_time: "2024-01-15T09:30:00Z",
            recipients: {
                list_id: "list_id",
                list_is_active: true,
                list_name: "list_name",
                recipient_count: 1,
                segment_opts: {
                    conditions: [{ condition_type: "Aim", value: "any" }],
                    match: "any",
                    prebuilt_segment_id: "subscribers-female",
                    saved_segment_id: 1,
                },
                segment_text: "segment_text",
            },
            report_summary: {
                click_rate: 1.1,
                clicks: 1,
                conversion_rate: 1.1,
                ecommerce: { average_order_revenue: 1.1, currency_code: "currency_code", total_revenue: 1.1 },
                engagements: 1,
                impressions: 1.1,
                open_rate: 1.1,
                opens: 1,
                proxy_excluded_open_rate: 1.1,
                proxy_excluded_opens: 1,
                proxy_excluded_unique_opens: 1,
                reach: 1,
                subscriber_clicks: 1,
                subscribes: 1,
                total_sent: 1,
                unique_opens: 1,
                unique_visits: 1,
                visits: 1,
            },
            show_report: true,
            start_time: "2024-01-15T09:30:00Z",
            status: "save",
            type: "regular",
            updated_at: "2024-01-15T09:30:00Z",
            web_id: 1,
            email_source_name: "email_source_name",
            end_time: "2024-01-15T09:30:00Z",
            needs_attention: true,
            paused_at: "2024-01-15T09:30:00Z",
            thumbnail: "thumbnail",
            was_canceled_by_facebook: true,
            audience: {
                email_source: {
                    is_segment: true,
                    list_name: "list_name",
                    name: "name",
                    segment_type: "segment_type",
                    type: "type",
                },
                include_source_in_target: true,
                lookalike_country_code: "lookalike_country_code",
                source_type: "facebook",
                targeting_specs: { gender: 1, interests: [{}], max_age: 1, min_age: 1 },
                type: "Custom Audience",
            },
            budget: { currency_code: "USD", duration: 86400, total_amount: 500 },
            channel: { fb_placement_audience: false, fb_placement_feed: true, ig_placement_feed: false },
            content: {
                attachments: [{}],
                call_to_action: "call_to_action",
                description: "description",
                image_url: "image_url",
                link_url: "link_url",
                message: "message",
                title: "title",
            },
            feedback: { audience: "audience", budget: "budget", compliance: "compliance", content: "content" },
            has_audience: true,
            has_content: true,
            is_connected: true,
            site: { id: 43, name: "My Connected Site", url: "www.example.com" },
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
        };

        server
            .mockEndpoint()
            .get("/3.0/facebook-ads/outreach_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.facebookAds.get({
            outreachId: "outreach_id",
        });
        expect(response).toEqual({
            canceledAt: new Date("2024-01-15T09:30:00.000Z"),
            createTime: new Date("2024-01-15T09:30:00.000Z"),
            hasSegment: true,
            id: "id",
            name: "name",
            publishedTime: new Date("2024-01-15T09:30:00.000Z"),
            recipients: {
                listId: "list_id",
                listIsActive: true,
                listName: "list_name",
                recipientCount: 1,
                segmentOpts: {
                    conditions: [
                        {
                            conditionType: "Aim",
                            value: "any",
                        },
                    ],
                    match: "any",
                    prebuiltSegmentId: "subscribers-female",
                    savedSegmentId: 1,
                },
                segmentText: "segment_text",
            },
            reportSummary: {
                clickRate: 1.1,
                clicks: 1,
                conversionRate: 1.1,
                ecommerce: {
                    averageOrderRevenue: 1.1,
                    currencyCode: "currency_code",
                    totalRevenue: 1.1,
                },
                engagements: 1,
                impressions: 1.1,
                openRate: 1.1,
                opens: 1,
                proxyExcludedOpenRate: 1.1,
                proxyExcludedOpens: 1,
                proxyExcludedUniqueOpens: 1,
                reach: 1,
                subscriberClicks: 1,
                subscribes: 1,
                totalSent: 1,
                uniqueOpens: 1,
                uniqueVisits: 1,
                visits: 1,
            },
            showReport: true,
            startTime: new Date("2024-01-15T09:30:00.000Z"),
            status: "save",
            type: "regular",
            updatedAt: new Date("2024-01-15T09:30:00.000Z"),
            webId: 1,
            emailSourceName: "email_source_name",
            endTime: new Date("2024-01-15T09:30:00.000Z"),
            needsAttention: true,
            pausedAt: new Date("2024-01-15T09:30:00.000Z"),
            thumbnail: "thumbnail",
            wasCanceledByFacebook: true,
            audience: {
                emailSource: {
                    isSegment: true,
                    listName: "list_name",
                    name: "name",
                    segmentType: "segment_type",
                    type: "type",
                },
                includeSourceInTarget: true,
                lookalikeCountryCode: "lookalike_country_code",
                sourceType: "facebook",
                targetingSpecs: {
                    gender: 1,
                    interests: [{}],
                    maxAge: 1,
                    minAge: 1,
                },
                type: "Custom Audience",
            },
            budget: {
                currencyCode: "USD",
                duration: 86400,
                totalAmount: 500,
            },
            channel: {
                fbPlacementAudience: false,
                fbPlacementFeed: true,
                igPlacementFeed: false,
            },
            content: {
                attachments: [{}],
                callToAction: "call_to_action",
                description: "description",
                imageUrl: "image_url",
                linkUrl: "link_url",
                message: "message",
                title: "title",
            },
            feedback: {
                audience: "audience",
                budget: "budget",
                compliance: "compliance",
                content: "content",
            },
            hasAudience: true,
            hasContent: true,
            isConnected: true,
            site: {
                id: 43,
                name: "My Connected Site",
                url: "www.example.com",
            },
            links: [
                {
                    href: "href",
                    method: "GET",
                    rel: "rel",
                    schema: "schema",
                    targetSchema: "targetSchema",
                },
            ],
        });
    });
});
