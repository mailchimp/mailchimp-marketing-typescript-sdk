//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("ReportsClient", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            reports: [
                {
                    _links: [{}],
                    abuse_reports: 1,
                    campaign_title: "campaign_title",
                    ecommerce: { currency_code: "USD" },
                    emails_sent: 1,
                    id: "id",
                    list_id: "list_id",
                    list_is_active: true,
                    list_name: "list_name",
                    preview_text: "preview_text",
                    rss_last_send: "2024-01-15T09:30:00Z",
                    send_time: "2024-01-15T09:30:00Z",
                    subject_line: "subject_line",
                    timeseries: [{}],
                    timewarp: [{}],
                    type: "type",
                    unsubscribed: 1,
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/reports")
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
            reports: [
                {
                    links: [{}],
                    abuseReports: 1,
                    campaignTitle: "campaign_title",
                    ecommerce: {
                        currencyCode: "USD",
                    },
                    emailsSent: 1,
                    id: "id",
                    listId: "list_id",
                    listIsActive: true,
                    listName: "list_name",
                    previewText: "preview_text",
                    rssLastSend: new Date("2024-01-15T09:30:00.000Z"),
                    sendTime: new Date("2024-01-15T09:30:00.000Z"),
                    subjectLine: "subject_line",
                    timeseries: [{}],
                    timewarp: [{}],
                    type: "type",
                    unsubscribed: 1,
                },
            ],
            totalItems: 1,
        };
        const page = await client.reports.list();

        expect(expected.reports).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.reports).toEqual(nextPage.data);
    });

    test("get", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            ab_split: {
                a: {
                    abuse_reports: 1,
                    bounces: 1,
                    forwards: 1,
                    forwards_opens: 1,
                    last_open: "last_open",
                    opens: 1,
                    recipient_clicks: 1,
                    unique_opens: 1,
                    unsubs: 1,
                },
                b: {
                    abuse_reports: 1,
                    bounces: 1,
                    forwards: 1,
                    forwards_opens: 1,
                    last_open: "last_open",
                    opens: 1,
                    recipient_clicks: 1,
                    unique_opens: 1,
                    unsubs: 1,
                },
            },
            abuse_reports: 1,
            bounces: { hard_bounces: 1, soft_bounces: 1, syntax_errors: 1 },
            campaign_title: "campaign_title",
            clicks: {
                click_rate: 1.1,
                clicks_total: 1,
                last_click: "2024-01-15T09:30:00Z",
                unique_clicks: 1,
                unique_subscriber_clicks: 1,
            },
            delivery_status: {
                can_cancel: true,
                emails_canceled: 1,
                emails_sent: 1,
                enabled: true,
                status: "delivering",
            },
            ecommerce: { currency_code: "USD", total_orders: 1, total_revenue: 1.1, total_spent: 1.1 },
            emails_sent: 1,
            facebook_likes: { facebook_likes: 1, recipient_likes: 1, unique_likes: 1 },
            forwards: { forwards_count: 1, forwards_opens: 1 },
            id: "id",
            industry_stats: {
                abuse_rate: 1.1,
                bounce_rate: 1.1,
                click_rate: 1.1,
                open_rate: 1.1,
                type: "type",
                unopen_rate: 1.1,
                unsub_rate: 1.1,
            },
            list_id: "list_id",
            list_is_active: true,
            list_name: "list_name",
            list_stats: {
                click_rate: 1.1,
                open_rate: 1.1,
                proxy_excluded_open_rate: 1.1,
                sub_rate: 1.1,
                unsub_rate: 1.1,
            },
            opens: {
                last_open: "2024-01-15T09:30:00Z",
                open_rate: 1.1,
                opens_total: 1,
                proxy_excluded_open_rate: 1.1,
                proxy_excluded_opens: 1,
                proxy_excluded_unique_opens: 1,
                unique_opens: 1,
            },
            preview_text: "preview_text",
            rss_last_send: "2024-01-15T09:30:00Z",
            send_time: "2024-01-15T09:30:00Z",
            share_report: { share_password: "share_password", share_url: "share_url" },
            subject_line: "subject_line",
            timeseries: [
                {
                    emails_sent: 1,
                    proxy_excluded_unique_opens: 1,
                    recipients_clicks: 1,
                    timestamp: "2024-01-15T09:30:00Z",
                    unique_opens: 1,
                },
            ],
            timewarp: [
                {
                    bounces: 1,
                    clicks: 1,
                    gmt_offset: 1,
                    last_click: "2024-01-15T09:30:00Z",
                    last_open: "2024-01-15T09:30:00Z",
                    opens: 1,
                    unique_clicks: 1,
                    unique_opens: 1,
                },
            ],
            type: "type",
            unsubscribed: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/reports/campaign_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reports.get({
            campaignId: "campaign_id",
        });
        expect(response).toEqual({
            links: [
                {
                    href: "href",
                    method: "GET",
                    rel: "rel",
                    schema: "schema",
                    targetSchema: "targetSchema",
                },
            ],
            abSplit: {
                a: {
                    abuseReports: 1,
                    bounces: 1,
                    forwards: 1,
                    forwardsOpens: 1,
                    lastOpen: "last_open",
                    opens: 1,
                    recipientClicks: 1,
                    uniqueOpens: 1,
                    unsubs: 1,
                },
                b: {
                    abuseReports: 1,
                    bounces: 1,
                    forwards: 1,
                    forwardsOpens: 1,
                    lastOpen: "last_open",
                    opens: 1,
                    recipientClicks: 1,
                    uniqueOpens: 1,
                    unsubs: 1,
                },
            },
            abuseReports: 1,
            bounces: {
                hardBounces: 1,
                softBounces: 1,
                syntaxErrors: 1,
            },
            campaignTitle: "campaign_title",
            clicks: {
                clickRate: 1.1,
                clicksTotal: 1,
                lastClick: new Date("2024-01-15T09:30:00.000Z"),
                uniqueClicks: 1,
                uniqueSubscriberClicks: 1,
            },
            deliveryStatus: {
                canCancel: true,
                emailsCanceled: 1,
                emailsSent: 1,
                enabled: true,
                status: "delivering",
            },
            ecommerce: {
                currencyCode: "USD",
                totalOrders: 1,
                totalRevenue: 1.1,
                totalSpent: 1.1,
            },
            emailsSent: 1,
            facebookLikes: {
                facebookLikes: 1,
                recipientLikes: 1,
                uniqueLikes: 1,
            },
            forwards: {
                forwardsCount: 1,
                forwardsOpens: 1,
            },
            id: "id",
            industryStats: {
                abuseRate: 1.1,
                bounceRate: 1.1,
                clickRate: 1.1,
                openRate: 1.1,
                type: "type",
                unopenRate: 1.1,
                unsubRate: 1.1,
            },
            listId: "list_id",
            listIsActive: true,
            listName: "list_name",
            listStats: {
                clickRate: 1.1,
                openRate: 1.1,
                proxyExcludedOpenRate: 1.1,
                subRate: 1.1,
                unsubRate: 1.1,
            },
            opens: {
                lastOpen: new Date("2024-01-15T09:30:00.000Z"),
                openRate: 1.1,
                opensTotal: 1,
                proxyExcludedOpenRate: 1.1,
                proxyExcludedOpens: 1,
                proxyExcludedUniqueOpens: 1,
                uniqueOpens: 1,
            },
            previewText: "preview_text",
            rssLastSend: new Date("2024-01-15T09:30:00.000Z"),
            sendTime: new Date("2024-01-15T09:30:00.000Z"),
            shareReport: {
                sharePassword: "share_password",
                shareUrl: "share_url",
            },
            subjectLine: "subject_line",
            timeseries: [
                {
                    emailsSent: 1,
                    proxyExcludedUniqueOpens: 1,
                    recipientsClicks: 1,
                    timestamp: new Date("2024-01-15T09:30:00.000Z"),
                    uniqueOpens: 1,
                },
            ],
            timewarp: [
                {
                    bounces: 1,
                    clicks: 1,
                    gmtOffset: 1,
                    lastClick: new Date("2024-01-15T09:30:00.000Z"),
                    lastOpen: new Date("2024-01-15T09:30:00.000Z"),
                    opens: 1,
                    uniqueClicks: 1,
                    uniqueOpens: 1,
                },
            ],
            type: "type",
            unsubscribed: 1,
        });
    });

    test("list-abuse-reports", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            abuse_reports: [
                {
                    _links: [{}],
                    campaign_id: "campaign_id",
                    date: "2024-01-15T09:30:00Z",
                    email_address: "email_address",
                    email_id: "email_id",
                    id: 1,
                    list_id: "list_id",
                    list_is_active: true,
                    merge_fields: { key: { addr1: "addr1", city: "city", state: "state", zip: "zip" } },
                    vip: true,
                },
            ],
            campaign_id: "campaign_id",
            total_items: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/reports/campaign_id/abuse-reports")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reports.listAbuseReports({
            campaignId: "campaign_id",
        });
        expect(response).toEqual({
            links: [
                {
                    href: "href",
                    method: "GET",
                    rel: "rel",
                    schema: "schema",
                    targetSchema: "targetSchema",
                },
            ],
            abuseReports: [
                {
                    links: [{}],
                    campaignId: "campaign_id",
                    date: new Date("2024-01-15T09:30:00.000Z"),
                    emailAddress: "email_address",
                    emailId: "email_id",
                    id: 1,
                    listId: "list_id",
                    listIsActive: true,
                    mergeFields: {
                        key: {
                            addr1: "addr1",
                            city: "city",
                            state: "state",
                            zip: "zip",
                        },
                    },
                    vip: true,
                },
            ],
            campaignId: "campaign_id",
            totalItems: 1,
        });
    });

    test("get-abuse-report", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaign_id: "campaign_id",
            date: "2024-01-15T09:30:00Z",
            email_address: "email_address",
            email_id: "email_id",
            id: 1,
            list_id: "list_id",
            list_is_active: true,
            merge_fields: {
                key: { addr1: "addr1", addr2: "addr2", city: "city", state: "state", zip: "zip", country: "country" },
            },
            vip: true,
        };

        server
            .mockEndpoint()
            .get("/3.0/reports/campaign_id/abuse-reports/report_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reports.getAbuseReport({
            campaignId: "campaign_id",
            reportId: "report_id",
        });
        expect(response).toEqual({
            links: [
                {
                    href: "href",
                    method: "GET",
                    rel: "rel",
                    schema: "schema",
                    targetSchema: "targetSchema",
                },
            ],
            campaignId: "campaign_id",
            date: new Date("2024-01-15T09:30:00.000Z"),
            emailAddress: "email_address",
            emailId: "email_id",
            id: 1,
            listId: "list_id",
            listIsActive: true,
            mergeFields: {
                key: {
                    addr1: "addr1",
                    addr2: "addr2",
                    city: "city",
                    state: "state",
                    zip: "zip",
                    country: "country",
                },
            },
            vip: true,
        });
    });

    test("list-advice", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            advice: [{ _links: [{}], message: "message", type: "negative" }],
            campaign_id: "campaign_id",
            total_items: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/reports/campaign_id/advice")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reports.listAdvice({
            campaignId: "campaign_id",
        });
        expect(response).toEqual({
            links: [
                {
                    href: "href",
                    method: "GET",
                    rel: "rel",
                    schema: "schema",
                    targetSchema: "targetSchema",
                },
            ],
            advice: [
                {
                    links: [{}],
                    message: "message",
                    type: "negative",
                },
            ],
            campaignId: "campaign_id",
            totalItems: 1,
        });
    });

    test("list-click-details", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaign_id: "campaign_id",
            total_items: 1,
            urls_clicked: [
                {
                    _links: [{}],
                    campaign_id: "campaign_id",
                    click_percentage: 1.1,
                    id: "id",
                    last_click: "2024-01-15T09:30:00Z",
                    total_clicks: 1,
                    unique_click_percentage: 1.1,
                    unique_clicks: 1,
                    url: "url",
                },
            ],
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/reports/campaign_id/click-details")
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
            campaignId: "campaign_id",
            totalItems: 1,
            urlsClicked: [
                {
                    links: [{}],
                    campaignId: "campaign_id",
                    clickPercentage: 1.1,
                    id: "id",
                    lastClick: new Date("2024-01-15T09:30:00.000Z"),
                    totalClicks: 1,
                    uniqueClickPercentage: 1.1,
                    uniqueClicks: 1,
                    url: "url",
                },
            ],
        };
        const page = await client.reports.listClickDetails({
            campaignId: "campaign_id",
        });

        expect(expected.urlsClicked).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.urlsClicked).toEqual(nextPage.data);
    });

    test("get-click-detail", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            ab_split: {
                a: { click_percentage_a: 1.1, total_clicks_a: 1, unique_click_percentage_a: 1.1, unique_clicks_a: 1 },
                b: { click_percentage_b: 1.1, total_clicks_b: 1, unique_click_percentage_b: 1.1, unique_clicks_b: 1 },
            },
            campaign_id: "campaign_id",
            click_percentage: 1.1,
            id: "id",
            last_click: "2024-01-15T09:30:00Z",
            total_clicks: 1,
            unique_click_percentage: 1.1,
            unique_clicks: 1,
            url: "url",
        };

        server
            .mockEndpoint()
            .get("/3.0/reports/campaign_id/click-details/link_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reports.getClickDetail({
            campaignId: "campaign_id",
            linkId: "link_id",
        });
        expect(response).toEqual({
            links: [
                {
                    href: "href",
                    method: "GET",
                    rel: "rel",
                    schema: "schema",
                    targetSchema: "targetSchema",
                },
            ],
            abSplit: {
                a: {
                    clickPercentageA: 1.1,
                    totalClicksA: 1,
                    uniqueClickPercentageA: 1.1,
                    uniqueClicksA: 1,
                },
                b: {
                    clickPercentageB: 1.1,
                    totalClicksB: 1,
                    uniqueClickPercentageB: 1.1,
                    uniqueClicksB: 1,
                },
            },
            campaignId: "campaign_id",
            clickPercentage: 1.1,
            id: "id",
            lastClick: new Date("2024-01-15T09:30:00.000Z"),
            totalClicks: 1,
            uniqueClickPercentage: 1.1,
            uniqueClicks: 1,
            url: "url",
        });
    });

    test("list-click-detail-members", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaign_id: "campaign_id",
            members: [
                {
                    _links: [{}],
                    campaign_id: "campaign_id",
                    clicks: 1,
                    contact_status: "contact_status",
                    email_address: "email_address",
                    email_id: "email_id",
                    list_id: "list_id",
                    list_is_active: true,
                    merge_fields: { key: { addr1: "addr1", city: "city", state: "state", zip: "zip" } },
                    url_id: "url_id",
                    vip: true,
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/reports/campaign_id/click-details/link_id/members")
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
            campaignId: "campaign_id",
            members: [
                {
                    links: [{}],
                    campaignId: "campaign_id",
                    clicks: 1,
                    contactStatus: "contact_status",
                    emailAddress: "email_address",
                    emailId: "email_id",
                    listId: "list_id",
                    listIsActive: true,
                    mergeFields: {
                        key: {
                            addr1: "addr1",
                            city: "city",
                            state: "state",
                            zip: "zip",
                        },
                    },
                    urlId: "url_id",
                    vip: true,
                },
            ],
            totalItems: 1,
        };
        const page = await client.reports.listClickDetailMembers({
            campaignId: "campaign_id",
            linkId: "link_id",
        });

        expect(expected.members).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.members).toEqual(nextPage.data);
    });

    test("get-click-detail-member", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaign_id: "campaign_id",
            clicks: 1,
            contact_status: "contact_status",
            email_address: "email_address",
            email_id: "email_id",
            list_id: "list_id",
            list_is_active: true,
            merge_fields: {
                key: { addr1: "addr1", addr2: "addr2", city: "city", state: "state", zip: "zip", country: "country" },
            },
            url_id: "url_id",
            vip: true,
        };

        server
            .mockEndpoint()
            .get("/3.0/reports/campaign_id/click-details/link_id/members/subscriber_hash")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reports.getClickDetailMember({
            campaignId: "campaign_id",
            linkId: "link_id",
            subscriberHash: "subscriber_hash",
        });
        expect(response).toEqual({
            links: [
                {
                    href: "href",
                    method: "GET",
                    rel: "rel",
                    schema: "schema",
                    targetSchema: "targetSchema",
                },
            ],
            campaignId: "campaign_id",
            clicks: 1,
            contactStatus: "contact_status",
            emailAddress: "email_address",
            emailId: "email_id",
            listId: "list_id",
            listIsActive: true,
            mergeFields: {
                key: {
                    addr1: "addr1",
                    addr2: "addr2",
                    city: "city",
                    state: "state",
                    zip: "zip",
                    country: "country",
                },
            },
            urlId: "url_id",
            vip: true,
        });
    });

    test("list-domain-performance", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaign_id: "campaign_id",
            domains: [
                {
                    bounces: 1,
                    bounces_pct: 1.1,
                    clicks: 1,
                    clicks_pct: 1.1,
                    delivered: 1,
                    domain: "domain",
                    emails_pct: 1.1,
                    emails_sent: 1,
                    opens: 1,
                    opens_pct: 1.1,
                    unsubs: 1,
                    unsubs_pct: 1.1,
                },
            ],
            total_items: 1,
            total_sent: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/reports/campaign_id/domain-performance")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reports.listDomainPerformance({
            campaignId: "campaign_id",
        });
        expect(response).toEqual({
            links: [
                {
                    href: "href",
                    method: "GET",
                    rel: "rel",
                    schema: "schema",
                    targetSchema: "targetSchema",
                },
            ],
            campaignId: "campaign_id",
            domains: [
                {
                    bounces: 1,
                    bouncesPct: 1.1,
                    clicks: 1,
                    clicksPct: 1.1,
                    delivered: 1,
                    domain: "domain",
                    emailsPct: 1.1,
                    emailsSent: 1,
                    opens: 1,
                    opensPct: 1.1,
                    unsubs: 1,
                    unsubsPct: 1.1,
                },
            ],
            totalItems: 1,
            totalSent: 1,
        });
    });

    test("list-ecommerce-product-activity", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            products: [
                {
                    currency_code: "currency_code",
                    image_url: "image_url",
                    recommendation_purchased: 1,
                    recommendation_total: 1,
                    sku: "sku",
                    title: "title",
                    total_purchased: 1.1,
                    total_revenue: 1.1,
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/reports/campaign_id/ecommerce-product-activity")
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
            products: [
                {
                    currencyCode: "currency_code",
                    imageUrl: "image_url",
                    recommendationPurchased: 1,
                    recommendationTotal: 1,
                    sku: "sku",
                    title: "title",
                    totalPurchased: 1.1,
                    totalRevenue: 1.1,
                },
            ],
            totalItems: 1,
        };
        const page = await client.reports.listEcommerceProductActivity({
            campaignId: "campaign_id",
        });

        expect(expected.products).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.products).toEqual(nextPage.data);
    });

    test("list-eepurl", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaign_id: "campaign_id",
            clicks: {
                clicks: 1,
                first_click: "2024-01-15T09:30:00Z",
                last_click: "2024-01-15T09:30:00Z",
                locations: [{ region: "NY" }],
            },
            eepurl: "eepurl",
            referrers: [
                {
                    clicks: 1,
                    first_click: "2024-01-15T09:30:00Z",
                    last_click: "2024-01-15T09:30:00Z",
                    referrer: "referrer",
                },
            ],
            total_items: 1,
            twitter: { first_tweet: "first_tweet", last_tweet: "last_tweet", retweets: 1, statuses: [{}], tweets: 1 },
        };

        server
            .mockEndpoint()
            .get("/3.0/reports/campaign_id/eepurl")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reports.listEepurl({
            campaignId: "campaign_id",
        });
        expect(response).toEqual({
            links: [
                {
                    href: "href",
                    method: "GET",
                    rel: "rel",
                    schema: "schema",
                    targetSchema: "targetSchema",
                },
            ],
            campaignId: "campaign_id",
            clicks: {
                clicks: 1,
                firstClick: new Date("2024-01-15T09:30:00.000Z"),
                lastClick: new Date("2024-01-15T09:30:00.000Z"),
                locations: [
                    {
                        region: "NY",
                    },
                ],
            },
            eepurl: "eepurl",
            referrers: [
                {
                    clicks: 1,
                    firstClick: new Date("2024-01-15T09:30:00.000Z"),
                    lastClick: new Date("2024-01-15T09:30:00.000Z"),
                    referrer: "referrer",
                },
            ],
            totalItems: 1,
            twitter: {
                firstTweet: "first_tweet",
                lastTweet: "last_tweet",
                retweets: 1,
                statuses: [{}],
                tweets: 1,
            },
        });
    });

    test("list-email-activity", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaign_id: "campaign_id",
            emails: [
                {
                    _links: [{}],
                    activity: [{}],
                    campaign_id: "campaign_id",
                    email_address: "email_address",
                    email_id: "email_id",
                    list_id: "list_id",
                    list_is_active: true,
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/reports/campaign_id/email-activity")
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
            campaignId: "campaign_id",
            emails: [
                {
                    links: [{}],
                    activity: [{}],
                    campaignId: "campaign_id",
                    emailAddress: "email_address",
                    emailId: "email_id",
                    listId: "list_id",
                    listIsActive: true,
                },
            ],
            totalItems: 1,
        };
        const page = await client.reports.listEmailActivity({
            campaignId: "campaign_id",
        });

        expect(expected.emails).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.emails).toEqual(nextPage.data);
    });

    test("get-email-activity", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            activity: [{ action: "action", ip: "ip", timestamp: "2024-01-15T09:30:00Z", type: "type", url: "url" }],
            campaign_id: "campaign_id",
            email_address: "email_address",
            email_id: "email_id",
            list_id: "list_id",
            list_is_active: true,
        };

        server
            .mockEndpoint()
            .get("/3.0/reports/campaign_id/email-activity/subscriber_hash")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reports.getEmailActivity({
            campaignId: "campaign_id",
            subscriberHash: "subscriber_hash",
        });
        expect(response).toEqual({
            links: [
                {
                    href: "href",
                    method: "GET",
                    rel: "rel",
                    schema: "schema",
                    targetSchema: "targetSchema",
                },
            ],
            activity: [
                {
                    action: "action",
                    ip: "ip",
                    timestamp: new Date("2024-01-15T09:30:00.000Z"),
                    type: "type",
                    url: "url",
                },
            ],
            campaignId: "campaign_id",
            emailAddress: "email_address",
            emailId: "email_id",
            listId: "list_id",
            listIsActive: true,
        });
    });

    test("list-locations", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaign_id: "campaign_id",
            locations: [
                {
                    country_code: "country_code",
                    opens: 1,
                    proxy_excluded_opens: 1,
                    region: "region",
                    region_name: "region_name",
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/reports/campaign_id/locations")
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
            campaignId: "campaign_id",
            locations: [
                {
                    countryCode: "country_code",
                    opens: 1,
                    proxyExcludedOpens: 1,
                    region: "region",
                    regionName: "region_name",
                },
            ],
            totalItems: 1,
        };
        const page = await client.reports.listLocations({
            campaignId: "campaign_id",
        });

        expect(expected.locations).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.locations).toEqual(nextPage.data);
    });

    test("list-open-details", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaign_id: "campaign_id",
            members: [
                {
                    _links: [{}],
                    campaign_id: "campaign_id",
                    contact_status: "contact_status",
                    email_address: "email_address",
                    email_id: "email_id",
                    list_id: "list_id",
                    list_is_active: true,
                    merge_fields: { key: { addr1: "addr1", city: "city", state: "state", zip: "zip" } },
                    opens: [{}],
                    opens_count: 1,
                    proxy_excluded_opens_count: 1,
                    vip: true,
                },
            ],
            total_items: 1,
            total_opens: 1,
            total_proxy_excluded_opens: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/reports/campaign_id/open-details")
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
            campaignId: "campaign_id",
            members: [
                {
                    links: [{}],
                    campaignId: "campaign_id",
                    contactStatus: "contact_status",
                    emailAddress: "email_address",
                    emailId: "email_id",
                    listId: "list_id",
                    listIsActive: true,
                    mergeFields: {
                        key: {
                            addr1: "addr1",
                            city: "city",
                            state: "state",
                            zip: "zip",
                        },
                    },
                    opens: [{}],
                    opensCount: 1,
                    proxyExcludedOpensCount: 1,
                    vip: true,
                },
            ],
            totalItems: 1,
            totalOpens: 1,
            totalProxyExcludedOpens: 1,
        };
        const page = await client.reports.listOpenDetails({
            campaignId: "campaign_id",
            since: "2016-04-12 12:00:00",
        });

        expect(expected.members).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.members).toEqual(nextPage.data);
    });

    test("get-open-detail", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaign_id: "campaign_id",
            contact_status: "contact_status",
            email_address: "email_address",
            email_id: "email_id",
            list_id: "list_id",
            list_is_active: true,
            merge_fields: {
                key: { addr1: "addr1", addr2: "addr2", city: "city", state: "state", zip: "zip", country: "country" },
            },
            opens: [{ is_proxy_open: true, timestamp: "2024-01-15T09:30:00Z" }],
            opens_count: 1,
            proxy_excluded_opens_count: 1,
            vip: true,
        };

        server
            .mockEndpoint()
            .get("/3.0/reports/campaign_id/open-details/subscriber_hash")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reports.getOpenDetail({
            campaignId: "campaign_id",
            subscriberHash: "subscriber_hash",
        });
        expect(response).toEqual({
            links: [
                {
                    href: "href",
                    method: "GET",
                    rel: "rel",
                    schema: "schema",
                    targetSchema: "targetSchema",
                },
            ],
            campaignId: "campaign_id",
            contactStatus: "contact_status",
            emailAddress: "email_address",
            emailId: "email_id",
            listId: "list_id",
            listIsActive: true,
            mergeFields: {
                key: {
                    addr1: "addr1",
                    addr2: "addr2",
                    city: "city",
                    state: "state",
                    zip: "zip",
                    country: "country",
                },
            },
            opens: [
                {
                    isProxyOpen: true,
                    timestamp: new Date("2024-01-15T09:30:00.000Z"),
                },
            ],
            opensCount: 1,
            proxyExcludedOpensCount: 1,
            vip: true,
        });
    });

    test("list-sent-to", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaign_id: "campaign_id",
            sent_to: [
                {
                    _links: [{}],
                    absplit_group: "a",
                    campaign_id: "campaign_id",
                    email_address: "email_address",
                    email_id: "email_id",
                    gmt_offset: 1,
                    last_open: "2024-01-15T09:30:00Z",
                    list_id: "list_id",
                    list_is_active: true,
                    merge_fields: { key: { addr1: "addr1", city: "city", state: "state", zip: "zip" } },
                    open_count: 1,
                    status: "sent",
                    vip: true,
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/reports/campaign_id/sent-to")
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
            campaignId: "campaign_id",
            sentTo: [
                {
                    links: [{}],
                    absplitGroup: "a",
                    campaignId: "campaign_id",
                    emailAddress: "email_address",
                    emailId: "email_id",
                    gmtOffset: 1,
                    lastOpen: new Date("2024-01-15T09:30:00.000Z"),
                    listId: "list_id",
                    listIsActive: true,
                    mergeFields: {
                        key: {
                            addr1: "addr1",
                            city: "city",
                            state: "state",
                            zip: "zip",
                        },
                    },
                    openCount: 1,
                    status: "sent",
                    vip: true,
                },
            ],
            totalItems: 1,
        };
        const page = await client.reports.listSentTo({
            campaignId: "campaign_id",
        });

        expect(expected.sentTo).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.sentTo).toEqual(nextPage.data);
    });

    test("get-sent-to", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            absplit_group: "a",
            campaign_id: "campaign_id",
            email_address: "email_address",
            email_id: "email_id",
            gmt_offset: 1,
            last_open: "2024-01-15T09:30:00Z",
            list_id: "list_id",
            list_is_active: true,
            merge_fields: {
                key: { addr1: "addr1", addr2: "addr2", city: "city", state: "state", zip: "zip", country: "country" },
            },
            open_count: 1,
            status: "sent",
            vip: true,
        };

        server
            .mockEndpoint()
            .get("/3.0/reports/campaign_id/sent-to/subscriber_hash")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reports.getSentTo({
            campaignId: "campaign_id",
            subscriberHash: "subscriber_hash",
        });
        expect(response).toEqual({
            links: [
                {
                    href: "href",
                    method: "GET",
                    rel: "rel",
                    schema: "schema",
                    targetSchema: "targetSchema",
                },
            ],
            absplitGroup: "a",
            campaignId: "campaign_id",
            emailAddress: "email_address",
            emailId: "email_id",
            gmtOffset: 1,
            lastOpen: new Date("2024-01-15T09:30:00.000Z"),
            listId: "list_id",
            listIsActive: true,
            mergeFields: {
                key: {
                    addr1: "addr1",
                    addr2: "addr2",
                    city: "city",
                    state: "state",
                    zip: "zip",
                    country: "country",
                },
            },
            openCount: 1,
            status: "sent",
            vip: true,
        });
    });

    test("list-sub-reports", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaign_id: "campaign_id",
            reports: [
                {
                    _links: [{}],
                    abuse_reports: 1,
                    campaign_title: "campaign_title",
                    ecommerce: { currency_code: "USD" },
                    emails_sent: 1,
                    id: "id",
                    list_id: "list_id",
                    list_is_active: true,
                    list_name: "list_name",
                    preview_text: "preview_text",
                    rss_last_send: "2024-01-15T09:30:00Z",
                    send_time: "2024-01-15T09:30:00Z",
                    subject_line: "subject_line",
                    timeseries: [{}],
                    timewarp: [{}],
                    type: "type",
                    unsubscribed: 1,
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/reports/campaign_id/sub-reports")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reports.listSubReports({
            campaignId: "campaign_id",
        });
        expect(response).toEqual({
            links: [
                {
                    href: "href",
                    method: "GET",
                    rel: "rel",
                    schema: "schema",
                    targetSchema: "targetSchema",
                },
            ],
            campaignId: "campaign_id",
            reports: [
                {
                    links: [{}],
                    abuseReports: 1,
                    campaignTitle: "campaign_title",
                    ecommerce: {
                        currencyCode: "USD",
                    },
                    emailsSent: 1,
                    id: "id",
                    listId: "list_id",
                    listIsActive: true,
                    listName: "list_name",
                    previewText: "preview_text",
                    rssLastSend: new Date("2024-01-15T09:30:00.000Z"),
                    sendTime: new Date("2024-01-15T09:30:00.000Z"),
                    subjectLine: "subject_line",
                    timeseries: [{}],
                    timewarp: [{}],
                    type: "type",
                    unsubscribed: 1,
                },
            ],
            totalItems: 1,
        });
    });

    test("list-unsubscribed", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaign_id: "campaign_id",
            total_items: 1,
            unsubscribes: [
                {
                    _links: [{}],
                    campaign_id: "campaign_id",
                    email_address: "email_address",
                    email_id: "email_id",
                    list_id: "list_id",
                    list_is_active: true,
                    merge_fields: { key: { addr1: "addr1", city: "city", state: "state", zip: "zip" } },
                    reason: "reason",
                    timestamp: "2024-01-15T09:30:00Z",
                    vip: true,
                },
            ],
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/reports/campaign_id/unsubscribed")
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
            campaignId: "campaign_id",
            totalItems: 1,
            unsubscribes: [
                {
                    links: [{}],
                    campaignId: "campaign_id",
                    emailAddress: "email_address",
                    emailId: "email_id",
                    listId: "list_id",
                    listIsActive: true,
                    mergeFields: {
                        key: {
                            addr1: "addr1",
                            city: "city",
                            state: "state",
                            zip: "zip",
                        },
                    },
                    reason: "reason",
                    timestamp: new Date("2024-01-15T09:30:00.000Z"),
                    vip: true,
                },
            ],
        };
        const page = await client.reports.listUnsubscribed({
            campaignId: "campaign_id",
        });

        expect(expected.unsubscribes).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.unsubscribes).toEqual(nextPage.data);
    });

    test("get-unsubscribed", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaign_id: "campaign_id",
            email_address: "email_address",
            email_id: "email_id",
            list_id: "list_id",
            list_is_active: true,
            merge_fields: {
                key: { addr1: "addr1", addr2: "addr2", city: "city", state: "state", zip: "zip", country: "country" },
            },
            reason: "reason",
            timestamp: "2024-01-15T09:30:00Z",
            vip: true,
        };

        server
            .mockEndpoint()
            .get("/3.0/reports/campaign_id/unsubscribed/subscriber_hash")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reports.getUnsubscribed({
            campaignId: "campaign_id",
            subscriberHash: "subscriber_hash",
        });
        expect(response).toEqual({
            links: [
                {
                    href: "href",
                    method: "GET",
                    rel: "rel",
                    schema: "schema",
                    targetSchema: "targetSchema",
                },
            ],
            campaignId: "campaign_id",
            emailAddress: "email_address",
            emailId: "email_id",
            listId: "list_id",
            listIsActive: true,
            mergeFields: {
                key: {
                    addr1: "addr1",
                    addr2: "addr2",
                    city: "city",
                    state: "state",
                    zip: "zip",
                    country: "country",
                },
            },
            reason: "reason",
            timestamp: new Date("2024-01-15T09:30:00.000Z"),
            vip: true,
        });
    });
});
