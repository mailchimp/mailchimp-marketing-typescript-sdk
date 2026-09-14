//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("CustomerJourneysClient", () => {
    test("create-journey-step-action-trigger", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { email_address: "email_address" };

        server
            .mockEndpoint()
            .post("/3.0/customer-journeys/journeys/1/steps/1/actions/trigger")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.customerJourneys.createJourneyStepActionTrigger({
            journey_id: 1,
            step_id: 1,
            email_address: "email_address",
        });
        expect(response).toEqual(undefined);
    });
});
