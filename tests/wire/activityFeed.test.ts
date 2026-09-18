//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("ActivityFeedClient", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = [
            { href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" },
        ];

        server.mockEndpoint().get("/3.0/activity-feed").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.activityFeed.list();
        expect(response).toEqual([
            {
                href: "href",
                method: "GET",
                rel: "rel",
                schema: "schema",
                targetSchema: "targetSchema",
            },
        ]);
    });

    test("list-chimp-chatter", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            chimp_chatter: [
                {
                    campaign_id: "2017-08-04T11:09:01+00:00",
                    list_id: "2017-08-04T11:09:01+00:00",
                    message: "People are telling their friends about your campaign!",
                    title: "1 new subscriber to Your New Campaign!",
                    type: "lists:new-subscriber",
                    update_time: "2017-08-04T11:09:01Z",
                    url: "http://dev.mailchimp.com/reports/summary?id=1",
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/activity-feed/chimp-chatter")
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
            chimpChatter: [
                {
                    campaignId: "2017-08-04T11:09:01+00:00",
                    listId: "2017-08-04T11:09:01+00:00",
                    message: "People are telling their friends about your campaign!",
                    title: "1 new subscriber to Your New Campaign!",
                    type: "lists:new-subscriber",
                    updateTime: new Date("2017-08-04T11:09:01.000Z"),
                    url: "http://dev.mailchimp.com/reports/summary?id=1",
                },
            ],
            totalItems: 1,
        };
        const page = await client.activityFeed.listChimpChatter();

        expect(expected.chimpChatter).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.chimpChatter).toEqual(nextPage.data);
    });
});
