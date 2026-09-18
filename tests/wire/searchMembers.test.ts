//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("SearchMembersClient", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            exact_matches: { members: [{ stats: { ecommerce_data: { currency_code: "USD" } } }], total_items: 1 },
            full_search: { members: [{ stats: { ecommerce_data: { currency_code: "USD" } } }], total_items: 1 },
        };

        server
            .mockEndpoint()
            .get("/3.0/search-members")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.searchMembers.list({
            query: "query",
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
            exactMatches: {
                members: [
                    {
                        stats: {
                            ecommerceData: {
                                currencyCode: "USD",
                            },
                        },
                    },
                ],
                totalItems: 1,
            },
            fullSearch: {
                members: [
                    {
                        stats: {
                            ecommerceData: {
                                currencyCode: "USD",
                            },
                        },
                    },
                ],
                totalItems: 1,
            },
        });
    });
});
