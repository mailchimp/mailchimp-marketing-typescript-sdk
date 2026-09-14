//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("ListsClient", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            constraints: { current_total_instances: 1, max_instances: 1, may_create: true },
            lists: [
                {
                    _links: [{}],
                    beamer_address: "beamer_address",
                    date_created: "2024-01-15T09:30:00Z",
                    double_optin: true,
                    email_type_option: true,
                    has_welcome: false,
                    id: "id",
                    list_rating: 1,
                    marketing_permissions: true,
                    modules: ["modules"],
                    name: "name",
                    notify_on_subscribe: "notify_on_subscribe",
                    notify_on_unsubscribe: "notify_on_unsubscribe",
                    permission_reminder: "permission_reminder",
                    subscribe_url_long: "subscribe_url_long",
                    subscribe_url_short: "subscribe_url_short",
                    use_archive_bar: true,
                    visibility: "pub",
                    web_id: 1,
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/lists")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.lists.list();

        expect(expected.lists).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.lists).toEqual(nextPage.data);
    });

    test("create", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {
            campaign_defaults: {
                from_email: "from_email",
                from_name: "from_name",
                language: "language",
                subject: "subject",
            },
            contact: { address1: "address1", city: "city", company: "company", country: "country" },
            email_type_option: true,
            name: "name",
            permission_reminder: "permission_reminder",
        };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            beamer_address: "beamer_address",
            campaign_defaults: {
                from_email: "from_email",
                from_name: "from_name",
                language: "language",
                subject: "subject",
            },
            contact: {
                address1: "address1",
                address2: "address2",
                city: "city",
                company: "company",
                country: "country",
                phone: "phone",
                state: "state",
                zip: "zip",
            },
            date_created: "2024-01-15T09:30:00Z",
            double_optin: true,
            email_type_option: true,
            has_welcome: false,
            id: "id",
            list_rating: 1,
            marketing_permissions: true,
            modules: ["modules"],
            name: "name",
            notify_on_subscribe: "notify_on_subscribe",
            notify_on_unsubscribe: "notify_on_unsubscribe",
            permission_reminder: "permission_reminder",
            stats: {
                avg_sub_rate: 1.1,
                avg_unsub_rate: 1.1,
                campaign_count: 1,
                campaign_last_sent: "2024-01-15T09:30:00Z",
                cleaned_count: 1,
                cleaned_count_since_send: 1,
                click_rate: 1.1,
                last_sub_date: "2024-01-15T09:30:00Z",
                last_unsub_date: "2024-01-15T09:30:00Z",
                member_count: 1,
                member_count_since_send: 1,
                merge_field_count: 1,
                open_rate: 1.1,
                target_sub_rate: 1.1,
                total_contacts: 1,
                unsubscribe_count: 1,
                unsubscribe_count_since_send: 1,
            },
            subscribe_url_long: "subscribe_url_long",
            subscribe_url_short: "subscribe_url_short",
            use_archive_bar: true,
            visibility: "pub",
            web_id: 1,
        };

        server
            .mockEndpoint()
            .post("/3.0/lists")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.create({
            campaign_defaults: {
                from_email: "from_email",
                from_name: "from_name",
                language: "language",
                subject: "subject",
            },
            contact: {
                address1: "address1",
                city: "city",
                company: "company",
                country: "country",
            },
            email_type_option: true,
            name: "name",
            permission_reminder: "permission_reminder",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("get", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            beamer_address: "beamer_address",
            campaign_defaults: {
                from_email: "from_email",
                from_name: "from_name",
                language: "language",
                subject: "subject",
            },
            contact: {
                address1: "address1",
                address2: "address2",
                city: "city",
                company: "company",
                country: "country",
                phone: "phone",
                state: "state",
                zip: "zip",
            },
            date_created: "2024-01-15T09:30:00Z",
            double_optin: true,
            email_type_option: true,
            has_welcome: false,
            id: "id",
            list_rating: 1,
            marketing_permissions: true,
            modules: ["modules"],
            name: "name",
            notify_on_subscribe: "notify_on_subscribe",
            notify_on_unsubscribe: "notify_on_unsubscribe",
            permission_reminder: "permission_reminder",
            stats: {
                avg_sub_rate: 1.1,
                avg_unsub_rate: 1.1,
                campaign_count: 1,
                campaign_last_sent: "2024-01-15T09:30:00Z",
                cleaned_count: 1,
                cleaned_count_since_send: 1,
                click_rate: 1.1,
                last_sub_date: "2024-01-15T09:30:00Z",
                last_unsub_date: "2024-01-15T09:30:00Z",
                member_count: 1,
                member_count_since_send: 1,
                merge_field_count: 1,
                open_rate: 1.1,
                target_sub_rate: 1.1,
                total_contacts: 1,
                unsubscribe_count: 1,
                unsubscribe_count_since_send: 1,
            },
            subscribe_url_long: "subscribe_url_long",
            subscribe_url_short: "subscribe_url_short",
            use_archive_bar: true,
            visibility: "pub",
            web_id: 1,
        };

        server.mockEndpoint().get("/3.0/lists/list_id").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.lists.get({
            list_id: "list_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("batch-subscribe-or-unsubscribe", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { members: [] };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            error_count: 42,
            errors: [
                {
                    email_address: "email_address",
                    error: "error",
                    error_code: "ERROR_CONTACT_EXISTS",
                    field: "field",
                    field_message: "field_message",
                },
            ],
            new_members: [
                {
                    _links: [{}],
                    contact_id: "contact_id",
                    email_address: "email_address",
                    email_client: "email_client",
                    email_type: "email_type",
                    id: "id",
                    interests: { key: true },
                    ip_opt: "ip_opt",
                    ip_signup: "ip_signup",
                    language: "language",
                    last_changed: "2024-01-15T09:30:00Z",
                    list_id: "list_id",
                    member_rating: 1,
                    merge_fields: { key: "value" },
                    status: "subscribed",
                    tags: [{}],
                    tags_count: 1,
                    timestamp_opt: "2024-01-15T09:30:00Z",
                    timestamp_signup: "2024-01-15T09:30:00Z",
                    unique_email_id: "unique_email_id",
                    vip: true,
                },
            ],
            total_created: 42,
            total_updated: 42,
            updated_members: [
                {
                    _links: [{}],
                    contact_id: "contact_id",
                    email_address: "email_address",
                    email_client: "email_client",
                    email_type: "email_type",
                    id: "id",
                    interests: { key: true },
                    ip_opt: "ip_opt",
                    ip_signup: "ip_signup",
                    language: "language",
                    last_changed: "2024-01-15T09:30:00Z",
                    list_id: "list_id",
                    member_rating: 1,
                    merge_fields: { key: "value" },
                    status: "subscribed",
                    tags: [{}],
                    tags_count: 1,
                    timestamp_opt: "2024-01-15T09:30:00Z",
                    timestamp_signup: "2024-01-15T09:30:00Z",
                    unique_email_id: "unique_email_id",
                    vip: true,
                },
            ],
        };

        server
            .mockEndpoint()
            .post("/3.0/lists/list_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.batchSubscribeOrUnsubscribe({
            list_id: "list_id",
            members: [],
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("delete", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/3.0/lists/list_id").respondWith().statusCode(200).build();

        const response = await client.lists.delete({
            list_id: "list_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            beamer_address: "beamer_address",
            campaign_defaults: {
                from_email: "from_email",
                from_name: "from_name",
                language: "language",
                subject: "subject",
            },
            contact: {
                address1: "address1",
                address2: "address2",
                city: "city",
                company: "company",
                country: "country",
                phone: "phone",
                state: "state",
                zip: "zip",
            },
            date_created: "2024-01-15T09:30:00Z",
            double_optin: true,
            email_type_option: true,
            has_welcome: false,
            id: "id",
            list_rating: 1,
            marketing_permissions: true,
            modules: ["modules"],
            name: "name",
            notify_on_subscribe: "notify_on_subscribe",
            notify_on_unsubscribe: "notify_on_unsubscribe",
            permission_reminder: "permission_reminder",
            stats: {
                avg_sub_rate: 1.1,
                avg_unsub_rate: 1.1,
                campaign_count: 1,
                campaign_last_sent: "2024-01-15T09:30:00Z",
                cleaned_count: 1,
                cleaned_count_since_send: 1,
                click_rate: 1.1,
                last_sub_date: "2024-01-15T09:30:00Z",
                last_unsub_date: "2024-01-15T09:30:00Z",
                member_count: 1,
                member_count_since_send: 1,
                merge_field_count: 1,
                open_rate: 1.1,
                target_sub_rate: 1.1,
                total_contacts: 1,
                unsubscribe_count: 1,
                unsubscribe_count_since_send: 1,
            },
            subscribe_url_long: "subscribe_url_long",
            subscribe_url_short: "subscribe_url_short",
            use_archive_bar: true,
            visibility: "pub",
            web_id: 1,
        };

        server
            .mockEndpoint()
            .patch("/3.0/lists/list_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.update({
            list_id: "list_id",
        });
        expect(response).toEqual(rawResponseBody);
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
                    date: "date",
                    email_address: "email_address",
                    email_id: "email_id",
                    id: 1,
                    list_id: "list_id",
                    merge_fields: { key: { addr1: "addr1", city: "city", state: "state", zip: "zip" } },
                    vip: true,
                },
            ],
            list_id: "list_id",
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/lists/list_id/abuse-reports")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.lists.listAbuseReports({
            list_id: "list_id",
        });

        expect(expected.abuse_reports).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.abuse_reports).toEqual(nextPage.data);
    });

    test("get-abuse-report", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaign_id: "campaign_id",
            date: "date",
            email_address: "email_address",
            email_id: "email_id",
            id: 1,
            list_id: "list_id",
            merge_fields: {
                key: { addr1: "addr1", addr2: "addr2", city: "city", state: "state", zip: "zip", country: "country" },
            },
            vip: true,
        };

        server
            .mockEndpoint()
            .get("/3.0/lists/list_id/abuse-reports/report_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.getAbuseReport({
            list_id: "list_id",
            report_id: "report_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-activity", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            activity: [
                {
                    _links: [{}],
                    day: "day",
                    emails_sent: 1,
                    hard_bounce: 1,
                    other_adds: 1,
                    other_removes: 1,
                    recipient_clicks: 1,
                    soft_bounce: 1,
                    subs: 1,
                    unique_opens: 1,
                    unsubs: 1,
                },
            ],
            list_id: "list_id",
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/lists/list_id/activity")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.lists.listActivity({
            list_id: "list_id",
        });

        expect(expected.activity).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.activity).toEqual(nextPage.data);
    });

    test("list-clients", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            clients: [{ client: "client", members: 1 }],
            list_id: "list_id",
            total_items: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/lists/list_id/clients")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.listClients({
            list_id: "list_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-growth-history", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            history: [
                {
                    _links: [{}],
                    cleaned: 1,
                    deleted: 1,
                    existing: 1,
                    imports: 1,
                    list_id: "list_id",
                    month: "month",
                    optins: 1,
                    pending: 1,
                    reconfirm: 1,
                    subscribed: 1,
                    transactional: 1,
                    unsubscribed: 1,
                },
            ],
            list_id: "list_id",
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/lists/list_id/growth-history")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.lists.listGrowthHistory({
            list_id: "list_id",
        });

        expect(expected.history).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.history).toEqual(nextPage.data);
    });

    test("get-growth-history", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            cleaned: 1,
            deleted: 1,
            existing: 1,
            imports: 1,
            list_id: "list_id",
            month: "month",
            optins: 1,
            pending: 1,
            reconfirm: 1,
            subscribed: 1,
            transactional: 1,
            unsubscribed: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/lists/list_id/growth-history/month")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.getGrowthHistory({
            list_id: "list_id",
            month: "month",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-interest-categories", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            categories: [
                { _links: [{}], display_order: 1, id: "id", list_id: "list_id", title: "title", type: "checkboxes" },
            ],
            list_id: "list_id",
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/lists/list_id/interest-categories")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.lists.listInterestCategories({
            list_id: "list_id",
        });

        expect(expected.categories).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.categories).toEqual(nextPage.data);
    });

    test("create-interest-category", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { title: "title", type: "checkboxes" };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            display_order: 1,
            id: "id",
            list_id: "list_id",
            title: "title",
            type: "checkboxes",
        };

        server
            .mockEndpoint()
            .post("/3.0/lists/list_id/interest-categories")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.createInterestCategory({
            list_id: "list_id",
            title: "title",
            type: "checkboxes",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("get-interest-category", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            display_order: 1,
            id: "id",
            list_id: "list_id",
            title: "title",
            type: "checkboxes",
        };

        server
            .mockEndpoint()
            .get("/3.0/lists/list_id/interest-categories/interest_category_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.getInterestCategory({
            list_id: "list_id",
            interest_category_id: "interest_category_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("delete-interest-category", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .delete("/3.0/lists/list_id/interest-categories/interest_category_id")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.lists.deleteInterestCategory({
            list_id: "list_id",
            interest_category_id: "interest_category_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-interest-category", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            display_order: 1,
            id: "id",
            list_id: "list_id",
            title: "title",
            type: "checkboxes",
        };

        server
            .mockEndpoint()
            .patch("/3.0/lists/list_id/interest-categories/interest_category_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.updateInterestCategory({
            list_id: "list_id",
            interest_category_id: "interest_category_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-interest-category-interests", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            category_id: "category_id",
            interests: [
                {
                    _links: [{}],
                    category_id: "category_id",
                    display_order: 1,
                    id: "id",
                    list_id: "list_id",
                    name: "name",
                    subscriber_count: "subscriber_count",
                },
            ],
            list_id: "list_id",
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/lists/list_id/interest-categories/interest_category_id/interests")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.lists.listInterestCategoryInterests({
            list_id: "list_id",
            interest_category_id: "interest_category_id",
        });

        expect(expected.interests).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.interests).toEqual(nextPage.data);
    });

    test("create-interest-category-interest", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "name" };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            category_id: "category_id",
            display_order: 1,
            id: "id",
            list_id: "list_id",
            name: "name",
            subscriber_count: "subscriber_count",
        };

        server
            .mockEndpoint()
            .post("/3.0/lists/list_id/interest-categories/interest_category_id/interests")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.createInterestCategoryInterest({
            list_id: "list_id",
            interest_category_id: "interest_category_id",
            name: "name",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("get-interest-category-interest", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            category_id: "category_id",
            display_order: 1,
            id: "id",
            list_id: "list_id",
            name: "name",
            subscriber_count: "subscriber_count",
        };

        server
            .mockEndpoint()
            .get("/3.0/lists/list_id/interest-categories/interest_category_id/interests/interest_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.getInterestCategoryInterest({
            list_id: "list_id",
            interest_category_id: "interest_category_id",
            interest_id: "interest_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("delete-interest-category-interest", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .delete("/3.0/lists/list_id/interest-categories/interest_category_id/interests/interest_id")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.lists.deleteInterestCategoryInterest({
            list_id: "list_id",
            interest_category_id: "interest_category_id",
            interest_id: "interest_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-interest-category-interest", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            category_id: "category_id",
            display_order: 1,
            id: "id",
            list_id: "list_id",
            name: "name",
            subscriber_count: "subscriber_count",
        };

        server
            .mockEndpoint()
            .patch("/3.0/lists/list_id/interest-categories/interest_category_id/interests/interest_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.updateInterestCategoryInterest({
            list_id: "list_id",
            interest_category_id: "interest_category_id",
            interest_id: "interest_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-locations", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            list_id: "list_id",
            locations: [{ cc: "cc", country: "country", percent: 1.1, total: 1 }],
            total_items: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/lists/list_id/locations")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.listLocations({
            list_id: "list_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-members", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            list_id: "list_id",
            members: [
                {
                    _links: [{}],
                    consents_to_one_to_one_messaging: true,
                    contact_id: "contact_id",
                    email_address: "email_address",
                    email_client: "email_client",
                    email_type: { key: "value" },
                    id: "id",
                    interests: { key: true },
                    ip_opt: "ip_opt",
                    ip_signup: "ip_signup",
                    language: "language",
                    last_changed: "2024-01-15T09:30:00Z",
                    list_id: "list_id",
                    marketing_permissions: [{}],
                    member_rating: 1,
                    merge_fields: { key: { addr1: "addr1", city: "city", state: "state", zip: "zip" } },
                    sms_phone_number: "sms_phone_number",
                    sms_subscription_last_updated: "sms_subscription_last_updated",
                    sms_subscription_status: "subscribed",
                    source: "source",
                    stats: { ecommerce_data: { currency_code: "USD" } },
                    status: "subscribed",
                    tags: [{}],
                    tags_count: 1,
                    timestamp_opt: "2024-01-15T09:30:00Z",
                    timestamp_signup: "2024-01-15T09:30:00Z",
                    unique_email_id: "unique_email_id",
                    unsubscribe_reason: "unsubscribe_reason",
                    vip: true,
                    web_id: 1,
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/lists/list_id/members")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.lists.listMembers({
            list_id: "list_id",
        });

        expect(expected.members).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.members).toEqual(nextPage.data);
    });

    test("create-member", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { email_address: "email_address", status: "subscribed" };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            consents_to_one_to_one_messaging: true,
            contact_id: "contact_id",
            email_address: "email_address",
            email_client: "email_client",
            email_type: { key: "value" },
            id: "id",
            interests: { key: true },
            ip_opt: "ip_opt",
            ip_signup: "ip_signup",
            language: "language",
            last_changed: "2024-01-15T09:30:00Z",
            last_note: { created_at: "2024-01-15T09:30:00Z", created_by: "created_by", note: "note", note_id: 1 },
            list_id: "list_id",
            location: {
                country_code: "country_code",
                dstoff: 1,
                gmtoff: 1,
                latitude: 1.1,
                longitude: 1.1,
                region: "region",
                timezone: "timezone",
            },
            marketing_permissions: [
                { enabled: true, marketing_permission_id: "marketing_permission_id", text: "text" },
            ],
            member_rating: 1,
            merge_fields: {
                key: { addr1: "addr1", addr2: "addr2", city: "city", state: "state", zip: "zip", country: "country" },
            },
            sms_phone_number: "sms_phone_number",
            sms_subscription_last_updated: "sms_subscription_last_updated",
            sms_subscription_status: "subscribed",
            source: "source",
            stats: {
                avg_click_rate: 1.1,
                avg_open_rate: 1.1,
                ecommerce_data: { currency_code: "USD", number_of_orders: 1.1, total_revenue: 1.1 },
            },
            status: "subscribed",
            tags: [{ id: 1, name: "name" }],
            tags_count: 1,
            timestamp_opt: "2024-01-15T09:30:00Z",
            timestamp_signup: "2024-01-15T09:30:00Z",
            unique_email_id: "unique_email_id",
            unsubscribe_reason: "unsubscribe_reason",
            vip: true,
            web_id: 1,
        };

        server
            .mockEndpoint()
            .post("/3.0/lists/list_id/members")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.createMember({
            list_id: "list_id",
            email_address: "email_address",
            status: "subscribed",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("get-member", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            consents_to_one_to_one_messaging: true,
            contact_id: "contact_id",
            email_address: "email_address",
            email_client: "email_client",
            email_type: { key: "value" },
            id: "id",
            interests: { key: true },
            ip_opt: "ip_opt",
            ip_signup: "ip_signup",
            language: "language",
            last_changed: "2024-01-15T09:30:00Z",
            last_note: { created_at: "2024-01-15T09:30:00Z", created_by: "created_by", note: "note", note_id: 1 },
            list_id: "list_id",
            location: {
                country_code: "country_code",
                dstoff: 1,
                gmtoff: 1,
                latitude: 1.1,
                longitude: 1.1,
                region: "region",
                timezone: "timezone",
            },
            marketing_permissions: [
                { enabled: true, marketing_permission_id: "marketing_permission_id", text: "text" },
            ],
            member_rating: 1,
            merge_fields: {
                key: { addr1: "addr1", addr2: "addr2", city: "city", state: "state", zip: "zip", country: "country" },
            },
            sms_phone_number: "sms_phone_number",
            sms_subscription_last_updated: "sms_subscription_last_updated",
            sms_subscription_status: "subscribed",
            source: "source",
            stats: {
                avg_click_rate: 1.1,
                avg_open_rate: 1.1,
                ecommerce_data: { currency_code: "USD", number_of_orders: 1.1, total_revenue: 1.1 },
            },
            status: "subscribed",
            tags: [{ id: 1, name: "name" }],
            tags_count: 1,
            timestamp_opt: "2024-01-15T09:30:00Z",
            timestamp_signup: "2024-01-15T09:30:00Z",
            unique_email_id: "unique_email_id",
            unsubscribe_reason: "unsubscribe_reason",
            vip: true,
            web_id: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/lists/list_id/members/subscriber_hash")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.getMember({
            list_id: "list_id",
            subscriber_hash: "subscriber_hash",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("upsert-member", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { email_address: "email_address" };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            consents_to_one_to_one_messaging: true,
            contact_id: "contact_id",
            email_address: "email_address",
            email_client: "email_client",
            email_type: { key: "value" },
            id: "id",
            interests: { key: true },
            ip_opt: "ip_opt",
            ip_signup: "ip_signup",
            language: "language",
            last_changed: "2024-01-15T09:30:00Z",
            last_note: { created_at: "2024-01-15T09:30:00Z", created_by: "created_by", note: "note", note_id: 1 },
            list_id: "list_id",
            location: {
                country_code: "country_code",
                dstoff: 1,
                gmtoff: 1,
                latitude: 1.1,
                longitude: 1.1,
                region: "region",
                timezone: "timezone",
            },
            marketing_permissions: [
                { enabled: true, marketing_permission_id: "marketing_permission_id", text: "text" },
            ],
            member_rating: 1,
            merge_fields: {
                key: { addr1: "addr1", addr2: "addr2", city: "city", state: "state", zip: "zip", country: "country" },
            },
            sms_phone_number: "sms_phone_number",
            sms_subscription_last_updated: "sms_subscription_last_updated",
            sms_subscription_status: "subscribed",
            source: "source",
            stats: {
                avg_click_rate: 1.1,
                avg_open_rate: 1.1,
                ecommerce_data: { currency_code: "USD", number_of_orders: 1.1, total_revenue: 1.1 },
            },
            status: "subscribed",
            tags: [{ id: 1, name: "name" }],
            tags_count: 1,
            timestamp_opt: "2024-01-15T09:30:00Z",
            timestamp_signup: "2024-01-15T09:30:00Z",
            unique_email_id: "unique_email_id",
            unsubscribe_reason: "unsubscribe_reason",
            vip: true,
            web_id: 1,
        };

        server
            .mockEndpoint()
            .put("/3.0/lists/list_id/members/subscriber_hash")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.upsertMember({
            list_id: "list_id",
            subscriber_hash: "subscriber_hash",
            email_address: "email_address",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("delete-member", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .delete("/3.0/lists/list_id/members/subscriber_hash")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.lists.deleteMember({
            list_id: "list_id",
            subscriber_hash: "subscriber_hash",
        });
        expect(response).toEqual(undefined);
    });

    test("update-member", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            consents_to_one_to_one_messaging: true,
            contact_id: "contact_id",
            email_address: "email_address",
            email_client: "email_client",
            email_type: { key: "value" },
            id: "id",
            interests: { key: true },
            ip_opt: "ip_opt",
            ip_signup: "ip_signup",
            language: "language",
            last_changed: "2024-01-15T09:30:00Z",
            last_note: { created_at: "2024-01-15T09:30:00Z", created_by: "created_by", note: "note", note_id: 1 },
            list_id: "list_id",
            location: {
                country_code: "country_code",
                dstoff: 1,
                gmtoff: 1,
                latitude: 1.1,
                longitude: 1.1,
                region: "region",
                timezone: "timezone",
            },
            marketing_permissions: [
                { enabled: true, marketing_permission_id: "marketing_permission_id", text: "text" },
            ],
            member_rating: 1,
            merge_fields: {
                key: { addr1: "addr1", addr2: "addr2", city: "city", state: "state", zip: "zip", country: "country" },
            },
            sms_phone_number: "sms_phone_number",
            sms_subscription_last_updated: "sms_subscription_last_updated",
            sms_subscription_status: "subscribed",
            source: "source",
            stats: {
                avg_click_rate: 1.1,
                avg_open_rate: 1.1,
                ecommerce_data: { currency_code: "USD", number_of_orders: 1.1, total_revenue: 1.1 },
            },
            status: "subscribed",
            tags: [{ id: 1, name: "name" }],
            tags_count: 1,
            timestamp_opt: "2024-01-15T09:30:00Z",
            timestamp_signup: "2024-01-15T09:30:00Z",
            unique_email_id: "unique_email_id",
            unsubscribe_reason: "unsubscribe_reason",
            vip: true,
            web_id: 1,
        };

        server
            .mockEndpoint()
            .patch("/3.0/lists/list_id/members/subscriber_hash")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.updateMember({
            list_id: "list_id",
            subscriber_hash: "subscriber_hash",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("create-member-action-delete-permanent", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .post("/3.0/lists/list_id/members/subscriber_hash/actions/delete-permanent")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.lists.createMemberActionDeletePermanent({
            list_id: "list_id",
            subscriber_hash: "subscriber_hash",
        });
        expect(response).toEqual(undefined);
    });

    test("list-member-activity", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            activity: [
                {
                    action: "action",
                    campaign_id: "campaign_id",
                    parent_campaign: "parent_campaign",
                    timestamp: "2024-01-15T09:30:00Z",
                    title: "title",
                    type: "type",
                    url: "url",
                },
            ],
            contact_id: "contact_id",
            email_id: "email_id",
            list_id: "list_id",
            total_items: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/lists/list_id/members/subscriber_hash/activity")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.listMemberActivity({
            list_id: "list_id",
            subscriber_hash: "subscriber_hash",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-member-activity-feed", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            activity: [{ key: "value" }],
            email_id: "email_id",
            list_id: "list_id",
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/lists/list_id/members/subscriber_hash/activity-feed")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.lists.listMemberActivityFeed({
            list_id: "list_id",
            subscriber_hash: "subscriber_hash",
        });

        expect(expected.activity).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.activity).toEqual(nextPage.data);
    });

    test("list-member-events", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            events: [{ name: "name", occurred_at: "2024-01-15T09:30:00Z", properties: { key: "value" } }],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/lists/list_id/members/subscriber_hash/events")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.lists.listMemberEvents({
            list_id: "list_id",
            subscriber_hash: "subscriber_hash",
        });

        expect(expected.events).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.events).toEqual(nextPage.data);
    });

    test("create-member-event", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "name" };

        server
            .mockEndpoint()
            .post("/3.0/lists/list_id/members/subscriber_hash/events")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.lists.createMemberEvent({
            list_id: "list_id",
            subscriber_hash: "subscriber_hash",
            name: "name",
        });
        expect(response).toEqual(undefined);
    });

    test("list-member-goals", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            email_id: "email_id",
            goals: [{ data: "data", event: "event", goal_id: 1, last_visited_at: "2024-01-15T09:30:00Z" }],
            list_id: "list_id",
            total_items: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/lists/list_id/members/subscriber_hash/goals")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.listMemberGoals({
            list_id: "list_id",
            subscriber_hash: "subscriber_hash",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-member-notes", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            email_id: "email_id",
            list_id: "list_id",
            notes: [
                {
                    _links: [{}],
                    contact_id: "contact_id",
                    created_at: "2024-01-15T09:30:00Z",
                    created_by: "created_by",
                    email_id: "email_id",
                    id: 1,
                    list_id: "list_id",
                    note: "note",
                    updated_at: "2024-01-15T09:30:00Z",
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/lists/list_id/members/subscriber_hash/notes")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.lists.listMemberNotes({
            list_id: "list_id",
            subscriber_hash: "subscriber_hash",
        });

        expect(expected.notes).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.notes).toEqual(nextPage.data);
    });

    test("create-member-note", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            contact_id: "contact_id",
            created_at: "2024-01-15T09:30:00Z",
            created_by: "created_by",
            email_id: "email_id",
            id: 1,
            list_id: "list_id",
            note: "note",
            updated_at: "2024-01-15T09:30:00Z",
        };

        server
            .mockEndpoint()
            .post("/3.0/lists/list_id/members/subscriber_hash/notes")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.createMemberNote({
            list_id: "list_id",
            subscriber_hash: "subscriber_hash",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("get-member-note", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            contact_id: "contact_id",
            created_at: "2024-01-15T09:30:00Z",
            created_by: "created_by",
            email_id: "email_id",
            id: 1,
            list_id: "list_id",
            note: "note",
            updated_at: "2024-01-15T09:30:00Z",
        };

        server
            .mockEndpoint()
            .get("/3.0/lists/list_id/members/subscriber_hash/notes/note_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.getMemberNote({
            list_id: "list_id",
            subscriber_hash: "subscriber_hash",
            note_id: "note_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("delete-member-note", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .delete("/3.0/lists/list_id/members/subscriber_hash/notes/note_id")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.lists.deleteMemberNote({
            list_id: "list_id",
            subscriber_hash: "subscriber_hash",
            note_id: "note_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-member-note", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            contact_id: "contact_id",
            created_at: "2024-01-15T09:30:00Z",
            created_by: "created_by",
            email_id: "email_id",
            id: 1,
            list_id: "list_id",
            note: "note",
            updated_at: "2024-01-15T09:30:00Z",
        };

        server
            .mockEndpoint()
            .patch("/3.0/lists/list_id/members/subscriber_hash/notes/note_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.updateMemberNote({
            list_id: "list_id",
            subscriber_hash: "subscriber_hash",
            note_id: "note_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-member-tags", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            tags: [{ date_added: "2024-01-15T09:30:00Z", id: 1, name: "name" }],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/lists/list_id/members/subscriber_hash/tags")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.lists.listMemberTags({
            list_id: "list_id",
            subscriber_hash: "subscriber_hash",
        });

        expect(expected.tags).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.tags).toEqual(nextPage.data);
    });

    test("create-member-tag", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { tags: [{ name: "name", status: "inactive" }] };

        server
            .mockEndpoint()
            .post("/3.0/lists/list_id/members/subscriber_hash/tags")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.lists.createMemberTag({
            list_id: "list_id",
            subscriber_hash: "subscriber_hash",
            tags: [
                {
                    name: "name",
                    status: "inactive",
                },
            ],
        });
        expect(response).toEqual(undefined);
    });

    test("list-merge-fields", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            list_id: "list_id",
            merge_field_limit: 30,
            merge_fields: [
                {
                    _links: [{}],
                    default_value: "default_value",
                    display_order: 1,
                    help_text: "help_text",
                    list_id: "list_id",
                    merge_field_limit: 30,
                    merge_id: 1,
                    name: "name",
                    options: { choices: ["First Choice", "Second Choice", "Third Choice"] },
                    public: true,
                    required: true,
                    tag: "tag",
                    total_items: 28,
                    type: "text",
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/lists/list_id/merge-fields")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.lists.listMergeFields({
            list_id: "list_id",
        });

        expect(expected.merge_fields).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.merge_fields).toEqual(nextPage.data);
    });

    test("create-merge-field", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "name", type: "text" };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            default_value: "default_value",
            display_order: 1,
            help_text: "help_text",
            list_id: "list_id",
            merge_field_limit: 30,
            merge_id: 1,
            name: "name",
            options: {
                choices: ["First Choice", "Second Choice", "Third Choice"],
                date_format: "date_format",
                default_country: 1,
                phone_format: "phone_format",
                size: 1,
            },
            public: true,
            required: true,
            tag: "tag",
            total_items: 28,
            type: "text",
        };

        server
            .mockEndpoint()
            .post("/3.0/lists/list_id/merge-fields")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.createMergeField({
            list_id: "list_id",
            name: "name",
            type: "text",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("get-merge-field", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            default_value: "default_value",
            display_order: 1,
            help_text: "help_text",
            list_id: "list_id",
            merge_field_limit: 30,
            merge_id: 1,
            name: "name",
            options: {
                choices: ["First Choice", "Second Choice", "Third Choice"],
                date_format: "date_format",
                default_country: 1,
                phone_format: "phone_format",
                size: 1,
            },
            public: true,
            required: true,
            tag: "tag",
            total_items: 28,
            type: "text",
        };

        server
            .mockEndpoint()
            .get("/3.0/lists/list_id/merge-fields/merge_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.getMergeField({
            list_id: "list_id",
            merge_id: "merge_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("delete-merge-field", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/3.0/lists/list_id/merge-fields/merge_id").respondWith().statusCode(200).build();

        const response = await client.lists.deleteMergeField({
            list_id: "list_id",
            merge_id: "merge_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-merge-field", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            default_value: "default_value",
            display_order: 1,
            help_text: "help_text",
            list_id: "list_id",
            merge_field_limit: 30,
            merge_id: 1,
            name: "name",
            options: {
                choices: ["First Choice", "Second Choice", "Third Choice"],
                date_format: "date_format",
                default_country: 1,
                phone_format: "phone_format",
                size: 1,
            },
            public: true,
            required: true,
            tag: "tag",
            total_items: 28,
            type: "text",
        };

        server
            .mockEndpoint()
            .patch("/3.0/lists/list_id/merge-fields/merge_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.updateMergeField({
            list_id: "list_id",
            merge_id: "merge_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-segments", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            list_id: "list_id",
            segments: [
                {
                    _links: [{}],
                    created_at: "2024-01-15T09:30:00Z",
                    id: 1,
                    list_id: "list_id",
                    member_count: 1,
                    name: "name",
                    options: { conditions: [{ condition_type: "Aim", value: "any" }] },
                    type: "saved",
                    updated_at: "2024-01-15T09:30:00Z",
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/lists/list_id/segments")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.lists.listSegments({
            list_id: "list_id",
        });

        expect(expected.segments).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.segments).toEqual(nextPage.data);
    });

    test("create-segment", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "name" };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            created_at: "2024-01-15T09:30:00Z",
            id: 1,
            list_id: "list_id",
            member_count: 1,
            name: "name",
            options: { conditions: [{ condition_type: "Aim", value: "any" }], match: "any" },
            type: "saved",
            updated_at: "2024-01-15T09:30:00Z",
        };

        server
            .mockEndpoint()
            .post("/3.0/lists/list_id/segments")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.createSegment({
            list_id: "list_id",
            name: "name",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("get-segment", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            created_at: "2024-01-15T09:30:00Z",
            id: 1,
            list_id: "list_id",
            member_count: 1,
            name: "name",
            options: { conditions: [{ condition_type: "Aim", value: "any" }], match: "any" },
            type: "saved",
            updated_at: "2024-01-15T09:30:00Z",
        };

        server
            .mockEndpoint()
            .get("/3.0/lists/list_id/segments/segment_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.getSegment({
            list_id: "list_id",
            segment_id: "segment_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("batch-add-or-remove-members", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            error_count: 42,
            errors: [{ email_addresses: ["email_addresses"], error: "error" }],
            members_added: [
                {
                    _links: [{}],
                    contact_id: "contact_id",
                    email_address: "email_address",
                    email_client: "email_client",
                    email_type: "email_type",
                    id: "id",
                    interests: { key: true },
                    ip_opt: "ip_opt",
                    ip_signup: "ip_signup",
                    language: "language",
                    last_changed: "2024-01-15T09:30:00Z",
                    list_id: "list_id",
                    member_rating: 1,
                    merge_fields: { key: "value" },
                    status: "subscribed",
                    tags: [{}],
                    tags_count: 1,
                    timestamp_opt: "2024-01-15T09:30:00Z",
                    timestamp_signup: "2024-01-15T09:30:00Z",
                    unique_email_id: "unique_email_id",
                    vip: true,
                },
            ],
            members_removed: [
                {
                    _links: [{}],
                    contact_id: "contact_id",
                    email_address: "email_address",
                    email_client: "email_client",
                    email_type: "email_type",
                    id: "id",
                    interests: { key: true },
                    ip_opt: "ip_opt",
                    ip_signup: "ip_signup",
                    language: "language",
                    last_changed: "2024-01-15T09:30:00Z",
                    list_id: "list_id",
                    member_rating: 1,
                    merge_fields: { key: "value" },
                    status: "subscribed",
                    tags: [{}],
                    tags_count: 1,
                    timestamp_opt: "2024-01-15T09:30:00Z",
                    timestamp_signup: "2024-01-15T09:30:00Z",
                    unique_email_id: "unique_email_id",
                    vip: true,
                },
            ],
            total_added: 42,
            total_removed: 42,
        };

        server
            .mockEndpoint()
            .post("/3.0/lists/list_id/segments/segment_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.batchAddOrRemoveMembers({
            list_id: "list_id",
            segment_id: "segment_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("delete-segment", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/3.0/lists/list_id/segments/segment_id").respondWith().statusCode(200).build();

        const response = await client.lists.deleteSegment({
            list_id: "list_id",
            segment_id: "segment_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-segment", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            created_at: "2024-01-15T09:30:00Z",
            id: 1,
            list_id: "list_id",
            member_count: 1,
            name: "name",
            options: { conditions: [{ condition_type: "Aim", value: "any" }], match: "any" },
            type: "saved",
            updated_at: "2024-01-15T09:30:00Z",
        };

        server
            .mockEndpoint()
            .patch("/3.0/lists/list_id/segments/segment_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.updateSegment({
            list_id: "list_id",
            segment_id: "segment_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-segment-members", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            members: [
                {
                    _links: [{}],
                    email_address: "email_address",
                    email_client: "email_client",
                    email_type: "email_type",
                    full_name: "full_name",
                    id: "id",
                    interests: { key: true },
                    ip_opt: "ip_opt",
                    ip_signup: "ip_signup",
                    language: "language",
                    last_changed: "2024-01-15T09:30:00Z",
                    list_id: "list_id",
                    member_rating: 1,
                    merge_fields: { key: { addr1: "addr1", city: "city", state: "state", zip: "zip" } },
                    status: "subscribed",
                    timestamp_opt: "2024-01-15T09:30:00Z",
                    timestamp_signup: "2024-01-15T09:30:00Z",
                    unique_email_id: "unique_email_id",
                    vip: true,
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/lists/list_id/segments/segment_id/members")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.lists.listSegmentMembers({
            list_id: "list_id",
            segment_id: "segment_id",
        });

        expect(expected.members).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.members).toEqual(nextPage.data);
    });

    test("create-segment-member", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { email_address: "email_address" };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            email_address: "email_address",
            email_client: "email_client",
            email_type: "email_type",
            full_name: "full_name",
            id: "id",
            interests: { key: true },
            ip_opt: "ip_opt",
            ip_signup: "ip_signup",
            language: "language",
            last_changed: "2024-01-15T09:30:00Z",
            last_note: { created_at: "2024-01-15T09:30:00Z", created_by: "created_by", note: "note", note_id: 1 },
            list_id: "list_id",
            location: {
                country_code: "country_code",
                dstoff: 1,
                gmtoff: 1,
                latitude: 1.1,
                longitude: 1.1,
                timezone: "timezone",
            },
            member_rating: 1,
            merge_fields: {
                key: { addr1: "addr1", addr2: "addr2", city: "city", state: "state", zip: "zip", country: "country" },
            },
            stats: { avg_click_rate: 1.1, avg_open_rate: 1.1 },
            status: "subscribed",
            timestamp_opt: "2024-01-15T09:30:00Z",
            timestamp_signup: "2024-01-15T09:30:00Z",
            unique_email_id: "unique_email_id",
            vip: true,
        };

        server
            .mockEndpoint()
            .post("/3.0/lists/list_id/segments/segment_id/members")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.createSegmentMember({
            list_id: "list_id",
            segment_id: "segment_id",
            email_address: "email_address",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("delete-segment-member", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .delete("/3.0/lists/list_id/segments/segment_id/members/subscriber_hash")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.lists.deleteSegmentMember({
            list_id: "list_id",
            segment_id: "segment_id",
            subscriber_hash: "subscriber_hash",
        });
        expect(response).toEqual(undefined);
    });

    test("list-signup-forms", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            list_id: "list_id",
            signup_forms: [
                {
                    _links: [{}],
                    contents: [{ value: "Signup message goes here" }],
                    header: {
                        image_alt: "This is an image",
                        image_border_color: "#896d6d",
                        image_border_width: "2",
                        image_height: "200",
                        image_link: "gotothisimage.com",
                        image_url:
                            "http://gallery.mailchimp.com/332310cb9a420a9e7fea2858a/images/2491208c-9458-4834-a708-fef4ee736472.png",
                        image_width: "800",
                        text: "Header Text goes here",
                    },
                    list_id: "4ca5becb8d",
                    signup_form_url: "signup_form_url",
                    styles: [{ options: [{ property: "background-color", value: "#111111" }] }],
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/lists/list_id/signup-forms")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.listSignupForms({
            list_id: "list_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("create-signup-form", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            contents: [{ section: "signup_message", value: "Signup message goes here" }],
            header: {
                image_align: "none",
                image_alt: "This is an image",
                image_border_color: "#896d6d",
                image_border_style: "none",
                image_border_width: "2",
                image_height: "200",
                image_link: "gotothisimage.com",
                image_target: "_blank",
                image_url:
                    "http://gallery.mailchimp.com/332310cb9a420a9e7fea2858a/images/2491208c-9458-4834-a708-fef4ee736472.png",
                image_width: "800",
                text: "Header Text goes here",
            },
            list_id: "4ca5becb8d",
            signup_form_url: "signup_form_url",
            styles: [{ options: [{ property: "background-color", value: "#111111" }], selector: "page_background" }],
        };

        server
            .mockEndpoint()
            .post("/3.0/lists/list_id/signup-forms")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.createSignupForm({
            list_id: "list_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-surveys", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .get("/3.0/lists/list_id/surveys")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.listSurveys({
            list_id: "list_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("create-survey", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/3.0/lists/list_id/surveys")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.createSurvey({
            list_id: "list_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("get-survey", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .get("/3.0/lists/list_id/surveys/survey_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.getSurvey({
            list_id: "list_id",
            survey_id: "survey_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("delete-survey", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/3.0/lists/list_id/surveys/survey_id").respondWith().statusCode(200).build();

        const response = await client.lists.deleteSurvey({
            list_id: "list_id",
            survey_id: "survey_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-survey", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .patch("/3.0/lists/list_id/surveys/survey_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.updateSurvey({
            list_id: "list_id",
            survey_id: "survey_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("create-list-survey-action-replicate", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/3.0/lists/list_id/surveys/survey_id/actions/replicate")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.createListSurveyActionReplicate({
            list_idPathParam: "list_id",
            survey_id: "survey_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-tag-search", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = { tags: [{ id: 1, name: "name" }], total_items: 1 };

        server
            .mockEndpoint()
            .get("/3.0/lists/list_id/tag-search")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.listTagSearch({
            list_id: "list_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-webhooks", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            list_id: "list_id",
            total_items: 1,
            webhooks: [
                {
                    _links: [{}],
                    events: {
                        campaign: true,
                        cleaned: true,
                        profile: true,
                        subscribe: true,
                        unsubscribe: true,
                        upemail: true,
                        sms_subscribe: true,
                        sms_unsubscribe: true,
                        upsms: true,
                        sms_campaign: true,
                    },
                    id: "5d9a5e3f7b",
                    list_id: "4ca5becb8d",
                    signing_enabled: true,
                    signing_secret: "zI3tsLziqBWhlz6V4PRlGg41u0gdhu7LhYXX4wa0ARM",
                    sources: { admin: true, api: true, user: true },
                    url: "http://yourdomain.com/webhook",
                },
            ],
        };

        server
            .mockEndpoint()
            .get("/3.0/lists/list_id/webhooks")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.listWebhooks({
            list_id: "list_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("create-webhook", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            events: {
                campaign: true,
                cleaned: true,
                profile: true,
                subscribe: true,
                unsubscribe: true,
                upemail: true,
                sms_subscribe: true,
                sms_unsubscribe: true,
                upsms: true,
                sms_campaign: true,
            },
            id: "5d9a5e3f7b",
            list_id: "4ca5becb8d",
            signing_enabled: true,
            signing_secret: "zI3tsLziqBWhlz6V4PRlGg41u0gdhu7LhYXX4wa0ARM",
            sources: { admin: true, api: true, user: true },
            url: "http://yourdomain.com/webhook",
        };

        server
            .mockEndpoint()
            .post("/3.0/lists/list_id/webhooks")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.createWebhook({
            list_id: "list_id",
            body: {},
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("get-webhook", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            events: {
                campaign: true,
                cleaned: true,
                profile: true,
                subscribe: true,
                unsubscribe: true,
                upemail: true,
                sms_subscribe: true,
                sms_unsubscribe: true,
                upsms: true,
                sms_campaign: true,
            },
            id: "5d9a5e3f7b",
            list_id: "4ca5becb8d",
            signing_enabled: true,
            signing_secret: "zI3tsLziqBWhlz6V4PRlGg41u0gdhu7LhYXX4wa0ARM",
            sources: { admin: true, api: true, user: true },
            url: "http://yourdomain.com/webhook",
        };

        server
            .mockEndpoint()
            .get("/3.0/lists/list_id/webhooks/webhook_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.getWebhook({
            list_id: "list_id",
            webhook_id: "webhook_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("delete-webhook", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/3.0/lists/list_id/webhooks/webhook_id").respondWith().statusCode(200).build();

        const response = await client.lists.deleteWebhook({
            list_id: "list_id",
            webhook_id: "webhook_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-webhook", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            events: {
                campaign: true,
                cleaned: true,
                profile: true,
                subscribe: true,
                unsubscribe: true,
                upemail: true,
                sms_subscribe: true,
                sms_unsubscribe: true,
                upsms: true,
                sms_campaign: true,
            },
            id: "5d9a5e3f7b",
            list_id: "4ca5becb8d",
            signing_enabled: true,
            signing_secret: "zI3tsLziqBWhlz6V4PRlGg41u0gdhu7LhYXX4wa0ARM",
            sources: { admin: true, api: true, user: true },
            url: "http://yourdomain.com/webhook",
        };

        server
            .mockEndpoint()
            .patch("/3.0/lists/list_id/webhooks/webhook_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.lists.updateWebhook({
            list_id: "list_id",
            webhook_id: "webhook_id",
            body: {},
        });
        expect(response).toEqual(rawResponseBody);
    });
});
