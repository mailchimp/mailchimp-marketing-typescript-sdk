//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("RootClient", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            account_id: "account_id",
            account_industry: "account_industry",
            account_name: "account_name",
            account_timezone: "account_timezone",
            avatar_url: "avatar_url",
            contact: {
                addr1: "addr1",
                addr2: "addr2",
                city: "city",
                company: "company",
                country: "country",
                state: "state",
                zip: "zip",
            },
            email: "email",
            first_name: "first_name",
            first_payment: "",
            industry_stats: { bounce_rate: 1.1, click_rate: 1.1, open_rate: 1.1 },
            last_login: "2024-01-15T09:30:00Z",
            last_name: "last_name",
            login_id: "login_id",
            member_since: "2010-01-01T23:59:59Z",
            pricing_plan_type: "monthly",
            pro_enabled: true,
            role: "role",
            total_subscribers: 1,
            username: "freddie2000",
        };

        server.mockEndpoint().get("/3.0/").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.root.list();
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
            accountId: "account_id",
            accountIndustry: "account_industry",
            accountName: "account_name",
            accountTimezone: "account_timezone",
            avatarUrl: "avatar_url",
            contact: {
                addr1: "addr1",
                addr2: "addr2",
                city: "city",
                company: "company",
                country: "country",
                state: "state",
                zip: "zip",
            },
            email: "email",
            firstName: "first_name",
            firstPayment: "",
            industryStats: {
                bounceRate: 1.1,
                clickRate: 1.1,
                openRate: 1.1,
            },
            lastLogin: new Date("2024-01-15T09:30:00.000Z"),
            lastName: "last_name",
            loginId: "login_id",
            memberSince: new Date("2010-01-01T23:59:59.000Z"),
            pricingPlanType: "monthly",
            proEnabled: true,
            role: "role",
            totalSubscribers: 1,
            username: "freddie2000",
        });
    });
});
