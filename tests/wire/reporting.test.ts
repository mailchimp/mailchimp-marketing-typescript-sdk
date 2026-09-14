//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("ReportingClient", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = [
            { href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" },
        ];

        server.mockEndpoint().get("/3.0/reporting").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.reporting.list();
        expect(response).toEqual(rawResponseBody);
    });

    test("list-facebook-ads", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            facebook_ads: [
                {
                    canceled_at: "2024-01-15T09:30:00Z",
                    create_time: "2024-01-15T09:30:00Z",
                    has_segment: true,
                    id: "id",
                    name: "name",
                    published_time: "2024-01-15T09:30:00Z",
                    recipients: {
                        segment_opts: {
                            conditions: [{ condition_type: "Aim", value: "any" }],
                            prebuilt_segment_id: "subscribers-female",
                        },
                    },
                    show_report: true,
                    start_time: "2024-01-15T09:30:00Z",
                    status: "save",
                    type: "regular",
                    updated_at: "2024-01-15T09:30:00Z",
                    web_id: 1,
                    email_source_name: "email_source_name",
                    end_time: "2024-01-15T09:30:00Z",
                    needs_attention: true,
                    paused_at: "2024-01-15T09:30:00Z",
                    thumbnail: "thumbnail",
                    was_canceled_by_facebook: true,
                    budget: { currency_code: "USD", duration: 86400, total_amount: 500 },
                    channel: { fb_placement_audience: false, fb_placement_feed: true, ig_placement_feed: false },
                    _links: [{}],
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/reporting/facebook-ads")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.reporting.listFacebookAds();

        expect(expected.facebook_ads).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.facebook_ads).toEqual(nextPage.data);
    });

    test("get-facebook-ad", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            canceled_at: "2024-01-15T09:30:00Z",
            create_time: "2024-01-15T09:30:00Z",
            has_segment: true,
            id: "id",
            name: "name",
            published_time: "2024-01-15T09:30:00Z",
            recipients: {
                list_id: "list_id",
                list_is_active: true,
                list_name: "list_name",
                recipient_count: 1,
                segment_opts: {
                    conditions: [{ condition_type: "Aim", value: "any" }],
                    match: "any",
                    prebuilt_segment_id: "subscribers-female",
                    saved_segment_id: 1,
                },
                segment_text: "segment_text",
            },
            report_summary: {
                average_daily_budget: { amount: 1.1, currency_code: "currency_code" },
                average_order_amount: { amount: 1.1, currency_code: "currency_code" },
                click_rate: 1.1,
                clicks: 1,
                comments: 1,
                cost_per_click: { amount: 1.1, currency_code: "currency_code" },
                ecommerce: { currency_code: "currency_code", total_revenue: 1.1 },
                extended_at: { datetime: "datetime", timezone: "timezone" },
                first_time_buyers: 1,
                has_extended_ad_duration: true,
                impressions: 1,
                likes: 1,
                reach: 1,
                return_on_investment: 1.1,
                shares: 1,
                total_orders: 1,
                total_products_sold: 1,
                unique_clicks: 1,
            },
            show_report: true,
            start_time: "2024-01-15T09:30:00Z",
            status: "save",
            type: "regular",
            updated_at: "2024-01-15T09:30:00Z",
            web_id: 1,
            email_source_name: "email_source_name",
            end_time: "2024-01-15T09:30:00Z",
            needs_attention: true,
            paused_at: "2024-01-15T09:30:00Z",
            thumbnail: "thumbnail",
            was_canceled_by_facebook: true,
            audience: {
                email_source: {
                    is_segment: true,
                    list_name: "list_name",
                    name: "name",
                    segment_type: "segment_type",
                    type: "type",
                },
                include_source_in_target: true,
                lookalike_country_code: "lookalike_country_code",
                source_type: "facebook",
                targeting_specs: { gender: 1, interests: [{}], max_age: 1, min_age: 1 },
                type: "Custom Audience",
            },
            audience_activity: { clicks: [{}], impressions: [{}], revenue: [{}] },
            budget: { currency_code: "USD", duration: 86400, total_amount: 500 },
            channel: { fb_placement_audience: false, fb_placement_feed: true, ig_placement_feed: false },
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
        };

        server
            .mockEndpoint()
            .get("/3.0/reporting/facebook-ads/outreach_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reporting.getFacebookAd({
            outreach_id: "outreach_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-facebook-ad-ecommerce-product-activity", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            products: [
                {
                    currency_code: "currency_code",
                    image_url: "image_url",
                    recommendation_purchased: 1,
                    recommendation_total: 1,
                    sku: "sku",
                    title: "title",
                    total_purchased: 1.1,
                    total_revenue: 1.1,
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/reporting/facebook-ads/outreach_id/ecommerce-product-activity")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.reporting.listFacebookAdEcommerceProductActivity({
            outreach_id: "outreach_id",
        });

        expect(expected.products).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.products).toEqual(nextPage.data);
    });

    test("list-landing-pages", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            landing_pages: [
                {
                    _links: [{}],
                    clicks: 1,
                    conversion_rate: 1.1,
                    id: "00dfc2e1f0",
                    list_id: "list_id",
                    list_name: "Test List",
                    name: "name",
                    published_at: "2024-01-15T09:30:00Z",
                    signup_tags: [{}],
                    status: "status",
                    subscribes: 1,
                    timeseries: {
                        daily_stats: {
                            clicks: [{ date: "2018-04-25", val: 13 }],
                            unique_visits: [{ date: "2018-04-25", val: 1 }],
                            visits: [{ date: "2018-04-25", val: 11 }],
                        },
                        weekly_stats: {
                            clicks: [{ date: "2018-04-25", val: 23 }],
                            unique_visits: [{ date: "2018-04-25", val: 1 }],
                            visits: [{ date: "2018-04-25", val: 49 }],
                        },
                    },
                    title: "title",
                    unique_visits: 1,
                    unpublished_at: "2024-01-15T09:30:00Z",
                    url: "url",
                    visits: 1,
                    web_id: 33345484,
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/reporting/landing-pages")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.reporting.listLandingPages();

        expect(expected.landing_pages).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.landing_pages).toEqual(nextPage.data);
    });

    test("get-landing-page", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            clicks: 1,
            conversion_rate: 1.1,
            ecommerce: {
                average_order_revenue: 1.1,
                currency_code: "currency_code",
                total_orders: 1,
                total_revenue: 1.1,
            },
            id: "00dfc2e1f0",
            list_id: "list_id",
            list_name: "Test List",
            name: "name",
            published_at: "2024-01-15T09:30:00Z",
            signup_tags: [{ tag_id: 1, tag_name: "tag_name" }],
            status: "status",
            subscribes: 1,
            timeseries: {
                daily_stats: {
                    clicks: [{ date: "2018-04-25", val: 13 }],
                    unique_visits: [{ date: "2018-04-25", val: 1 }],
                    visits: [{ date: "2018-04-25", val: 11 }],
                },
                weekly_stats: {
                    clicks: [{ date: "2018-04-25", val: 23 }],
                    unique_visits: [{ date: "2018-04-25", val: 1 }],
                    visits: [{ date: "2018-04-25", val: 49 }],
                },
            },
            title: "title",
            unique_visits: 1,
            unpublished_at: "2024-01-15T09:30:00Z",
            url: "url",
            visits: 1,
            web_id: 33345484,
        };

        server
            .mockEndpoint()
            .get("/3.0/reporting/landing-pages/outreach_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reporting.getLandingPage({
            outreach_id: "outreach_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-surveys", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            surveys: [
                {
                    created_at: "2017-08-04T11:09:01Z",
                    id: "040d2c2e1f0",
                    list_id: "list_id",
                    list_name: "list_name",
                    published_at: "2017-08-04T11:09:01Z",
                    status: "published",
                    title: "New product ideas",
                    total_responses: 810,
                    updated_at: "2017-08-04T11:09:01Z",
                    url: "url",
                    web_id: 165,
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/reporting/surveys")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = rawResponseBody;
        const page = await client.reporting.listSurveys();

        expect(expected.surveys).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.surveys).toEqual(nextPage.data);
    });

    test("get-survey", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            created_at: "2017-08-04T11:09:01Z",
            id: "040d2c2e1f0",
            list_id: "list_id",
            list_name: "list_name",
            published_at: "2017-08-04T11:09:01Z",
            status: "published",
            title: "New product ideas",
            total_responses: 810,
            updated_at: "2017-08-04T11:09:01Z",
            url: "url",
            web_id: 165,
        };

        server
            .mockEndpoint()
            .get("/3.0/reporting/surveys/survey_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reporting.getSurvey({
            survey_id: "survey_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-survey-questions", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            questions: [
                {
                    average_rating: 2.5,
                    has_other: true,
                    id: "id",
                    is_required: true,
                    options: [{}],
                    other_label: "other_label",
                    placeholder_label: "placeholder_label",
                    query: "query",
                    range_high_label: "range_high_label",
                    range_low_label: "range_low_label",
                    subscribe_checkbox_enabled: true,
                    subscribe_checkbox_label: "subscribe_checkbox_label",
                    survey_id: "survey_id",
                    total_responses: 810,
                    type: "pickOne",
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/reporting/surveys/survey_id/questions")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reporting.listSurveyQuestions({
            survey_id: "survey_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("get-survey-question", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            average_rating: 2.5,
            contact_counts: { known: 1, "new": 1, unknown: 1 },
            has_other: true,
            id: "id",
            is_required: true,
            merge_field: { id: 1, label: "label", type: "text" },
            options: [{ count: 1, id: "id", label: "label" }],
            other_label: "other_label",
            placeholder_label: "placeholder_label",
            query: "query",
            range_high_label: "range_high_label",
            range_low_label: "range_low_label",
            subscribe_checkbox_enabled: true,
            subscribe_checkbox_label: "subscribe_checkbox_label",
            survey_id: "survey_id",
            total_responses: 810,
            type: "pickOne",
        };

        server
            .mockEndpoint()
            .get("/3.0/reporting/surveys/survey_id/questions/question_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reporting.getSurveyQuestion({
            survey_id: "survey_id",
            question_id: "question_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-survey-question-answers", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            answers: [
                {
                    id: "id",
                    is_new_contact: true,
                    response_id: "response_id",
                    submitted_at: "2024-01-15T09:30:00Z",
                    value: "value",
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/reporting/surveys/survey_id/questions/question_id/answers")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reporting.listSurveyQuestionAnswers({
            survey_id: "survey_id",
            question_id: "question_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("list-survey-responses", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            responses: [{ is_new_contact: true, response_id: "response_id", submitted_at: "2024-01-15T09:30:00Z" }],
            total_items: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/reporting/surveys/survey_id/responses")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reporting.listSurveyResponses({
            survey_id: "survey_id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("get-survey-respons", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            contact: {
                avatar_url: "avatar_url",
                consents_to_one_to_one_messaging: true,
                contact_id: "contact_id",
                email: "email",
                email_id: "email_id",
                full_name: "full_name",
                phone: "phone",
                status: "Subscribed",
            },
            is_new_contact: true,
            response_id: "response_id",
            results: [{ answer: "answer", query: "query", question_id: "question_id", question_type: "pickOne" }],
            submitted_at: "2024-01-15T09:30:00Z",
        };

        server
            .mockEndpoint()
            .get("/3.0/reporting/surveys/survey_id/responses/response_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reporting.getSurveyRespons({
            survey_id: "survey_id",
            response_id: "response_id",
        });
        expect(response).toEqual(rawResponseBody);
    });
});
