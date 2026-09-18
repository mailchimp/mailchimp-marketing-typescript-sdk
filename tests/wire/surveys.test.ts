//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("SurveysClient", () => {
    test("create-list-survey-action-create-email", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            ab_split_opts: {
                from_name_a: "from_name_a",
                from_name_b: "from_name_b",
                pick_winner: "opens",
                reply_email_a: "reply_email_a",
                reply_email_b: "reply_email_b",
                send_time_a: "2024-01-15T09:30:00Z",
                send_time_b: "2024-01-15T09:30:00Z",
                send_time_winner: "send_time_winner",
                split_size: 1,
                split_test: "subject",
                subject_a: "subject_a",
                subject_b: "subject_b",
                wait_time: 1,
                wait_units: "hours",
            },
            archive_url: "archive_url",
            content_type: "content_type",
            create_time: "2024-01-15T09:30:00Z",
            delivery_status: {
                can_cancel: true,
                emails_canceled: 1,
                emails_sent: 1,
                enabled: true,
                status: "delivering",
            },
            emails_sent: 1,
            id: "id",
            long_archive_url: "long_archive_url",
            needs_block_refresh: true,
            parent_campaign_id: "parent_campaign_id",
            recipients: {
                list_id: "list_id",
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
                click_rate: 1.1,
                clicks: 1,
                ecommerce: { total_orders: 1, total_revenue: 1.1, total_spent: 1.1 },
                open_rate: 1.1,
                opens: 1,
                subscriber_clicks: 1,
                unique_opens: 1,
            },
            resendable: true,
            rss_opts: {
                constrain_rss_img: true,
                feed_url: "feed_url",
                frequency: "daily",
                last_sent: "2024-01-15T09:30:00Z",
                schedule: { hour: 1, monthly_send_date: 1.1, weekly_send_day: "sunday" },
            },
            send_time: "2024-01-15T09:30:00Z",
            settings: {
                authenticate: true,
                auto_fb_post: ["auto_fb_post"],
                auto_footer: true,
                auto_tweet: true,
                drag_and_drop: true,
                fb_comments: true,
                folder_id: "folder_id",
                from_name: "from_name",
                inline_css: true,
                preview_text: "preview_text",
                reply_to: "reply_to",
                subject_line: "subject_line",
                template_id: 1,
                timewarp: true,
                title: "title",
                to_name: "to_name",
                use_conversation: true,
            },
            social_card: { description: "description", image_url: "image_url", title: "title" },
            status: "save",
            tracking: {
                capsule: { notes: true },
                clicktale: "clicktale",
                ecomm360: true,
                goal_tracking: true,
                google_analytics: "google_analytics",
                html_clicks: true,
                opens: true,
                salesforce: { campaign: true, notes: true },
                text_clicks: true,
            },
            type: "regular",
            variate_settings: {
                combinations: [{}],
                contents: ["contents"],
                from_names: ["from_names"],
                reply_to_addresses: ["reply_to_addresses"],
                send_times: ["2024-01-15T09:30:00Z"],
                subject_lines: ["subject_lines"],
                test_size: 1,
                wait_time: 1,
                winner_criteria: "opens",
                winning_campaign_id: "winning_campaign_id",
                winning_combination_id: "winning_combination_id",
            },
            web_id: 1,
        };

        server
            .mockEndpoint()
            .post("/3.0/lists/list_id/surveys/survey_id/actions/create-email")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.surveys.createListSurveyActionCreateEmail({
            listId: "list_id",
            surveyId: "survey_id",
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
            abSplitOpts: {
                fromNameA: "from_name_a",
                fromNameB: "from_name_b",
                pickWinner: "opens",
                replyEmailA: "reply_email_a",
                replyEmailB: "reply_email_b",
                sendTimeA: new Date("2024-01-15T09:30:00.000Z"),
                sendTimeB: new Date("2024-01-15T09:30:00.000Z"),
                sendTimeWinner: "send_time_winner",
                splitSize: 1,
                splitTest: "subject",
                subjectA: "subject_a",
                subjectB: "subject_b",
                waitTime: 1,
                waitUnits: "hours",
            },
            archiveUrl: "archive_url",
            contentType: "content_type",
            createTime: new Date("2024-01-15T09:30:00.000Z"),
            deliveryStatus: {
                canCancel: true,
                emailsCanceled: 1,
                emailsSent: 1,
                enabled: true,
                status: "delivering",
            },
            emailsSent: 1,
            id: "id",
            longArchiveUrl: "long_archive_url",
            needsBlockRefresh: true,
            parentCampaignId: "parent_campaign_id",
            recipients: {
                listId: "list_id",
                listName: "list_name",
                recipientCount: 1,
                segmentOpts: {
                    conditions: [
                        {
                            conditionType: "Aim",
                            value: "any",
                        },
                    ],
                    match: "any",
                    prebuiltSegmentId: "subscribers-female",
                    savedSegmentId: 1,
                },
                segmentText: "segment_text",
            },
            reportSummary: {
                clickRate: 1.1,
                clicks: 1,
                ecommerce: {
                    totalOrders: 1,
                    totalRevenue: 1.1,
                    totalSpent: 1.1,
                },
                openRate: 1.1,
                opens: 1,
                subscriberClicks: 1,
                uniqueOpens: 1,
            },
            resendable: true,
            rssOpts: {
                constrainRssImg: true,
                feedUrl: "feed_url",
                frequency: "daily",
                lastSent: new Date("2024-01-15T09:30:00.000Z"),
                schedule: {
                    hour: 1,
                    monthlySendDate: 1.1,
                    weeklySendDay: "sunday",
                },
            },
            sendTime: new Date("2024-01-15T09:30:00.000Z"),
            settings: {
                authenticate: true,
                autoFbPost: ["auto_fb_post"],
                autoFooter: true,
                autoTweet: true,
                dragAndDrop: true,
                fbComments: true,
                folderId: "folder_id",
                fromName: "from_name",
                inlineCss: true,
                previewText: "preview_text",
                replyTo: "reply_to",
                subjectLine: "subject_line",
                templateId: 1,
                timewarp: true,
                title: "title",
                toName: "to_name",
                useConversation: true,
            },
            socialCard: {
                description: "description",
                imageUrl: "image_url",
                title: "title",
            },
            status: "save",
            tracking: {
                capsule: {
                    notes: true,
                },
                clicktale: "clicktale",
                ecomm360: true,
                goalTracking: true,
                googleAnalytics: "google_analytics",
                htmlClicks: true,
                opens: true,
                salesforce: {
                    campaign: true,
                    notes: true,
                },
                textClicks: true,
            },
            type: "regular",
            variateSettings: {
                combinations: [{}],
                contents: ["contents"],
                fromNames: ["from_names"],
                replyToAddresses: ["reply_to_addresses"],
                sendTimes: [new Date("2024-01-15T09:30:00.000Z")],
                subjectLines: ["subject_lines"],
                testSize: 1,
                waitTime: 1,
                winnerCriteria: "opens",
                winningCampaignId: "winning_campaign_id",
                winningCombinationId: "winning_combination_id",
            },
            webId: 1,
        });
    });

    test("create-list-survey-action-publish", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/3.0/lists/list_id/surveys/survey_id/actions/publish")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.surveys.createListSurveyActionPublish({
            listId: "list_id",
            surveyId: "survey_id",
        });
        expect(response).toEqual({
            key: "value",
        });
    });

    test("create-list-survey-action-unpublish", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/3.0/lists/list_id/surveys/survey_id/actions/unpublish")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.surveys.createListSurveyActionUnpublish({
            listId: "list_id",
            surveyId: "survey_id",
        });
        expect(response).toEqual({
            key: "value",
        });
    });
});
