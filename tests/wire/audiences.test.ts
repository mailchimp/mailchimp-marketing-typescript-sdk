//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("AudiencesClient", () => {
    test("getAudienceContactList", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            contacts: [
                {
                    audience_id: "773280e405",
                    created_at: "2024-01-15T09:30:00Z",
                    email_channel: {
                        email: "example@freddiemail.com",
                        hashed_email: "9115d71ba28088047d342e3bcedacd0f",
                        marketing_consent: { captured_at: "2024-01-15T10:30:00Z" },
                    },
                    id: "7CCF816ADF6CE1B11AE09BB024A02B9B",
                    language: "",
                    last_updated_at: "2024-01-15T09:30:00Z",
                    merge_fields: { key: { addr1: "addr1", city: "city", state: "state", zip: "zip" } },
                    sms_channel: {
                        marketing_consent: { captured_at: "2024-01-15T10:30:00Z" },
                        sms_phone: "+14045550102",
                        hashed_sms_phone: "0572084e1f8288816f02cdb7bd930c62400bc8aef510adfaa9eec2b995fa7609",
                    },
                    status: "active",
                    tags: ["tags"],
                },
            ],
            next_cursor: "next_cursor",
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
        };

        server
            .mockEndpoint()
            .get("/3.0/audiences/audience_id/contacts")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.audiences.getAudienceContactList({
            audienceId: "audience_id",
        });
        expect(response).toEqual({
            contacts: [
                {
                    audienceId: "773280e405",
                    createdAt: new Date("2024-01-15T09:30:00.000Z"),
                    emailChannel: {
                        email: "example@freddiemail.com",
                        hashedEmail: "9115d71ba28088047d342e3bcedacd0f",
                        marketingConsent: {
                            capturedAt: new Date("2024-01-15T10:30:00.000Z"),
                        },
                    },
                    id: "7CCF816ADF6CE1B11AE09BB024A02B9B",
                    language: "",
                    lastUpdatedAt: new Date("2024-01-15T09:30:00.000Z"),
                    mergeFields: {
                        key: {
                            addr1: "addr1",
                            city: "city",
                            state: "state",
                            zip: "zip",
                        },
                    },
                    smsChannel: {
                        marketingConsent: {
                            capturedAt: new Date("2024-01-15T10:30:00.000Z"),
                        },
                        smsPhone: "+14045550102",
                        hashedSmsPhone: "0572084e1f8288816f02cdb7bd930c62400bc8aef510adfaa9eec2b995fa7609",
                    },
                    status: "active",
                    tags: ["tags"],
                },
            ],
            nextCursor: "next_cursor",
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

    test("createAudienceContact", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            audience_id: "773280e405",
            created_at: "2024-01-15T09:30:00Z",
            email_channel: {
                effective_subscription_status: { value: "subscribed" },
                email: "example@freddiemail.com",
                hashed_email: "9115d71ba28088047d342e3bcedacd0f",
                marketing_consent: { status: "consented", captured_at: "2024-01-15T10:30:00Z" },
                source: { name: "name" },
            },
            id: "7CCF816ADF6CE1B11AE09BB024A02B9B",
            language: "",
            last_updated_at: "2024-01-15T09:30:00Z",
            merge_fields: {
                key: { addr1: "addr1", addr2: "addr2", city: "city", state: "state", zip: "zip", country: "country" },
            },
            sms_channel: {
                effective_subscription_status: { value: "subscribed" },
                marketing_consent: { status: "consented", captured_at: "2024-01-15T10:30:00Z" },
                sms_phone: "+14045550102",
                source: { name: "name" },
                hashed_sms_phone: "0572084e1f8288816f02cdb7bd930c62400bc8aef510adfaa9eec2b995fa7609",
            },
            source: { name: "name" },
            status: "active",
            tags: ["tags"],
        };

        server
            .mockEndpoint()
            .post("/3.0/audiences/audience_id/contacts")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.audiences.createAudienceContact({
            audienceId: "audience_id",
        });
        expect(response).toEqual({
            audienceId: "773280e405",
            createdAt: new Date("2024-01-15T09:30:00.000Z"),
            emailChannel: {
                effectiveSubscriptionStatus: {
                    value: "subscribed",
                },
                email: "example@freddiemail.com",
                hashedEmail: "9115d71ba28088047d342e3bcedacd0f",
                marketingConsent: {
                    status: "consented",
                    capturedAt: new Date("2024-01-15T10:30:00.000Z"),
                },
                source: {
                    name: "name",
                },
            },
            id: "7CCF816ADF6CE1B11AE09BB024A02B9B",
            language: "",
            lastUpdatedAt: new Date("2024-01-15T09:30:00.000Z"),
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
            smsChannel: {
                effectiveSubscriptionStatus: {
                    value: "subscribed",
                },
                marketingConsent: {
                    status: "consented",
                    capturedAt: new Date("2024-01-15T10:30:00.000Z"),
                },
                smsPhone: "+14045550102",
                source: {
                    name: "name",
                },
                hashedSmsPhone: "0572084e1f8288816f02cdb7bd930c62400bc8aef510adfaa9eec2b995fa7609",
            },
            source: {
                name: "name",
            },
            status: "active",
            tags: ["tags"],
        });
    });

    test("getAudienceContact", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            audience_id: "773280e405",
            created_at: "2024-01-15T09:30:00Z",
            email_channel: {
                effective_subscription_status: { value: "subscribed" },
                email: "example@freddiemail.com",
                hashed_email: "9115d71ba28088047d342e3bcedacd0f",
                marketing_consent: { status: "consented", captured_at: "2024-01-15T10:30:00Z" },
                source: { name: "name" },
            },
            id: "7CCF816ADF6CE1B11AE09BB024A02B9B",
            language: "",
            last_updated_at: "2024-01-15T09:30:00Z",
            merge_fields: {
                key: { addr1: "addr1", addr2: "addr2", city: "city", state: "state", zip: "zip", country: "country" },
            },
            sms_channel: {
                effective_subscription_status: { value: "subscribed" },
                marketing_consent: { status: "consented", captured_at: "2024-01-15T10:30:00Z" },
                sms_phone: "+14045550102",
                source: { name: "name" },
                hashed_sms_phone: "0572084e1f8288816f02cdb7bd930c62400bc8aef510adfaa9eec2b995fa7609",
            },
            source: { name: "name" },
            status: "active",
            tags: ["tags"],
        };

        server
            .mockEndpoint()
            .get("/3.0/audiences/audience_id/contacts/contact_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.audiences.getAudienceContact({
            audienceId: "audience_id",
            contactId: "contact_id",
        });
        expect(response).toEqual({
            audienceId: "773280e405",
            createdAt: new Date("2024-01-15T09:30:00.000Z"),
            emailChannel: {
                effectiveSubscriptionStatus: {
                    value: "subscribed",
                },
                email: "example@freddiemail.com",
                hashedEmail: "9115d71ba28088047d342e3bcedacd0f",
                marketingConsent: {
                    status: "consented",
                    capturedAt: new Date("2024-01-15T10:30:00.000Z"),
                },
                source: {
                    name: "name",
                },
            },
            id: "7CCF816ADF6CE1B11AE09BB024A02B9B",
            language: "",
            lastUpdatedAt: new Date("2024-01-15T09:30:00.000Z"),
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
            smsChannel: {
                effectiveSubscriptionStatus: {
                    value: "subscribed",
                },
                marketingConsent: {
                    status: "consented",
                    capturedAt: new Date("2024-01-15T10:30:00.000Z"),
                },
                smsPhone: "+14045550102",
                source: {
                    name: "name",
                },
                hashedSmsPhone: "0572084e1f8288816f02cdb7bd930c62400bc8aef510adfaa9eec2b995fa7609",
            },
            source: {
                name: "name",
            },
            status: "active",
            tags: ["tags"],
        });
    });

    test("patchAudienceContact", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            audience_id: "773280e405",
            created_at: "2024-01-15T09:30:00Z",
            email_channel: {
                effective_subscription_status: { value: "subscribed" },
                email: "example@freddiemail.com",
                hashed_email: "9115d71ba28088047d342e3bcedacd0f",
                marketing_consent: { status: "consented", captured_at: "2024-01-15T10:30:00Z" },
                source: { name: "name" },
            },
            id: "7CCF816ADF6CE1B11AE09BB024A02B9B",
            language: "",
            last_updated_at: "2024-01-15T09:30:00Z",
            merge_fields: {
                key: { addr1: "addr1", addr2: "addr2", city: "city", state: "state", zip: "zip", country: "country" },
            },
            sms_channel: {
                effective_subscription_status: { value: "subscribed" },
                marketing_consent: { status: "consented", captured_at: "2024-01-15T10:30:00Z" },
                sms_phone: "+14045550102",
                source: { name: "name" },
                hashed_sms_phone: "0572084e1f8288816f02cdb7bd930c62400bc8aef510adfaa9eec2b995fa7609",
            },
            source: { name: "name" },
            status: "active",
            tags: ["tags"],
        };

        server
            .mockEndpoint()
            .patch("/3.0/audiences/audience_id/contacts/contact_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.audiences.patchAudienceContact({
            audienceId: "audience_id",
            contactId: "contact_id",
        });
        expect(response).toEqual({
            audienceId: "773280e405",
            createdAt: new Date("2024-01-15T09:30:00.000Z"),
            emailChannel: {
                effectiveSubscriptionStatus: {
                    value: "subscribed",
                },
                email: "example@freddiemail.com",
                hashedEmail: "9115d71ba28088047d342e3bcedacd0f",
                marketingConsent: {
                    status: "consented",
                    capturedAt: new Date("2024-01-15T10:30:00.000Z"),
                },
                source: {
                    name: "name",
                },
            },
            id: "7CCF816ADF6CE1B11AE09BB024A02B9B",
            language: "",
            lastUpdatedAt: new Date("2024-01-15T09:30:00.000Z"),
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
            smsChannel: {
                effectiveSubscriptionStatus: {
                    value: "subscribed",
                },
                marketingConsent: {
                    status: "consented",
                    capturedAt: new Date("2024-01-15T10:30:00.000Z"),
                },
                smsPhone: "+14045550102",
                source: {
                    name: "name",
                },
                hashedSmsPhone: "0572084e1f8288816f02cdb7bd930c62400bc8aef510adfaa9eec2b995fa7609",
            },
            source: {
                name: "name",
            },
            status: "active",
            tags: ["tags"],
        });
    });

    test("postAudiencesContactsActionsArchive", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .post("/3.0/audiences/audience_id/contacts/contact_id/actions/archive")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.audiences.postAudiencesContactsActionsArchive({
            audienceId: "audience_id",
            contactId: "contact_id",
        });
        expect(response).toEqual(undefined);
    });

    test("postAudiencesContactsActionsForget", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .post("/3.0/audiences/audience_id/contacts/contact_id/actions/forget")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.audiences.postAudiencesContactsActionsForget({
            audienceId: "audience_id",
            contactId: "contact_id",
        });
        expect(response).toEqual(undefined);
    });
});
