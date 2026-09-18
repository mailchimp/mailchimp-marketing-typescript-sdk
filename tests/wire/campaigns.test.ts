//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("CampaignsClient", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaigns: [
                {
                    _links: [{}],
                    archive_url: "archive_url",
                    content_type: "template",
                    create_time: "2024-01-15T09:30:00Z",
                    emails_sent: 1,
                    id: "id",
                    long_archive_url: "long_archive_url",
                    needs_block_refresh: true,
                    parent_campaign_id: "parent_campaign_id",
                    recipients: {
                        segment_opts: {
                            conditions: [{ condition_type: "Aim", value: "any" }],
                            prebuilt_segment_id: "subscribers-female",
                        },
                    },
                    resendable: true,
                    send_time: "2024-01-15T09:30:00Z",
                    status: "save",
                    type: "regular",
                    web_id: 1,
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/campaigns")
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
            campaigns: [
                {
                    links: [{}],
                    archiveUrl: "archive_url",
                    contentType: "template",
                    createTime: new Date("2024-01-15T09:30:00.000Z"),
                    emailsSent: 1,
                    id: "id",
                    longArchiveUrl: "long_archive_url",
                    needsBlockRefresh: true,
                    parentCampaignId: "parent_campaign_id",
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
                    resendable: true,
                    sendTime: new Date("2024-01-15T09:30:00.000Z"),
                    status: "save",
                    type: "regular",
                    webId: 1,
                },
            ],
            totalItems: 1,
        };
        const page = await client.campaigns.list();

        expect(expected.campaigns).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.campaigns).toEqual(nextPage.data);
    });

    test("create", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { type: "regular" };
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
            .post("/3.0/campaigns")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.campaigns.create({
            type: "regular",
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

    test("get", async () => {
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
            .get("/3.0/campaigns/campaign_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.campaigns.get({
            campaignId: "campaign_id",
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

    test("delete", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/3.0/campaigns/campaign_id").respondWith().statusCode(200).build();

        const response = await client.campaigns.delete({
            campaignId: "campaign_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
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
            .patch("/3.0/campaigns/campaign_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.campaigns.update({
            campaignId: "campaign_id",
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

    test("create-action-cancel-send", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .post("/3.0/campaigns/campaign_id/actions/cancel-send")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.campaigns.createActionCancelSend({
            campaignId: "campaign_id",
        });
        expect(response).toEqual(undefined);
    });

    test("create-action-create-resend", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
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
            .post("/3.0/campaigns/campaign_id/actions/create-resend")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.campaigns.createActionCreateResend({
            campaignId: "campaign_id",
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

    test("create-action-pause", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().post("/3.0/campaigns/campaign_id/actions/pause").respondWith().statusCode(200).build();

        const response = await client.campaigns.createActionPause({
            campaignId: "campaign_id",
        });
        expect(response).toEqual(undefined);
    });

    test("create-action-replicate", async () => {
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
            .post("/3.0/campaigns/campaign_id/actions/replicate")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.campaigns.createActionReplicate({
            campaignId: "campaign_id",
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

    test("create-action-resume", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().post("/3.0/campaigns/campaign_id/actions/resume").respondWith().statusCode(200).build();

        const response = await client.campaigns.createActionResume({
            campaignId: "campaign_id",
        });
        expect(response).toEqual(undefined);
    });

    test("create-action-schedule", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { schedule_time: "2024-01-15T09:30:00Z" };

        server
            .mockEndpoint()
            .post("/3.0/campaigns/campaign_id/actions/schedule")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.campaigns.createActionSchedule({
            campaignId: "campaign_id",
            scheduleTime: new Date("2024-01-15T09:30:00.000Z"),
        });
        expect(response).toEqual(undefined);
    });

    test("create-action-send", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().post("/3.0/campaigns/campaign_id/actions/send").respondWith().statusCode(200).build();

        const response = await client.campaigns.createActionSend({
            campaignId: "campaign_id",
        });
        expect(response).toEqual(undefined);
    });

    test("create-action-test", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { send_type: "html", test_emails: ["test_emails"] };

        server
            .mockEndpoint()
            .post("/3.0/campaigns/campaign_id/actions/test")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.campaigns.createActionTest({
            campaignId: "campaign_id",
            sendType: "html",
            testEmails: ["test_emails"],
        });
        expect(response).toEqual(undefined);
    });

    test("create-action-unschedule", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .post("/3.0/campaigns/campaign_id/actions/unschedule")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.campaigns.createActionUnschedule({
            campaignId: "campaign_id",
        });
        expect(response).toEqual(undefined);
    });

    test("get-content", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            archive_html:
                '<!DOCTYPE html><html xmlns=http://www.w3.org/1999/xhtml><head><meta http-equiv=Content-Type content="text/html; charset=UTF-8"><title>My Subject</title><style type=text/css>body{background-color:#d0e4fe}</style><body leftmargin=0 marginwidth=0 topmargin=0 marginheight=0 offset=0>',
            html: "html",
            plain_text: "plain_text",
            variate_contents: [
                {
                    content_label: "Green header",
                    html: '<!DOCTYPE html><html xmlns=http://www.w3.org/1999/xhtml><head><meta http-equiv=Content-Type content="text/html; charset=UTF-8"><title>*|MC:SUBJECT|*</title><style type=text/css>body{background-color:#d0e4fe}</style><body leftmargin=0 marginwidth=0 topmargin=0 marginheight=0 offset=0>',
                    plain_text: "plain_text",
                },
            ],
        };

        server
            .mockEndpoint()
            .get("/3.0/campaigns/campaign_id/content")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.campaigns.getContent({
            campaignId: "campaign_id",
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
            archiveHtml:
                '<!DOCTYPE html><html xmlns=http://www.w3.org/1999/xhtml><head><meta http-equiv=Content-Type content="text/html; charset=UTF-8"><title>My Subject</title><style type=text/css>body{background-color:#d0e4fe}</style><body leftmargin=0 marginwidth=0 topmargin=0 marginheight=0 offset=0>',
            html: "html",
            plainText: "plain_text",
            variateContents: [
                {
                    contentLabel: "Green header",
                    html: '<!DOCTYPE html><html xmlns=http://www.w3.org/1999/xhtml><head><meta http-equiv=Content-Type content="text/html; charset=UTF-8"><title>*|MC:SUBJECT|*</title><style type=text/css>body{background-color:#d0e4fe}</style><body leftmargin=0 marginwidth=0 topmargin=0 marginheight=0 offset=0>',
                    plainText: "plain_text",
                },
            ],
        });
    });

    test("upsert-content", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            archive_html:
                '<!DOCTYPE html><html xmlns=http://www.w3.org/1999/xhtml><head><meta http-equiv=Content-Type content="text/html; charset=UTF-8"><title>My Subject</title><style type=text/css>body{background-color:#d0e4fe}</style><body leftmargin=0 marginwidth=0 topmargin=0 marginheight=0 offset=0>',
            html: "html",
            plain_text: "plain_text",
            variate_contents: [
                {
                    content_label: "Green header",
                    html: '<!DOCTYPE html><html xmlns=http://www.w3.org/1999/xhtml><head><meta http-equiv=Content-Type content="text/html; charset=UTF-8"><title>*|MC:SUBJECT|*</title><style type=text/css>body{background-color:#d0e4fe}</style><body leftmargin=0 marginwidth=0 topmargin=0 marginheight=0 offset=0>',
                    plain_text: "plain_text",
                },
            ],
        };

        server
            .mockEndpoint()
            .put("/3.0/campaigns/campaign_id/content")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.campaigns.upsertContent({
            campaignId: "campaign_id",
            body: {},
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
            archiveHtml:
                '<!DOCTYPE html><html xmlns=http://www.w3.org/1999/xhtml><head><meta http-equiv=Content-Type content="text/html; charset=UTF-8"><title>My Subject</title><style type=text/css>body{background-color:#d0e4fe}</style><body leftmargin=0 marginwidth=0 topmargin=0 marginheight=0 offset=0>',
            html: "html",
            plainText: "plain_text",
            variateContents: [
                {
                    contentLabel: "Green header",
                    html: '<!DOCTYPE html><html xmlns=http://www.w3.org/1999/xhtml><head><meta http-equiv=Content-Type content="text/html; charset=UTF-8"><title>*|MC:SUBJECT|*</title><style type=text/css>body{background-color:#d0e4fe}</style><body leftmargin=0 marginwidth=0 topmargin=0 marginheight=0 offset=0>',
                    plainText: "plain_text",
                },
            ],
        });
    });

    test("list-feedback", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaign_id: "campaign_id",
            feedback: [
                {
                    _links: [{}],
                    block_id: 1,
                    campaign_id: "campaign_id",
                    created_at: "2024-01-15T09:30:00Z",
                    created_by: "created_by",
                    feedback_id: 1,
                    is_complete: true,
                    message: "message",
                    parent_id: 1,
                    source: "api",
                    updated_at: "2024-01-15T09:30:00Z",
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/campaigns/campaign_id/feedback")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.campaigns.listFeedback({
            campaignId: "campaign_id",
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
            feedback: [
                {
                    links: [{}],
                    blockId: 1,
                    campaignId: "campaign_id",
                    createdAt: new Date("2024-01-15T09:30:00.000Z"),
                    createdBy: "created_by",
                    feedbackId: 1,
                    isComplete: true,
                    message: "message",
                    parentId: 1,
                    source: "api",
                    updatedAt: new Date("2024-01-15T09:30:00.000Z"),
                },
            ],
            totalItems: 1,
        });
    });

    test("create-feedback", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { message: "message" };
        const rawResponseBody = { block_id: 1, is_complete: true, message: "message" };

        server
            .mockEndpoint()
            .post("/3.0/campaigns/campaign_id/feedback")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.campaigns.createFeedback({
            campaignId: "campaign_id",
            message: "message",
        });
        expect(response).toEqual({
            blockId: 1,
            isComplete: true,
            message: "message",
        });
    });

    test("get-feedback", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            block_id: 1,
            campaign_id: "campaign_id",
            created_at: "2024-01-15T09:30:00Z",
            created_by: "created_by",
            feedback_id: 1,
            is_complete: true,
            message: "message",
            parent_id: 1,
            source: "api",
            updated_at: "2024-01-15T09:30:00Z",
        };

        server
            .mockEndpoint()
            .get("/3.0/campaigns/campaign_id/feedback/feedback_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.campaigns.getFeedback({
            campaignId: "campaign_id",
            feedbackId: "feedback_id",
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
            blockId: 1,
            campaignId: "campaign_id",
            createdAt: new Date("2024-01-15T09:30:00.000Z"),
            createdBy: "created_by",
            feedbackId: 1,
            isComplete: true,
            message: "message",
            parentId: 1,
            source: "api",
            updatedAt: new Date("2024-01-15T09:30:00.000Z"),
        });
    });

    test("delete-feedback", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .delete("/3.0/campaigns/campaign_id/feedback/feedback_id")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.campaigns.deleteFeedback({
            campaignId: "campaign_id",
            feedbackId: "feedback_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-feedback", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            block_id: 1,
            campaign_id: "campaign_id",
            created_at: "2024-01-15T09:30:00Z",
            created_by: "created_by",
            feedback_id: 1,
            is_complete: true,
            message: "message",
            parent_id: 1,
            source: "api",
            updated_at: "2024-01-15T09:30:00Z",
        };

        server
            .mockEndpoint()
            .patch("/3.0/campaigns/campaign_id/feedback/feedback_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.campaigns.updateFeedback({
            campaignId: "campaign_id",
            feedbackId: "feedback_id",
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
            blockId: 1,
            campaignId: "campaign_id",
            createdAt: new Date("2024-01-15T09:30:00.000Z"),
            createdBy: "created_by",
            feedbackId: 1,
            isComplete: true,
            message: "message",
            parentId: 1,
            source: "api",
            updatedAt: new Date("2024-01-15T09:30:00.000Z"),
        });
    });

    test("list-send-checklist", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            is_ready: true,
            items: [{ details: "details", heading: "heading", id: 1, type: "success" }],
        };

        server
            .mockEndpoint()
            .get("/3.0/campaigns/campaign_id/send-checklist")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.campaigns.listSendChecklist({
            campaignId: "campaign_id",
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
            isReady: true,
            items: [
                {
                    details: "details",
                    heading: "heading",
                    id: 1,
                    type: "success",
                },
            ],
        });
    });
});
