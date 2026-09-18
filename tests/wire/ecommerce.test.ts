//  This file was auto-generated from our API Definition.

import { MailchimpClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("EcommerceClient", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
        };

        server.mockEndpoint().get("/3.0/ecommerce").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.ecommerce.list();
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
        });
    });

    test("list-orders", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            orders: [
                {
                    _links: [{}],
                    billing_address: {
                        address1: "675 Ponce de Leon Ave NE",
                        address2: "Suite 5000",
                        city: "Atlanta",
                        country: "United States",
                        country_code: "US",
                        latitude: 45.427408,
                        longitude: -75.68903,
                        name: "Freddie Chimpenheimer",
                        phone: "8675309",
                        postal_code: "30308",
                        province: "Georgia",
                        province_code: "GA",
                    },
                    campaign_id: "839488a60b",
                    cart_id: "cart-123",
                    cancelled_at_foreign: "2015-07-15T19:28:00Z",
                    currency_code: "currency_code",
                    customer: {
                        address: {
                            address1: "675 Ponce de Leon Ave NE",
                            address2: "Suite 5000",
                            city: "Atlanta",
                            country: "United States",
                            country_code: "US",
                            postal_code: "30308",
                            province: "Georgia",
                            province_code: "GA",
                        },
                        created_at: "2015-07-15T19:28:00Z",
                        orders_count: 4,
                        updated_at: "2015-07-15T19:28:00Z",
                    },
                    discount_total: 1.1,
                    financial_status: "financial_status",
                    fulfillment_status: "fulfillment_status",
                    id: "id",
                    landing_site: "http://www.example.com?source=abc",
                    lines: [{}],
                    order_total: 1.1,
                    order_url: "order_url",
                    outreach: {
                        id: "839488a60b",
                        name: "Freddie's Jokes",
                        published_time: "2017-06-06T13:56:12Z",
                        type: "regular",
                    },
                    processed_at_foreign: "2015-07-15T19:28:00Z",
                    promos: [{}],
                    shipping_address: {
                        address1: "675 Ponce de Leon Ave NE",
                        address2: "Suite 5000",
                        city: "Atlanta",
                        country: "United States",
                        country_code: "US",
                        latitude: 45.427408,
                        longitude: -75.68903,
                        name: "Freddie Chimpenheimer",
                        phone: "8675309",
                        postal_code: "30308",
                        province: "Georgia",
                        province_code: "GA",
                    },
                    shipping_total: 1.1,
                    store_id: "store_id",
                    tax_total: 1.1,
                    tracking_carrier: "tracking_carrier",
                    tracking_code: "prec",
                    tracking_number: "tracking_number",
                    tracking_url: "tracking_url",
                    updated_at_foreign: "2015-07-15T19:28:00Z",
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/ecommerce/orders")
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
            orders: [
                {
                    links: [{}],
                    billingAddress: {
                        address1: "675 Ponce de Leon Ave NE",
                        address2: "Suite 5000",
                        city: "Atlanta",
                        country: "United States",
                        countryCode: "US",
                        latitude: 45.427408,
                        longitude: -75.68903,
                        name: "Freddie Chimpenheimer",
                        phone: "8675309",
                        postalCode: "30308",
                        province: "Georgia",
                        provinceCode: "GA",
                    },
                    campaignId: "839488a60b",
                    cartId: "cart-123",
                    cancelledAtForeign: new Date("2015-07-15T19:28:00.000Z"),
                    currencyCode: "currency_code",
                    customer: {
                        address: {
                            address1: "675 Ponce de Leon Ave NE",
                            address2: "Suite 5000",
                            city: "Atlanta",
                            country: "United States",
                            countryCode: "US",
                            postalCode: "30308",
                            province: "Georgia",
                            provinceCode: "GA",
                        },
                        createdAt: new Date("2015-07-15T19:28:00.000Z"),
                        ordersCount: 4,
                        updatedAt: new Date("2015-07-15T19:28:00.000Z"),
                    },
                    discountTotal: 1.1,
                    financialStatus: "financial_status",
                    fulfillmentStatus: "fulfillment_status",
                    id: "id",
                    landingSite: "http://www.example.com?source=abc",
                    lines: [{}],
                    orderTotal: 1.1,
                    orderUrl: "order_url",
                    outreach: {
                        id: "839488a60b",
                        name: "Freddie's Jokes",
                        publishedTime: new Date("2017-06-06T13:56:12.000Z"),
                        type: "regular",
                    },
                    processedAtForeign: new Date("2015-07-15T19:28:00.000Z"),
                    promos: [{}],
                    shippingAddress: {
                        address1: "675 Ponce de Leon Ave NE",
                        address2: "Suite 5000",
                        city: "Atlanta",
                        country: "United States",
                        countryCode: "US",
                        latitude: 45.427408,
                        longitude: -75.68903,
                        name: "Freddie Chimpenheimer",
                        phone: "8675309",
                        postalCode: "30308",
                        province: "Georgia",
                        provinceCode: "GA",
                    },
                    shippingTotal: 1.1,
                    storeId: "store_id",
                    taxTotal: 1.1,
                    trackingCarrier: "tracking_carrier",
                    trackingCode: "prec",
                    trackingNumber: "tracking_number",
                    trackingUrl: "tracking_url",
                    updatedAtForeign: new Date("2015-07-15T19:28:00.000Z"),
                },
            ],
            totalItems: 1,
        };
        const page = await client.ecommerce.listOrders();

        expect(expected.orders).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.orders).toEqual(nextPage.data);
    });

    test("list-stores", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            stores: [
                {
                    _links: [{}],
                    address: {
                        address1: "675 Ponce de Leon Ave NE",
                        address2: "Suite 5000",
                        city: "Atlanta",
                        country: "United States",
                        country_code: "US",
                        latitude: 45.427408,
                        longitude: -75.68903,
                        postal_code: "30308",
                        province: "Georgia",
                        province_code: "GA",
                    },
                    automations: {
                        abandoned_browse: { id: "355a72bfc3", is_supported: false },
                        abandoned_cart: { id: "355a72bfc3", is_supported: false },
                    },
                    connected_site: {
                        site_foreign_id: "a180c384d7db88b if created in-app, MC001 if created via API",
                        site_script: {
                            fragment:
                                '<script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/{user-hash}/{site-hash}.js");</script>',
                            url: "https://chimpstatic.com/mcjs-connected/js/users/{user-hash}/{site-hash}.js",
                        },
                    },
                    created_at: "2015-07-15T19:28:00Z",
                    currency_code: "USD",
                    domain: "example.com",
                    email_address: "freddie@mailchimp.com",
                    id: "example_store",
                    is_syncing: true,
                    list_id: "1a2df69511",
                    list_is_active: true,
                    money_format: "$",
                    name: "Freddie's Cat Hat Emporium",
                    phone: "+16155550128",
                    platform: "platform",
                    primary_locale: "fr",
                    timezone: "Eastern",
                    updated_at: "2015-07-15T19:28:00Z",
                },
            ],
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/ecommerce/stores")
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
            stores: [
                {
                    links: [{}],
                    address: {
                        address1: "675 Ponce de Leon Ave NE",
                        address2: "Suite 5000",
                        city: "Atlanta",
                        country: "United States",
                        countryCode: "US",
                        latitude: 45.427408,
                        longitude: -75.68903,
                        postalCode: "30308",
                        province: "Georgia",
                        provinceCode: "GA",
                    },
                    automations: {
                        abandonedBrowse: {
                            id: "355a72bfc3",
                            isSupported: false,
                        },
                        abandonedCart: {
                            id: "355a72bfc3",
                            isSupported: false,
                        },
                    },
                    connectedSite: {
                        siteForeignId: "a180c384d7db88b if created in-app, MC001 if created via API",
                        siteScript: {
                            fragment:
                                '<script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/{user-hash}/{site-hash}.js");</script>',
                            url: "https://chimpstatic.com/mcjs-connected/js/users/{user-hash}/{site-hash}.js",
                        },
                    },
                    createdAt: new Date("2015-07-15T19:28:00.000Z"),
                    currencyCode: "USD",
                    domain: "example.com",
                    emailAddress: "freddie@mailchimp.com",
                    id: "example_store",
                    isSyncing: true,
                    listId: "1a2df69511",
                    listIsActive: true,
                    moneyFormat: "$",
                    name: "Freddie's Cat Hat Emporium",
                    phone: "+16155550128",
                    platform: "platform",
                    primaryLocale: "fr",
                    timezone: "Eastern",
                    updatedAt: new Date("2015-07-15T19:28:00.000Z"),
                },
            ],
            totalItems: 1,
        };
        const page = await client.ecommerce.listStores();

        expect(expected.stores).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.stores).toEqual(nextPage.data);
    });

    test("create-store", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {
            currency_code: "USD",
            id: "example_store",
            list_id: "1a2df69511",
            name: "Freddie's Cat Hat Emporium",
        };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            address: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                country: "United States",
                country_code: "US",
                latitude: 45.427408,
                longitude: -75.68903,
                postal_code: "30308",
                province: "Georgia",
                province_code: "GA",
            },
            automations: {
                abandoned_browse: { id: "355a72bfc3", is_supported: false, status: "save" },
                abandoned_cart: { id: "355a72bfc3", is_supported: false, status: "save" },
            },
            connected_site: {
                site_foreign_id: "a180c384d7db88b if created in-app, MC001 if created via API",
                site_script: {
                    fragment:
                        '<script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/{user-hash}/{site-hash}.js");</script>',
                    url: "https://chimpstatic.com/mcjs-connected/js/users/{user-hash}/{site-hash}.js",
                },
            },
            created_at: "2015-07-15T19:28:00Z",
            currency_code: "USD",
            domain: "example.com",
            email_address: "freddie@mailchimp.com",
            id: "example_store",
            is_syncing: true,
            list_id: "1a2df69511",
            list_is_active: true,
            money_format: "$",
            name: "Freddie's Cat Hat Emporium",
            phone: "+16155550128",
            platform: "platform",
            primary_locale: "fr",
            timezone: "Eastern",
            updated_at: "2015-07-15T19:28:00Z",
        };

        server
            .mockEndpoint()
            .post("/3.0/ecommerce/stores")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.createStore({
            currencyCode: "USD",
            id: "example_store",
            listId: "1a2df69511",
            name: "Freddie's Cat Hat Emporium",
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
            address: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                country: "United States",
                countryCode: "US",
                latitude: 45.427408,
                longitude: -75.68903,
                postalCode: "30308",
                province: "Georgia",
                provinceCode: "GA",
            },
            automations: {
                abandonedBrowse: {
                    id: "355a72bfc3",
                    isSupported: false,
                    status: "save",
                },
                abandonedCart: {
                    id: "355a72bfc3",
                    isSupported: false,
                    status: "save",
                },
            },
            connectedSite: {
                siteForeignId: "a180c384d7db88b if created in-app, MC001 if created via API",
                siteScript: {
                    fragment:
                        '<script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/{user-hash}/{site-hash}.js");</script>',
                    url: "https://chimpstatic.com/mcjs-connected/js/users/{user-hash}/{site-hash}.js",
                },
            },
            createdAt: new Date("2015-07-15T19:28:00.000Z"),
            currencyCode: "USD",
            domain: "example.com",
            emailAddress: "freddie@mailchimp.com",
            id: "example_store",
            isSyncing: true,
            listId: "1a2df69511",
            listIsActive: true,
            moneyFormat: "$",
            name: "Freddie's Cat Hat Emporium",
            phone: "+16155550128",
            platform: "platform",
            primaryLocale: "fr",
            timezone: "Eastern",
            updatedAt: new Date("2015-07-15T19:28:00.000Z"),
        });
    });

    test("get-store", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            address: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                country: "United States",
                country_code: "US",
                latitude: 45.427408,
                longitude: -75.68903,
                postal_code: "30308",
                province: "Georgia",
                province_code: "GA",
            },
            automations: {
                abandoned_browse: { id: "355a72bfc3", is_supported: false, status: "save" },
                abandoned_cart: { id: "355a72bfc3", is_supported: false, status: "save" },
            },
            connected_site: {
                site_foreign_id: "a180c384d7db88b if created in-app, MC001 if created via API",
                site_script: {
                    fragment:
                        '<script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/{user-hash}/{site-hash}.js");</script>',
                    url: "https://chimpstatic.com/mcjs-connected/js/users/{user-hash}/{site-hash}.js",
                },
            },
            created_at: "2015-07-15T19:28:00Z",
            currency_code: "USD",
            domain: "example.com",
            email_address: "freddie@mailchimp.com",
            id: "example_store",
            is_syncing: true,
            list_id: "1a2df69511",
            list_is_active: true,
            money_format: "$",
            name: "Freddie's Cat Hat Emporium",
            phone: "+16155550128",
            platform: "platform",
            primary_locale: "fr",
            timezone: "Eastern",
            updated_at: "2015-07-15T19:28:00Z",
        };

        server
            .mockEndpoint()
            .get("/3.0/ecommerce/stores/store_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.getStore({
            storeId: "store_id",
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
            address: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                country: "United States",
                countryCode: "US",
                latitude: 45.427408,
                longitude: -75.68903,
                postalCode: "30308",
                province: "Georgia",
                provinceCode: "GA",
            },
            automations: {
                abandonedBrowse: {
                    id: "355a72bfc3",
                    isSupported: false,
                    status: "save",
                },
                abandonedCart: {
                    id: "355a72bfc3",
                    isSupported: false,
                    status: "save",
                },
            },
            connectedSite: {
                siteForeignId: "a180c384d7db88b if created in-app, MC001 if created via API",
                siteScript: {
                    fragment:
                        '<script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/{user-hash}/{site-hash}.js");</script>',
                    url: "https://chimpstatic.com/mcjs-connected/js/users/{user-hash}/{site-hash}.js",
                },
            },
            createdAt: new Date("2015-07-15T19:28:00.000Z"),
            currencyCode: "USD",
            domain: "example.com",
            emailAddress: "freddie@mailchimp.com",
            id: "example_store",
            isSyncing: true,
            listId: "1a2df69511",
            listIsActive: true,
            moneyFormat: "$",
            name: "Freddie's Cat Hat Emporium",
            phone: "+16155550128",
            platform: "platform",
            primaryLocale: "fr",
            timezone: "Eastern",
            updatedAt: new Date("2015-07-15T19:28:00.000Z"),
        });
    });

    test("delete-store", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/3.0/ecommerce/stores/store_id").respondWith().statusCode(200).build();

        const response = await client.ecommerce.deleteStore({
            storeId: "store_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-store", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            address: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                country: "United States",
                country_code: "US",
                latitude: 45.427408,
                longitude: -75.68903,
                postal_code: "30308",
                province: "Georgia",
                province_code: "GA",
            },
            automations: {
                abandoned_browse: { id: "355a72bfc3", is_supported: false, status: "save" },
                abandoned_cart: { id: "355a72bfc3", is_supported: false, status: "save" },
            },
            connected_site: {
                site_foreign_id: "a180c384d7db88b if created in-app, MC001 if created via API",
                site_script: {
                    fragment:
                        '<script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/{user-hash}/{site-hash}.js");</script>',
                    url: "https://chimpstatic.com/mcjs-connected/js/users/{user-hash}/{site-hash}.js",
                },
            },
            created_at: "2015-07-15T19:28:00Z",
            currency_code: "USD",
            domain: "example.com",
            email_address: "freddie@mailchimp.com",
            id: "example_store",
            is_syncing: true,
            list_id: "1a2df69511",
            list_is_active: true,
            money_format: "$",
            name: "Freddie's Cat Hat Emporium",
            phone: "+16155550128",
            platform: "platform",
            primary_locale: "fr",
            timezone: "Eastern",
            updated_at: "2015-07-15T19:28:00Z",
        };

        server
            .mockEndpoint()
            .patch("/3.0/ecommerce/stores/store_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.updateStore({
            storeId: "store_id",
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
            address: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                country: "United States",
                countryCode: "US",
                latitude: 45.427408,
                longitude: -75.68903,
                postalCode: "30308",
                province: "Georgia",
                provinceCode: "GA",
            },
            automations: {
                abandonedBrowse: {
                    id: "355a72bfc3",
                    isSupported: false,
                    status: "save",
                },
                abandonedCart: {
                    id: "355a72bfc3",
                    isSupported: false,
                    status: "save",
                },
            },
            connectedSite: {
                siteForeignId: "a180c384d7db88b if created in-app, MC001 if created via API",
                siteScript: {
                    fragment:
                        '<script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/{user-hash}/{site-hash}.js");</script>',
                    url: "https://chimpstatic.com/mcjs-connected/js/users/{user-hash}/{site-hash}.js",
                },
            },
            createdAt: new Date("2015-07-15T19:28:00.000Z"),
            currencyCode: "USD",
            domain: "example.com",
            emailAddress: "freddie@mailchimp.com",
            id: "example_store",
            isSyncing: true,
            listId: "1a2df69511",
            listIsActive: true,
            moneyFormat: "$",
            name: "Freddie's Cat Hat Emporium",
            phone: "+16155550128",
            platform: "platform",
            primaryLocale: "fr",
            timezone: "Eastern",
            updatedAt: new Date("2015-07-15T19:28:00.000Z"),
        });
    });

    test("list-store-carts", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            carts: [
                {
                    _links: [{}],
                    campaign_id: "839488a60b",
                    checkout_url: "checkout_url",
                    created_at: "2015-07-15T19:28:00Z",
                    currency_code: "currency_code",
                    customer: {
                        address: {
                            address1: "675 Ponce de Leon Ave NE",
                            address2: "Suite 5000",
                            city: "Atlanta",
                            country: "United States",
                            country_code: "US",
                            postal_code: "30308",
                            province: "Georgia",
                            province_code: "GA",
                        },
                        created_at: "2015-07-15T19:28:00Z",
                        orders_count: 4,
                        updated_at: "2015-07-15T19:28:00Z",
                    },
                    id: "id",
                    lines: [{}],
                    order_total: 1.1,
                    tax_total: 1.1,
                    updated_at: "2015-07-15T19:28:00Z",
                },
            ],
            store_id: "store_id",
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/ecommerce/stores/store_id/carts")
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
            carts: [
                {
                    links: [{}],
                    campaignId: "839488a60b",
                    checkoutUrl: "checkout_url",
                    createdAt: new Date("2015-07-15T19:28:00.000Z"),
                    currencyCode: "currency_code",
                    customer: {
                        address: {
                            address1: "675 Ponce de Leon Ave NE",
                            address2: "Suite 5000",
                            city: "Atlanta",
                            country: "United States",
                            countryCode: "US",
                            postalCode: "30308",
                            province: "Georgia",
                            provinceCode: "GA",
                        },
                        createdAt: new Date("2015-07-15T19:28:00.000Z"),
                        ordersCount: 4,
                        updatedAt: new Date("2015-07-15T19:28:00.000Z"),
                    },
                    id: "id",
                    lines: [{}],
                    orderTotal: 1.1,
                    taxTotal: 1.1,
                    updatedAt: new Date("2015-07-15T19:28:00.000Z"),
                },
            ],
            storeId: "store_id",
            totalItems: 1,
        };
        const page = await client.ecommerce.listStoreCarts({
            storeId: "store_id",
        });

        expect(expected.carts).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.carts).toEqual(nextPage.data);
    });

    test("create-store-cart", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {
            currency_code: "currency_code",
            customer: { id: "id" },
            id: "id",
            lines: [
                {
                    id: "id",
                    price: 1.1,
                    product_id: "product_id",
                    product_variant_id: "product_variant_id",
                    quantity: 1,
                },
            ],
            order_total: 1.1,
        };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaign_id: "839488a60b",
            checkout_url: "checkout_url",
            created_at: "2015-07-15T19:28:00Z",
            currency_code: "currency_code",
            customer: {
                _links: [{}],
                address: {
                    address1: "675 Ponce de Leon Ave NE",
                    address2: "Suite 5000",
                    city: "Atlanta",
                    country: "United States",
                    country_code: "US",
                    postal_code: "30308",
                    province: "Georgia",
                    province_code: "GA",
                },
                company: "company",
                created_at: "2015-07-15T19:28:00Z",
                email_address: "email_address",
                first_name: "first_name",
                id: "id",
                last_name: "last_name",
                opt_in_status: true,
                orders_count: 4,
                sms_phone_number: "sms_phone_number",
                total_spent: 1.1,
                updated_at: "2015-07-15T19:28:00Z",
            },
            id: "id",
            lines: [
                {
                    _links: [{}],
                    id: "id",
                    price: 1.1,
                    product_id: "product_id",
                    product_title: "product_title",
                    product_variant_id: "product_variant_id",
                    product_variant_title: "product_variant_title",
                    quantity: 1,
                },
            ],
            order_total: 1.1,
            tax_total: 1.1,
            updated_at: "2015-07-15T19:28:00Z",
        };

        server
            .mockEndpoint()
            .post("/3.0/ecommerce/stores/store_id/carts")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.createStoreCart({
            storeId: "store_id",
            currencyCode: "currency_code",
            customer: {
                id: "id",
            },
            id: "id",
            lines: [
                {
                    id: "id",
                    price: 1.1,
                    productId: "product_id",
                    productVariantId: "product_variant_id",
                    quantity: 1,
                },
            ],
            orderTotal: 1.1,
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
            campaignId: "839488a60b",
            checkoutUrl: "checkout_url",
            createdAt: new Date("2015-07-15T19:28:00.000Z"),
            currencyCode: "currency_code",
            customer: {
                links: [{}],
                address: {
                    address1: "675 Ponce de Leon Ave NE",
                    address2: "Suite 5000",
                    city: "Atlanta",
                    country: "United States",
                    countryCode: "US",
                    postalCode: "30308",
                    province: "Georgia",
                    provinceCode: "GA",
                },
                company: "company",
                createdAt: new Date("2015-07-15T19:28:00.000Z"),
                emailAddress: "email_address",
                firstName: "first_name",
                id: "id",
                lastName: "last_name",
                optInStatus: true,
                ordersCount: 4,
                smsPhoneNumber: "sms_phone_number",
                totalSpent: 1.1,
                updatedAt: new Date("2015-07-15T19:28:00.000Z"),
            },
            id: "id",
            lines: [
                {
                    links: [{}],
                    id: "id",
                    price: 1.1,
                    productId: "product_id",
                    productTitle: "product_title",
                    productVariantId: "product_variant_id",
                    productVariantTitle: "product_variant_title",
                    quantity: 1,
                },
            ],
            orderTotal: 1.1,
            taxTotal: 1.1,
            updatedAt: new Date("2015-07-15T19:28:00.000Z"),
        });
    });

    test("get-store-cart", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaign_id: "839488a60b",
            checkout_url: "checkout_url",
            created_at: "2015-07-15T19:28:00Z",
            currency_code: "currency_code",
            customer: {
                _links: [{}],
                address: {
                    address1: "675 Ponce de Leon Ave NE",
                    address2: "Suite 5000",
                    city: "Atlanta",
                    country: "United States",
                    country_code: "US",
                    postal_code: "30308",
                    province: "Georgia",
                    province_code: "GA",
                },
                company: "company",
                created_at: "2015-07-15T19:28:00Z",
                email_address: "email_address",
                first_name: "first_name",
                id: "id",
                last_name: "last_name",
                opt_in_status: true,
                orders_count: 4,
                sms_phone_number: "sms_phone_number",
                total_spent: 1.1,
                updated_at: "2015-07-15T19:28:00Z",
            },
            id: "id",
            lines: [
                {
                    _links: [{}],
                    id: "id",
                    price: 1.1,
                    product_id: "product_id",
                    product_title: "product_title",
                    product_variant_id: "product_variant_id",
                    product_variant_title: "product_variant_title",
                    quantity: 1,
                },
            ],
            order_total: 1.1,
            tax_total: 1.1,
            updated_at: "2015-07-15T19:28:00Z",
        };

        server
            .mockEndpoint()
            .get("/3.0/ecommerce/stores/store_id/carts/cart_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.getStoreCart({
            storeId: "store_id",
            cartId: "cart_id",
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
            campaignId: "839488a60b",
            checkoutUrl: "checkout_url",
            createdAt: new Date("2015-07-15T19:28:00.000Z"),
            currencyCode: "currency_code",
            customer: {
                links: [{}],
                address: {
                    address1: "675 Ponce de Leon Ave NE",
                    address2: "Suite 5000",
                    city: "Atlanta",
                    country: "United States",
                    countryCode: "US",
                    postalCode: "30308",
                    province: "Georgia",
                    provinceCode: "GA",
                },
                company: "company",
                createdAt: new Date("2015-07-15T19:28:00.000Z"),
                emailAddress: "email_address",
                firstName: "first_name",
                id: "id",
                lastName: "last_name",
                optInStatus: true,
                ordersCount: 4,
                smsPhoneNumber: "sms_phone_number",
                totalSpent: 1.1,
                updatedAt: new Date("2015-07-15T19:28:00.000Z"),
            },
            id: "id",
            lines: [
                {
                    links: [{}],
                    id: "id",
                    price: 1.1,
                    productId: "product_id",
                    productTitle: "product_title",
                    productVariantId: "product_variant_id",
                    productVariantTitle: "product_variant_title",
                    quantity: 1,
                },
            ],
            orderTotal: 1.1,
            taxTotal: 1.1,
            updatedAt: new Date("2015-07-15T19:28:00.000Z"),
        });
    });

    test("delete-store-cart", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .delete("/3.0/ecommerce/stores/store_id/carts/cart_id")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.ecommerce.deleteStoreCart({
            storeId: "store_id",
            cartId: "cart_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-store-cart", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            campaign_id: "839488a60b",
            checkout_url: "checkout_url",
            created_at: "2015-07-15T19:28:00Z",
            currency_code: "currency_code",
            customer: {
                _links: [{}],
                address: {
                    address1: "675 Ponce de Leon Ave NE",
                    address2: "Suite 5000",
                    city: "Atlanta",
                    country: "United States",
                    country_code: "US",
                    postal_code: "30308",
                    province: "Georgia",
                    province_code: "GA",
                },
                company: "company",
                created_at: "2015-07-15T19:28:00Z",
                email_address: "email_address",
                first_name: "first_name",
                id: "id",
                last_name: "last_name",
                opt_in_status: true,
                orders_count: 4,
                sms_phone_number: "sms_phone_number",
                total_spent: 1.1,
                updated_at: "2015-07-15T19:28:00Z",
            },
            id: "id",
            lines: [
                {
                    _links: [{}],
                    id: "id",
                    price: 1.1,
                    product_id: "product_id",
                    product_title: "product_title",
                    product_variant_id: "product_variant_id",
                    product_variant_title: "product_variant_title",
                    quantity: 1,
                },
            ],
            order_total: 1.1,
            tax_total: 1.1,
            updated_at: "2015-07-15T19:28:00Z",
        };

        server
            .mockEndpoint()
            .patch("/3.0/ecommerce/stores/store_id/carts/cart_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.updateStoreCart({
            storeId: "store_id",
            cartId: "cart_id",
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
            campaignId: "839488a60b",
            checkoutUrl: "checkout_url",
            createdAt: new Date("2015-07-15T19:28:00.000Z"),
            currencyCode: "currency_code",
            customer: {
                links: [{}],
                address: {
                    address1: "675 Ponce de Leon Ave NE",
                    address2: "Suite 5000",
                    city: "Atlanta",
                    country: "United States",
                    countryCode: "US",
                    postalCode: "30308",
                    province: "Georgia",
                    provinceCode: "GA",
                },
                company: "company",
                createdAt: new Date("2015-07-15T19:28:00.000Z"),
                emailAddress: "email_address",
                firstName: "first_name",
                id: "id",
                lastName: "last_name",
                optInStatus: true,
                ordersCount: 4,
                smsPhoneNumber: "sms_phone_number",
                totalSpent: 1.1,
                updatedAt: new Date("2015-07-15T19:28:00.000Z"),
            },
            id: "id",
            lines: [
                {
                    links: [{}],
                    id: "id",
                    price: 1.1,
                    productId: "product_id",
                    productTitle: "product_title",
                    productVariantId: "product_variant_id",
                    productVariantTitle: "product_variant_title",
                    quantity: 1,
                },
            ],
            orderTotal: 1.1,
            taxTotal: 1.1,
            updatedAt: new Date("2015-07-15T19:28:00.000Z"),
        });
    });

    test("list-store-cart-lines", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            cart_id: "cart_id",
            lines: [
                {
                    _links: [{}],
                    id: "id",
                    price: 1.1,
                    product_id: "product_id",
                    product_title: "product_title",
                    product_variant_id: "product_variant_id",
                    product_variant_title: "product_variant_title",
                    quantity: 1,
                },
            ],
            store_id: "store_id",
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/ecommerce/stores/store_id/carts/cart_id/lines")
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
            cartId: "cart_id",
            lines: [
                {
                    links: [{}],
                    id: "id",
                    price: 1.1,
                    productId: "product_id",
                    productTitle: "product_title",
                    productVariantId: "product_variant_id",
                    productVariantTitle: "product_variant_title",
                    quantity: 1,
                },
            ],
            storeId: "store_id",
            totalItems: 1,
        };
        const page = await client.ecommerce.listStoreCartLines({
            storeId: "store_id",
            cartId: "cart_id",
        });

        expect(expected.lines).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.lines).toEqual(nextPage.data);
    });

    test("create-store-cart-line", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {
            id: "id",
            price: 1.1,
            product_id: "product_id",
            product_variant_id: "product_variant_id",
            quantity: 1,
        };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            id: "id",
            price: 1.1,
            product_id: "product_id",
            product_title: "product_title",
            product_variant_id: "product_variant_id",
            product_variant_title: "product_variant_title",
            quantity: 1,
        };

        server
            .mockEndpoint()
            .post("/3.0/ecommerce/stores/store_id/carts/cart_id/lines")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.createStoreCartLine({
            storeId: "store_id",
            cartId: "cart_id",
            id: "id",
            price: 1.1,
            productId: "product_id",
            productVariantId: "product_variant_id",
            quantity: 1,
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
            id: "id",
            price: 1.1,
            productId: "product_id",
            productTitle: "product_title",
            productVariantId: "product_variant_id",
            productVariantTitle: "product_variant_title",
            quantity: 1,
        });
    });

    test("get-store-cart-line", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            id: "id",
            price: 1.1,
            product_id: "product_id",
            product_title: "product_title",
            product_variant_id: "product_variant_id",
            product_variant_title: "product_variant_title",
            quantity: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/ecommerce/stores/store_id/carts/cart_id/lines/line_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.getStoreCartLine({
            storeId: "store_id",
            cartId: "cart_id",
            lineId: "line_id",
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
            id: "id",
            price: 1.1,
            productId: "product_id",
            productTitle: "product_title",
            productVariantId: "product_variant_id",
            productVariantTitle: "product_variant_title",
            quantity: 1,
        });
    });

    test("delete-store-cart-line", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .delete("/3.0/ecommerce/stores/store_id/carts/cart_id/lines/line_id")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.ecommerce.deleteStoreCartLine({
            storeId: "store_id",
            cartId: "cart_id",
            lineId: "line_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-store-cart-line", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            id: "id",
            price: 1.1,
            product_id: "product_id",
            product_title: "product_title",
            product_variant_id: "product_variant_id",
            product_variant_title: "product_variant_title",
            quantity: 1,
        };

        server
            .mockEndpoint()
            .patch("/3.0/ecommerce/stores/store_id/carts/cart_id/lines/line_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.updateStoreCartLine({
            storeId: "store_id",
            cartId: "cart_id",
            lineId: "line_id",
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
            id: "id",
            price: 1.1,
            productId: "product_id",
            productTitle: "product_title",
            productVariantId: "product_variant_id",
            productVariantTitle: "product_variant_title",
            quantity: 1,
        });
    });

    test("list-store-customers", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            customers: [
                {
                    _links: [{}],
                    address: {
                        address1: "675 Ponce de Leon Ave NE",
                        address2: "Suite 5000",
                        city: "Atlanta",
                        country: "United States",
                        country_code: "US",
                        postal_code: "30308",
                        province: "Georgia",
                        province_code: "GA",
                    },
                    company: "company",
                    created_at: "2015-07-15T19:28:00Z",
                    email_address: "email_address",
                    first_name: "first_name",
                    id: "id",
                    last_name: "last_name",
                    opt_in_status: true,
                    orders_count: 4,
                    sms_phone_number: "sms_phone_number",
                    total_spent: 1.1,
                    updated_at: "2015-07-15T19:28:00Z",
                },
            ],
            store_id: "store_id",
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/ecommerce/stores/store_id/customers")
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
            customers: [
                {
                    links: [{}],
                    address: {
                        address1: "675 Ponce de Leon Ave NE",
                        address2: "Suite 5000",
                        city: "Atlanta",
                        country: "United States",
                        countryCode: "US",
                        postalCode: "30308",
                        province: "Georgia",
                        provinceCode: "GA",
                    },
                    company: "company",
                    createdAt: new Date("2015-07-15T19:28:00.000Z"),
                    emailAddress: "email_address",
                    firstName: "first_name",
                    id: "id",
                    lastName: "last_name",
                    optInStatus: true,
                    ordersCount: 4,
                    smsPhoneNumber: "sms_phone_number",
                    totalSpent: 1.1,
                    updatedAt: new Date("2015-07-15T19:28:00.000Z"),
                },
            ],
            storeId: "store_id",
            totalItems: 1,
        };
        const page = await client.ecommerce.listStoreCustomers({
            storeId: "store_id",
        });

        expect(expected.customers).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.customers).toEqual(nextPage.data);
    });

    test("create-store-customer", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { id: "id", opt_in_status: true };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            address: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                country: "United States",
                country_code: "US",
                postal_code: "30308",
                province: "Georgia",
                province_code: "GA",
            },
            company: "company",
            created_at: "2015-07-15T19:28:00Z",
            email_address: "email_address",
            first_name: "first_name",
            id: "id",
            last_name: "last_name",
            opt_in_status: true,
            orders_count: 4,
            sms_phone_number: "sms_phone_number",
            total_spent: 1.1,
            updated_at: "2015-07-15T19:28:00Z",
        };

        server
            .mockEndpoint()
            .post("/3.0/ecommerce/stores/store_id/customers")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.createStoreCustomer({
            storeId: "store_id",
            id: "id",
            optInStatus: true,
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
            address: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                country: "United States",
                countryCode: "US",
                postalCode: "30308",
                province: "Georgia",
                provinceCode: "GA",
            },
            company: "company",
            createdAt: new Date("2015-07-15T19:28:00.000Z"),
            emailAddress: "email_address",
            firstName: "first_name",
            id: "id",
            lastName: "last_name",
            optInStatus: true,
            ordersCount: 4,
            smsPhoneNumber: "sms_phone_number",
            totalSpent: 1.1,
            updatedAt: new Date("2015-07-15T19:28:00.000Z"),
        });
    });

    test("get-store-customer", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            address: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                country: "United States",
                country_code: "US",
                postal_code: "30308",
                province: "Georgia",
                province_code: "GA",
            },
            company: "company",
            created_at: "2015-07-15T19:28:00Z",
            email_address: "email_address",
            first_name: "first_name",
            id: "id",
            last_name: "last_name",
            opt_in_status: true,
            orders_count: 4,
            sms_phone_number: "sms_phone_number",
            total_spent: 1.1,
            updated_at: "2015-07-15T19:28:00Z",
        };

        server
            .mockEndpoint()
            .get("/3.0/ecommerce/stores/store_id/customers/customer_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.getStoreCustomer({
            storeId: "store_id",
            customerId: "customer_id",
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
            address: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                country: "United States",
                countryCode: "US",
                postalCode: "30308",
                province: "Georgia",
                provinceCode: "GA",
            },
            company: "company",
            createdAt: new Date("2015-07-15T19:28:00.000Z"),
            emailAddress: "email_address",
            firstName: "first_name",
            id: "id",
            lastName: "last_name",
            optInStatus: true,
            ordersCount: 4,
            smsPhoneNumber: "sms_phone_number",
            totalSpent: 1.1,
            updatedAt: new Date("2015-07-15T19:28:00.000Z"),
        });
    });

    test("upsert-store-customer", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            address: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                country: "United States",
                country_code: "US",
                postal_code: "30308",
                province: "Georgia",
                province_code: "GA",
            },
            company: "company",
            created_at: "2015-07-15T19:28:00Z",
            email_address: "email_address",
            first_name: "first_name",
            id: "id",
            last_name: "last_name",
            opt_in_status: true,
            orders_count: 4,
            sms_phone_number: "sms_phone_number",
            total_spent: 1.1,
            updated_at: "2015-07-15T19:28:00Z",
        };

        server
            .mockEndpoint()
            .put("/3.0/ecommerce/stores/store_id/customers/customer_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.upsertStoreCustomer({
            storeId: "store_id",
            customerId: "customer_id",
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
            address: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                country: "United States",
                countryCode: "US",
                postalCode: "30308",
                province: "Georgia",
                provinceCode: "GA",
            },
            company: "company",
            createdAt: new Date("2015-07-15T19:28:00.000Z"),
            emailAddress: "email_address",
            firstName: "first_name",
            id: "id",
            lastName: "last_name",
            optInStatus: true,
            ordersCount: 4,
            smsPhoneNumber: "sms_phone_number",
            totalSpent: 1.1,
            updatedAt: new Date("2015-07-15T19:28:00.000Z"),
        });
    });

    test("delete-store-customer", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .delete("/3.0/ecommerce/stores/store_id/customers/customer_id")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.ecommerce.deleteStoreCustomer({
            storeId: "store_id",
            customerId: "customer_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-store-customer", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            address: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                country: "United States",
                country_code: "US",
                postal_code: "30308",
                province: "Georgia",
                province_code: "GA",
            },
            company: "company",
            created_at: "2015-07-15T19:28:00Z",
            email_address: "email_address",
            first_name: "first_name",
            id: "id",
            last_name: "last_name",
            opt_in_status: true,
            orders_count: 4,
            sms_phone_number: "sms_phone_number",
            total_spent: 1.1,
            updated_at: "2015-07-15T19:28:00Z",
        };

        server
            .mockEndpoint()
            .patch("/3.0/ecommerce/stores/store_id/customers/customer_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.updateStoreCustomer({
            storeId: "store_id",
            customerId: "customer_id",
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
            address: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                country: "United States",
                countryCode: "US",
                postalCode: "30308",
                province: "Georgia",
                provinceCode: "GA",
            },
            company: "company",
            createdAt: new Date("2015-07-15T19:28:00.000Z"),
            emailAddress: "email_address",
            firstName: "first_name",
            id: "id",
            lastName: "last_name",
            optInStatus: true,
            ordersCount: 4,
            smsPhoneNumber: "sms_phone_number",
            totalSpent: 1.1,
            updatedAt: new Date("2015-07-15T19:28:00.000Z"),
        });
    });

    test("list-store-orders", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            store_id: "store_id",
            orders: [
                {
                    _links: [{}],
                    billing_address: {
                        address1: "675 Ponce de Leon Ave NE",
                        address2: "Suite 5000",
                        city: "Atlanta",
                        country: "United States",
                        country_code: "US",
                        latitude: 45.427408,
                        longitude: -75.68903,
                        name: "Freddie Chimpenheimer",
                        phone: "8675309",
                        postal_code: "30308",
                        province: "Georgia",
                        province_code: "GA",
                    },
                    campaign_id: "839488a60b",
                    cart_id: "cart-123",
                    cancelled_at_foreign: "2015-07-15T19:28:00Z",
                    currency_code: "currency_code",
                    customer: {
                        address: {
                            address1: "675 Ponce de Leon Ave NE",
                            address2: "Suite 5000",
                            city: "Atlanta",
                            country: "United States",
                            country_code: "US",
                            postal_code: "30308",
                            province: "Georgia",
                            province_code: "GA",
                        },
                        created_at: "2015-07-15T19:28:00Z",
                        orders_count: 4,
                        updated_at: "2015-07-15T19:28:00Z",
                    },
                    discount_total: 1.1,
                    financial_status: "financial_status",
                    fulfillment_status: "fulfillment_status",
                    id: "id",
                    landing_site: "http://www.example.com?source=abc",
                    lines: [{}],
                    order_total: 1.1,
                    order_url: "order_url",
                    outreach: {
                        id: "839488a60b",
                        name: "Freddie's Jokes",
                        published_time: "2017-06-06T13:56:12Z",
                        type: "regular",
                    },
                    processed_at_foreign: "2015-07-15T19:28:00Z",
                    promos: [{}],
                    shipping_address: {
                        address1: "675 Ponce de Leon Ave NE",
                        address2: "Suite 5000",
                        city: "Atlanta",
                        country: "United States",
                        country_code: "US",
                        latitude: 45.427408,
                        longitude: -75.68903,
                        name: "Freddie Chimpenheimer",
                        phone: "8675309",
                        postal_code: "30308",
                        province: "Georgia",
                        province_code: "GA",
                    },
                    shipping_total: 1.1,
                    store_id: "store_id",
                    tax_total: 1.1,
                    tracking_carrier: "tracking_carrier",
                    tracking_code: "prec",
                    tracking_number: "tracking_number",
                    tracking_url: "tracking_url",
                    updated_at_foreign: "2015-07-15T19:28:00Z",
                },
            ],
            total_items: 1,
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/ecommerce/stores/store_id/orders")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const expected = {
            storeId: "store_id",
            orders: [
                {
                    links: [{}],
                    billingAddress: {
                        address1: "675 Ponce de Leon Ave NE",
                        address2: "Suite 5000",
                        city: "Atlanta",
                        country: "United States",
                        countryCode: "US",
                        latitude: 45.427408,
                        longitude: -75.68903,
                        name: "Freddie Chimpenheimer",
                        phone: "8675309",
                        postalCode: "30308",
                        province: "Georgia",
                        provinceCode: "GA",
                    },
                    campaignId: "839488a60b",
                    cartId: "cart-123",
                    cancelledAtForeign: new Date("2015-07-15T19:28:00.000Z"),
                    currencyCode: "currency_code",
                    customer: {
                        address: {
                            address1: "675 Ponce de Leon Ave NE",
                            address2: "Suite 5000",
                            city: "Atlanta",
                            country: "United States",
                            countryCode: "US",
                            postalCode: "30308",
                            province: "Georgia",
                            provinceCode: "GA",
                        },
                        createdAt: new Date("2015-07-15T19:28:00.000Z"),
                        ordersCount: 4,
                        updatedAt: new Date("2015-07-15T19:28:00.000Z"),
                    },
                    discountTotal: 1.1,
                    financialStatus: "financial_status",
                    fulfillmentStatus: "fulfillment_status",
                    id: "id",
                    landingSite: "http://www.example.com?source=abc",
                    lines: [{}],
                    orderTotal: 1.1,
                    orderUrl: "order_url",
                    outreach: {
                        id: "839488a60b",
                        name: "Freddie's Jokes",
                        publishedTime: new Date("2017-06-06T13:56:12.000Z"),
                        type: "regular",
                    },
                    processedAtForeign: new Date("2015-07-15T19:28:00.000Z"),
                    promos: [{}],
                    shippingAddress: {
                        address1: "675 Ponce de Leon Ave NE",
                        address2: "Suite 5000",
                        city: "Atlanta",
                        country: "United States",
                        countryCode: "US",
                        latitude: 45.427408,
                        longitude: -75.68903,
                        name: "Freddie Chimpenheimer",
                        phone: "8675309",
                        postalCode: "30308",
                        province: "Georgia",
                        provinceCode: "GA",
                    },
                    shippingTotal: 1.1,
                    storeId: "store_id",
                    taxTotal: 1.1,
                    trackingCarrier: "tracking_carrier",
                    trackingCode: "prec",
                    trackingNumber: "tracking_number",
                    trackingUrl: "tracking_url",
                    updatedAtForeign: new Date("2015-07-15T19:28:00.000Z"),
                },
            ],
            totalItems: 1,
            links: [
                {
                    href: "href",
                    method: "GET",
                    rel: "rel",
                    schema: "schema",
                    targetSchema: "targetSchema",
                },
            ],
        };
        const page = await client.ecommerce.listStoreOrders({
            storeId: "store_id",
        });

        expect(expected.orders).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.orders).toEqual(nextPage.data);
    });

    test("create-store-order", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {
            currency_code: "currency_code",
            customer: { id: "id" },
            id: "id",
            lines: [
                {
                    id: "id",
                    price: 1.1,
                    product_id: "product_id",
                    product_variant_id: "product_variant_id",
                    quantity: 1,
                },
            ],
            order_total: 1.1,
        };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            billing_address: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                company: "company",
                country: "United States",
                country_code: "US",
                latitude: 45.427408,
                longitude: -75.68903,
                name: "Freddie Chimpenheimer",
                phone: "8675309",
                postal_code: "30308",
                province: "Georgia",
                province_code: "GA",
            },
            campaign_id: "839488a60b",
            cart_id: "cart-123",
            cancelled_at_foreign: "2015-07-15T19:28:00Z",
            currency_code: "currency_code",
            customer: {
                _links: [{}],
                address: {
                    address1: "675 Ponce de Leon Ave NE",
                    address2: "Suite 5000",
                    city: "Atlanta",
                    country: "United States",
                    country_code: "US",
                    postal_code: "30308",
                    province: "Georgia",
                    province_code: "GA",
                },
                company: "company",
                created_at: "2015-07-15T19:28:00Z",
                email_address: "email_address",
                first_name: "first_name",
                id: "id",
                last_name: "last_name",
                opt_in_status: true,
                orders_count: 4,
                sms_phone_number: "sms_phone_number",
                total_spent: 1.1,
                updated_at: "2015-07-15T19:28:00Z",
            },
            discount_total: 1.1,
            financial_status: "financial_status",
            fulfillment_status: "fulfillment_status",
            id: "id",
            landing_site: "http://www.example.com?source=abc",
            lines: [
                {
                    _links: [{}],
                    discount: 1.1,
                    id: "id",
                    image_url: "image_url",
                    price: 1.1,
                    product_id: "product_id",
                    product_title: "product_title",
                    product_variant_id: "product_variant_id",
                    product_variant_title: "product_variant_title",
                    quantity: 1,
                },
            ],
            order_total: 1.1,
            order_url: "order_url",
            outreach: {
                id: "839488a60b",
                name: "Freddie's Jokes",
                published_time: "2017-06-06T13:56:12Z",
                type: "regular",
            },
            processed_at_foreign: "2015-07-15T19:28:00Z",
            promos: [{ amount_discounted: 1.1, code: "code", type: "fixed" }],
            shipping_address: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                company: "company",
                country: "United States",
                country_code: "US",
                latitude: 45.427408,
                longitude: -75.68903,
                name: "Freddie Chimpenheimer",
                phone: "8675309",
                postal_code: "30308",
                province: "Georgia",
                province_code: "GA",
            },
            shipping_total: 1.1,
            store_id: "store_id",
            tax_total: 1.1,
            tracking_carrier: "tracking_carrier",
            tracking_code: "prec",
            tracking_number: "tracking_number",
            tracking_url: "tracking_url",
            updated_at_foreign: "2015-07-15T19:28:00Z",
        };

        server
            .mockEndpoint()
            .post("/3.0/ecommerce/stores/store_id/orders")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.createStoreOrder({
            storeId: "store_id",
            currencyCode: "currency_code",
            customer: {
                id: "id",
            },
            id: "id",
            lines: [
                {
                    id: "id",
                    price: 1.1,
                    productId: "product_id",
                    productVariantId: "product_variant_id",
                    quantity: 1,
                },
            ],
            orderTotal: 1.1,
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
            billingAddress: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                company: "company",
                country: "United States",
                countryCode: "US",
                latitude: 45.427408,
                longitude: -75.68903,
                name: "Freddie Chimpenheimer",
                phone: "8675309",
                postalCode: "30308",
                province: "Georgia",
                provinceCode: "GA",
            },
            campaignId: "839488a60b",
            cartId: "cart-123",
            cancelledAtForeign: new Date("2015-07-15T19:28:00.000Z"),
            currencyCode: "currency_code",
            customer: {
                links: [{}],
                address: {
                    address1: "675 Ponce de Leon Ave NE",
                    address2: "Suite 5000",
                    city: "Atlanta",
                    country: "United States",
                    countryCode: "US",
                    postalCode: "30308",
                    province: "Georgia",
                    provinceCode: "GA",
                },
                company: "company",
                createdAt: new Date("2015-07-15T19:28:00.000Z"),
                emailAddress: "email_address",
                firstName: "first_name",
                id: "id",
                lastName: "last_name",
                optInStatus: true,
                ordersCount: 4,
                smsPhoneNumber: "sms_phone_number",
                totalSpent: 1.1,
                updatedAt: new Date("2015-07-15T19:28:00.000Z"),
            },
            discountTotal: 1.1,
            financialStatus: "financial_status",
            fulfillmentStatus: "fulfillment_status",
            id: "id",
            landingSite: "http://www.example.com?source=abc",
            lines: [
                {
                    links: [{}],
                    discount: 1.1,
                    id: "id",
                    imageUrl: "image_url",
                    price: 1.1,
                    productId: "product_id",
                    productTitle: "product_title",
                    productVariantId: "product_variant_id",
                    productVariantTitle: "product_variant_title",
                    quantity: 1,
                },
            ],
            orderTotal: 1.1,
            orderUrl: "order_url",
            outreach: {
                id: "839488a60b",
                name: "Freddie's Jokes",
                publishedTime: new Date("2017-06-06T13:56:12.000Z"),
                type: "regular",
            },
            processedAtForeign: new Date("2015-07-15T19:28:00.000Z"),
            promos: [
                {
                    amountDiscounted: 1.1,
                    code: "code",
                    type: "fixed",
                },
            ],
            shippingAddress: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                company: "company",
                country: "United States",
                countryCode: "US",
                latitude: 45.427408,
                longitude: -75.68903,
                name: "Freddie Chimpenheimer",
                phone: "8675309",
                postalCode: "30308",
                province: "Georgia",
                provinceCode: "GA",
            },
            shippingTotal: 1.1,
            storeId: "store_id",
            taxTotal: 1.1,
            trackingCarrier: "tracking_carrier",
            trackingCode: "prec",
            trackingNumber: "tracking_number",
            trackingUrl: "tracking_url",
            updatedAtForeign: new Date("2015-07-15T19:28:00.000Z"),
        });
    });

    test("get-store-order", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            billing_address: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                company: "company",
                country: "United States",
                country_code: "US",
                latitude: 45.427408,
                longitude: -75.68903,
                name: "Freddie Chimpenheimer",
                phone: "8675309",
                postal_code: "30308",
                province: "Georgia",
                province_code: "GA",
            },
            campaign_id: "839488a60b",
            cart_id: "cart-123",
            cancelled_at_foreign: "2015-07-15T19:28:00Z",
            currency_code: "currency_code",
            customer: {
                _links: [{}],
                address: {
                    address1: "675 Ponce de Leon Ave NE",
                    address2: "Suite 5000",
                    city: "Atlanta",
                    country: "United States",
                    country_code: "US",
                    postal_code: "30308",
                    province: "Georgia",
                    province_code: "GA",
                },
                company: "company",
                created_at: "2015-07-15T19:28:00Z",
                email_address: "email_address",
                first_name: "first_name",
                id: "id",
                last_name: "last_name",
                opt_in_status: true,
                orders_count: 4,
                sms_phone_number: "sms_phone_number",
                total_spent: 1.1,
                updated_at: "2015-07-15T19:28:00Z",
            },
            discount_total: 1.1,
            financial_status: "financial_status",
            fulfillment_status: "fulfillment_status",
            id: "id",
            landing_site: "http://www.example.com?source=abc",
            lines: [
                {
                    _links: [{}],
                    discount: 1.1,
                    id: "id",
                    image_url: "image_url",
                    price: 1.1,
                    product_id: "product_id",
                    product_title: "product_title",
                    product_variant_id: "product_variant_id",
                    product_variant_title: "product_variant_title",
                    quantity: 1,
                },
            ],
            order_total: 1.1,
            order_url: "order_url",
            outreach: {
                id: "839488a60b",
                name: "Freddie's Jokes",
                published_time: "2017-06-06T13:56:12Z",
                type: "regular",
            },
            processed_at_foreign: "2015-07-15T19:28:00Z",
            promos: [{ amount_discounted: 1.1, code: "code", type: "fixed" }],
            shipping_address: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                company: "company",
                country: "United States",
                country_code: "US",
                latitude: 45.427408,
                longitude: -75.68903,
                name: "Freddie Chimpenheimer",
                phone: "8675309",
                postal_code: "30308",
                province: "Georgia",
                province_code: "GA",
            },
            shipping_total: 1.1,
            store_id: "store_id",
            tax_total: 1.1,
            tracking_carrier: "tracking_carrier",
            tracking_code: "prec",
            tracking_number: "tracking_number",
            tracking_url: "tracking_url",
            updated_at_foreign: "2015-07-15T19:28:00Z",
        };

        server
            .mockEndpoint()
            .get("/3.0/ecommerce/stores/store_id/orders/order_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.getStoreOrder({
            storeId: "store_id",
            orderId: "order_id",
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
            billingAddress: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                company: "company",
                country: "United States",
                countryCode: "US",
                latitude: 45.427408,
                longitude: -75.68903,
                name: "Freddie Chimpenheimer",
                phone: "8675309",
                postalCode: "30308",
                province: "Georgia",
                provinceCode: "GA",
            },
            campaignId: "839488a60b",
            cartId: "cart-123",
            cancelledAtForeign: new Date("2015-07-15T19:28:00.000Z"),
            currencyCode: "currency_code",
            customer: {
                links: [{}],
                address: {
                    address1: "675 Ponce de Leon Ave NE",
                    address2: "Suite 5000",
                    city: "Atlanta",
                    country: "United States",
                    countryCode: "US",
                    postalCode: "30308",
                    province: "Georgia",
                    provinceCode: "GA",
                },
                company: "company",
                createdAt: new Date("2015-07-15T19:28:00.000Z"),
                emailAddress: "email_address",
                firstName: "first_name",
                id: "id",
                lastName: "last_name",
                optInStatus: true,
                ordersCount: 4,
                smsPhoneNumber: "sms_phone_number",
                totalSpent: 1.1,
                updatedAt: new Date("2015-07-15T19:28:00.000Z"),
            },
            discountTotal: 1.1,
            financialStatus: "financial_status",
            fulfillmentStatus: "fulfillment_status",
            id: "id",
            landingSite: "http://www.example.com?source=abc",
            lines: [
                {
                    links: [{}],
                    discount: 1.1,
                    id: "id",
                    imageUrl: "image_url",
                    price: 1.1,
                    productId: "product_id",
                    productTitle: "product_title",
                    productVariantId: "product_variant_id",
                    productVariantTitle: "product_variant_title",
                    quantity: 1,
                },
            ],
            orderTotal: 1.1,
            orderUrl: "order_url",
            outreach: {
                id: "839488a60b",
                name: "Freddie's Jokes",
                publishedTime: new Date("2017-06-06T13:56:12.000Z"),
                type: "regular",
            },
            processedAtForeign: new Date("2015-07-15T19:28:00.000Z"),
            promos: [
                {
                    amountDiscounted: 1.1,
                    code: "code",
                    type: "fixed",
                },
            ],
            shippingAddress: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                company: "company",
                country: "United States",
                countryCode: "US",
                latitude: 45.427408,
                longitude: -75.68903,
                name: "Freddie Chimpenheimer",
                phone: "8675309",
                postalCode: "30308",
                province: "Georgia",
                provinceCode: "GA",
            },
            shippingTotal: 1.1,
            storeId: "store_id",
            taxTotal: 1.1,
            trackingCarrier: "tracking_carrier",
            trackingCode: "prec",
            trackingNumber: "tracking_number",
            trackingUrl: "tracking_url",
            updatedAtForeign: new Date("2015-07-15T19:28:00.000Z"),
        });
    });

    test("delete-store-order", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .delete("/3.0/ecommerce/stores/store_id/orders/order_id")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.ecommerce.deleteStoreOrder({
            storeId: "store_id",
            orderId: "order_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-store-order", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            billing_address: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                company: "company",
                country: "United States",
                country_code: "US",
                latitude: 45.427408,
                longitude: -75.68903,
                name: "Freddie Chimpenheimer",
                phone: "8675309",
                postal_code: "30308",
                province: "Georgia",
                province_code: "GA",
            },
            campaign_id: "839488a60b",
            cart_id: "cart-123",
            cancelled_at_foreign: "2015-07-15T19:28:00Z",
            currency_code: "currency_code",
            customer: {
                _links: [{}],
                address: {
                    address1: "675 Ponce de Leon Ave NE",
                    address2: "Suite 5000",
                    city: "Atlanta",
                    country: "United States",
                    country_code: "US",
                    postal_code: "30308",
                    province: "Georgia",
                    province_code: "GA",
                },
                company: "company",
                created_at: "2015-07-15T19:28:00Z",
                email_address: "email_address",
                first_name: "first_name",
                id: "id",
                last_name: "last_name",
                opt_in_status: true,
                orders_count: 4,
                sms_phone_number: "sms_phone_number",
                total_spent: 1.1,
                updated_at: "2015-07-15T19:28:00Z",
            },
            discount_total: 1.1,
            financial_status: "financial_status",
            fulfillment_status: "fulfillment_status",
            id: "id",
            landing_site: "http://www.example.com?source=abc",
            lines: [
                {
                    _links: [{}],
                    discount: 1.1,
                    id: "id",
                    image_url: "image_url",
                    price: 1.1,
                    product_id: "product_id",
                    product_title: "product_title",
                    product_variant_id: "product_variant_id",
                    product_variant_title: "product_variant_title",
                    quantity: 1,
                },
            ],
            order_total: 1.1,
            order_url: "order_url",
            outreach: {
                id: "839488a60b",
                name: "Freddie's Jokes",
                published_time: "2017-06-06T13:56:12Z",
                type: "regular",
            },
            processed_at_foreign: "2015-07-15T19:28:00Z",
            promos: [{ amount_discounted: 1.1, code: "code", type: "fixed" }],
            shipping_address: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                company: "company",
                country: "United States",
                country_code: "US",
                latitude: 45.427408,
                longitude: -75.68903,
                name: "Freddie Chimpenheimer",
                phone: "8675309",
                postal_code: "30308",
                province: "Georgia",
                province_code: "GA",
            },
            shipping_total: 1.1,
            store_id: "store_id",
            tax_total: 1.1,
            tracking_carrier: "tracking_carrier",
            tracking_code: "prec",
            tracking_number: "tracking_number",
            tracking_url: "tracking_url",
            updated_at_foreign: "2015-07-15T19:28:00Z",
        };

        server
            .mockEndpoint()
            .patch("/3.0/ecommerce/stores/store_id/orders/order_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.updateStoreOrder({
            storeId: "store_id",
            orderId: "order_id",
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
            billingAddress: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                company: "company",
                country: "United States",
                countryCode: "US",
                latitude: 45.427408,
                longitude: -75.68903,
                name: "Freddie Chimpenheimer",
                phone: "8675309",
                postalCode: "30308",
                province: "Georgia",
                provinceCode: "GA",
            },
            campaignId: "839488a60b",
            cartId: "cart-123",
            cancelledAtForeign: new Date("2015-07-15T19:28:00.000Z"),
            currencyCode: "currency_code",
            customer: {
                links: [{}],
                address: {
                    address1: "675 Ponce de Leon Ave NE",
                    address2: "Suite 5000",
                    city: "Atlanta",
                    country: "United States",
                    countryCode: "US",
                    postalCode: "30308",
                    province: "Georgia",
                    provinceCode: "GA",
                },
                company: "company",
                createdAt: new Date("2015-07-15T19:28:00.000Z"),
                emailAddress: "email_address",
                firstName: "first_name",
                id: "id",
                lastName: "last_name",
                optInStatus: true,
                ordersCount: 4,
                smsPhoneNumber: "sms_phone_number",
                totalSpent: 1.1,
                updatedAt: new Date("2015-07-15T19:28:00.000Z"),
            },
            discountTotal: 1.1,
            financialStatus: "financial_status",
            fulfillmentStatus: "fulfillment_status",
            id: "id",
            landingSite: "http://www.example.com?source=abc",
            lines: [
                {
                    links: [{}],
                    discount: 1.1,
                    id: "id",
                    imageUrl: "image_url",
                    price: 1.1,
                    productId: "product_id",
                    productTitle: "product_title",
                    productVariantId: "product_variant_id",
                    productVariantTitle: "product_variant_title",
                    quantity: 1,
                },
            ],
            orderTotal: 1.1,
            orderUrl: "order_url",
            outreach: {
                id: "839488a60b",
                name: "Freddie's Jokes",
                publishedTime: new Date("2017-06-06T13:56:12.000Z"),
                type: "regular",
            },
            processedAtForeign: new Date("2015-07-15T19:28:00.000Z"),
            promos: [
                {
                    amountDiscounted: 1.1,
                    code: "code",
                    type: "fixed",
                },
            ],
            shippingAddress: {
                address1: "675 Ponce de Leon Ave NE",
                address2: "Suite 5000",
                city: "Atlanta",
                company: "company",
                country: "United States",
                countryCode: "US",
                latitude: 45.427408,
                longitude: -75.68903,
                name: "Freddie Chimpenheimer",
                phone: "8675309",
                postalCode: "30308",
                province: "Georgia",
                provinceCode: "GA",
            },
            shippingTotal: 1.1,
            storeId: "store_id",
            taxTotal: 1.1,
            trackingCarrier: "tracking_carrier",
            trackingCode: "prec",
            trackingNumber: "tracking_number",
            trackingUrl: "tracking_url",
            updatedAtForeign: new Date("2015-07-15T19:28:00.000Z"),
        });
    });

    test("list-store-order-lines", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            lines: [
                {
                    _links: [{}],
                    discount: 1.1,
                    id: "id",
                    image_url: "image_url",
                    price: 1.1,
                    product_id: "product_id",
                    product_title: "product_title",
                    product_variant_id: "product_variant_id",
                    product_variant_title: "product_variant_title",
                    quantity: 1,
                },
            ],
            order_id: "order_id",
            store_id: "store_id",
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/ecommerce/stores/store_id/orders/order_id/lines")
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
            lines: [
                {
                    links: [{}],
                    discount: 1.1,
                    id: "id",
                    imageUrl: "image_url",
                    price: 1.1,
                    productId: "product_id",
                    productTitle: "product_title",
                    productVariantId: "product_variant_id",
                    productVariantTitle: "product_variant_title",
                    quantity: 1,
                },
            ],
            orderId: "order_id",
            storeId: "store_id",
            totalItems: 1,
        };
        const page = await client.ecommerce.listStoreOrderLines({
            storeId: "store_id",
            orderId: "order_id",
        });

        expect(expected.lines).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.lines).toEqual(nextPage.data);
    });

    test("create-store-order-line", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {
            id: "id",
            price: 1.1,
            product_id: "product_id",
            product_variant_id: "product_variant_id",
            quantity: 1,
        };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            discount: 1.1,
            id: "id",
            image_url: "image_url",
            price: 1.1,
            product_id: "product_id",
            product_title: "product_title",
            product_variant_id: "product_variant_id",
            product_variant_title: "product_variant_title",
            quantity: 1,
        };

        server
            .mockEndpoint()
            .post("/3.0/ecommerce/stores/store_id/orders/order_id/lines")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.createStoreOrderLine({
            storeId: "store_id",
            orderId: "order_id",
            id: "id",
            price: 1.1,
            productId: "product_id",
            productVariantId: "product_variant_id",
            quantity: 1,
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
            discount: 1.1,
            id: "id",
            imageUrl: "image_url",
            price: 1.1,
            productId: "product_id",
            productTitle: "product_title",
            productVariantId: "product_variant_id",
            productVariantTitle: "product_variant_title",
            quantity: 1,
        });
    });

    test("get-store-order-line", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            discount: 1.1,
            id: "id",
            image_url: "image_url",
            price: 1.1,
            product_id: "product_id",
            product_title: "product_title",
            product_variant_id: "product_variant_id",
            product_variant_title: "product_variant_title",
            quantity: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/ecommerce/stores/store_id/orders/order_id/lines/line_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.getStoreOrderLine({
            storeId: "store_id",
            orderId: "order_id",
            lineId: "line_id",
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
            discount: 1.1,
            id: "id",
            imageUrl: "image_url",
            price: 1.1,
            productId: "product_id",
            productTitle: "product_title",
            productVariantId: "product_variant_id",
            productVariantTitle: "product_variant_title",
            quantity: 1,
        });
    });

    test("delete-store-order-line", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .delete("/3.0/ecommerce/stores/store_id/orders/order_id/lines/line_id")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.ecommerce.deleteStoreOrderLine({
            storeId: "store_id",
            orderId: "order_id",
            lineId: "line_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-store-order-line", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            discount: 1.1,
            id: "id",
            image_url: "image_url",
            price: 1.1,
            product_id: "product_id",
            product_title: "product_title",
            product_variant_id: "product_variant_id",
            product_variant_title: "product_variant_title",
            quantity: 1,
        };

        server
            .mockEndpoint()
            .patch("/3.0/ecommerce/stores/store_id/orders/order_id/lines/line_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.updateStoreOrderLine({
            storeId: "store_id",
            orderId: "order_id",
            lineId: "line_id",
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
            discount: 1.1,
            id: "id",
            imageUrl: "image_url",
            price: 1.1,
            productId: "product_id",
            productTitle: "product_title",
            productVariantId: "product_variant_id",
            productVariantTitle: "product_variant_title",
            quantity: 1,
        });
    });

    test("list-store-products", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            products: [
                {
                    _links: [{}],
                    currency_code: "currency_code",
                    description: "This is a cat hat.",
                    handle: "cat-hat",
                    id: "id",
                    image_url: "image_url",
                    images: [{}],
                    published_at_foreign: "2015-07-15T19:28:00Z",
                    title: "Cat Hat",
                    type: "Accessories",
                    url: "url",
                    variants: [
                        { created_at: "2015-07-15T19:28:00Z", title: "Cat Hat", updated_at: "2015-07-15T19:28:00Z" },
                    ],
                    vendor: "vendor",
                },
            ],
            store_id: "store_id",
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/ecommerce/stores/store_id/products")
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
            products: [
                {
                    links: [{}],
                    currencyCode: "currency_code",
                    description: "This is a cat hat.",
                    handle: "cat-hat",
                    id: "id",
                    imageUrl: "image_url",
                    images: [{}],
                    publishedAtForeign: new Date("2015-07-15T19:28:00.000Z"),
                    title: "Cat Hat",
                    type: "Accessories",
                    url: "url",
                    variants: [
                        {
                            createdAt: new Date("2015-07-15T19:28:00.000Z"),
                            title: "Cat Hat",
                            updatedAt: new Date("2015-07-15T19:28:00.000Z"),
                        },
                    ],
                    vendor: "vendor",
                },
            ],
            storeId: "store_id",
            totalItems: 1,
        };
        const page = await client.ecommerce.listStoreProducts({
            storeId: "store_id",
        });

        expect(expected.products).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.products).toEqual(nextPage.data);
    });

    test("create-store-product", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { id: "id", title: "Cat Hat", variants: [{ id: "id", title: "Cat Hat" }] };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            currency_code: "currency_code",
            description: "This is a cat hat.",
            handle: "cat-hat",
            id: "id",
            image_url: "image_url",
            images: [{ _links: [{}], id: "id", url: "url", variant_ids: ["variant_ids"] }],
            published_at_foreign: "2015-07-15T19:28:00Z",
            title: "Cat Hat",
            type: "Accessories",
            url: "url",
            variants: [
                {
                    _links: [{}],
                    backorders: "backorders",
                    created_at: "2015-07-15T19:28:00Z",
                    id: "id",
                    image_url: "image_url",
                    inventory_quantity: 1,
                    price: 1.1,
                    sku: "sku",
                    title: "Cat Hat",
                    updated_at: "2015-07-15T19:28:00Z",
                    url: "url",
                    visibility: "visibility",
                },
            ],
            vendor: "vendor",
        };

        server
            .mockEndpoint()
            .post("/3.0/ecommerce/stores/store_id/products")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.createStoreProduct({
            storeId: "store_id",
            body: {
                id: "id",
                title: "Cat Hat",
                variants: [
                    {
                        id: "id",
                        title: "Cat Hat",
                    },
                ],
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
            currencyCode: "currency_code",
            description: "This is a cat hat.",
            handle: "cat-hat",
            id: "id",
            imageUrl: "image_url",
            images: [
                {
                    links: [{}],
                    id: "id",
                    url: "url",
                    variantIds: ["variant_ids"],
                },
            ],
            publishedAtForeign: new Date("2015-07-15T19:28:00.000Z"),
            title: "Cat Hat",
            type: "Accessories",
            url: "url",
            variants: [
                {
                    links: [{}],
                    backorders: "backorders",
                    createdAt: new Date("2015-07-15T19:28:00.000Z"),
                    id: "id",
                    imageUrl: "image_url",
                    inventoryQuantity: 1,
                    price: 1.1,
                    sku: "sku",
                    title: "Cat Hat",
                    updatedAt: new Date("2015-07-15T19:28:00.000Z"),
                    url: "url",
                    visibility: "visibility",
                },
            ],
            vendor: "vendor",
        });
    });

    test("get-store-product", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            currency_code: "currency_code",
            description: "This is a cat hat.",
            handle: "cat-hat",
            id: "id",
            image_url: "image_url",
            images: [{ _links: [{}], id: "id", url: "url", variant_ids: ["variant_ids"] }],
            published_at_foreign: "2015-07-15T19:28:00Z",
            title: "Cat Hat",
            type: "Accessories",
            url: "url",
            variants: [
                {
                    _links: [{}],
                    backorders: "backorders",
                    created_at: "2015-07-15T19:28:00Z",
                    id: "id",
                    image_url: "image_url",
                    inventory_quantity: 1,
                    price: 1.1,
                    sku: "sku",
                    title: "Cat Hat",
                    updated_at: "2015-07-15T19:28:00Z",
                    url: "url",
                    visibility: "visibility",
                },
            ],
            vendor: "vendor",
        };

        server
            .mockEndpoint()
            .get("/3.0/ecommerce/stores/store_id/products/product_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.getStoreProduct({
            storeId: "store_id",
            productId: "product_id",
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
            currencyCode: "currency_code",
            description: "This is a cat hat.",
            handle: "cat-hat",
            id: "id",
            imageUrl: "image_url",
            images: [
                {
                    links: [{}],
                    id: "id",
                    url: "url",
                    variantIds: ["variant_ids"],
                },
            ],
            publishedAtForeign: new Date("2015-07-15T19:28:00.000Z"),
            title: "Cat Hat",
            type: "Accessories",
            url: "url",
            variants: [
                {
                    links: [{}],
                    backorders: "backorders",
                    createdAt: new Date("2015-07-15T19:28:00.000Z"),
                    id: "id",
                    imageUrl: "image_url",
                    inventoryQuantity: 1,
                    price: 1.1,
                    sku: "sku",
                    title: "Cat Hat",
                    updatedAt: new Date("2015-07-15T19:28:00.000Z"),
                    url: "url",
                    visibility: "visibility",
                },
            ],
            vendor: "vendor",
        });
    });

    test("upsert-store-product", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { id: "id" };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            currency_code: "currency_code",
            description: "This is a cat hat.",
            handle: "cat-hat",
            id: "id",
            image_url: "image_url",
            images: [{ _links: [{}], id: "id", url: "url", variant_ids: ["variant_ids"] }],
            published_at_foreign: "2015-07-15T19:28:00Z",
            title: "Cat Hat",
            type: "Accessories",
            url: "url",
            variants: [
                {
                    _links: [{}],
                    backorders: "backorders",
                    created_at: "2015-07-15T19:28:00Z",
                    id: "id",
                    image_url: "image_url",
                    inventory_quantity: 1,
                    price: 1.1,
                    sku: "sku",
                    title: "Cat Hat",
                    updated_at: "2015-07-15T19:28:00Z",
                    url: "url",
                    visibility: "visibility",
                },
            ],
            vendor: "vendor",
        };

        server
            .mockEndpoint()
            .put("/3.0/ecommerce/stores/store_id/products/product_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.upsertStoreProduct({
            storeId: "store_id",
            productId: "product_id",
            id: "id",
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
            currencyCode: "currency_code",
            description: "This is a cat hat.",
            handle: "cat-hat",
            id: "id",
            imageUrl: "image_url",
            images: [
                {
                    links: [{}],
                    id: "id",
                    url: "url",
                    variantIds: ["variant_ids"],
                },
            ],
            publishedAtForeign: new Date("2015-07-15T19:28:00.000Z"),
            title: "Cat Hat",
            type: "Accessories",
            url: "url",
            variants: [
                {
                    links: [{}],
                    backorders: "backorders",
                    createdAt: new Date("2015-07-15T19:28:00.000Z"),
                    id: "id",
                    imageUrl: "image_url",
                    inventoryQuantity: 1,
                    price: 1.1,
                    sku: "sku",
                    title: "Cat Hat",
                    updatedAt: new Date("2015-07-15T19:28:00.000Z"),
                    url: "url",
                    visibility: "visibility",
                },
            ],
            vendor: "vendor",
        });
    });

    test("delete-store-product", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .delete("/3.0/ecommerce/stores/store_id/products/product_id")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.ecommerce.deleteStoreProduct({
            storeId: "store_id",
            productId: "product_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-store-product", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            currency_code: "currency_code",
            description: "This is a cat hat.",
            handle: "cat-hat",
            id: "id",
            image_url: "image_url",
            images: [{ _links: [{}], id: "id", url: "url", variant_ids: ["variant_ids"] }],
            published_at_foreign: "2015-07-15T19:28:00Z",
            title: "Cat Hat",
            type: "Accessories",
            url: "url",
            variants: [
                {
                    _links: [{}],
                    backorders: "backorders",
                    created_at: "2015-07-15T19:28:00Z",
                    id: "id",
                    image_url: "image_url",
                    inventory_quantity: 1,
                    price: 1.1,
                    sku: "sku",
                    title: "Cat Hat",
                    updated_at: "2015-07-15T19:28:00Z",
                    url: "url",
                    visibility: "visibility",
                },
            ],
            vendor: "vendor",
        };

        server
            .mockEndpoint()
            .patch("/3.0/ecommerce/stores/store_id/products/product_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.updateStoreProduct({
            storeId: "store_id",
            productId: "product_id",
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
            currencyCode: "currency_code",
            description: "This is a cat hat.",
            handle: "cat-hat",
            id: "id",
            imageUrl: "image_url",
            images: [
                {
                    links: [{}],
                    id: "id",
                    url: "url",
                    variantIds: ["variant_ids"],
                },
            ],
            publishedAtForeign: new Date("2015-07-15T19:28:00.000Z"),
            title: "Cat Hat",
            type: "Accessories",
            url: "url",
            variants: [
                {
                    links: [{}],
                    backorders: "backorders",
                    createdAt: new Date("2015-07-15T19:28:00.000Z"),
                    id: "id",
                    imageUrl: "image_url",
                    inventoryQuantity: 1,
                    price: 1.1,
                    sku: "sku",
                    title: "Cat Hat",
                    updatedAt: new Date("2015-07-15T19:28:00.000Z"),
                    url: "url",
                    visibility: "visibility",
                },
            ],
            vendor: "vendor",
        });
    });

    test("list-store-product-images", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            images: [{ _links: [{}], id: "id", url: "url", variant_ids: ["variant_ids"] }],
            product_id: "product_id",
            store_id: "store_id",
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/ecommerce/stores/store_id/products/product_id/images")
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
            images: [
                {
                    links: [{}],
                    id: "id",
                    url: "url",
                    variantIds: ["variant_ids"],
                },
            ],
            productId: "product_id",
            storeId: "store_id",
            totalItems: 1,
        };
        const page = await client.ecommerce.listStoreProductImages({
            storeId: "store_id",
            productId: "product_id",
        });

        expect(expected.images).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.images).toEqual(nextPage.data);
    });

    test("create-store-product-image", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { id: "id", url: "url" };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            id: "id",
            url: "url",
            variant_ids: ["variant_ids"],
        };

        server
            .mockEndpoint()
            .post("/3.0/ecommerce/stores/store_id/products/product_id/images")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.createStoreProductImage({
            storeId: "store_id",
            productId: "product_id",
            id: "id",
            url: "url",
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
            id: "id",
            url: "url",
            variantIds: ["variant_ids"],
        });
    });

    test("get-store-product-image", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            id: "id",
            url: "url",
            variant_ids: ["variant_ids"],
        };

        server
            .mockEndpoint()
            .get("/3.0/ecommerce/stores/store_id/products/product_id/images/image_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.getStoreProductImage({
            storeId: "store_id",
            productId: "product_id",
            imageId: "image_id",
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
            id: "id",
            url: "url",
            variantIds: ["variant_ids"],
        });
    });

    test("delete-store-product-image", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .delete("/3.0/ecommerce/stores/store_id/products/product_id/images/image_id")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.ecommerce.deleteStoreProductImage({
            storeId: "store_id",
            productId: "product_id",
            imageId: "image_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-store-product-image", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            id: "id",
            url: "url",
            variant_ids: ["variant_ids"],
        };

        server
            .mockEndpoint()
            .patch("/3.0/ecommerce/stores/store_id/products/product_id/images/image_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.updateStoreProductImage({
            storeId: "store_id",
            productId: "product_id",
            imageId: "image_id",
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
            id: "id",
            url: "url",
            variantIds: ["variant_ids"],
        });
    });

    test("list-store-product-variants", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            product_id: "product_id",
            store_id: "store_id",
            total_items: 1,
            variants: [
                {
                    _links: [{}],
                    backorders: "backorders",
                    created_at: "2015-07-15T19:28:00Z",
                    id: "id",
                    image_url: "image_url",
                    inventory_quantity: 1,
                    price: 1.1,
                    sku: "sku",
                    title: "Cat Hat",
                    updated_at: "2015-07-15T19:28:00Z",
                    url: "url",
                    visibility: "visibility",
                },
            ],
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/ecommerce/stores/store_id/products/product_id/variants")
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
            productId: "product_id",
            storeId: "store_id",
            totalItems: 1,
            variants: [
                {
                    links: [{}],
                    backorders: "backorders",
                    createdAt: new Date("2015-07-15T19:28:00.000Z"),
                    id: "id",
                    imageUrl: "image_url",
                    inventoryQuantity: 1,
                    price: 1.1,
                    sku: "sku",
                    title: "Cat Hat",
                    updatedAt: new Date("2015-07-15T19:28:00.000Z"),
                    url: "url",
                    visibility: "visibility",
                },
            ],
        };
        const page = await client.ecommerce.listStoreProductVariants({
            storeId: "store_id",
            productId: "product_id",
        });

        expect(expected.variants).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.variants).toEqual(nextPage.data);
    });

    test("create-store-product-variant", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = { id: "id", title: "Cat Hat" };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            backorders: "backorders",
            created_at: "2015-07-15T19:28:00Z",
            id: "id",
            image_url: "image_url",
            inventory_quantity: 1,
            price: 1.1,
            sku: "sku",
            title: "Cat Hat",
            updated_at: "2015-07-15T19:28:00Z",
            url: "url",
            visibility: "visibility",
        };

        server
            .mockEndpoint()
            .post("/3.0/ecommerce/stores/store_id/products/product_id/variants")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.createStoreProductVariant({
            storeId: "store_id",
            productId: "product_id",
            id: "id",
            title: "Cat Hat",
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
            backorders: "backorders",
            createdAt: new Date("2015-07-15T19:28:00.000Z"),
            id: "id",
            imageUrl: "image_url",
            inventoryQuantity: 1,
            price: 1.1,
            sku: "sku",
            title: "Cat Hat",
            updatedAt: new Date("2015-07-15T19:28:00.000Z"),
            url: "url",
            visibility: "visibility",
        });
    });

    test("get-store-product-variant", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            backorders: "backorders",
            created_at: "2015-07-15T19:28:00Z",
            id: "id",
            image_url: "image_url",
            inventory_quantity: 1,
            price: 1.1,
            sku: "sku",
            title: "Cat Hat",
            updated_at: "2015-07-15T19:28:00Z",
            url: "url",
            visibility: "visibility",
        };

        server
            .mockEndpoint()
            .get("/3.0/ecommerce/stores/store_id/products/product_id/variants/variant_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.getStoreProductVariant({
            storeId: "store_id",
            productId: "product_id",
            variantId: "variant_id",
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
            backorders: "backorders",
            createdAt: new Date("2015-07-15T19:28:00.000Z"),
            id: "id",
            imageUrl: "image_url",
            inventoryQuantity: 1,
            price: 1.1,
            sku: "sku",
            title: "Cat Hat",
            updatedAt: new Date("2015-07-15T19:28:00.000Z"),
            url: "url",
            visibility: "visibility",
        });
    });

    test("upsert-store-product-variant", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            backorders: "backorders",
            created_at: "2015-07-15T19:28:00Z",
            id: "id",
            image_url: "image_url",
            inventory_quantity: 1,
            price: 1.1,
            sku: "sku",
            title: "Cat Hat",
            updated_at: "2015-07-15T19:28:00Z",
            url: "url",
            visibility: "visibility",
        };

        server
            .mockEndpoint()
            .put("/3.0/ecommerce/stores/store_id/products/product_id/variants/variant_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.upsertStoreProductVariant({
            storeId: "store_id",
            productId: "product_id",
            variantId: "variant_id",
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
            backorders: "backorders",
            createdAt: new Date("2015-07-15T19:28:00.000Z"),
            id: "id",
            imageUrl: "image_url",
            inventoryQuantity: 1,
            price: 1.1,
            sku: "sku",
            title: "Cat Hat",
            updatedAt: new Date("2015-07-15T19:28:00.000Z"),
            url: "url",
            visibility: "visibility",
        });
    });

    test("delete-store-product-variant", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .delete("/3.0/ecommerce/stores/store_id/products/product_id/variants/variant_id")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.ecommerce.deleteStoreProductVariant({
            storeId: "store_id",
            productId: "product_id",
            variantId: "variant_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-store-product-variant", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            backorders: "backorders",
            created_at: "2015-07-15T19:28:00Z",
            id: "id",
            image_url: "image_url",
            inventory_quantity: 1,
            price: 1.1,
            sku: "sku",
            title: "Cat Hat",
            updated_at: "2015-07-15T19:28:00Z",
            url: "url",
            visibility: "visibility",
        };

        server
            .mockEndpoint()
            .patch("/3.0/ecommerce/stores/store_id/products/product_id/variants/variant_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.updateStoreProductVariant({
            storeId: "store_id",
            productId: "product_id",
            variantId: "variant_id",
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
            backorders: "backorders",
            createdAt: new Date("2015-07-15T19:28:00.000Z"),
            id: "id",
            imageUrl: "image_url",
            inventoryQuantity: 1,
            price: 1.1,
            sku: "sku",
            title: "Cat Hat",
            updatedAt: new Date("2015-07-15T19:28:00.000Z"),
            url: "url",
            visibility: "visibility",
        });
    });

    test("list-store-promo-rules", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            promo_rules: [
                {
                    _links: [{}],
                    amount: 0.5,
                    created_at_foreign: "2024-01-15T09:30:00Z",
                    description: "Save BIG during our summer sale!",
                    enabled: true,
                    ends_at: "ends_at",
                    id: "id",
                    starts_at: "2024-01-15T09:30:00Z",
                    target: "per_item",
                    title: "50% off Total Order",
                    type: "fixed",
                    updated_at_foreign: "2024-01-15T09:30:00Z",
                },
            ],
            store_id: "store_id",
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/ecommerce/stores/store_id/promo-rules")
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
            promoRules: [
                {
                    links: [{}],
                    amount: 0.5,
                    createdAtForeign: new Date("2024-01-15T09:30:00.000Z"),
                    description: "Save BIG during our summer sale!",
                    enabled: true,
                    endsAt: "ends_at",
                    id: "id",
                    startsAt: new Date("2024-01-15T09:30:00.000Z"),
                    target: "per_item",
                    title: "50% off Total Order",
                    type: "fixed",
                    updatedAtForeign: new Date("2024-01-15T09:30:00.000Z"),
                },
            ],
            storeId: "store_id",
            totalItems: 1,
        };
        const page = await client.ecommerce.listStorePromoRules({
            storeId: "store_id",
        });

        expect(expected.promoRules).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.promoRules).toEqual(nextPage.data);
    });

    test("create-store-promo-rule", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {
            amount: 1.1,
            description: "Save BIG during our summer sale!",
            id: "id",
            target: "per_item",
            type: "fixed",
        };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            amount: 0.5,
            created_at_foreign: "2024-01-15T09:30:00Z",
            description: "Save BIG during our summer sale!",
            enabled: true,
            ends_at: "ends_at",
            id: "id",
            starts_at: "2024-01-15T09:30:00Z",
            target: "per_item",
            title: "50% off Total Order",
            type: "fixed",
            updated_at_foreign: "2024-01-15T09:30:00Z",
        };

        server
            .mockEndpoint()
            .post("/3.0/ecommerce/stores/store_id/promo-rules")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.createStorePromoRule({
            storeId: "store_id",
            amount: 1.1,
            description: "Save BIG during our summer sale!",
            id: "id",
            target: "per_item",
            type: "fixed",
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
            amount: 0.5,
            createdAtForeign: new Date("2024-01-15T09:30:00.000Z"),
            description: "Save BIG during our summer sale!",
            enabled: true,
            endsAt: "ends_at",
            id: "id",
            startsAt: new Date("2024-01-15T09:30:00.000Z"),
            target: "per_item",
            title: "50% off Total Order",
            type: "fixed",
            updatedAtForeign: new Date("2024-01-15T09:30:00.000Z"),
        });
    });

    test("get-store-promo-rule", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            amount: 0.5,
            created_at_foreign: "2024-01-15T09:30:00Z",
            description: "Save BIG during our summer sale!",
            enabled: true,
            ends_at: "ends_at",
            id: "id",
            starts_at: "2024-01-15T09:30:00Z",
            target: "per_item",
            title: "50% off Total Order",
            type: "fixed",
            updated_at_foreign: "2024-01-15T09:30:00Z",
        };

        server
            .mockEndpoint()
            .get("/3.0/ecommerce/stores/store_id/promo-rules/promo_rule_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.getStorePromoRule({
            storeId: "store_id",
            promoRuleId: "promo_rule_id",
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
            amount: 0.5,
            createdAtForeign: new Date("2024-01-15T09:30:00.000Z"),
            description: "Save BIG during our summer sale!",
            enabled: true,
            endsAt: "ends_at",
            id: "id",
            startsAt: new Date("2024-01-15T09:30:00.000Z"),
            target: "per_item",
            title: "50% off Total Order",
            type: "fixed",
            updatedAtForeign: new Date("2024-01-15T09:30:00.000Z"),
        });
    });

    test("delete-store-promo-rule", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .delete("/3.0/ecommerce/stores/store_id/promo-rules/promo_rule_id")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.ecommerce.deleteStorePromoRule({
            storeId: "store_id",
            promoRuleId: "promo_rule_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-store-promo-rule", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            amount: 0.5,
            created_at_foreign: "2024-01-15T09:30:00Z",
            description: "Save BIG during our summer sale!",
            enabled: true,
            ends_at: "ends_at",
            id: "id",
            starts_at: "2024-01-15T09:30:00Z",
            target: "per_item",
            title: "50% off Total Order",
            type: "fixed",
            updated_at_foreign: "2024-01-15T09:30:00Z",
        };

        server
            .mockEndpoint()
            .patch("/3.0/ecommerce/stores/store_id/promo-rules/promo_rule_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.updateStorePromoRule({
            storeId: "store_id",
            promoRuleId: "promo_rule_id",
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
            amount: 0.5,
            createdAtForeign: new Date("2024-01-15T09:30:00.000Z"),
            description: "Save BIG during our summer sale!",
            enabled: true,
            endsAt: "ends_at",
            id: "id",
            startsAt: new Date("2024-01-15T09:30:00.000Z"),
            target: "per_item",
            title: "50% off Total Order",
            type: "fixed",
            updatedAtForeign: new Date("2024-01-15T09:30:00.000Z"),
        });
    });

    test("list-store-promo-rule-promo-codes", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            promo_codes: [
                {
                    _links: [{}],
                    code: "summersale",
                    created_at_foreign: "2024-01-15T09:30:00Z",
                    enabled: true,
                    id: "id",
                    redemption_url:
                        "A url that applies promo code directly at checkout or a url that points to sale page or store url",
                    updated_at_foreign: "2024-01-15T09:30:00Z",
                    usage_count: 1,
                },
            ],
            store_id: "store_id",
            total_items: 1,
        };

        server
            .mockEndpoint({ once: false })
            .get("/3.0/ecommerce/stores/store_id/promo-rules/promo_rule_id/promo-codes")
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
            promoCodes: [
                {
                    links: [{}],
                    code: "summersale",
                    createdAtForeign: new Date("2024-01-15T09:30:00.000Z"),
                    enabled: true,
                    id: "id",
                    redemptionUrl:
                        "A url that applies promo code directly at checkout or a url that points to sale page or store url",
                    updatedAtForeign: new Date("2024-01-15T09:30:00.000Z"),
                    usageCount: 1,
                },
            ],
            storeId: "store_id",
            totalItems: 1,
        };
        const page = await client.ecommerce.listStorePromoRulePromoCodes({
            storeId: "store_id",
            promoRuleId: "promo_rule_id",
        });

        expect(expected.promoCodes).toEqual(page.data);
        expect(page.hasNextPage()).toBe(true);
        const nextPage = await page.getNextPage();
        expect(expected.promoCodes).toEqual(nextPage.data);
    });

    test("create-store-promo-rule-promo-code", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {
            code: "summersale",
            id: "id",
            redemption_url:
                "A url that applies promo code directly at checkout or a url that points to sale page or store url",
        };
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            code: "summersale",
            created_at_foreign: "2024-01-15T09:30:00Z",
            enabled: true,
            id: "id",
            redemption_url:
                "A url that applies promo code directly at checkout or a url that points to sale page or store url",
            updated_at_foreign: "2024-01-15T09:30:00Z",
            usage_count: 1,
        };

        server
            .mockEndpoint()
            .post("/3.0/ecommerce/stores/store_id/promo-rules/promo_rule_id/promo-codes")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.createStorePromoRulePromoCode({
            storeId: "store_id",
            promoRuleId: "promo_rule_id",
            code: "summersale",
            id: "id",
            redemptionUrl:
                "A url that applies promo code directly at checkout or a url that points to sale page or store url",
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
            code: "summersale",
            createdAtForeign: new Date("2024-01-15T09:30:00.000Z"),
            enabled: true,
            id: "id",
            redemptionUrl:
                "A url that applies promo code directly at checkout or a url that points to sale page or store url",
            updatedAtForeign: new Date("2024-01-15T09:30:00.000Z"),
            usageCount: 1,
        });
    });

    test("get-store-promo-rule-promo-code", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            code: "summersale",
            created_at_foreign: "2024-01-15T09:30:00Z",
            enabled: true,
            id: "id",
            redemption_url:
                "A url that applies promo code directly at checkout or a url that points to sale page or store url",
            updated_at_foreign: "2024-01-15T09:30:00Z",
            usage_count: 1,
        };

        server
            .mockEndpoint()
            .get("/3.0/ecommerce/stores/store_id/promo-rules/promo_rule_id/promo-codes/promo_code_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.getStorePromoRulePromoCode({
            storeId: "store_id",
            promoRuleId: "promo_rule_id",
            promoCodeId: "promo_code_id",
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
            code: "summersale",
            createdAtForeign: new Date("2024-01-15T09:30:00.000Z"),
            enabled: true,
            id: "id",
            redemptionUrl:
                "A url that applies promo code directly at checkout or a url that points to sale page or store url",
            updatedAtForeign: new Date("2024-01-15T09:30:00.000Z"),
            usageCount: 1,
        });
    });

    test("delete-store-promo-rule-promo-code", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });

        server
            .mockEndpoint()
            .delete("/3.0/ecommerce/stores/store_id/promo-rules/promo_rule_id/promo-codes/promo_code_id")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.ecommerce.deleteStorePromoRulePromoCode({
            storeId: "store_id",
            promoRuleId: "promo_rule_id",
            promoCodeId: "promo_code_id",
        });
        expect(response).toEqual(undefined);
    });

    test("update-store-promo-rule-promo-code", async () => {
        const server = mockServerPool.createServer();
        const client = new MailchimpClient({ maxRetries: 0, token: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            _links: [{ href: "href", method: "GET", rel: "rel", schema: "schema", targetSchema: "targetSchema" }],
            code: "summersale",
            created_at_foreign: "2024-01-15T09:30:00Z",
            enabled: true,
            id: "id",
            redemption_url:
                "A url that applies promo code directly at checkout or a url that points to sale page or store url",
            updated_at_foreign: "2024-01-15T09:30:00Z",
            usage_count: 1,
        };

        server
            .mockEndpoint()
            .patch("/3.0/ecommerce/stores/store_id/promo-rules/promo_rule_id/promo-codes/promo_code_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ecommerce.updateStorePromoRulePromoCode({
            storeId: "store_id",
            promoRuleId: "promo_rule_id",
            promoCodeId: "promo_code_id",
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
            code: "summersale",
            createdAtForeign: new Date("2024-01-15T09:30:00.000Z"),
            enabled: true,
            id: "id",
            redemptionUrl:
                "A url that applies promo code directly at checkout or a url that points to sale page or store url",
            updatedAtForeign: new Date("2024-01-15T09:30:00.000Z"),
            usageCount: 1,
        });
    });
});
