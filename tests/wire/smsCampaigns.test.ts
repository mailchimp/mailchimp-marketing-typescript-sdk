//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("SmsCampaignsClient", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            sms_campaigns: [
                {
                    id: "id",
                    web_id: "web_id",
                    name: "name",
                    status: "status",
                    channel: "channel",
                    list_id: 1,
                    recipient_count: 1,
                    create_time: "2024-01-15T09:30:00Z",
                    send_time: "2024-01-15T09:30:00Z",
                    updated_at: "2024-01-15T09:30:00Z",
                    expire_time: "2024-01-15T09:30:00Z",
                    is_send_now: true,
                    folder_id: "folder_id",
                    segments: [1],
                    excluded_segments: [1],
                    _links: [{}],
                },
            ],
            total_items: 1,
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/sms-campaigns")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = {
            smsCampaigns: [
                {
                    id: "id",
                    webId: "web_id",
                    name: "name",
                    status: "status",
                    channel: "channel",
                    listId: 1,
                    recipientCount: 1,
                    createTime: new Date("2024-01-15T09:30:00.000Z"),
                    sendTime: new Date("2024-01-15T09:30:00.000Z"),
                    updatedAt: new Date("2024-01-15T09:30:00.000Z"),
                    expireTime: new Date("2024-01-15T09:30:00.000Z"),
                    isSendNow: true,
                    folderId: "folder_id",
                    segments: [1],
                    excludedSegments: [1],
                    links: [{}],
                },
            ],
            totalItems: 1,
            links: [
                {
                    href: "href",
                    method: "GET",
                    rel: "rel",
                    schema: "schema",
                    targetSchema: "targetSchema",
                },
            ],
        };
        const page = await client.smsCampaigns.list();

        expect(expected.smsCampaigns).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.smsCampaigns).toEqual(nextPage.data);
    });

    test("create", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "name" };
        const rawResponseBody = {
            id: "id",
            web_id: "web_id",
            name: "name",
            status: "status",
            channel: "channel",
            list_id: 1,
            recipient_count: 1,
            create_time: "2024-01-15T09:30:00Z",
            send_time: "2024-01-15T09:30:00Z",
            updated_at: "2024-01-15T09:30:00Z",
            expire_time: "2024-01-15T09:30:00Z",
            is_send_now: true,
            folder_id: "folder_id",
            segments: [1],
            excluded_segments: [1],
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
        };

        server
            .mockEndpoint()
            .post("/3.0/sms-campaigns")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.smsCampaigns.create({
            name: "name",
        });
        expect(response).toEqual({
            id: "id",
            webId: "web_id",
            name: "name",
            status: "status",
            channel: "channel",
            listId: 1,
            recipientCount: 1,
            createTime: new Date("2024-01-15T09:30:00.000Z"),
            sendTime: new Date("2024-01-15T09:30:00.000Z"),
            updatedAt: new Date("2024-01-15T09:30:00.000Z"),
            expireTime: new Date("2024-01-15T09:30:00.000Z"),
            isSendNow: true,
            folderId: "folder_id",
            segments: [1],
            excludedSegments: [1],
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

    test("get", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            id: "id",
            web_id: "web_id",
            name: "name",
            status: "status",
            channel: "channel",
            list_id: 1,
            recipient_count: 1,
            create_time: "2024-01-15T09:30:00Z",
            send_time: "2024-01-15T09:30:00Z",
            updated_at: "2024-01-15T09:30:00Z",
            expire_time: "2024-01-15T09:30:00Z",
            is_send_now: true,
            folder_id: "folder_id",
            segments: [1],
            excluded_segments: [1],
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
        };

        server
            .mockEndpoint()
            .get("/3.0/sms-campaigns/sms_campaign_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.smsCampaigns.get({
            smsCampaignId: "sms_campaign_id",
        });
        expect(response).toEqual({
            id: "id",
            webId: "web_id",
            name: "name",
            status: "status",
            channel: "channel",
            listId: 1,
            recipientCount: 1,
            createTime: new Date("2024-01-15T09:30:00.000Z"),
            sendTime: new Date("2024-01-15T09:30:00.000Z"),
            updatedAt: new Date("2024-01-15T09:30:00.000Z"),
            expireTime: new Date("2024-01-15T09:30:00.000Z"),
            isSendNow: true,
            folderId: "folder_id",
            segments: [1],
            excludedSegments: [1],
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

    test("delete", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/3.0/sms-campaigns/sms_campaign_id").respondWith().statusCode(200).build();

        const response = await client.smsCampaigns.delete({
            smsCampaignId: "sms_campaign_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            id: "id",
            web_id: "web_id",
            name: "name",
            status: "status",
            channel: "channel",
            list_id: 1,
            recipient_count: 1,
            create_time: "2024-01-15T09:30:00Z",
            send_time: "2024-01-15T09:30:00Z",
            updated_at: "2024-01-15T09:30:00Z",
            expire_time: "2024-01-15T09:30:00Z",
            is_send_now: true,
            folder_id: "folder_id",
            segments: [1],
            excluded_segments: [1],
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
        };

        server
            .mockEndpoint()
            .patch("/3.0/sms-campaigns/sms_campaign_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.smsCampaigns.update({
            smsCampaignId: "sms_campaign_id",
        });
        expect(response).toEqual({
            id: "id",
            webId: "web_id",
            name: "name",
            status: "status",
            channel: "channel",
            listId: 1,
            recipientCount: 1,
            createTime: new Date("2024-01-15T09:30:00.000Z"),
            sendTime: new Date("2024-01-15T09:30:00.000Z"),
            updatedAt: new Date("2024-01-15T09:30:00.000Z"),
            expireTime: new Date("2024-01-15T09:30:00.000Z"),
            isSendNow: true,
            folderId: "folder_id",
            segments: [1],
            excludedSegments: [1],
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

    test("create-action-cancel-send", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .post("/3.0/sms-campaigns/sms_campaign_id/actions/cancel-send")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.smsCampaigns.createActionCancelSend({
            smsCampaignId: "sms_campaign_id",
        });
        expect(response).toEqual(undefined);
    });

    test("create-action-schedule", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { schedule_time: "2024-01-15T09:30:00Z" };

        server
            .mockEndpoint()
            .post("/3.0/sms-campaigns/sms_campaign_id/actions/schedule")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.smsCampaigns.createActionSchedule({
            smsCampaignId: "sms_campaign_id",
            scheduleTime: new Date("2024-01-15T09:30:00.000Z"),
        });
        expect(response).toEqual(undefined);
    });

    test("create-action-send", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .post("/3.0/sms-campaigns/sms_campaign_id/actions/send")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.smsCampaigns.createActionSend({
            smsCampaignId: "sms_campaign_id",
        });
        expect(response).toEqual(undefined);
    });

    test("get-content", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            message_body: "message_body",
            estimated_segments: 1,
            merge_fields: ["merge_fields"],
            media: [{ url: "url" }],
            source: { type: "type", id: "id" },
            properties: {
                content_type: "content_type",
                sender: "sender",
                optout_message_language: "optout_message_language",
            },
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
        };

        server
            .mockEndpoint()
            .get("/3.0/sms-campaigns/sms_campaign_id/content")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.smsCampaigns.getContent({
            smsCampaignId: "sms_campaign_id",
        });
        expect(response).toEqual({
            messageBody: "message_body",
            estimatedSegments: 1,
            mergeFields: ["merge_fields"],
            media: [
                {
                    url: "url",
                },
            ],
            source: {
                type: "type",
                id: "id",
            },
            properties: {
                contentType: "content_type",
                sender: "sender",
                optoutMessageLanguage: "optout_message_language",
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

    test("upsert-content", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { message_body: "message_body" };
        const rawResponseBody = {
            message_body: "message_body",
            estimated_segments: 1,
            merge_fields: ["merge_fields"],
            media: [{ url: "url" }],
            source: { type: "type", id: "id" },
            properties: {
                content_type: "content_type",
                sender: "sender",
                optout_message_language: "optout_message_language",
            },
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
        };

        server
            .mockEndpoint()
            .put("/3.0/sms-campaigns/sms_campaign_id/content")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.smsCampaigns.upsertContent({
            smsCampaignId: "sms_campaign_id",
            messageBody: "message_body",
        });
        expect(response).toEqual({
            messageBody: "message_body",
            estimatedSegments: 1,
            mergeFields: ["merge_fields"],
            media: [
                {
                    url: "url",
                },
            ],
            source: {
                type: "type",
                id: "id",
            },
            properties: {
                contentType: "content_type",
                sender: "sender",
                optoutMessageLanguage: "optout_message_language",
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
