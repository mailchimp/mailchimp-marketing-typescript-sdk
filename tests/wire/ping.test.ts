//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("PingClient", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = { health_status: '"Everything\'s Chimpy!"' };

        server.mockEndpoint().get("/3.0/ping").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.ping.list();
        expect(response).toEqual({
            healthStatus: '"Everything\'s Chimpy!"',
        });
    });
});
