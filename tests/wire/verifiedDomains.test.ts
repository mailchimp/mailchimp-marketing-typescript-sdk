//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("VerifiedDomainsClient", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            domains: [
                {
                    authenticated: true,
                    domain: "domain",
                    is_free_email_provider: true,
                    status: "VERIFICATION_IN_PROGRESS",
                    verification_email: "verification_email",
                    verification_sent: "2024-01-15T09:30:00Z",
                    verified: true,
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/verified-domains")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.verifiedDomains.list();
        expect(response).toEqual({
            domains: [
                {
                    authenticated: true,
                    domain: "domain",
                    isFreeEmailProvider: true,
                    status: "VERIFICATION_IN_PROGRESS",
                    verificationEmail: "verification_email",
                    verificationSent: new Date("2024-01-15T09:30:00.000Z"),
                    verified: true,
                },
            ],
            totalItems: 1,
        });
    });

    test("create", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { verification_email: "verification_email" };
        const rawResponseBody = {
            authenticated: true,
            domain: "domain",
            is_free_email_provider: true,
            status: "VERIFICATION_IN_PROGRESS",
            verification_email: "verification_email",
            verification_sent: "2024-01-15T09:30:00Z",
            verified: true,
        };

        server
            .mockEndpoint()
            .post("/3.0/verified-domains")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.verifiedDomains.create({
            verificationEmail: "verification_email",
        });
        expect(response).toEqual({
            authenticated: true,
            domain: "domain",
            isFreeEmailProvider: true,
            status: "VERIFICATION_IN_PROGRESS",
            verificationEmail: "verification_email",
            verificationSent: new Date("2024-01-15T09:30:00.000Z"),
            verified: true,
        });
    });

    test("get", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            authenticated: true,
            domain: "domain",
            is_free_email_provider: true,
            status: "VERIFICATION_IN_PROGRESS",
            verification_email: "verification_email",
            verification_sent: "2024-01-15T09:30:00Z",
            verified: true,
        };

        server
            .mockEndpoint()
            .get("/3.0/verified-domains/domain_name")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.verifiedDomains.get({
            domainName: "domain_name",
        });
        expect(response).toEqual({
            authenticated: true,
            domain: "domain",
            isFreeEmailProvider: true,
            status: "VERIFICATION_IN_PROGRESS",
            verificationEmail: "verification_email",
            verificationSent: new Date("2024-01-15T09:30:00.000Z"),
            verified: true,
        });
    });

    test("delete", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/3.0/verified-domains/domain_name").respondWith().statusCode(200).build();

        const response = await client.verifiedDomains.delete({
            domainName: "domain_name",
        });
        expect(response).toEqual(undefined);
    });

    test("create-action-verify", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { code: "code" };
        const rawResponseBody = {
            authenticated: true,
            domain: "domain",
            is_free_email_provider: true,
            status: "VERIFICATION_IN_PROGRESS",
            verification_email: "verification_email",
            verification_sent: "2024-01-15T09:30:00Z",
            verified: true,
        };

        server
            .mockEndpoint()
            .post("/3.0/verified-domains/domain_name/actions/verify")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.verifiedDomains.createActionVerify({
            domainName: "domain_name",
            code: "code",
        });
        expect(response).toEqual({
            authenticated: true,
            domain: "domain",
            isFreeEmailProvider: true,
            status: "VERIFICATION_IN_PROGRESS",
            verificationEmail: "verification_email",
            verificationSent: new Date("2024-01-15T09:30:00.000Z"),
            verified: true,
        });
    });
});
