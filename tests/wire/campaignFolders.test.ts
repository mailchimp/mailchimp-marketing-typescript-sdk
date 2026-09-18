//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("CampaignFoldersClient", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            folders: [{ _links: [{}], count: 1, id: "id", name: "name" }],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/campaign-folders")
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
            folders: [
                {
                    links: [{}],
                    count: 1,
                    id: "id",
                    name: "name",
                },
            ],
            totalItems: 1,
        };
        const page = await client.campaignFolders.list();

        expect(expected.folders).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.folders).toEqual(nextPage.data);
    });

    test("create", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "name" };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            folders: [{ _links: [{}], count: 1, id: "id", name: "name" }],
            total_items: 1,
        };

        server
            .mockEndpoint()
            .post("/3.0/campaign-folders")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.campaignFolders.create({
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
            folders: [
                {
                    links: [{}],
                    count: 1,
                    id: "id",
                    name: "name",
                },
            ],
            totalItems: 1,
        });
    });

    test("get", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            count: 1,
            id: "id",
            name: "name",
        };

        server
            .mockEndpoint()
            .get("/3.0/campaign-folders/folder_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.campaignFolders.get({
            folderId: "folder_id",
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
            count: 1,
            id: "id",
            name: "name",
        });
    });

    test("delete", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/3.0/campaign-folders/folder_id").respondWith().statusCode(200).build();

        const response = await client.campaignFolders.delete({
            folderId: "folder_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "name" };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            count: 1,
            id: "id",
            name: "name",
        };

        server
            .mockEndpoint()
            .patch("/3.0/campaign-folders/folder_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.campaignFolders.update({
            folderId: "folder_id",
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
            count: 1,
            id: "id",
            name: "name",
        });
    });
});
