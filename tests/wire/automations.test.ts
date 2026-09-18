//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("AutomationsClient", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            automations: [
                {
                    _links: [{}],
                    create_time: "2024-01-15T09:30:00Z",
                    emails_sent: 1,
                    id: "id",
                    recipients: { segment_opts: [{ condition_type: "Aim", value: "any" }], store_id: "1a2df69xxx" },
                    start_time: "2024-01-15T09:30:00Z",
                    status: "save",
                    trigger_settings: { workflow_type: "abandonedBrowse" },
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/automations")
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
            automations: [
                {
                    links: [{}],
                    createTime: new Date("2024-01-15T09:30:00.000Z"),
                    emailsSent: 1,
                    id: "id",
                    recipients: {
                        segmentOpts: [
                            {
                                conditionType: "Aim",
                                value: "any",
                            },
                        ],
                        storeId: "1a2df69xxx",
                    },
                    startTime: new Date("2024-01-15T09:30:00.000Z"),
                    status: "save",
                    triggerSettings: {
                        workflowType: "abandonedBrowse",
                    },
                },
            ],
            totalItems: 1,
        };
        const page = await client.automations.list();

        expect(expected.automations).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.automations).toEqual(nextPage.data);
    });

    test("create", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { recipients: {}, trigger_settings: { workflow_type: "abandonedBrowse" } };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            create_time: "2024-01-15T09:30:00Z",
            emails_sent: 1,
            id: "id",
            recipients: {
                list_id: "list_id",
                list_is_active: true,
                list_name: "list_name",
                segment_opts: [{ condition_type: "Aim", value: "any" }],
                store_id: "1a2df69xxx",
            },
            report_summary: {
                click_rate: 1.1,
                clicks: 1,
                open_rate: 1.1,
                opens: 1,
                subscriber_clicks: 1,
                unique_opens: 1,
            },
            settings: {
                authenticate: true,
                auto_footer: true,
                from_name: "from_name",
                inline_css: true,
                reply_to: "reply_to",
                title: "title",
                to_name: "to_name",
                use_conversation: true,
            },
            start_time: "2024-01-15T09:30:00Z",
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
            trigger_settings: {
                runtime: { days: ["sunday"], hours: { type: "send_asap" } },
                workflow_emails_count: 1,
                workflow_title: "workflow_title",
                workflow_type: "abandonedBrowse",
            },
        };

        server
            .mockEndpoint()
            .post("/3.0/automations")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.automations.create({
            recipients: {},
            triggerSettings: {
                workflowType: "abandonedBrowse",
            },
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
            createTime: new Date("2024-01-15T09:30:00.000Z"),
            emailsSent: 1,
            id: "id",
            recipients: {
                listId: "list_id",
                listIsActive: true,
                listName: "list_name",
                segmentOpts: [
                    {
                        conditionType: "Aim",
                        value: "any",
                    },
                ],
                storeId: "1a2df69xxx",
            },
            reportSummary: {
                clickRate: 1.1,
                clicks: 1,
                openRate: 1.1,
                opens: 1,
                subscriberClicks: 1,
                uniqueOpens: 1,
            },
            settings: {
                authenticate: true,
                autoFooter: true,
                fromName: "from_name",
                inlineCss: true,
                replyTo: "reply_to",
                title: "title",
                toName: "to_name",
                useConversation: true,
            },
            startTime: new Date("2024-01-15T09:30:00.000Z"),
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
            triggerSettings: {
                runtime: {
                    days: ["sunday"],
                    hours: {
                        type: "send_asap",
                    },
                },
                workflowEmailsCount: 1,
                workflowTitle: "workflow_title",
                workflowType: "abandonedBrowse",
            },
        });
    });

    test("get", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            create_time: "2024-01-15T09:30:00Z",
            emails_sent: 1,
            id: "id",
            recipients: {
                list_id: "list_id",
                list_is_active: true,
                list_name: "list_name",
                segment_opts: [{ condition_type: "Aim", value: "any" }],
                store_id: "1a2df69xxx",
            },
            report_summary: {
                click_rate: 1.1,
                clicks: 1,
                open_rate: 1.1,
                opens: 1,
                subscriber_clicks: 1,
                unique_opens: 1,
            },
            settings: {
                authenticate: true,
                auto_footer: true,
                from_name: "from_name",
                inline_css: true,
                reply_to: "reply_to",
                title: "title",
                to_name: "to_name",
                use_conversation: true,
            },
            start_time: "2024-01-15T09:30:00Z",
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
            trigger_settings: {
                runtime: { days: ["sunday"], hours: { type: "send_asap" } },
                workflow_emails_count: 1,
                workflow_title: "workflow_title",
                workflow_type: "abandonedBrowse",
            },
        };

        server
            .mockEndpoint()
            .get("/3.0/automations/workflow_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.automations.get({
            workflowId: "workflow_id",
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
            createTime: new Date("2024-01-15T09:30:00.000Z"),
            emailsSent: 1,
            id: "id",
            recipients: {
                listId: "list_id",
                listIsActive: true,
                listName: "list_name",
                segmentOpts: [
                    {
                        conditionType: "Aim",
                        value: "any",
                    },
                ],
                storeId: "1a2df69xxx",
            },
            reportSummary: {
                clickRate: 1.1,
                clicks: 1,
                openRate: 1.1,
                opens: 1,
                subscriberClicks: 1,
                uniqueOpens: 1,
            },
            settings: {
                authenticate: true,
                autoFooter: true,
                fromName: "from_name",
                inlineCss: true,
                replyTo: "reply_to",
                title: "title",
                toName: "to_name",
                useConversation: true,
            },
            startTime: new Date("2024-01-15T09:30:00.000Z"),
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
            triggerSettings: {
                runtime: {
                    days: ["sunday"],
                    hours: {
                        type: "send_asap",
                    },
                },
                workflowEmailsCount: 1,
                workflowTitle: "workflow_title",
                workflowType: "abandonedBrowse",
            },
        });
    });

    test("create-action-archive", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .post("/3.0/automations/workflow_id/actions/archive")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.automations.createActionArchive({
            workflowId: "workflow_id",
        });
        expect(response).toEqual(undefined);
    });

    test("create-action-pause-all-email", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .post("/3.0/automations/workflow_id/actions/pause-all-emails")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.automations.createActionPauseAllEmail({
            workflowId: "workflow_id",
        });
        expect(response).toEqual(undefined);
    });

    test("create-action-start-all-email", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .post("/3.0/automations/workflow_id/actions/start-all-emails")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.automations.createActionStartAllEmail({
            workflowId: "workflow_id",
        });
        expect(response).toEqual(undefined);
    });

    test("list-emails", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [[{}]],
            emails: [
                {
                    _links: [{}],
                    archive_url: "archive_url",
                    content_type: "content_type",
                    create_time: "2024-01-15T09:30:00Z",
                    delay: {
                        action_description: "subscribers purchase anything from your store",
                        full_description: "1 day after subscribers purchase anything from your store",
                    },
                    emails_sent: 1,
                    has_logo_merge_tag: true,
                    id: "id",
                    needs_block_refresh: true,
                    position: 1,
                    recipients: {
                        segment_opts: {
                            conditions: [{ condition_type: "Aim", value: "any" }],
                            prebuilt_segment_id: "subscribers-female",
                        },
                    },
                    send_time: "2024-01-15T09:30:00Z",
                    start_time: "2024-01-15T09:30:00Z",
                    status: "save",
                    trigger_settings: { workflow_type: "abandonedBrowse" },
                    web_id: 33345484,
                    workflow_id: "workflow_id",
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/automations/workflow_id/emails")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.automations.listEmails({
            workflowId: "workflow_id",
        });
        expect(response).toEqual({
            links: [[{}]],
            emails: [
                {
                    links: [{}],
                    archiveUrl: "archive_url",
                    contentType: "content_type",
                    createTime: new Date("2024-01-15T09:30:00.000Z"),
                    delay: {
                        actionDescription: "subscribers purchase anything from your store",
                        fullDescription: "1 day after subscribers purchase anything from your store",
                    },
                    emailsSent: 1,
                    hasLogoMergeTag: true,
                    id: "id",
                    needsBlockRefresh: true,
                    position: 1,
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
                    sendTime: new Date("2024-01-15T09:30:00.000Z"),
                    startTime: new Date("2024-01-15T09:30:00.000Z"),
                    status: "save",
                    triggerSettings: {
                        workflowType: "abandonedBrowse",
                    },
                    webId: 33345484,
                    workflowId: "workflow_id",
                },
            ],
            totalItems: 1,
        });
    });

    test("get-email", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            archive_url: "archive_url",
            content_type: "content_type",
            create_time: "2024-01-15T09:30:00Z",
            delay: {
                action: "previous_campaign_sent",
                action_description: "subscribers purchase anything from your store",
                amount: 1,
                direction: "before",
                full_description: "1 day after subscribers purchase anything from your store",
                type: "now",
            },
            emails_sent: 1,
            has_logo_merge_tag: true,
            id: "id",
            needs_block_refresh: true,
            position: 1,
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
                click_rate: 1.1,
                clicks: 1,
                open_rate: 1.1,
                opens: 1,
                subscriber_clicks: 1,
                unique_opens: 1,
            },
            send_time: "2024-01-15T09:30:00Z",
            settings: {
                authenticate: true,
                auto_fb_post: ["auto_fb_post"],
                auto_footer: true,
                auto_tweet: true,
                drag_and_drop: true,
                fb_comments: true,
                from_name: "from_name",
                inline_css: true,
                preview_text: "preview_text",
                reply_to: "reply_to",
                subject_line: "subject_line",
                template_id: 1,
                title: "title",
            },
            social_card: { description: "description", image_url: "image_url", title: "title" },
            start_time: "2024-01-15T09:30:00Z",
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
            trigger_settings: {
                runtime: { days: ["sunday"], hours: { type: "send_asap" } },
                workflow_emails_count: 1,
                workflow_title: "workflow_title",
                workflow_type: "abandonedBrowse",
            },
            web_id: 33345484,
            workflow_id: "workflow_id",
        };

        server
            .mockEndpoint()
            .get("/3.0/automations/workflow_id/emails/workflow_email_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.automations.getEmail({
            workflowId: "workflow_id",
            workflowEmailId: "workflow_email_id",
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
            archiveUrl: "archive_url",
            contentType: "content_type",
            createTime: new Date("2024-01-15T09:30:00.000Z"),
            delay: {
                action: "previous_campaign_sent",
                actionDescription: "subscribers purchase anything from your store",
                amount: 1,
                direction: "before",
                fullDescription: "1 day after subscribers purchase anything from your store",
                type: "now",
            },
            emailsSent: 1,
            hasLogoMergeTag: true,
            id: "id",
            needsBlockRefresh: true,
            position: 1,
            recipients: {
                listId: "list_id",
                listIsActive: true,
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
                openRate: 1.1,
                opens: 1,
                subscriberClicks: 1,
                uniqueOpens: 1,
            },
            sendTime: new Date("2024-01-15T09:30:00.000Z"),
            settings: {
                authenticate: true,
                autoFbPost: ["auto_fb_post"],
                autoFooter: true,
                autoTweet: true,
                dragAndDrop: true,
                fbComments: true,
                fromName: "from_name",
                inlineCss: true,
                previewText: "preview_text",
                replyTo: "reply_to",
                subjectLine: "subject_line",
                templateId: 1,
                title: "title",
            },
            socialCard: {
                description: "description",
                imageUrl: "image_url",
                title: "title",
            },
            startTime: new Date("2024-01-15T09:30:00.000Z"),
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
            triggerSettings: {
                runtime: {
                    days: ["sunday"],
                    hours: {
                        type: "send_asap",
                    },
                },
                workflowEmailsCount: 1,
                workflowTitle: "workflow_title",
                workflowType: "abandonedBrowse",
            },
            webId: 33345484,
            workflowId: "workflow_id",
        });
    });

    test("delete-email", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .delete("/3.0/automations/workflow_id/emails/workflow_email_id")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.automations.deleteEmail({
            workflowId: "workflow_id",
            workflowEmailId: "workflow_email_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-email", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            archive_url: "archive_url",
            content_type: "content_type",
            create_time: "2024-01-15T09:30:00Z",
            delay: {
                action: "previous_campaign_sent",
                action_description: "subscribers purchase anything from your store",
                amount: 1,
                direction: "before",
                full_description: "1 day after subscribers purchase anything from your store",
                type: "now",
            },
            emails_sent: 1,
            has_logo_merge_tag: true,
            id: "id",
            needs_block_refresh: true,
            position: 1,
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
                click_rate: 1.1,
                clicks: 1,
                open_rate: 1.1,
                opens: 1,
                subscriber_clicks: 1,
                unique_opens: 1,
            },
            send_time: "2024-01-15T09:30:00Z",
            settings: {
                authenticate: true,
                auto_fb_post: ["auto_fb_post"],
                auto_footer: true,
                auto_tweet: true,
                drag_and_drop: true,
                fb_comments: true,
                from_name: "from_name",
                inline_css: true,
                preview_text: "preview_text",
                reply_to: "reply_to",
                subject_line: "subject_line",
                template_id: 1,
                title: "title",
            },
            social_card: { description: "description", image_url: "image_url", title: "title" },
            start_time: "2024-01-15T09:30:00Z",
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
            trigger_settings: {
                runtime: { days: ["sunday"], hours: { type: "send_asap" } },
                workflow_emails_count: 1,
                workflow_title: "workflow_title",
                workflow_type: "abandonedBrowse",
            },
            web_id: 33345484,
            workflow_id: "workflow_id",
        };

        server
            .mockEndpoint()
            .patch("/3.0/automations/workflow_id/emails/workflow_email_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.automations.updateEmail({
            workflowId: "workflow_id",
            workflowEmailId: "workflow_email_id",
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
            archiveUrl: "archive_url",
            contentType: "content_type",
            createTime: new Date("2024-01-15T09:30:00.000Z"),
            delay: {
                action: "previous_campaign_sent",
                actionDescription: "subscribers purchase anything from your store",
                amount: 1,
                direction: "before",
                fullDescription: "1 day after subscribers purchase anything from your store",
                type: "now",
            },
            emailsSent: 1,
            hasLogoMergeTag: true,
            id: "id",
            needsBlockRefresh: true,
            position: 1,
            recipients: {
                listId: "list_id",
                listIsActive: true,
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
                openRate: 1.1,
                opens: 1,
                subscriberClicks: 1,
                uniqueOpens: 1,
            },
            sendTime: new Date("2024-01-15T09:30:00.000Z"),
            settings: {
                authenticate: true,
                autoFbPost: ["auto_fb_post"],
                autoFooter: true,
                autoTweet: true,
                dragAndDrop: true,
                fbComments: true,
                fromName: "from_name",
                inlineCss: true,
                previewText: "preview_text",
                replyTo: "reply_to",
                subjectLine: "subject_line",
                templateId: 1,
                title: "title",
            },
            socialCard: {
                description: "description",
                imageUrl: "image_url",
                title: "title",
            },
            startTime: new Date("2024-01-15T09:30:00.000Z"),
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
            triggerSettings: {
                runtime: {
                    days: ["sunday"],
                    hours: {
                        type: "send_asap",
                    },
                },
                workflowEmailsCount: 1,
                workflowTitle: "workflow_title",
                workflowType: "abandonedBrowse",
            },
            webId: 33345484,
            workflowId: "workflow_id",
        });
    });

    test("create-email-action-pause", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .post("/3.0/automations/workflow_id/emails/workflow_email_id/actions/pause")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.automations.createEmailActionPause({
            workflowId: "workflow_id",
            workflowEmailId: "workflow_email_id",
        });
        expect(response).toEqual(undefined);
    });

    test("create-email-action-start", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .post("/3.0/automations/workflow_id/emails/workflow_email_id/actions/start")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.automations.createEmailActionStart({
            workflowId: "workflow_id",
            workflowEmailId: "workflow_email_id",
        });
        expect(response).toEqual(undefined);
    });

    test("list-email-queue", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [[{}]],
            email_id: "email_id",
            queue: [
                {
                    _links: [[{}]],
                    email_address: "email_address",
                    email_id: "email_id",
                    id: "id",
                    list_id: "list_id",
                    next_send: "2024-01-15T09:30:00Z",
                    workflow_id: "workflow_id",
                },
            ],
            total_items: 1,
            workflow_id: "workflow_id",
        };

        server
            .mockEndpoint()
            .get("/3.0/automations/workflow_id/emails/workflow_email_id/queue")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.automations.listEmailQueue({
            workflowId: "workflow_id",
            workflowEmailId: "workflow_email_id",
        });
        expect(response).toEqual({
            links: [[{}]],
            emailId: "email_id",
            queue: [
                {
                    links: [[{}]],
                    emailAddress: "email_address",
                    emailId: "email_id",
                    id: "id",
                    listId: "list_id",
                    nextSend: new Date("2024-01-15T09:30:00.000Z"),
                    workflowId: "workflow_id",
                },
            ],
            totalItems: 1,
            workflowId: "workflow_id",
        });
    });

    test("create-email-queue", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { email_address: "email_address" };
        const rawResponseBody = {
            _links: [[{}]],
            email_address: "email_address",
            email_id: "email_id",
            id: "id",
            list_id: "list_id",
            list_is_active: true,
            next_send: "2024-01-15T09:30:00Z",
            workflow_id: "workflow_id",
        };

        server
            .mockEndpoint()
            .post("/3.0/automations/workflow_id/emails/workflow_email_id/queue")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.automations.createEmailQueue({
            workflowId: "workflow_id",
            workflowEmailId: "workflow_email_id",
            emailAddress: "email_address",
        });
        expect(response).toEqual({
            links: [[{}]],
            emailAddress: "email_address",
            emailId: "email_id",
            id: "id",
            listId: "list_id",
            listIsActive: true,
            nextSend: new Date("2024-01-15T09:30:00.000Z"),
            workflowId: "workflow_id",
        });
    });

    test("get-email-queue", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [[{}]],
            email_address: "email_address",
            email_id: "email_id",
            id: "id",
            list_id: "list_id",
            list_is_active: true,
            next_send: "2024-01-15T09:30:00Z",
            workflow_id: "workflow_id",
        };

        server
            .mockEndpoint()
            .get("/3.0/automations/workflow_id/emails/workflow_email_id/queue/subscriber_hash")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.automations.getEmailQueue({
            workflowId: "workflow_id",
            workflowEmailId: "workflow_email_id",
            subscriberHash: "subscriber_hash",
        });
        expect(response).toEqual({
            links: [[{}]],
            emailAddress: "email_address",
            emailId: "email_id",
            id: "id",
            listId: "list_id",
            listIsActive: true,
            nextSend: new Date("2024-01-15T09:30:00.000Z"),
            workflowId: "workflow_id",
        });
    });

    test("list-removed-subscribers", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [[{}]],
            subscribers: [
                {
                    _links: [[{}]],
                    email_address: "email_address",
                    id: "id",
                    list_id: "list_id",
                    workflow_id: "workflow_id",
                },
            ],
            total_items: 1,
            workflow_id: "workflow_id",
        };

        server
            .mockEndpoint()
            .get("/3.0/automations/workflow_id/removed-subscribers")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.automations.listRemovedSubscribers({
            workflowId: "workflow_id",
        });
        expect(response).toEqual({
            links: [[{}]],
            subscribers: [
                {
                    links: [[{}]],
                    emailAddress: "email_address",
                    id: "id",
                    listId: "list_id",
                    workflowId: "workflow_id",
                },
            ],
            totalItems: 1,
            workflowId: "workflow_id",
        });
    });

    test("create-removed-subscriber", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { email_address: "email_address" };
        const rawResponseBody = {
            _links: [[{}]],
            email_address: "email_address",
            id: "id",
            list_id: "list_id",
            workflow_id: "workflow_id",
        };

        server
            .mockEndpoint()
            .post("/3.0/automations/workflow_id/removed-subscribers")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.automations.createRemovedSubscriber({
            workflowId: "workflow_id",
            emailAddress: "email_address",
        });
        expect(response).toEqual({
            links: [[{}]],
            emailAddress: "email_address",
            id: "id",
            listId: "list_id",
            workflowId: "workflow_id",
        });
    });

    test("get-removed-subscriber", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [[{}]],
            email_address: "email_address",
            id: "id",
            list_id: "list_id",
            workflow_id: "workflow_id",
        };

        server
            .mockEndpoint()
            .get("/3.0/automations/workflow_id/removed-subscribers/subscriber_hash")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.automations.getRemovedSubscriber({
            workflowId: "workflow_id",
            subscriberHash: "subscriber_hash",
        });
        expect(response).toEqual({
            links: [[{}]],
            emailAddress: "email_address",
            id: "id",
            listId: "list_id",
            workflowId: "workflow_id",
        });
    });
});
