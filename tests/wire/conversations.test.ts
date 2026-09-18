//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("ConversationsClient", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            conversations: [
                {
                    _links: [{}],
                    campaign_id: "campaign_id",
                    from_email: "from_email",
                    from_label: "from_label",
                    id: "id",
                    list_id: "list_id",
                    message_count: 1,
                    subject: "subject",
                    unread_messages: 1,
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/conversations")
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
            conversations: [
                {
                    links: [{}],
                    campaignId: "campaign_id",
                    fromEmail: "from_email",
                    fromLabel: "from_label",
                    id: "id",
                    listId: "list_id",
                    messageCount: 1,
                    subject: "subject",
                    unreadMessages: 1,
                },
            ],
            totalItems: 1,
        };
        const page = await client.conversations.list();

        expect(expected.conversations).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.conversations).toEqual(nextPage.data);
    });

    test("get", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaign_id: "campaign_id",
            from_email: "from_email",
            from_label: "from_label",
            id: "id",
            last_message: {
                from_email: "from_email",
                from_label: "from_label",
                message: "message",
                read: true,
                subject: "subject",
                timestamp: "2024-01-15T09:30:00Z",
            },
            list_id: "list_id",
            message_count: 1,
            subject: "subject",
            unread_messages: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/conversations/conversation_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.conversations.get({
            conversationId: "conversation_id",
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
            fromEmail: "from_email",
            fromLabel: "from_label",
            id: "id",
            lastMessage: {
                fromEmail: "from_email",
                fromLabel: "from_label",
                message: "message",
                read: true,
                subject: "subject",
                timestamp: new Date("2024-01-15T09:30:00.000Z"),
            },
            listId: "list_id",
            messageCount: 1,
            subject: "subject",
            unreadMessages: 1,
        });
    });

    test("list-messages", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            conversation_id: "conversation_id",
            conversation_messages: [
                {
                    _links: [{}],
                    conversation_id: "conversation_id",
                    from_email: "from_email",
                    from_label: "from_label",
                    id: "id",
                    list_id: 1,
                    message: "message",
                    read: true,
                    subject: "subject",
                    timestamp: "2024-01-15T09:30:00Z",
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/conversations/conversation_id/messages")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.conversations.listMessages({
            conversationId: "conversation_id",
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
            conversationId: "conversation_id",
            conversationMessages: [
                {
                    links: [{}],
                    conversationId: "conversation_id",
                    fromEmail: "from_email",
                    fromLabel: "from_label",
                    id: "id",
                    listId: 1,
                    message: "message",
                    read: true,
                    subject: "subject",
                    timestamp: new Date("2024-01-15T09:30:00.000Z"),
                },
            ],
            totalItems: 1,
        });
    });

    test("get-message", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            conversation_id: "conversation_id",
            from_email: "from_email",
            from_label: "from_label",
            id: "id",
            list_id: 1,
            message: "message",
            read: true,
            subject: "subject",
            timestamp: "2024-01-15T09:30:00Z",
        };

        server
            .mockEndpoint()
            .get("/3.0/conversations/conversation_id/messages/message_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.conversations.getMessage({
            conversationId: "conversation_id",
            messageId: "message_id",
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
            conversationId: "conversation_id",
            fromEmail: "from_email",
            fromLabel: "from_label",
            id: "id",
            listId: 1,
            message: "message",
            read: true,
            subject: "subject",
            timestamp: new Date("2024-01-15T09:30:00.000Z"),
        });
    });
});
