//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("FileManagerClient", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = [
            { href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" },
        ];

        server.mockEndpoint().get("/3.0/file-manager").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.fileManager.list();
        expect(response).toEqual(rawResponseBody);
    });

    test("list-files", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            files: [
                {
                    _links: [{}],
                    created_at: "2024-01-15T09:30:00Z",
                    created_by: "created_by",
                    folder_id: 1,
                    full_size_url: "full_size_url",
                    height: 1,
                    id: 1,
                    name: "name",
                    size: 1,
                    thumbnail_url: "thumbnail_url",
                    type: "image",
                    width: 1,
                },
            ],
            total_file_size: 1.1,
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/file-manager/files")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.fileManager.listFiles();

        expect(expected.files).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.files).toEqual(nextPage.data);
    });

    test("create-file", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { file_data: "file_data", name: "name" };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            created_at: "2024-01-15T09:30:00Z",
            created_by: "created_by",
            folder_id: 1,
            full_size_url: "full_size_url",
            height: 1,
            id: 1,
            name: "name",
            size: 1,
            thumbnail_url: "thumbnail_url",
            type: "image",
            width: 1,
        };

        server
            .mockEndpoint()
            .post("/3.0/file-manager/files")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.fileManager.createFile({
            file_data: "file_data",
            name: "name",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("get-file", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            created_at: "2024-01-15T09:30:00Z",
            created_by: "created_by",
            folder_id: 1,
            full_size_url: "full_size_url",
            height: 1,
            id: 1,
            name: "name",
            size: 1,
            thumbnail_url: "thumbnail_url",
            type: "image",
            width: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/file-manager/files/file_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.fileManager.getFile({
            file_id: "file_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("delete-file", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/3.0/file-manager/files/file_id").respondWith().statusCode(200).build();

        const response = await client.fileManager.deleteFile({
            file_id: "file_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-file", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            created_at: "2024-01-15T09:30:00Z",
            created_by: "created_by",
            folder_id: 1,
            full_size_url: "full_size_url",
            height: 1,
            id: 1,
            name: "name",
            size: 1,
            thumbnail_url: "thumbnail_url",
            type: "image",
            width: 1,
        };

        server
            .mockEndpoint()
            .patch("/3.0/file-manager/files/file_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.fileManager.updateFile({
            file_id: "file_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-folders", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            folders: [
                {
                    _links: [{}],
                    created_at: "2024-01-15T09:30:00Z",
                    created_by: "created_by",
                    file_count: 1,
                    id: 1,
                    name: "name",
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/file-manager/folders")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.fileManager.listFolders();

        expect(expected.folders).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.folders).toEqual(nextPage.data);
    });

    test("create-folder", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "name" };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            created_at: "2024-01-15T09:30:00Z",
            created_by: "created_by",
            file_count: 1,
            id: 1,
            name: "name",
        };

        server
            .mockEndpoint()
            .post("/3.0/file-manager/folders")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.fileManager.createFolder({
            name: "name",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("get-folder", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            created_at: "2024-01-15T09:30:00Z",
            created_by: "created_by",
            file_count: 1,
            id: 1,
            name: "name",
        };

        server
            .mockEndpoint()
            .get("/3.0/file-manager/folders/folder_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.fileManager.getFolder({
            folder_id: "folder_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("delete-folder", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/3.0/file-manager/folders/folder_id").respondWith().statusCode(200).build();

        const response = await client.fileManager.deleteFolder({
            folder_id: "folder_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-folder", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { name: "name" };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            created_at: "2024-01-15T09:30:00Z",
            created_by: "created_by",
            file_count: 1,
            id: 1,
            name: "name",
        };

        server
            .mockEndpoint()
            .patch("/3.0/file-manager/folders/folder_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.fileManager.updateFolder({
            folder_id: "folder_id",
            name: "name",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-folder-files", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            files: [
                {
                    _links: [{}],
                    created_at: "2024-01-15T09:30:00Z",
                    created_by: "created_by",
                    folder_id: 1,
                    full_size_url: "full_size_url",
                    height: 1,
                    id: 1,
                    name: "name",
                    size: 1,
                    thumbnail_url: "thumbnail_url",
                    type: "image",
                    width: 1,
                },
            ],
            total_file_size: 1.1,
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/file-manager/folders/folder_id/files")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.fileManager.listFolderFiles({
            folder_id: "folder_id",
        });

        expect(expected.files).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.files).toEqual(nextPage.data);
    });
});
