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
            constraints: {
                currentTotalInstances: 1,
                maxInstances: 1,
                mayCreate: true,
            },
            lists: [
                {
                    links: [{}],
                    beamerAddress: "beamer_address",
                    dateCreated: new Date("2024-01-15T09:30:00.000Z"),
                    doubleOptin: true,
                    emailTypeOption: true,
                    hasWelcome: false,
                    id: "id",
                    listRating: 1,
                    marketingPermissions: true,
                    modules: ["modules"],
                    name: "name",
                    notifyOnSubscribe: "notify_on_subscribe",
                    notifyOnUnsubscribe: "notify_on_unsubscribe",
                    permissionReminder: "permission_reminder",
                    subscribeUrlLong: "subscribe_url_long",
                    subscribeUrlShort: "subscribe_url_short",
                    useArchiveBar: true,
                    visibility: "pub",
                    webId: 1,
                },
            ],
            totalItems: 1,
        };
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
            campaignDefaults: {
                fromEmail: "from_email",
                fromName: "from_name",
                language: "language",
                subject: "subject",
            },
            contact: {
                address1: "address1",
                city: "city",
                company: "company",
                country: "country",
            },
            emailTypeOption: true,
            name: "name",
            permissionReminder: "permission_reminder",
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
            beamerAddress: "beamer_address",
            campaignDefaults: {
                fromEmail: "from_email",
                fromName: "from_name",
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
            dateCreated: new Date("2024-01-15T09:30:00.000Z"),
            doubleOptin: true,
            emailTypeOption: true,
            hasWelcome: false,
            id: "id",
            listRating: 1,
            marketingPermissions: true,
            modules: ["modules"],
            name: "name",
            notifyOnSubscribe: "notify_on_subscribe",
            notifyOnUnsubscribe: "notify_on_unsubscribe",
            permissionReminder: "permission_reminder",
            stats: {
                avgSubRate: 1.1,
                avgUnsubRate: 1.1,
                campaignCount: 1,
                campaignLastSent: new Date("2024-01-15T09:30:00.000Z"),
                cleanedCount: 1,
                cleanedCountSinceSend: 1,
                clickRate: 1.1,
                lastSubDate: new Date("2024-01-15T09:30:00.000Z"),
                lastUnsubDate: new Date("2024-01-15T09:30:00.000Z"),
                memberCount: 1,
                memberCountSinceSend: 1,
                mergeFieldCount: 1,
                openRate: 1.1,
                targetSubRate: 1.1,
                totalContacts: 1,
                unsubscribeCount: 1,
                unsubscribeCountSinceSend: 1,
            },
            subscribeUrlLong: "subscribe_url_long",
            subscribeUrlShort: "subscribe_url_short",
            useArchiveBar: true,
            visibility: "pub",
            webId: 1,
        });
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
            listId: "list_id",
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
            beamerAddress: "beamer_address",
            campaignDefaults: {
                fromEmail: "from_email",
                fromName: "from_name",
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
            dateCreated: new Date("2024-01-15T09:30:00.000Z"),
            doubleOptin: true,
            emailTypeOption: true,
            hasWelcome: false,
            id: "id",
            listRating: 1,
            marketingPermissions: true,
            modules: ["modules"],
            name: "name",
            notifyOnSubscribe: "notify_on_subscribe",
            notifyOnUnsubscribe: "notify_on_unsubscribe",
            permissionReminder: "permission_reminder",
            stats: {
                avgSubRate: 1.1,
                avgUnsubRate: 1.1,
                campaignCount: 1,
                campaignLastSent: new Date("2024-01-15T09:30:00.000Z"),
                cleanedCount: 1,
                cleanedCountSinceSend: 1,
                clickRate: 1.1,
                lastSubDate: new Date("2024-01-15T09:30:00.000Z"),
                lastUnsubDate: new Date("2024-01-15T09:30:00.000Z"),
                memberCount: 1,
                memberCountSinceSend: 1,
                mergeFieldCount: 1,
                openRate: 1.1,
                targetSubRate: 1.1,
                totalContacts: 1,
                unsubscribeCount: 1,
                unsubscribeCountSinceSend: 1,
            },
            subscribeUrlLong: "subscribe_url_long",
            subscribeUrlShort: "subscribe_url_short",
            useArchiveBar: true,
            visibility: "pub",
            webId: 1,
        });
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
            listId: "list_id",
            members: [],
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
            errorCount: 42,
            errors: [
                {
                    emailAddress: "email_address",
                    error: "error",
                    errorCode: "ERROR_CONTACT_EXISTS",
                    field: "field",
                    fieldMessage: "field_message",
                },
            ],
            newMembers: [
                {
                    links: [{}],
                    contactId: "contact_id",
                    emailAddress: "email_address",
                    emailClient: "email_client",
                    emailType: "email_type",
                    id: "id",
                    interests: {
                        key: true,
                    },
                    ipOpt: "ip_opt",
                    ipSignup: "ip_signup",
                    language: "language",
                    lastChanged: new Date("2024-01-15T09:30:00.000Z"),
                    listId: "list_id",
                    memberRating: 1,
                    mergeFields: {
                        key: "value",
                    },
                    status: "subscribed",
                    tags: [{}],
                    tagsCount: 1,
                    timestampOpt: new Date("2024-01-15T09:30:00.000Z"),
                    timestampSignup: new Date("2024-01-15T09:30:00.000Z"),
                    uniqueEmailId: "unique_email_id",
                    vip: true,
                },
            ],
            totalCreated: 42,
            totalUpdated: 42,
            updatedMembers: [
                {
                    links: [{}],
                    contactId: "contact_id",
                    emailAddress: "email_address",
                    emailClient: "email_client",
                    emailType: "email_type",
                    id: "id",
                    interests: {
                        key: true,
                    },
                    ipOpt: "ip_opt",
                    ipSignup: "ip_signup",
                    language: "language",
                    lastChanged: new Date("2024-01-15T09:30:00.000Z"),
                    listId: "list_id",
                    memberRating: 1,
                    mergeFields: {
                        key: "value",
                    },
                    status: "subscribed",
                    tags: [{}],
                    tagsCount: 1,
                    timestampOpt: new Date("2024-01-15T09:30:00.000Z"),
                    timestampSignup: new Date("2024-01-15T09:30:00.000Z"),
                    uniqueEmailId: "unique_email_id",
                    vip: true,
                },
            ],
        });
    });

    test("delete", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/3.0/lists/list_id").respondWith().statusCode(200).build();

        const response = await client.lists.delete({
            listId: "list_id",
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
            listId: "list_id",
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
            beamerAddress: "beamer_address",
            campaignDefaults: {
                fromEmail: "from_email",
                fromName: "from_name",
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
            dateCreated: new Date("2024-01-15T09:30:00.000Z"),
            doubleOptin: true,
            emailTypeOption: true,
            hasWelcome: false,
            id: "id",
            listRating: 1,
            marketingPermissions: true,
            modules: ["modules"],
            name: "name",
            notifyOnSubscribe: "notify_on_subscribe",
            notifyOnUnsubscribe: "notify_on_unsubscribe",
            permissionReminder: "permission_reminder",
            stats: {
                avgSubRate: 1.1,
                avgUnsubRate: 1.1,
                campaignCount: 1,
                campaignLastSent: new Date("2024-01-15T09:30:00.000Z"),
                cleanedCount: 1,
                cleanedCountSinceSend: 1,
                clickRate: 1.1,
                lastSubDate: new Date("2024-01-15T09:30:00.000Z"),
                lastUnsubDate: new Date("2024-01-15T09:30:00.000Z"),
                memberCount: 1,
                memberCountSinceSend: 1,
                mergeFieldCount: 1,
                openRate: 1.1,
                targetSubRate: 1.1,
                totalContacts: 1,
                unsubscribeCount: 1,
                unsubscribeCountSinceSend: 1,
            },
            subscribeUrlLong: "subscribe_url_long",
            subscribeUrlShort: "subscribe_url_short",
            useArchiveBar: true,
            visibility: "pub",
            webId: 1,
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
            abuseReports: [
                {
                    links: [{}],
                    campaignId: "campaign_id",
                    date: "date",
                    emailAddress: "email_address",
                    emailId: "email_id",
                    id: 1,
                    listId: "list_id",
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
            listId: "list_id",
            totalItems: 1,
        };
        const page = await client.lists.listAbuseReports({
            listId: "list_id",
        });

        expect(expected.abuseReports).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.abuseReports).toEqual(nextPage.data);
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
            listId: "list_id",
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
            date: "date",
            emailAddress: "email_address",
            emailId: "email_id",
            id: 1,
            listId: "list_id",
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
            activity: [
                {
                    links: [{}],
                    day: "day",
                    emailsSent: 1,
                    hardBounce: 1,
                    otherAdds: 1,
                    otherRemoves: 1,
                    recipientClicks: 1,
                    softBounce: 1,
                    subs: 1,
                    uniqueOpens: 1,
                    unsubs: 1,
                },
            ],
            listId: "list_id",
            totalItems: 1,
        };
        const page = await client.lists.listActivity({
            listId: "list_id",
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
            listId: "list_id",
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
            clients: [
                {
                    client: "client",
                    members: 1,
                },
            ],
            listId: "list_id",
            totalItems: 1,
        });
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
            history: [
                {
                    links: [{}],
                    cleaned: 1,
                    deleted: 1,
                    existing: 1,
                    imports: 1,
                    listId: "list_id",
                    month: "month",
                    optins: 1,
                    pending: 1,
                    reconfirm: 1,
                    subscribed: 1,
                    transactional: 1,
                    unsubscribed: 1,
                },
            ],
            listId: "list_id",
            totalItems: 1,
        };
        const page = await client.lists.listGrowthHistory({
            listId: "list_id",
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
            listId: "list_id",
            month: "month",
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
            cleaned: 1,
            deleted: 1,
            existing: 1,
            imports: 1,
            listId: "list_id",
            month: "month",
            optins: 1,
            pending: 1,
            reconfirm: 1,
            subscribed: 1,
            transactional: 1,
            unsubscribed: 1,
        });
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
            categories: [
                {
                    links: [{}],
                    displayOrder: 1,
                    id: "id",
                    listId: "list_id",
                    title: "title",
                    type: "checkboxes",
                },
            ],
            listId: "list_id",
            totalItems: 1,
        };
        const page = await client.lists.listInterestCategories({
            listId: "list_id",
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
            listId: "list_id",
            title: "title",
            type: "checkboxes",
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
            displayOrder: 1,
            id: "id",
            listId: "list_id",
            title: "title",
            type: "checkboxes",
        });
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
            listId: "list_id",
            interestCategoryId: "interest_category_id",
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
            displayOrder: 1,
            id: "id",
            listId: "list_id",
            title: "title",
            type: "checkboxes",
        });
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
            listId: "list_id",
            interestCategoryId: "interest_category_id",
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
            listId: "list_id",
            interestCategoryId: "interest_category_id",
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
            displayOrder: 1,
            id: "id",
            listId: "list_id",
            title: "title",
            type: "checkboxes",
        });
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
            categoryId: "category_id",
            interests: [
                {
                    links: [{}],
                    categoryId: "category_id",
                    displayOrder: 1,
                    id: "id",
                    listId: "list_id",
                    name: "name",
                    subscriberCount: "subscriber_count",
                },
            ],
            listId: "list_id",
            totalItems: 1,
        };
        const page = await client.lists.listInterestCategoryInterests({
            listId: "list_id",
            interestCategoryId: "interest_category_id",
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
            listId: "list_id",
            interestCategoryId: "interest_category_id",
            name: "name",
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
            categoryId: "category_id",
            displayOrder: 1,
            id: "id",
            listId: "list_id",
            name: "name",
            subscriberCount: "subscriber_count",
        });
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
            listId: "list_id",
            interestCategoryId: "interest_category_id",
            interestId: "interest_id",
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
            categoryId: "category_id",
            displayOrder: 1,
            id: "id",
            listId: "list_id",
            name: "name",
            subscriberCount: "subscriber_count",
        });
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
            listId: "list_id",
            interestCategoryId: "interest_category_id",
            interestId: "interest_id",
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
            listId: "list_id",
            interestCategoryId: "interest_category_id",
            interestId: "interest_id",
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
            categoryId: "category_id",
            displayOrder: 1,
            id: "id",
            listId: "list_id",
            name: "name",
            subscriberCount: "subscriber_count",
        });
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
            listId: "list_id",
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
            listId: "list_id",
            locations: [
                {
                    cc: "cc",
                    country: "country",
                    percent: 1.1,
                    total: 1,
                },
            ],
            totalItems: 1,
        });
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
            listId: "list_id",
            members: [
                {
                    links: [{}],
                    consentsToOneToOneMessaging: true,
                    contactId: "contact_id",
                    emailAddress: "email_address",
                    emailClient: "email_client",
                    emailType: {
                        key: "value",
                    },
                    id: "id",
                    interests: {
                        key: true,
                    },
                    ipOpt: "ip_opt",
                    ipSignup: "ip_signup",
                    language: "language",
                    lastChanged: new Date("2024-01-15T09:30:00.000Z"),
                    listId: "list_id",
                    marketingPermissions: [{}],
                    memberRating: 1,
                    mergeFields: {
                        key: {
                            addr1: "addr1",
                            city: "city",
                            state: "state",
                            zip: "zip",
                        },
                    },
                    smsPhoneNumber: "sms_phone_number",
                    smsSubscriptionLastUpdated: "sms_subscription_last_updated",
                    smsSubscriptionStatus: "subscribed",
                    source: "source",
                    stats: {
                        ecommerceData: {
                            currencyCode: "USD",
                        },
                    },
                    status: "subscribed",
                    tags: [{}],
                    tagsCount: 1,
                    timestampOpt: new Date("2024-01-15T09:30:00.000Z"),
                    timestampSignup: new Date("2024-01-15T09:30:00.000Z"),
                    uniqueEmailId: "unique_email_id",
                    unsubscribeReason: "unsubscribe_reason",
                    vip: true,
                    webId: 1,
                },
            ],
            totalItems: 1,
        };
        const page = await client.lists.listMembers({
            listId: "list_id",
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
            listId: "list_id",
            emailAddress: "email_address",
            status: "subscribed",
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
            consentsToOneToOneMessaging: true,
            contactId: "contact_id",
            emailAddress: "email_address",
            emailClient: "email_client",
            emailType: {
                key: "value",
            },
            id: "id",
            interests: {
                key: true,
            },
            ipOpt: "ip_opt",
            ipSignup: "ip_signup",
            language: "language",
            lastChanged: new Date("2024-01-15T09:30:00.000Z"),
            lastNote: {
                createdAt: new Date("2024-01-15T09:30:00.000Z"),
                createdBy: "created_by",
                note: "note",
                noteId: 1,
            },
            listId: "list_id",
            location: {
                countryCode: "country_code",
                dstoff: 1,
                gmtoff: 1,
                latitude: 1.1,
                longitude: 1.1,
                region: "region",
                timezone: "timezone",
            },
            marketingPermissions: [
                {
                    enabled: true,
                    marketingPermissionId: "marketing_permission_id",
                    text: "text",
                },
            ],
            memberRating: 1,
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
            smsPhoneNumber: "sms_phone_number",
            smsSubscriptionLastUpdated: "sms_subscription_last_updated",
            smsSubscriptionStatus: "subscribed",
            source: "source",
            stats: {
                avgClickRate: 1.1,
                avgOpenRate: 1.1,
                ecommerceData: {
                    currencyCode: "USD",
                    numberOfOrders: 1.1,
                    totalRevenue: 1.1,
                },
            },
            status: "subscribed",
            tags: [
                {
                    id: 1,
                    name: "name",
                },
            ],
            tagsCount: 1,
            timestampOpt: new Date("2024-01-15T09:30:00.000Z"),
            timestampSignup: new Date("2024-01-15T09:30:00.000Z"),
            uniqueEmailId: "unique_email_id",
            unsubscribeReason: "unsubscribe_reason",
            vip: true,
            webId: 1,
        });
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
            listId: "list_id",
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
            consentsToOneToOneMessaging: true,
            contactId: "contact_id",
            emailAddress: "email_address",
            emailClient: "email_client",
            emailType: {
                key: "value",
            },
            id: "id",
            interests: {
                key: true,
            },
            ipOpt: "ip_opt",
            ipSignup: "ip_signup",
            language: "language",
            lastChanged: new Date("2024-01-15T09:30:00.000Z"),
            lastNote: {
                createdAt: new Date("2024-01-15T09:30:00.000Z"),
                createdBy: "created_by",
                note: "note",
                noteId: 1,
            },
            listId: "list_id",
            location: {
                countryCode: "country_code",
                dstoff: 1,
                gmtoff: 1,
                latitude: 1.1,
                longitude: 1.1,
                region: "region",
                timezone: "timezone",
            },
            marketingPermissions: [
                {
                    enabled: true,
                    marketingPermissionId: "marketing_permission_id",
                    text: "text",
                },
            ],
            memberRating: 1,
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
            smsPhoneNumber: "sms_phone_number",
            smsSubscriptionLastUpdated: "sms_subscription_last_updated",
            smsSubscriptionStatus: "subscribed",
            source: "source",
            stats: {
                avgClickRate: 1.1,
                avgOpenRate: 1.1,
                ecommerceData: {
                    currencyCode: "USD",
                    numberOfOrders: 1.1,
                    totalRevenue: 1.1,
                },
            },
            status: "subscribed",
            tags: [
                {
                    id: 1,
                    name: "name",
                },
            ],
            tagsCount: 1,
            timestampOpt: new Date("2024-01-15T09:30:00.000Z"),
            timestampSignup: new Date("2024-01-15T09:30:00.000Z"),
            uniqueEmailId: "unique_email_id",
            unsubscribeReason: "unsubscribe_reason",
            vip: true,
            webId: 1,
        });
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
            listId: "list_id",
            subscriberHash: "subscriber_hash",
            emailAddress: "email_address",
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
            consentsToOneToOneMessaging: true,
            contactId: "contact_id",
            emailAddress: "email_address",
            emailClient: "email_client",
            emailType: {
                key: "value",
            },
            id: "id",
            interests: {
                key: true,
            },
            ipOpt: "ip_opt",
            ipSignup: "ip_signup",
            language: "language",
            lastChanged: new Date("2024-01-15T09:30:00.000Z"),
            lastNote: {
                createdAt: new Date("2024-01-15T09:30:00.000Z"),
                createdBy: "created_by",
                note: "note",
                noteId: 1,
            },
            listId: "list_id",
            location: {
                countryCode: "country_code",
                dstoff: 1,
                gmtoff: 1,
                latitude: 1.1,
                longitude: 1.1,
                region: "region",
                timezone: "timezone",
            },
            marketingPermissions: [
                {
                    enabled: true,
                    marketingPermissionId: "marketing_permission_id",
                    text: "text",
                },
            ],
            memberRating: 1,
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
            smsPhoneNumber: "sms_phone_number",
            smsSubscriptionLastUpdated: "sms_subscription_last_updated",
            smsSubscriptionStatus: "subscribed",
            source: "source",
            stats: {
                avgClickRate: 1.1,
                avgOpenRate: 1.1,
                ecommerceData: {
                    currencyCode: "USD",
                    numberOfOrders: 1.1,
                    totalRevenue: 1.1,
                },
            },
            status: "subscribed",
            tags: [
                {
                    id: 1,
                    name: "name",
                },
            ],
            tagsCount: 1,
            timestampOpt: new Date("2024-01-15T09:30:00.000Z"),
            timestampSignup: new Date("2024-01-15T09:30:00.000Z"),
            uniqueEmailId: "unique_email_id",
            unsubscribeReason: "unsubscribe_reason",
            vip: true,
            webId: 1,
        });
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
            listId: "list_id",
            subscriberHash: "subscriber_hash",
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
            listId: "list_id",
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
            consentsToOneToOneMessaging: true,
            contactId: "contact_id",
            emailAddress: "email_address",
            emailClient: "email_client",
            emailType: {
                key: "value",
            },
            id: "id",
            interests: {
                key: true,
            },
            ipOpt: "ip_opt",
            ipSignup: "ip_signup",
            language: "language",
            lastChanged: new Date("2024-01-15T09:30:00.000Z"),
            lastNote: {
                createdAt: new Date("2024-01-15T09:30:00.000Z"),
                createdBy: "created_by",
                note: "note",
                noteId: 1,
            },
            listId: "list_id",
            location: {
                countryCode: "country_code",
                dstoff: 1,
                gmtoff: 1,
                latitude: 1.1,
                longitude: 1.1,
                region: "region",
                timezone: "timezone",
            },
            marketingPermissions: [
                {
                    enabled: true,
                    marketingPermissionId: "marketing_permission_id",
                    text: "text",
                },
            ],
            memberRating: 1,
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
            smsPhoneNumber: "sms_phone_number",
            smsSubscriptionLastUpdated: "sms_subscription_last_updated",
            smsSubscriptionStatus: "subscribed",
            source: "source",
            stats: {
                avgClickRate: 1.1,
                avgOpenRate: 1.1,
                ecommerceData: {
                    currencyCode: "USD",
                    numberOfOrders: 1.1,
                    totalRevenue: 1.1,
                },
            },
            status: "subscribed",
            tags: [
                {
                    id: 1,
                    name: "name",
                },
            ],
            tagsCount: 1,
            timestampOpt: new Date("2024-01-15T09:30:00.000Z"),
            timestampSignup: new Date("2024-01-15T09:30:00.000Z"),
            uniqueEmailId: "unique_email_id",
            unsubscribeReason: "unsubscribe_reason",
            vip: true,
            webId: 1,
        });
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
            listId: "list_id",
            subscriberHash: "subscriber_hash",
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
            listId: "list_id",
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
                    campaignId: "campaign_id",
                    parentCampaign: "parent_campaign",
                    timestamp: new Date("2024-01-15T09:30:00.000Z"),
                    title: "title",
                    type: "type",
                    url: "url",
                },
            ],
            contactId: "contact_id",
            emailId: "email_id",
            listId: "list_id",
            totalItems: 1,
        });
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
            activity: [
                {
                    key: "value",
                },
            ],
            emailId: "email_id",
            listId: "list_id",
        };
        const page = await client.lists.listMemberActivityFeed({
            listId: "list_id",
            subscriberHash: "subscriber_hash",
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
            events: [
                {
                    name: "name",
                    occurredAt: new Date("2024-01-15T09:30:00.000Z"),
                    properties: {
                        key: "value",
                    },
                },
            ],
            totalItems: 1,
        };
        const page = await client.lists.listMemberEvents({
            listId: "list_id",
            subscriberHash: "subscriber_hash",
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
            listId: "list_id",
            subscriberHash: "subscriber_hash",
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
            listId: "list_id",
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
            emailId: "email_id",
            goals: [
                {
                    data: "data",
                    event: "event",
                    goalId: 1,
                    lastVisitedAt: new Date("2024-01-15T09:30:00.000Z"),
                },
            ],
            listId: "list_id",
            totalItems: 1,
        });
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
            emailId: "email_id",
            listId: "list_id",
            notes: [
                {
                    links: [{}],
                    contactId: "contact_id",
                    createdAt: new Date("2024-01-15T09:30:00.000Z"),
                    createdBy: "created_by",
                    emailId: "email_id",
                    id: 1,
                    listId: "list_id",
                    note: "note",
                    updatedAt: new Date("2024-01-15T09:30:00.000Z"),
                },
            ],
            totalItems: 1,
        };
        const page = await client.lists.listMemberNotes({
            listId: "list_id",
            subscriberHash: "subscriber_hash",
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
            listId: "list_id",
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
            contactId: "contact_id",
            createdAt: new Date("2024-01-15T09:30:00.000Z"),
            createdBy: "created_by",
            emailId: "email_id",
            id: 1,
            listId: "list_id",
            note: "note",
            updatedAt: new Date("2024-01-15T09:30:00.000Z"),
        });
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
            listId: "list_id",
            subscriberHash: "subscriber_hash",
            noteId: "note_id",
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
            contactId: "contact_id",
            createdAt: new Date("2024-01-15T09:30:00.000Z"),
            createdBy: "created_by",
            emailId: "email_id",
            id: 1,
            listId: "list_id",
            note: "note",
            updatedAt: new Date("2024-01-15T09:30:00.000Z"),
        });
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
            listId: "list_id",
            subscriberHash: "subscriber_hash",
            noteId: "note_id",
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
            listId: "list_id",
            subscriberHash: "subscriber_hash",
            noteId: "note_id",
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
            contactId: "contact_id",
            createdAt: new Date("2024-01-15T09:30:00.000Z"),
            createdBy: "created_by",
            emailId: "email_id",
            id: 1,
            listId: "list_id",
            note: "note",
            updatedAt: new Date("2024-01-15T09:30:00.000Z"),
        });
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
            tags: [
                {
                    dateAdded: new Date("2024-01-15T09:30:00.000Z"),
                    id: 1,
                    name: "name",
                },
            ],
            totalItems: 1,
        };
        const page = await client.lists.listMemberTags({
            listId: "list_id",
            subscriberHash: "subscriber_hash",
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
            listId: "list_id",
            subscriberHash: "subscriber_hash",
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
            listId: "list_id",
            mergeFieldLimit: 30,
            mergeFields: [
                {
                    links: [{}],
                    defaultValue: "default_value",
                    displayOrder: 1,
                    helpText: "help_text",
                    listId: "list_id",
                    mergeFieldLimit: 30,
                    mergeId: 1,
                    name: "name",
                    options: {
                        choices: ["First Choice", "Second Choice", "Third Choice"],
                    },
                    public: true,
                    required: true,
                    tag: "tag",
                    totalItems: 28,
                    type: "text",
                },
            ],
            totalItems: 1,
        };
        const page = await client.lists.listMergeFields({
            listId: "list_id",
        });

        expect(expected.mergeFields).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.mergeFields).toEqual(nextPage.data);
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
            listId: "list_id",
            name: "name",
            type: "text",
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
            defaultValue: "default_value",
            displayOrder: 1,
            helpText: "help_text",
            listId: "list_id",
            mergeFieldLimit: 30,
            mergeId: 1,
            name: "name",
            options: {
                choices: ["First Choice", "Second Choice", "Third Choice"],
                dateFormat: "date_format",
                defaultCountry: 1,
                phoneFormat: "phone_format",
                size: 1,
            },
            public: true,
            required: true,
            tag: "tag",
            totalItems: 28,
            type: "text",
        });
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
            listId: "list_id",
            mergeId: "merge_id",
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
            defaultValue: "default_value",
            displayOrder: 1,
            helpText: "help_text",
            listId: "list_id",
            mergeFieldLimit: 30,
            mergeId: 1,
            name: "name",
            options: {
                choices: ["First Choice", "Second Choice", "Third Choice"],
                dateFormat: "date_format",
                defaultCountry: 1,
                phoneFormat: "phone_format",
                size: 1,
            },
            public: true,
            required: true,
            tag: "tag",
            totalItems: 28,
            type: "text",
        });
    });

    test("delete-merge-field", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/3.0/lists/list_id/merge-fields/merge_id").respondWith().statusCode(200).build();

        const response = await client.lists.deleteMergeField({
            listId: "list_id",
            mergeId: "merge_id",
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
            listId: "list_id",
            mergeId: "merge_id",
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
            defaultValue: "default_value",
            displayOrder: 1,
            helpText: "help_text",
            listId: "list_id",
            mergeFieldLimit: 30,
            mergeId: 1,
            name: "name",
            options: {
                choices: ["First Choice", "Second Choice", "Third Choice"],
                dateFormat: "date_format",
                defaultCountry: 1,
                phoneFormat: "phone_format",
                size: 1,
            },
            public: true,
            required: true,
            tag: "tag",
            totalItems: 28,
            type: "text",
        });
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
            listId: "list_id",
            segments: [
                {
                    links: [{}],
                    createdAt: new Date("2024-01-15T09:30:00.000Z"),
                    id: 1,
                    listId: "list_id",
                    memberCount: 1,
                    name: "name",
                    options: {
                        conditions: [
                            {
                                conditionType: "Aim",
                                value: "any",
                            },
                        ],
                    },
                    type: "saved",
                    updatedAt: new Date("2024-01-15T09:30:00.000Z"),
                },
            ],
            totalItems: 1,
        };
        const page = await client.lists.listSegments({
            listId: "list_id",
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
            listId: "list_id",
            name: "name",
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
            createdAt: new Date("2024-01-15T09:30:00.000Z"),
            id: 1,
            listId: "list_id",
            memberCount: 1,
            name: "name",
            options: {
                conditions: [
                    {
                        conditionType: "Aim",
                        value: "any",
                    },
                ],
                match: "any",
            },
            type: "saved",
            updatedAt: new Date("2024-01-15T09:30:00.000Z"),
        });
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
            listId: "list_id",
            segmentId: "segment_id",
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
            createdAt: new Date("2024-01-15T09:30:00.000Z"),
            id: 1,
            listId: "list_id",
            memberCount: 1,
            name: "name",
            options: {
                conditions: [
                    {
                        conditionType: "Aim",
                        value: "any",
                    },
                ],
                match: "any",
            },
            type: "saved",
            updatedAt: new Date("2024-01-15T09:30:00.000Z"),
        });
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
            listId: "list_id",
            segmentId: "segment_id",
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
            errorCount: 42,
            errors: [
                {
                    emailAddresses: ["email_addresses"],
                    error: "error",
                },
            ],
            membersAdded: [
                {
                    links: [{}],
                    contactId: "contact_id",
                    emailAddress: "email_address",
                    emailClient: "email_client",
                    emailType: "email_type",
                    id: "id",
                    interests: {
                        key: true,
                    },
                    ipOpt: "ip_opt",
                    ipSignup: "ip_signup",
                    language: "language",
                    lastChanged: new Date("2024-01-15T09:30:00.000Z"),
                    listId: "list_id",
                    memberRating: 1,
                    mergeFields: {
                        key: "value",
                    },
                    status: "subscribed",
                    tags: [{}],
                    tagsCount: 1,
                    timestampOpt: new Date("2024-01-15T09:30:00.000Z"),
                    timestampSignup: new Date("2024-01-15T09:30:00.000Z"),
                    uniqueEmailId: "unique_email_id",
                    vip: true,
                },
            ],
            membersRemoved: [
                {
                    links: [{}],
                    contactId: "contact_id",
                    emailAddress: "email_address",
                    emailClient: "email_client",
                    emailType: "email_type",
                    id: "id",
                    interests: {
                        key: true,
                    },
                    ipOpt: "ip_opt",
                    ipSignup: "ip_signup",
                    language: "language",
                    lastChanged: new Date("2024-01-15T09:30:00.000Z"),
                    listId: "list_id",
                    memberRating: 1,
                    mergeFields: {
                        key: "value",
                    },
                    status: "subscribed",
                    tags: [{}],
                    tagsCount: 1,
                    timestampOpt: new Date("2024-01-15T09:30:00.000Z"),
                    timestampSignup: new Date("2024-01-15T09:30:00.000Z"),
                    uniqueEmailId: "unique_email_id",
                    vip: true,
                },
            ],
            totalAdded: 42,
            totalRemoved: 42,
        });
    });

    test("delete-segment", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/3.0/lists/list_id/segments/segment_id").respondWith().statusCode(200).build();

        const response = await client.lists.deleteSegment({
            listId: "list_id",
            segmentId: "segment_id",
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
            listId: "list_id",
            segmentId: "segment_id",
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
            createdAt: new Date("2024-01-15T09:30:00.000Z"),
            id: 1,
            listId: "list_id",
            memberCount: 1,
            name: "name",
            options: {
                conditions: [
                    {
                        conditionType: "Aim",
                        value: "any",
                    },
                ],
                match: "any",
            },
            type: "saved",
            updatedAt: new Date("2024-01-15T09:30:00.000Z"),
        });
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
            members: [
                {
                    links: [{}],
                    emailAddress: "email_address",
                    emailClient: "email_client",
                    emailType: "email_type",
                    fullName: "full_name",
                    id: "id",
                    interests: {
                        key: true,
                    },
                    ipOpt: "ip_opt",
                    ipSignup: "ip_signup",
                    language: "language",
                    lastChanged: new Date("2024-01-15T09:30:00.000Z"),
                    listId: "list_id",
                    memberRating: 1,
                    mergeFields: {
                        key: {
                            addr1: "addr1",
                            city: "city",
                            state: "state",
                            zip: "zip",
                        },
                    },
                    status: "subscribed",
                    timestampOpt: new Date("2024-01-15T09:30:00.000Z"),
                    timestampSignup: new Date("2024-01-15T09:30:00.000Z"),
                    uniqueEmailId: "unique_email_id",
                    vip: true,
                },
            ],
            totalItems: 1,
        };
        const page = await client.lists.listSegmentMembers({
            listId: "list_id",
            segmentId: "segment_id",
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
            listId: "list_id",
            segmentId: "segment_id",
            emailAddress: "email_address",
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
            emailAddress: "email_address",
            emailClient: "email_client",
            emailType: "email_type",
            fullName: "full_name",
            id: "id",
            interests: {
                key: true,
            },
            ipOpt: "ip_opt",
            ipSignup: "ip_signup",
            language: "language",
            lastChanged: new Date("2024-01-15T09:30:00.000Z"),
            lastNote: {
                createdAt: new Date("2024-01-15T09:30:00.000Z"),
                createdBy: "created_by",
                note: "note",
                noteId: 1,
            },
            listId: "list_id",
            location: {
                countryCode: "country_code",
                dstoff: 1,
                gmtoff: 1,
                latitude: 1.1,
                longitude: 1.1,
                timezone: "timezone",
            },
            memberRating: 1,
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
            stats: {
                avgClickRate: 1.1,
                avgOpenRate: 1.1,
            },
            status: "subscribed",
            timestampOpt: new Date("2024-01-15T09:30:00.000Z"),
            timestampSignup: new Date("2024-01-15T09:30:00.000Z"),
            uniqueEmailId: "unique_email_id",
            vip: true,
        });
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
            listId: "list_id",
            segmentId: "segment_id",
            subscriberHash: "subscriber_hash",
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
            listId: "list_id",
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
            listId: "list_id",
            signupForms: [
                {
                    links: [{}],
                    contents: [
                        {
                            value: "Signup message goes here",
                        },
                    ],
                    header: {
                        imageAlt: "This is an image",
                        imageBorderColor: "#896d6d",
                        imageBorderWidth: "2",
                        imageHeight: "200",
                        imageLink: "gotothisimage.com",
                        imageUrl:
                            "http://gallery.mailchimp.com/332310cb9a420a9e7fea2858a/images/2491208c-9458-4834-a708-fef4ee736472.png",
                        imageWidth: "800",
                        text: "Header Text goes here",
                    },
                    listId: "4ca5becb8d",
                    signupFormUrl: "signup_form_url",
                    styles: [
                        {
                            options: [
                                {
                                    property: "background-color",
                                    value: "#111111",
                                },
                            ],
                        },
                    ],
                },
            ],
            totalItems: 1,
        });
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
            listId: "list_id",
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
            contents: [
                {
                    section: "signup_message",
                    value: "Signup message goes here",
                },
            ],
            header: {
                imageAlign: "none",
                imageAlt: "This is an image",
                imageBorderColor: "#896d6d",
                imageBorderStyle: "none",
                imageBorderWidth: "2",
                imageHeight: "200",
                imageLink: "gotothisimage.com",
                imageTarget: "_blank",
                imageUrl:
                    "http://gallery.mailchimp.com/332310cb9a420a9e7fea2858a/images/2491208c-9458-4834-a708-fef4ee736472.png",
                imageWidth: "800",
                text: "Header Text goes here",
            },
            listId: "4ca5becb8d",
            signupFormUrl: "signup_form_url",
            styles: [
                {
                    options: [
                        {
                            property: "background-color",
                            value: "#111111",
                        },
                    ],
                    selector: "page_background",
                },
            ],
        });
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
            listId: "list_id",
        });
        expect(response).toEqual({
            key: "value",
        });
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
            listId: "list_id",
        });
        expect(response).toEqual({
            key: "value",
        });
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
            listId: "list_id",
            surveyId: "survey_id",
        });
        expect(response).toEqual({
            key: "value",
        });
    });

    test("delete-survey", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/3.0/lists/list_id/surveys/survey_id").respondWith().statusCode(200).build();

        const response = await client.lists.deleteSurvey({
            listId: "list_id",
            surveyId: "survey_id",
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
            listId: "list_id",
            surveyId: "survey_id",
        });
        expect(response).toEqual({
            key: "value",
        });
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
            listIdPathParam: "list_id",
            surveyId: "survey_id",
        });
        expect(response).toEqual({
            key: "value",
        });
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
            listId: "list_id",
        });
        expect(response).toEqual({
            tags: [
                {
                    id: 1,
                    name: "name",
                },
            ],
            totalItems: 1,
        });
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
            listId: "list_id",
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
            listId: "list_id",
            totalItems: 1,
            webhooks: [
                {
                    links: [{}],
                    events: {
                        campaign: true,
                        cleaned: true,
                        profile: true,
                        subscribe: true,
                        unsubscribe: true,
                        upemail: true,
                        smsSubscribe: true,
                        smsUnsubscribe: true,
                        upsms: true,
                        smsCampaign: true,
                    },
                    id: "5d9a5e3f7b",
                    listId: "4ca5becb8d",
                    signingEnabled: true,
                    sources: {
                        admin: true,
                        api: true,
                        user: true,
                    },
                    url: "http://yourdomain.com/webhook",
                },
            ],
        });
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
            sources: { admin: true, api: true, user: true },
            url: "http://yourdomain.com/webhook",
            signing_secret: "zI3tsLziqBWhlz6V4PRlGg41u0gdhu7LhYXX4wa0ARM",
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
            listId: "list_id",
            body: {},
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
            events: {
                campaign: true,
                cleaned: true,
                profile: true,
                subscribe: true,
                unsubscribe: true,
                upemail: true,
                smsSubscribe: true,
                smsUnsubscribe: true,
                upsms: true,
                smsCampaign: true,
            },
            id: "5d9a5e3f7b",
            listId: "4ca5becb8d",
            signingEnabled: true,
            sources: {
                admin: true,
                api: true,
                user: true,
            },
            url: "http://yourdomain.com/webhook",
            signingSecret: "zI3tsLziqBWhlz6V4PRlGg41u0gdhu7LhYXX4wa0ARM",
        });
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
            listId: "list_id",
            webhookId: "webhook_id",
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
            events: {
                campaign: true,
                cleaned: true,
                profile: true,
                subscribe: true,
                unsubscribe: true,
                upemail: true,
                smsSubscribe: true,
                smsUnsubscribe: true,
                upsms: true,
                smsCampaign: true,
            },
            id: "5d9a5e3f7b",
            listId: "4ca5becb8d",
            signingEnabled: true,
            sources: {
                admin: true,
                api: true,
                user: true,
            },
            url: "http://yourdomain.com/webhook",
        });
    });

    test("delete-webhook", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/3.0/lists/list_id/webhooks/webhook_id").respondWith().statusCode(200).build();

        const response = await client.lists.deleteWebhook({
            listId: "list_id",
            webhookId: "webhook_id",
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
            listId: "list_id",
            webhookId: "webhook_id",
            body: {},
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
            events: {
                campaign: true,
                cleaned: true,
                profile: true,
                subscribe: true,
                unsubscribe: true,
                upemail: true,
                smsSubscribe: true,
                smsUnsubscribe: true,
                upsms: true,
                smsCampaign: true,
            },
            id: "5d9a5e3f7b",
            listId: "4ca5becb8d",
            signingEnabled: true,
            sources: {
                admin: true,
                api: true,
                user: true,
            },
            url: "http://yourdomain.com/webhook",
        });
    });
});
