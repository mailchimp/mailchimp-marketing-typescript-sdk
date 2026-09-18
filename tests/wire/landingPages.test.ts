//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("LandingPagesClient", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            landing_pages: [
                {
                    _links: [{}],
                    created_at: "2024-01-15T09:30:00Z",
                    created_by_source: "created_by_source",
                    description: "description",
                    id: "030092c2e1f0",
                    list_id: "fde02ad86b",
                    name: "name",
                    published_at: "2024-01-15T09:30:00Z",
                    status: "published",
                    store_id: "store_id",
                    template_id: 1,
                    title: "title",
                    unpublished_at: "2024-01-15T09:30:00Z",
                    updated_at: "2024-01-15T09:30:00Z",
                    url: "url",
                    web_id: 1,
                },
            ],
            total_items: 1,
        };

        server.mockEndpoint().get("/3.0/landing-pages").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.landingPages.list();
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
            landingPages: [
                {
                    links: [{}],
                    createdAt: new Date("2024-01-15T09:30:00.000Z"),
                    createdBySource: "created_by_source",
                    description: "description",
                    id: "030092c2e1f0",
                    listId: "fde02ad86b",
                    name: "name",
                    publishedAt: new Date("2024-01-15T09:30:00.000Z"),
                    status: "published",
                    storeId: "store_id",
                    templateId: 1,
                    title: "title",
                    unpublishedAt: new Date("2024-01-15T09:30:00.000Z"),
                    updatedAt: new Date("2024-01-15T09:30:00.000Z"),
                    url: "url",
                    webId: 1,
                },
            ],
            totalItems: 1,
        });
    });

    test("create", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            created_at: "2024-01-15T09:30:00Z",
            created_by_source: "created_by_source",
            description: "description",
            id: "030092c2e1f0",
            list_id: "fde02ad86b",
            name: "name",
            published_at: "2024-01-15T09:30:00Z",
            status: "published",
            store_id: "store_id",
            template_id: 1,
            title: "title",
            tracking: { enable_restricted_data_processing: true, track_with_mailchimp: true },
            unpublished_at: "2024-01-15T09:30:00Z",
            updated_at: "2024-01-15T09:30:00Z",
            url: "url",
            web_id: 1,
        };

        server
            .mockEndpoint()
            .post("/3.0/landing-pages")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.landingPages.create();
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
            createdBySource: "created_by_source",
            description: "description",
            id: "030092c2e1f0",
            listId: "fde02ad86b",
            name: "name",
            publishedAt: new Date("2024-01-15T09:30:00.000Z"),
            status: "published",
            storeId: "store_id",
            templateId: 1,
            title: "title",
            tracking: {
                enableRestrictedDataProcessing: true,
                trackWithMailchimp: true,
            },
            unpublishedAt: new Date("2024-01-15T09:30:00.000Z"),
            updatedAt: new Date("2024-01-15T09:30:00.000Z"),
            url: "url",
            webId: 1,
        });
    });

    test("get", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            created_at: "2024-01-15T09:30:00Z",
            created_by_source: "created_by_source",
            description: "description",
            id: "030092c2e1f0",
            list_id: "fde02ad86b",
            name: "name",
            published_at: "2024-01-15T09:30:00Z",
            status: "published",
            store_id: "store_id",
            template_id: 1,
            title: "title",
            tracking: { enable_restricted_data_processing: true, track_with_mailchimp: true },
            unpublished_at: "2024-01-15T09:30:00Z",
            updated_at: "2024-01-15T09:30:00Z",
            url: "url",
            web_id: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/landing-pages/page_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.landingPages.get({
            pageId: "page_id",
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
            createdBySource: "created_by_source",
            description: "description",
            id: "030092c2e1f0",
            listId: "fde02ad86b",
            name: "name",
            publishedAt: new Date("2024-01-15T09:30:00.000Z"),
            status: "published",
            storeId: "store_id",
            templateId: 1,
            title: "title",
            tracking: {
                enableRestrictedDataProcessing: true,
                trackWithMailchimp: true,
            },
            unpublishedAt: new Date("2024-01-15T09:30:00.000Z"),
            updatedAt: new Date("2024-01-15T09:30:00.000Z"),
            url: "url",
            webId: 1,
        });
    });

    test("delete", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/3.0/landing-pages/page_id").respondWith().statusCode(200).build();

        const response = await client.landingPages.delete({
            pageId: "page_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            created_at: "2024-01-15T09:30:00Z",
            created_by_source: "created_by_source",
            description: "description",
            id: "030092c2e1f0",
            list_id: "fde02ad86b",
            name: "name",
            published_at: "2024-01-15T09:30:00Z",
            status: "published",
            store_id: "store_id",
            template_id: 1,
            title: "title",
            tracking: { enable_restricted_data_processing: true, track_with_mailchimp: true },
            unpublished_at: "2024-01-15T09:30:00Z",
            updated_at: "2024-01-15T09:30:00Z",
            url: "url",
            web_id: 1,
        };

        server
            .mockEndpoint()
            .patch("/3.0/landing-pages/page_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.landingPages.update({
            pageId: "page_id",
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
            createdBySource: "created_by_source",
            description: "description",
            id: "030092c2e1f0",
            listId: "fde02ad86b",
            name: "name",
            publishedAt: new Date("2024-01-15T09:30:00.000Z"),
            status: "published",
            storeId: "store_id",
            templateId: 1,
            title: "title",
            tracking: {
                enableRestrictedDataProcessing: true,
                trackWithMailchimp: true,
            },
            unpublishedAt: new Date("2024-01-15T09:30:00.000Z"),
            updatedAt: new Date("2024-01-15T09:30:00.000Z"),
            url: "url",
            webId: 1,
        });
    });

    test("create-action-publish", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().post("/3.0/landing-pages/page_id/actions/publish").respondWith().statusCode(200).build();

        const response = await client.landingPages.createActionPublish({
            pageId: "page_id",
        });
        expect(response).toEqual(undefined);
    });

    test("create-action-unpublish", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .post("/3.0/landing-pages/page_id/actions/unpublish")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.landingPages.createActionUnpublish({
            pageId: "page_id",
        });
        expect(response).toEqual(undefined);
    });

    test("list-content", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            html: "html",
            json: "json",
        };

        server
            .mockEndpoint()
            .get("/3.0/landing-pages/page_id/content")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.landingPages.listContent({
            pageId: "page_id",
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
            html: "html",
            json: "json",
        });
    });
});
