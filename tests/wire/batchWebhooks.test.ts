//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("BatchWebhooksClient", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            total_items: 1,
            webhooks: [
                {
                    _links: [[{}]],
                    enabled: true,
                    id: "id",
                    signing_enabled: true,
                    signing_secret: "zI3tsLziqBWhlz6V4PRlGg41u0gdhu7LhYXX4wa0ARM",
                    url: "http://yourdomain.com/webhook",
                },
            ],
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/batch-webhooks")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.batchWebhooks.list();

        expect(expected.webhooks).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.webhooks).toEqual(nextPage.data);
    });

    test("create", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { url: "http://yourdomain.com/webhook" };
        const rawResponseBody = {
            _links: [[{}]],
            enabled: true,
            id: "id",
            signing_enabled: true,
            signing_secret: "zI3tsLziqBWhlz6V4PRlGg41u0gdhu7LhYXX4wa0ARM",
            url: "http://yourdomain.com/webhook",
        };

        server
            .mockEndpoint()
            .post("/3.0/batch-webhooks")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.batchWebhooks.create({
            url: "http://yourdomain.com/webhook",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("get", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [[{}]],
            enabled: true,
            id: "id",
            signing_enabled: true,
            signing_secret: "zI3tsLziqBWhlz6V4PRlGg41u0gdhu7LhYXX4wa0ARM",
            url: "http://yourdomain.com/webhook",
        };

        server
            .mockEndpoint()
            .get("/3.0/batch-webhooks/batch_webhook_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.batchWebhooks.get({
            batch_webhook_id: "batch_webhook_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("delete", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/3.0/batch-webhooks/batch_webhook_id").respondWith().statusCode(200).build();

        const response = await client.batchWebhooks.delete({
            batch_webhook_id: "batch_webhook_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [[{}]],
            enabled: true,
            id: "id",
            signing_enabled: true,
            signing_secret: "zI3tsLziqBWhlz6V4PRlGg41u0gdhu7LhYXX4wa0ARM",
            url: "http://yourdomain.com/webhook",
        };

        server
            .mockEndpoint()
            .patch("/3.0/batch-webhooks/batch_webhook_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.batchWebhooks.update({
            batch_webhook_id: "batch_webhook_id",
        });
        expect(response).toEqual(rawResponseBody);
    });
});
