//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("SearchCampaignsClient", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            results: [
                {
                    campaign: {
                        recipients: {
                            segment_opts: {
                                conditions: [{ condition_type: "Aim", value: "any" }],
                                prebuilt_segment_id: "subscribers-female",
                            },
                        },
                    },
                    snippet: "snippet",
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/search-campaigns")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.searchCampaigns.list({
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
            results: [
                {
                    campaign: {
                        recipients: {
                            segmentOpts: {
                                conditions: [
                                    {
                                        conditionType: "Aim",
                                        value: "any",
                                    },
                                ],
                                prebuiltSegmentId: "subscribers-female",
                            },
                        },
                    },
                    snippet: "snippet",
                },
            ],
            totalItems: 1,
        });
    });
});
