//  This file was auto-generated from our API Definition.

import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../BaseClient.js";
import { mergeHeaders } from "../../../../core/headers.js";
import * as core from "../../../../core/index.js";
import { mergeAdditionalBodyParameters } from "../../../../core/requestBody.js";
import * as environments from "../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../errors/index.js";
import * as serializers from "../../../../serialization/index.js";
import type * as Mailchimp from "../../../index.js";

export declare namespace EcommerceClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Stores and their carts, orders, products, customers, and promo rules.
 */
export class EcommerceClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<EcommerceClient.Options>;

    constructor(options: EcommerceClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Get information about the e-commerce endpoint's resources.
     *
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.list()
     */
    public list(
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListEcommerceResponse> {
        return core.HttpResponsePromise.fromPromise(this.__list(requestOptions));
    }

    private async __list(
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListEcommerceResponse>> {
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                "3.0/ecommerce",
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ListEcommerceResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/ecommerce");
    }

    /**
     * Get information about an account's orders.
     *
     * @param {Mailchimp.ListOrdersEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.listOrders()
     */
    public async listOrders(
        request: Mailchimp.ListOrdersEcommerceRequest = {},
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ECommerceOrder, Mailchimp.ListOrdersEcommerceResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListOrdersEcommerceRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListOrdersEcommerceResponse>> => {
                const { fields, excludeFields, count, offset, campaignId, outreachId, customerId, hasOutreach } =
                    request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    campaign_id: campaignId,
                    outreach_id: outreachId,
                    customer_id: customerId,
                    has_outreach: hasOutreach,
                };
                const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
                const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
                    _authRequest.headers,
                    this._options?.headers,
                    requestOptions?.headers,
                );
                const _response = await (this._options.fetcher ?? core.fetcher)({
                    url: core.url.join(
                        (await core.Supplier.get(this._options.baseUrl)) ??
                            (await core.Supplier.get(this._options.environment)) ??
                            environments.MailchimpEnvironment.Default,
                        "3.0/ecommerce/orders",
                    ),
                    method: "GET",
                    headers: _headers,
                    queryString: core.url
                        .queryBuilder()
                        .addMany(_queryParams)
                        .add("fields", _queryParams.fields, { style: "comma" })
                        .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                        .mergeAdditional(requestOptions?.queryParams)
                        .build(),
                    timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
                    maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                    fetchFn: this._options?.fetch,
                    logging: this._options.logging,
                });
                if (_response.ok) {
                    return {
                        data: serializers.ListOrdersEcommerceResponse.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        rawResponse: _response.rawResponse,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.MailchimpError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
                }
                return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/ecommerce/orders");
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ECommerceOrder, Mailchimp.ListOrdersEcommerceResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.orders ?? []).length > 0,
            getItems: (response) => response?.orders ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Get information about all stores in the account.
     *
     * @param {Mailchimp.ListStoresEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.listStores()
     */
    public async listStores(
        request: Mailchimp.ListStoresEcommerceRequest = {},
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ECommerceStore, Mailchimp.ListStoresEcommerceResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListStoresEcommerceRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListStoresEcommerceResponse>> => {
                const { fields, excludeFields, count, offset } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                };
                const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
                const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
                    _authRequest.headers,
                    this._options?.headers,
                    requestOptions?.headers,
                );
                const _response = await (this._options.fetcher ?? core.fetcher)({
                    url: core.url.join(
                        (await core.Supplier.get(this._options.baseUrl)) ??
                            (await core.Supplier.get(this._options.environment)) ??
                            environments.MailchimpEnvironment.Default,
                        "3.0/ecommerce/stores",
                    ),
                    method: "GET",
                    headers: _headers,
                    queryString: core.url
                        .queryBuilder()
                        .addMany(_queryParams)
                        .add("fields", _queryParams.fields, { style: "comma" })
                        .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                        .mergeAdditional(requestOptions?.queryParams)
                        .build(),
                    timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
                    maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                    fetchFn: this._options?.fetch,
                    logging: this._options.logging,
                });
                if (_response.ok) {
                    return {
                        data: serializers.ListStoresEcommerceResponse.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        rawResponse: _response.rawResponse,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.MailchimpError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
                }
                return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/ecommerce/stores");
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ECommerceStore, Mailchimp.ListStoresEcommerceResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.stores ?? []).length > 0,
            getItems: (response) => response?.stores ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Add a new store to your Mailchimp account.
     *
     * @param {Mailchimp.CreateStoreEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.createStore({
     *         currencyCode: "USD",
     *         id: "example_store",
     *         listId: "1a2df69511",
     *         name: "Freddie's Cat Hat Emporium"
     *     })
     */
    public createStore(
        request: Mailchimp.CreateStoreEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceStore> {
        return core.HttpResponsePromise.fromPromise(this.__createStore(request, requestOptions));
    }

    private async __createStore(
        request: Mailchimp.CreateStoreEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceStore>> {
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                "3.0/ecommerce/stores",
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateStoreEcommerceRequest.jsonOrThrow(request, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceStore.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/3.0/ecommerce/stores");
    }

    /**
     * Get information about a specific store.
     *
     * @param {Mailchimp.GetStoreEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.getStore({
     *         storeId: "store_id"
     *     })
     */
    public getStore(
        request: Mailchimp.GetStoreEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceStore> {
        return core.HttpResponsePromise.fromPromise(this.__getStore(request, requestOptions));
    }

    private async __getStore(
        request: Mailchimp.GetStoreEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceStore>> {
        const { storeId, fields, excludeFields } = request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
        };
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .add("fields", _queryParams.fields, { style: "comma" })
                .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceStore.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "GET",
            "/3.0/ecommerce/stores/{store_id}",
        );
    }

    /**
     * Delete a store. Deleting a store will also delete any associated subresources, including Customers, Orders, Products, and Carts.
     *
     * @param {Mailchimp.DeleteStoreEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.deleteStore({
     *         storeId: "store_id"
     *     })
     */
    public deleteStore(
        request: Mailchimp.DeleteStoreEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteStore(request, requestOptions));
    }

    private async __deleteStore(
        request: Mailchimp.DeleteStoreEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { storeId } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}`,
            ),
            method: "DELETE",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: undefined, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "DELETE",
            "/3.0/ecommerce/stores/{store_id}",
        );
    }

    /**
     * Update a store.
     *
     * @param {Mailchimp.UpdateStoreEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.updateStore({
     *         storeId: "store_id"
     *     })
     */
    public updateStore(
        request: Mailchimp.UpdateStoreEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceStore> {
        return core.HttpResponsePromise.fromPromise(this.__updateStore(request, requestOptions));
    }

    private async __updateStore(
        request: Mailchimp.UpdateStoreEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceStore>> {
        const { storeId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateStoreEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceStore.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "PATCH",
            "/3.0/ecommerce/stores/{store_id}",
        );
    }

    /**
     * Get information about a store's carts.
     *
     * @param {Mailchimp.ListStoreCartsEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.listStoreCarts({
     *         storeId: "store_id"
     *     })
     */
    public async listStoreCarts(
        request: Mailchimp.ListStoreCartsEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ECommerceCart, Mailchimp.ListStoreCartsEcommerceResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListStoreCartsEcommerceRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListStoreCartsEcommerceResponse>> => {
                const { storeId, fields, excludeFields, count, offset } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                };
                const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
                const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
                    _authRequest.headers,
                    this._options?.headers,
                    requestOptions?.headers,
                );
                const _response = await (this._options.fetcher ?? core.fetcher)({
                    url: core.url.join(
                        (await core.Supplier.get(this._options.baseUrl)) ??
                            (await core.Supplier.get(this._options.environment)) ??
                            environments.MailchimpEnvironment.Default,
                        `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/carts`,
                    ),
                    method: "GET",
                    headers: _headers,
                    queryString: core.url
                        .queryBuilder()
                        .addMany(_queryParams)
                        .add("fields", _queryParams.fields, { style: "comma" })
                        .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                        .mergeAdditional(requestOptions?.queryParams)
                        .build(),
                    timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
                    maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                    fetchFn: this._options?.fetch,
                    logging: this._options.logging,
                });
                if (_response.ok) {
                    return {
                        data: serializers.ListStoreCartsEcommerceResponse.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        rawResponse: _response.rawResponse,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.MailchimpError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
                }
                return handleNonStatusCodeError(
                    _response.error,
                    _response.rawResponse,
                    "GET",
                    "/3.0/ecommerce/stores/{store_id}/carts",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ECommerceCart, Mailchimp.ListStoreCartsEcommerceResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.carts ?? []).length > 0,
            getItems: (response) => response?.carts ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Add a new cart to a store.
     *
     * @param {Mailchimp.CreateStoreCartEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.createStoreCart({
     *         storeId: "store_id",
     *         currencyCode: "currency_code",
     *         customer: {
     *             id: "id"
     *         },
     *         id: "id",
     *         lines: [{
     *                 id: "id",
     *                 price: 1.1,
     *                 productId: "product_id",
     *                 productVariantId: "product_variant_id",
     *                 quantity: 1
     *             }],
     *         orderTotal: 1.1
     *     })
     */
    public createStoreCart(
        request: Mailchimp.CreateStoreCartEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceCart> {
        return core.HttpResponsePromise.fromPromise(this.__createStoreCart(request, requestOptions));
    }

    private async __createStoreCart(
        request: Mailchimp.CreateStoreCartEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceCart>> {
        const { storeId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/carts`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateStoreCartEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceCart.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "POST",
            "/3.0/ecommerce/stores/{store_id}/carts",
        );
    }

    /**
     * Get information about a specific cart.
     *
     * @param {Mailchimp.GetStoreCartEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.getStoreCart({
     *         storeId: "store_id",
     *         cartId: "cart_id"
     *     })
     */
    public getStoreCart(
        request: Mailchimp.GetStoreCartEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceCart> {
        return core.HttpResponsePromise.fromPromise(this.__getStoreCart(request, requestOptions));
    }

    private async __getStoreCart(
        request: Mailchimp.GetStoreCartEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceCart>> {
        const { storeId, cartId, fields, excludeFields } = request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
        };
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/carts/${core.url.encodePathParam(cartId)}`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .add("fields", _queryParams.fields, { style: "comma" })
                .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceCart.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "GET",
            "/3.0/ecommerce/stores/{store_id}/carts/{cart_id}",
        );
    }

    /**
     * Delete a cart.
     *
     * @param {Mailchimp.DeleteStoreCartEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.deleteStoreCart({
     *         storeId: "store_id",
     *         cartId: "cart_id"
     *     })
     */
    public deleteStoreCart(
        request: Mailchimp.DeleteStoreCartEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteStoreCart(request, requestOptions));
    }

    private async __deleteStoreCart(
        request: Mailchimp.DeleteStoreCartEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { storeId, cartId } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/carts/${core.url.encodePathParam(cartId)}`,
            ),
            method: "DELETE",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: undefined, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "DELETE",
            "/3.0/ecommerce/stores/{store_id}/carts/{cart_id}",
        );
    }

    /**
     * Update a specific cart.
     *
     * @param {Mailchimp.UpdateStoreCartEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.updateStoreCart({
     *         storeId: "store_id",
     *         cartId: "cart_id"
     *     })
     */
    public updateStoreCart(
        request: Mailchimp.UpdateStoreCartEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceCart> {
        return core.HttpResponsePromise.fromPromise(this.__updateStoreCart(request, requestOptions));
    }

    private async __updateStoreCart(
        request: Mailchimp.UpdateStoreCartEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceCart>> {
        const { storeId, cartId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/carts/${core.url.encodePathParam(cartId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateStoreCartEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceCart.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "PATCH",
            "/3.0/ecommerce/stores/{store_id}/carts/{cart_id}",
        );
    }

    /**
     * Get information about a cart's line items.
     *
     * @param {Mailchimp.ListStoreCartLinesEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.listStoreCartLines({
     *         storeId: "store_id",
     *         cartId: "cart_id"
     *     })
     */
    public async listStoreCartLines(
        request: Mailchimp.ListStoreCartLinesEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ECommerceCartLineItem, Mailchimp.ListStoreCartLinesEcommerceResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListStoreCartLinesEcommerceRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListStoreCartLinesEcommerceResponse>> => {
                const { storeId, cartId, fields, excludeFields, count, offset } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                };
                const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
                const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
                    _authRequest.headers,
                    this._options?.headers,
                    requestOptions?.headers,
                );
                const _response = await (this._options.fetcher ?? core.fetcher)({
                    url: core.url.join(
                        (await core.Supplier.get(this._options.baseUrl)) ??
                            (await core.Supplier.get(this._options.environment)) ??
                            environments.MailchimpEnvironment.Default,
                        `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/carts/${core.url.encodePathParam(cartId)}/lines`,
                    ),
                    method: "GET",
                    headers: _headers,
                    queryString: core.url
                        .queryBuilder()
                        .addMany(_queryParams)
                        .add("fields", _queryParams.fields, { style: "comma" })
                        .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                        .mergeAdditional(requestOptions?.queryParams)
                        .build(),
                    timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
                    maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                    fetchFn: this._options?.fetch,
                    logging: this._options.logging,
                });
                if (_response.ok) {
                    return {
                        data: serializers.ListStoreCartLinesEcommerceResponse.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        rawResponse: _response.rawResponse,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.MailchimpError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
                }
                return handleNonStatusCodeError(
                    _response.error,
                    _response.rawResponse,
                    "GET",
                    "/3.0/ecommerce/stores/{store_id}/carts/{cart_id}/lines",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ECommerceCartLineItem, Mailchimp.ListStoreCartLinesEcommerceResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.lines ?? []).length > 0,
            getItems: (response) => response?.lines ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Add a new line item to an existing cart.
     *
     * @param {Mailchimp.CreateStoreCartLineEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.createStoreCartLine({
     *         storeId: "store_id",
     *         cartId: "cart_id",
     *         id: "id",
     *         price: 1.1,
     *         productId: "product_id",
     *         productVariantId: "product_variant_id",
     *         quantity: 1
     *     })
     */
    public createStoreCartLine(
        request: Mailchimp.CreateStoreCartLineEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceCartLineItem> {
        return core.HttpResponsePromise.fromPromise(this.__createStoreCartLine(request, requestOptions));
    }

    private async __createStoreCartLine(
        request: Mailchimp.CreateStoreCartLineEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceCartLineItem>> {
        const { storeId, cartId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/carts/${core.url.encodePathParam(cartId)}/lines`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateStoreCartLineEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceCartLineItem.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "POST",
            "/3.0/ecommerce/stores/{store_id}/carts/{cart_id}/lines",
        );
    }

    /**
     * Get information about a specific cart line item.
     *
     * @param {Mailchimp.GetStoreCartLineEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.getStoreCartLine({
     *         storeId: "store_id",
     *         cartId: "cart_id",
     *         lineId: "line_id"
     *     })
     */
    public getStoreCartLine(
        request: Mailchimp.GetStoreCartLineEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceCartLineItem> {
        return core.HttpResponsePromise.fromPromise(this.__getStoreCartLine(request, requestOptions));
    }

    private async __getStoreCartLine(
        request: Mailchimp.GetStoreCartLineEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceCartLineItem>> {
        const { storeId, cartId, lineId, fields, excludeFields } = request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
        };
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/carts/${core.url.encodePathParam(cartId)}/lines/${core.url.encodePathParam(lineId)}`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .add("fields", _queryParams.fields, { style: "comma" })
                .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceCartLineItem.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "GET",
            "/3.0/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}",
        );
    }

    /**
     * Delete a specific cart line item.
     *
     * @param {Mailchimp.DeleteStoreCartLineEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.deleteStoreCartLine({
     *         storeId: "store_id",
     *         cartId: "cart_id",
     *         lineId: "line_id"
     *     })
     */
    public deleteStoreCartLine(
        request: Mailchimp.DeleteStoreCartLineEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteStoreCartLine(request, requestOptions));
    }

    private async __deleteStoreCartLine(
        request: Mailchimp.DeleteStoreCartLineEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { storeId, cartId, lineId } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/carts/${core.url.encodePathParam(cartId)}/lines/${core.url.encodePathParam(lineId)}`,
            ),
            method: "DELETE",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: undefined, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "DELETE",
            "/3.0/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}",
        );
    }

    /**
     * Update a specific cart line item.
     *
     * @param {Mailchimp.UpdateStoreCartLineEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.updateStoreCartLine({
     *         storeId: "store_id",
     *         cartId: "cart_id",
     *         lineId: "line_id"
     *     })
     */
    public updateStoreCartLine(
        request: Mailchimp.UpdateStoreCartLineEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceCartLineItem> {
        return core.HttpResponsePromise.fromPromise(this.__updateStoreCartLine(request, requestOptions));
    }

    private async __updateStoreCartLine(
        request: Mailchimp.UpdateStoreCartLineEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceCartLineItem>> {
        const { storeId, cartId, lineId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/carts/${core.url.encodePathParam(cartId)}/lines/${core.url.encodePathParam(lineId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateStoreCartLineEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceCartLineItem.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "PATCH",
            "/3.0/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}",
        );
    }

    /**
     * Get information about a store's customers.
     *
     * @param {Mailchimp.ListStoreCustomersEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.listStoreCustomers({
     *         storeId: "store_id"
     *     })
     */
    public async listStoreCustomers(
        request: Mailchimp.ListStoreCustomersEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ECommerceCustomer, Mailchimp.ListStoreCustomersEcommerceResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListStoreCustomersEcommerceRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListStoreCustomersEcommerceResponse>> => {
                const { storeId, fields, excludeFields, count, offset, emailAddress } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    email_address: emailAddress,
                };
                const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
                const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
                    _authRequest.headers,
                    this._options?.headers,
                    requestOptions?.headers,
                );
                const _response = await (this._options.fetcher ?? core.fetcher)({
                    url: core.url.join(
                        (await core.Supplier.get(this._options.baseUrl)) ??
                            (await core.Supplier.get(this._options.environment)) ??
                            environments.MailchimpEnvironment.Default,
                        `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/customers`,
                    ),
                    method: "GET",
                    headers: _headers,
                    queryString: core.url
                        .queryBuilder()
                        .addMany(_queryParams)
                        .add("fields", _queryParams.fields, { style: "comma" })
                        .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                        .mergeAdditional(requestOptions?.queryParams)
                        .build(),
                    timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
                    maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                    fetchFn: this._options?.fetch,
                    logging: this._options.logging,
                });
                if (_response.ok) {
                    return {
                        data: serializers.ListStoreCustomersEcommerceResponse.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        rawResponse: _response.rawResponse,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.MailchimpError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
                }
                return handleNonStatusCodeError(
                    _response.error,
                    _response.rawResponse,
                    "GET",
                    "/3.0/ecommerce/stores/{store_id}/customers",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ECommerceCustomer, Mailchimp.ListStoreCustomersEcommerceResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.customers ?? []).length > 0,
            getItems: (response) => response?.customers ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Add a new customer to a store.
     *
     * @param {Mailchimp.CreateStoreCustomerEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.createStoreCustomer({
     *         storeId: "store_id",
     *         id: "id",
     *         optInStatus: true
     *     })
     */
    public createStoreCustomer(
        request: Mailchimp.CreateStoreCustomerEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceCustomer> {
        return core.HttpResponsePromise.fromPromise(this.__createStoreCustomer(request, requestOptions));
    }

    private async __createStoreCustomer(
        request: Mailchimp.CreateStoreCustomerEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceCustomer>> {
        const { storeId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/customers`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateStoreCustomerEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceCustomer.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "POST",
            "/3.0/ecommerce/stores/{store_id}/customers",
        );
    }

    /**
     * Get information about a specific customer.
     *
     * @param {Mailchimp.GetStoreCustomerEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.getStoreCustomer({
     *         storeId: "store_id",
     *         customerId: "customer_id"
     *     })
     */
    public getStoreCustomer(
        request: Mailchimp.GetStoreCustomerEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceCustomer> {
        return core.HttpResponsePromise.fromPromise(this.__getStoreCustomer(request, requestOptions));
    }

    private async __getStoreCustomer(
        request: Mailchimp.GetStoreCustomerEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceCustomer>> {
        const { storeId, customerId, fields, excludeFields } = request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
        };
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/customers/${core.url.encodePathParam(customerId)}`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .add("fields", _queryParams.fields, { style: "comma" })
                .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceCustomer.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "GET",
            "/3.0/ecommerce/stores/{store_id}/customers/{customer_id}",
        );
    }

    /**
     * Add or update a customer.
     *
     * @param {Mailchimp.UpsertStoreCustomerEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.upsertStoreCustomer({
     *         storeId: "store_id",
     *         customerId: "customer_id"
     *     })
     */
    public upsertStoreCustomer(
        request: Mailchimp.UpsertStoreCustomerEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceCustomer> {
        return core.HttpResponsePromise.fromPromise(this.__upsertStoreCustomer(request, requestOptions));
    }

    private async __upsertStoreCustomer(
        request: Mailchimp.UpsertStoreCustomerEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceCustomer>> {
        const { storeId, customerId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/customers/${core.url.encodePathParam(customerId)}`,
            ),
            method: "PUT",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpsertStoreCustomerEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceCustomer.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "PUT",
            "/3.0/ecommerce/stores/{store_id}/customers/{customer_id}",
        );
    }

    /**
     * Delete a customer from a store.
     *
     * @param {Mailchimp.DeleteStoreCustomerEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.deleteStoreCustomer({
     *         storeId: "store_id",
     *         customerId: "customer_id"
     *     })
     */
    public deleteStoreCustomer(
        request: Mailchimp.DeleteStoreCustomerEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteStoreCustomer(request, requestOptions));
    }

    private async __deleteStoreCustomer(
        request: Mailchimp.DeleteStoreCustomerEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { storeId, customerId } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/customers/${core.url.encodePathParam(customerId)}`,
            ),
            method: "DELETE",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: undefined, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "DELETE",
            "/3.0/ecommerce/stores/{store_id}/customers/{customer_id}",
        );
    }

    /**
     * Update a customer.
     *
     * @param {Mailchimp.UpdateStoreCustomerEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.updateStoreCustomer({
     *         storeId: "store_id",
     *         customerId: "customer_id",
     *         body: {}
     *     })
     */
    public updateStoreCustomer(
        request: Mailchimp.UpdateStoreCustomerEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceCustomer> {
        return core.HttpResponsePromise.fromPromise(this.__updateStoreCustomer(request, requestOptions));
    }

    private async __updateStoreCustomer(
        request: Mailchimp.UpdateStoreCustomerEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceCustomer>> {
        const { storeId, customerId, body: _body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/customers/${core.url.encodePathParam(customerId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.EcommerceStoresCartsPatch.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceCustomer.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "PATCH",
            "/3.0/ecommerce/stores/{store_id}/customers/{customer_id}",
        );
    }

    /**
     * Get information about a store's orders.
     *
     * @param {Mailchimp.ListStoreOrdersEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.listStoreOrders({
     *         storeId: "store_id"
     *     })
     */
    public async listStoreOrders(
        request: Mailchimp.ListStoreOrdersEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ECommerceOrder, Mailchimp.ListStoreOrdersEcommerceResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListStoreOrdersEcommerceRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListStoreOrdersEcommerceResponse>> => {
                const {
                    storeId,
                    fields,
                    excludeFields,
                    count,
                    offset,
                    customerId,
                    hasOutreach,
                    campaignId,
                    outreachId,
                } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    customer_id: customerId,
                    has_outreach: hasOutreach,
                    campaign_id: campaignId,
                    outreach_id: outreachId,
                };
                const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
                const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
                    _authRequest.headers,
                    this._options?.headers,
                    requestOptions?.headers,
                );
                const _response = await (this._options.fetcher ?? core.fetcher)({
                    url: core.url.join(
                        (await core.Supplier.get(this._options.baseUrl)) ??
                            (await core.Supplier.get(this._options.environment)) ??
                            environments.MailchimpEnvironment.Default,
                        `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/orders`,
                    ),
                    method: "GET",
                    headers: _headers,
                    queryString: core.url
                        .queryBuilder()
                        .addMany(_queryParams)
                        .add("fields", _queryParams.fields, { style: "comma" })
                        .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                        .mergeAdditional(requestOptions?.queryParams)
                        .build(),
                    timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
                    maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                    fetchFn: this._options?.fetch,
                    logging: this._options.logging,
                });
                if (_response.ok) {
                    return {
                        data: serializers.ListStoreOrdersEcommerceResponse.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        rawResponse: _response.rawResponse,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.MailchimpError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
                }
                return handleNonStatusCodeError(
                    _response.error,
                    _response.rawResponse,
                    "GET",
                    "/3.0/ecommerce/stores/{store_id}/orders",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ECommerceOrder, Mailchimp.ListStoreOrdersEcommerceResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.orders ?? []).length > 0,
            getItems: (response) => response?.orders ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Add a new order to a store.
     *
     * @param {Mailchimp.CreateStoreOrderEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.createStoreOrder({
     *         storeId: "store_id",
     *         currencyCode: "currency_code",
     *         customer: {
     *             id: "id"
     *         },
     *         id: "id",
     *         lines: [{
     *                 id: "id",
     *                 price: 1.1,
     *                 productId: "product_id",
     *                 productVariantId: "product_variant_id",
     *                 quantity: 1
     *             }],
     *         orderTotal: 1.1
     *     })
     */
    public createStoreOrder(
        request: Mailchimp.CreateStoreOrderEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceOrder> {
        return core.HttpResponsePromise.fromPromise(this.__createStoreOrder(request, requestOptions));
    }

    private async __createStoreOrder(
        request: Mailchimp.CreateStoreOrderEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceOrder>> {
        const { storeId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/orders`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateStoreOrderEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceOrder.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "POST",
            "/3.0/ecommerce/stores/{store_id}/orders",
        );
    }

    /**
     * Get information about a specific order.
     *
     * @param {Mailchimp.GetStoreOrderEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.getStoreOrder({
     *         storeId: "store_id",
     *         orderId: "order_id"
     *     })
     */
    public getStoreOrder(
        request: Mailchimp.GetStoreOrderEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceOrder> {
        return core.HttpResponsePromise.fromPromise(this.__getStoreOrder(request, requestOptions));
    }

    private async __getStoreOrder(
        request: Mailchimp.GetStoreOrderEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceOrder>> {
        const { storeId, orderId, fields, excludeFields } = request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
        };
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/orders/${core.url.encodePathParam(orderId)}`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .add("fields", _queryParams.fields, { style: "comma" })
                .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceOrder.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "GET",
            "/3.0/ecommerce/stores/{store_id}/orders/{order_id}",
        );
    }

    /**
     * Delete an order.
     *
     * @param {Mailchimp.DeleteStoreOrderEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.deleteStoreOrder({
     *         storeId: "store_id",
     *         orderId: "order_id"
     *     })
     */
    public deleteStoreOrder(
        request: Mailchimp.DeleteStoreOrderEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteStoreOrder(request, requestOptions));
    }

    private async __deleteStoreOrder(
        request: Mailchimp.DeleteStoreOrderEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { storeId, orderId } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/orders/${core.url.encodePathParam(orderId)}`,
            ),
            method: "DELETE",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: undefined, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "DELETE",
            "/3.0/ecommerce/stores/{store_id}/orders/{order_id}",
        );
    }

    /**
     * Update a specific order.
     *
     * @param {Mailchimp.UpdateStoreOrderEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.updateStoreOrder({
     *         storeId: "store_id",
     *         orderId: "order_id"
     *     })
     */
    public updateStoreOrder(
        request: Mailchimp.UpdateStoreOrderEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceOrder> {
        return core.HttpResponsePromise.fromPromise(this.__updateStoreOrder(request, requestOptions));
    }

    private async __updateStoreOrder(
        request: Mailchimp.UpdateStoreOrderEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceOrder>> {
        const { storeId, orderId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/orders/${core.url.encodePathParam(orderId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateStoreOrderEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceOrder.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "PATCH",
            "/3.0/ecommerce/stores/{store_id}/orders/{order_id}",
        );
    }

    /**
     * Get information about an order's line items.
     *
     * @param {Mailchimp.ListStoreOrderLinesEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.listStoreOrderLines({
     *         storeId: "store_id",
     *         orderId: "order_id"
     *     })
     */
    public async listStoreOrderLines(
        request: Mailchimp.ListStoreOrderLinesEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ECommerceOrderLineItem, Mailchimp.ListStoreOrderLinesEcommerceResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListStoreOrderLinesEcommerceRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListStoreOrderLinesEcommerceResponse>> => {
                const { storeId, orderId, fields, excludeFields, count, offset } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                };
                const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
                const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
                    _authRequest.headers,
                    this._options?.headers,
                    requestOptions?.headers,
                );
                const _response = await (this._options.fetcher ?? core.fetcher)({
                    url: core.url.join(
                        (await core.Supplier.get(this._options.baseUrl)) ??
                            (await core.Supplier.get(this._options.environment)) ??
                            environments.MailchimpEnvironment.Default,
                        `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/orders/${core.url.encodePathParam(orderId)}/lines`,
                    ),
                    method: "GET",
                    headers: _headers,
                    queryString: core.url
                        .queryBuilder()
                        .addMany(_queryParams)
                        .add("fields", _queryParams.fields, { style: "comma" })
                        .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                        .mergeAdditional(requestOptions?.queryParams)
                        .build(),
                    timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
                    maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                    fetchFn: this._options?.fetch,
                    logging: this._options.logging,
                });
                if (_response.ok) {
                    return {
                        data: serializers.ListStoreOrderLinesEcommerceResponse.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        rawResponse: _response.rawResponse,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.MailchimpError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
                }
                return handleNonStatusCodeError(
                    _response.error,
                    _response.rawResponse,
                    "GET",
                    "/3.0/ecommerce/stores/{store_id}/orders/{order_id}/lines",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ECommerceOrderLineItem, Mailchimp.ListStoreOrderLinesEcommerceResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.lines ?? []).length > 0,
            getItems: (response) => response?.lines ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Add a new line item to an existing order.
     *
     * @param {Mailchimp.CreateStoreOrderLineEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.createStoreOrderLine({
     *         storeId: "store_id",
     *         orderId: "order_id",
     *         id: "id",
     *         price: 1.1,
     *         productId: "product_id",
     *         productVariantId: "product_variant_id",
     *         quantity: 1
     *     })
     */
    public createStoreOrderLine(
        request: Mailchimp.CreateStoreOrderLineEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceOrderLineItem> {
        return core.HttpResponsePromise.fromPromise(this.__createStoreOrderLine(request, requestOptions));
    }

    private async __createStoreOrderLine(
        request: Mailchimp.CreateStoreOrderLineEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceOrderLineItem>> {
        const { storeId, orderId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/orders/${core.url.encodePathParam(orderId)}/lines`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateStoreOrderLineEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceOrderLineItem.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "POST",
            "/3.0/ecommerce/stores/{store_id}/orders/{order_id}/lines",
        );
    }

    /**
     * Get information about a specific order line item.
     *
     * @param {Mailchimp.GetStoreOrderLineEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.getStoreOrderLine({
     *         storeId: "store_id",
     *         orderId: "order_id",
     *         lineId: "line_id"
     *     })
     */
    public getStoreOrderLine(
        request: Mailchimp.GetStoreOrderLineEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceOrderLineItem> {
        return core.HttpResponsePromise.fromPromise(this.__getStoreOrderLine(request, requestOptions));
    }

    private async __getStoreOrderLine(
        request: Mailchimp.GetStoreOrderLineEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceOrderLineItem>> {
        const { storeId, orderId, lineId, fields, excludeFields } = request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
        };
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/orders/${core.url.encodePathParam(orderId)}/lines/${core.url.encodePathParam(lineId)}`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .add("fields", _queryParams.fields, { style: "comma" })
                .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceOrderLineItem.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "GET",
            "/3.0/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}",
        );
    }

    /**
     * Delete a specific order line item.
     *
     * @param {Mailchimp.DeleteStoreOrderLineEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.deleteStoreOrderLine({
     *         storeId: "store_id",
     *         orderId: "order_id",
     *         lineId: "line_id"
     *     })
     */
    public deleteStoreOrderLine(
        request: Mailchimp.DeleteStoreOrderLineEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteStoreOrderLine(request, requestOptions));
    }

    private async __deleteStoreOrderLine(
        request: Mailchimp.DeleteStoreOrderLineEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { storeId, orderId, lineId } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/orders/${core.url.encodePathParam(orderId)}/lines/${core.url.encodePathParam(lineId)}`,
            ),
            method: "DELETE",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: undefined, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "DELETE",
            "/3.0/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}",
        );
    }

    /**
     * Update a specific order line item.
     *
     * @param {Mailchimp.UpdateStoreOrderLineEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.updateStoreOrderLine({
     *         storeId: "store_id",
     *         orderId: "order_id",
     *         lineId: "line_id"
     *     })
     */
    public updateStoreOrderLine(
        request: Mailchimp.UpdateStoreOrderLineEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceOrderLineItem> {
        return core.HttpResponsePromise.fromPromise(this.__updateStoreOrderLine(request, requestOptions));
    }

    private async __updateStoreOrderLine(
        request: Mailchimp.UpdateStoreOrderLineEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceOrderLineItem>> {
        const { storeId, orderId, lineId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/orders/${core.url.encodePathParam(orderId)}/lines/${core.url.encodePathParam(lineId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateStoreOrderLineEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceOrderLineItem.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "PATCH",
            "/3.0/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}",
        );
    }

    /**
     * Get information about a store's products.
     *
     * @param {Mailchimp.ListStoreProductsEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.listStoreProducts({
     *         storeId: "store_id"
     *     })
     */
    public async listStoreProducts(
        request: Mailchimp.ListStoreProductsEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ECommerceProduct, Mailchimp.ListStoreProductsEcommerceResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListStoreProductsEcommerceRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListStoreProductsEcommerceResponse>> => {
                const { storeId, fields, excludeFields, count, offset } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                };
                const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
                const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
                    _authRequest.headers,
                    this._options?.headers,
                    requestOptions?.headers,
                );
                const _response = await (this._options.fetcher ?? core.fetcher)({
                    url: core.url.join(
                        (await core.Supplier.get(this._options.baseUrl)) ??
                            (await core.Supplier.get(this._options.environment)) ??
                            environments.MailchimpEnvironment.Default,
                        `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/products`,
                    ),
                    method: "GET",
                    headers: _headers,
                    queryString: core.url
                        .queryBuilder()
                        .addMany(_queryParams)
                        .add("fields", _queryParams.fields, { style: "comma" })
                        .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                        .mergeAdditional(requestOptions?.queryParams)
                        .build(),
                    timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
                    maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                    fetchFn: this._options?.fetch,
                    logging: this._options.logging,
                });
                if (_response.ok) {
                    return {
                        data: serializers.ListStoreProductsEcommerceResponse.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        rawResponse: _response.rawResponse,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.MailchimpError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
                }
                return handleNonStatusCodeError(
                    _response.error,
                    _response.rawResponse,
                    "GET",
                    "/3.0/ecommerce/stores/{store_id}/products",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ECommerceProduct, Mailchimp.ListStoreProductsEcommerceResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.products ?? []).length > 0,
            getItems: (response) => response?.products ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Add a new product to a store.
     *
     * @param {Mailchimp.CreateStoreProductEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.createStoreProduct({
     *         storeId: "store_id",
     *         body: {
     *             id: "id",
     *             title: "Cat Hat",
     *             variants: [{
     *                     id: "id",
     *                     title: "Cat Hat"
     *                 }]
     *         }
     *     })
     */
    public createStoreProduct(
        request: Mailchimp.CreateStoreProductEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceProduct> {
        return core.HttpResponsePromise.fromPromise(this.__createStoreProduct(request, requestOptions));
    }

    private async __createStoreProduct(
        request: Mailchimp.CreateStoreProductEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceProduct>> {
        const { storeId, body: _body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/products`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.EcommerceStoresOrdersPost.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceProduct.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "POST",
            "/3.0/ecommerce/stores/{store_id}/products",
        );
    }

    /**
     * Get information about a specific product.
     *
     * @param {Mailchimp.GetStoreProductEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.getStoreProduct({
     *         storeId: "store_id",
     *         productId: "product_id"
     *     })
     */
    public getStoreProduct(
        request: Mailchimp.GetStoreProductEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceProduct> {
        return core.HttpResponsePromise.fromPromise(this.__getStoreProduct(request, requestOptions));
    }

    private async __getStoreProduct(
        request: Mailchimp.GetStoreProductEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceProduct>> {
        const { storeId, productId, fields, excludeFields } = request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
        };
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/products/${core.url.encodePathParam(productId)}`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .add("fields", _queryParams.fields, { style: "comma" })
                .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceProduct.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "GET",
            "/3.0/ecommerce/stores/{store_id}/products/{product_id}",
        );
    }

    /**
     * Update a specific product.
     *
     * @param {Mailchimp.UpsertStoreProductEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.upsertStoreProduct({
     *         storeId: "store_id",
     *         productId: "product_id",
     *         id: "id"
     *     })
     */
    public upsertStoreProduct(
        request: Mailchimp.UpsertStoreProductEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceProduct> {
        return core.HttpResponsePromise.fromPromise(this.__upsertStoreProduct(request, requestOptions));
    }

    private async __upsertStoreProduct(
        request: Mailchimp.UpsertStoreProductEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceProduct>> {
        const { storeId, productId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/products/${core.url.encodePathParam(productId)}`,
            ),
            method: "PUT",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpsertStoreProductEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceProduct.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "PUT",
            "/3.0/ecommerce/stores/{store_id}/products/{product_id}",
        );
    }

    /**
     * Delete a product.
     *
     * @param {Mailchimp.DeleteStoreProductEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.deleteStoreProduct({
     *         storeId: "store_id",
     *         productId: "product_id"
     *     })
     */
    public deleteStoreProduct(
        request: Mailchimp.DeleteStoreProductEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteStoreProduct(request, requestOptions));
    }

    private async __deleteStoreProduct(
        request: Mailchimp.DeleteStoreProductEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { storeId, productId } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/products/${core.url.encodePathParam(productId)}`,
            ),
            method: "DELETE",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: undefined, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "DELETE",
            "/3.0/ecommerce/stores/{store_id}/products/{product_id}",
        );
    }

    /**
     * Update a specific product.
     *
     * @param {Mailchimp.UpdateStoreProductEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.updateStoreProduct({
     *         storeId: "store_id",
     *         productId: "product_id"
     *     })
     */
    public updateStoreProduct(
        request: Mailchimp.UpdateStoreProductEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceProduct> {
        return core.HttpResponsePromise.fromPromise(this.__updateStoreProduct(request, requestOptions));
    }

    private async __updateStoreProduct(
        request: Mailchimp.UpdateStoreProductEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceProduct>> {
        const { storeId, productId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/products/${core.url.encodePathParam(productId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateStoreProductEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceProduct.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "PATCH",
            "/3.0/ecommerce/stores/{store_id}/products/{product_id}",
        );
    }

    /**
     * Get information about a product's images.
     *
     * @param {Mailchimp.ListStoreProductImagesEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.listStoreProductImages({
     *         storeId: "store_id",
     *         productId: "product_id"
     *     })
     */
    public async listStoreProductImages(
        request: Mailchimp.ListStoreProductImagesEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<
        core.Page<
            Mailchimp.ListStoreProductImagesEcommerceResponseImagesItem,
            Mailchimp.ListStoreProductImagesEcommerceResponse
        >
    > {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListStoreProductImagesEcommerceRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListStoreProductImagesEcommerceResponse>> => {
                const { storeId, productId, fields, excludeFields, count, offset } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                };
                const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
                const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
                    _authRequest.headers,
                    this._options?.headers,
                    requestOptions?.headers,
                );
                const _response = await (this._options.fetcher ?? core.fetcher)({
                    url: core.url.join(
                        (await core.Supplier.get(this._options.baseUrl)) ??
                            (await core.Supplier.get(this._options.environment)) ??
                            environments.MailchimpEnvironment.Default,
                        `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/products/${core.url.encodePathParam(productId)}/images`,
                    ),
                    method: "GET",
                    headers: _headers,
                    queryString: core.url
                        .queryBuilder()
                        .addMany(_queryParams)
                        .add("fields", _queryParams.fields, { style: "comma" })
                        .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                        .mergeAdditional(requestOptions?.queryParams)
                        .build(),
                    timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
                    maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                    fetchFn: this._options?.fetch,
                    logging: this._options.logging,
                });
                if (_response.ok) {
                    return {
                        data: serializers.ListStoreProductImagesEcommerceResponse.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        rawResponse: _response.rawResponse,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.MailchimpError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
                }
                return handleNonStatusCodeError(
                    _response.error,
                    _response.rawResponse,
                    "GET",
                    "/3.0/ecommerce/stores/{store_id}/products/{product_id}/images",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<
            Mailchimp.ListStoreProductImagesEcommerceResponseImagesItem,
            Mailchimp.ListStoreProductImagesEcommerceResponse
        >({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.images ?? []).length > 0,
            getItems: (response) => response?.images ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Add a new image to the product.
     *
     * @param {Mailchimp.CreateStoreProductImageEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.createStoreProductImage({
     *         storeId: "store_id",
     *         productId: "product_id",
     *         id: "id",
     *         url: "url"
     *     })
     */
    public createStoreProductImage(
        request: Mailchimp.CreateStoreProductImageEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.CreateStoreProductImageEcommerceResponse> {
        return core.HttpResponsePromise.fromPromise(this.__createStoreProductImage(request, requestOptions));
    }

    private async __createStoreProductImage(
        request: Mailchimp.CreateStoreProductImageEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.CreateStoreProductImageEcommerceResponse>> {
        const { storeId, productId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/products/${core.url.encodePathParam(productId)}/images`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateStoreProductImageEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.CreateStoreProductImageEcommerceResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "POST",
            "/3.0/ecommerce/stores/{store_id}/products/{product_id}/images",
        );
    }

    /**
     * Get information about a specific product image.
     *
     * @param {Mailchimp.GetStoreProductImageEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.getStoreProductImage({
     *         storeId: "store_id",
     *         productId: "product_id",
     *         imageId: "image_id"
     *     })
     */
    public getStoreProductImage(
        request: Mailchimp.GetStoreProductImageEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.GetStoreProductImageEcommerceResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getStoreProductImage(request, requestOptions));
    }

    private async __getStoreProductImage(
        request: Mailchimp.GetStoreProductImageEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.GetStoreProductImageEcommerceResponse>> {
        const { storeId, productId, imageId, fields, excludeFields } = request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
        };
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/products/${core.url.encodePathParam(productId)}/images/${core.url.encodePathParam(imageId)}`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .add("fields", _queryParams.fields, { style: "comma" })
                .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.GetStoreProductImageEcommerceResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "GET",
            "/3.0/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}",
        );
    }

    /**
     * Delete a product image.
     *
     * @param {Mailchimp.DeleteStoreProductImageEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.deleteStoreProductImage({
     *         storeId: "store_id",
     *         productId: "product_id",
     *         imageId: "image_id"
     *     })
     */
    public deleteStoreProductImage(
        request: Mailchimp.DeleteStoreProductImageEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteStoreProductImage(request, requestOptions));
    }

    private async __deleteStoreProductImage(
        request: Mailchimp.DeleteStoreProductImageEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { storeId, productId, imageId } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/products/${core.url.encodePathParam(productId)}/images/${core.url.encodePathParam(imageId)}`,
            ),
            method: "DELETE",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: undefined, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "DELETE",
            "/3.0/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}",
        );
    }

    /**
     * Update a product image.
     *
     * @param {Mailchimp.UpdateStoreProductImageEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.updateStoreProductImage({
     *         storeId: "store_id",
     *         productId: "product_id",
     *         imageId: "image_id"
     *     })
     */
    public updateStoreProductImage(
        request: Mailchimp.UpdateStoreProductImageEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.UpdateStoreProductImageEcommerceResponse> {
        return core.HttpResponsePromise.fromPromise(this.__updateStoreProductImage(request, requestOptions));
    }

    private async __updateStoreProductImage(
        request: Mailchimp.UpdateStoreProductImageEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.UpdateStoreProductImageEcommerceResponse>> {
        const { storeId, productId, imageId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/products/${core.url.encodePathParam(productId)}/images/${core.url.encodePathParam(imageId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateStoreProductImageEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.UpdateStoreProductImageEcommerceResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "PATCH",
            "/3.0/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}",
        );
    }

    /**
     * Get information about a product's variants.
     *
     * @param {Mailchimp.ListStoreProductVariantsEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.listStoreProductVariants({
     *         storeId: "store_id",
     *         productId: "product_id"
     *     })
     */
    public async listStoreProductVariants(
        request: Mailchimp.ListStoreProductVariantsEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ECommerceProductVariant, Mailchimp.ListStoreProductVariantsEcommerceResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListStoreProductVariantsEcommerceRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListStoreProductVariantsEcommerceResponse>> => {
                const { storeId, productId, fields, excludeFields, count, offset } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                };
                const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
                const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
                    _authRequest.headers,
                    this._options?.headers,
                    requestOptions?.headers,
                );
                const _response = await (this._options.fetcher ?? core.fetcher)({
                    url: core.url.join(
                        (await core.Supplier.get(this._options.baseUrl)) ??
                            (await core.Supplier.get(this._options.environment)) ??
                            environments.MailchimpEnvironment.Default,
                        `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/products/${core.url.encodePathParam(productId)}/variants`,
                    ),
                    method: "GET",
                    headers: _headers,
                    queryString: core.url
                        .queryBuilder()
                        .addMany(_queryParams)
                        .add("fields", _queryParams.fields, { style: "comma" })
                        .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                        .mergeAdditional(requestOptions?.queryParams)
                        .build(),
                    timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
                    maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                    fetchFn: this._options?.fetch,
                    logging: this._options.logging,
                });
                if (_response.ok) {
                    return {
                        data: serializers.ListStoreProductVariantsEcommerceResponse.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        rawResponse: _response.rawResponse,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.MailchimpError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
                }
                return handleNonStatusCodeError(
                    _response.error,
                    _response.rawResponse,
                    "GET",
                    "/3.0/ecommerce/stores/{store_id}/products/{product_id}/variants",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ECommerceProductVariant, Mailchimp.ListStoreProductVariantsEcommerceResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.variants ?? []).length > 0,
            getItems: (response) => response?.variants ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Add a new variant to the product.
     *
     * @param {Mailchimp.CreateStoreProductVariantEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.createStoreProductVariant({
     *         storeId: "store_id",
     *         productId: "product_id",
     *         id: "id",
     *         title: "Cat Hat"
     *     })
     */
    public createStoreProductVariant(
        request: Mailchimp.CreateStoreProductVariantEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceProductVariant> {
        return core.HttpResponsePromise.fromPromise(this.__createStoreProductVariant(request, requestOptions));
    }

    private async __createStoreProductVariant(
        request: Mailchimp.CreateStoreProductVariantEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceProductVariant>> {
        const { storeId, productId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/products/${core.url.encodePathParam(productId)}/variants`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateStoreProductVariantEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceProductVariant.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "POST",
            "/3.0/ecommerce/stores/{store_id}/products/{product_id}/variants",
        );
    }

    /**
     * Get information about a specific product variant.
     *
     * @param {Mailchimp.GetStoreProductVariantEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.getStoreProductVariant({
     *         storeId: "store_id",
     *         productId: "product_id",
     *         variantId: "variant_id"
     *     })
     */
    public getStoreProductVariant(
        request: Mailchimp.GetStoreProductVariantEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceProductVariant> {
        return core.HttpResponsePromise.fromPromise(this.__getStoreProductVariant(request, requestOptions));
    }

    private async __getStoreProductVariant(
        request: Mailchimp.GetStoreProductVariantEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceProductVariant>> {
        const { storeId, productId, variantId, fields, excludeFields } = request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
        };
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/products/${core.url.encodePathParam(productId)}/variants/${core.url.encodePathParam(variantId)}`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .add("fields", _queryParams.fields, { style: "comma" })
                .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceProductVariant.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "GET",
            "/3.0/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}",
        );
    }

    /**
     * Add or update a product variant.
     *
     * @param {Mailchimp.UpsertStoreProductVariantEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.upsertStoreProductVariant({
     *         storeId: "store_id",
     *         productId: "product_id",
     *         variantId: "variant_id"
     *     })
     */
    public upsertStoreProductVariant(
        request: Mailchimp.UpsertStoreProductVariantEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceProductVariant> {
        return core.HttpResponsePromise.fromPromise(this.__upsertStoreProductVariant(request, requestOptions));
    }

    private async __upsertStoreProductVariant(
        request: Mailchimp.UpsertStoreProductVariantEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceProductVariant>> {
        const { storeId, productId, variantId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/products/${core.url.encodePathParam(productId)}/variants/${core.url.encodePathParam(variantId)}`,
            ),
            method: "PUT",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpsertStoreProductVariantEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceProductVariant.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "PUT",
            "/3.0/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}",
        );
    }

    /**
     * Delete a product variant.
     *
     * @param {Mailchimp.DeleteStoreProductVariantEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.deleteStoreProductVariant({
     *         storeId: "store_id",
     *         productId: "product_id",
     *         variantId: "variant_id"
     *     })
     */
    public deleteStoreProductVariant(
        request: Mailchimp.DeleteStoreProductVariantEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteStoreProductVariant(request, requestOptions));
    }

    private async __deleteStoreProductVariant(
        request: Mailchimp.DeleteStoreProductVariantEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { storeId, productId, variantId } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/products/${core.url.encodePathParam(productId)}/variants/${core.url.encodePathParam(variantId)}`,
            ),
            method: "DELETE",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: undefined, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "DELETE",
            "/3.0/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}",
        );
    }

    /**
     * Update a product variant.
     *
     * @param {Mailchimp.UpdateStoreProductVariantEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.updateStoreProductVariant({
     *         storeId: "store_id",
     *         productId: "product_id",
     *         variantId: "variant_id"
     *     })
     */
    public updateStoreProductVariant(
        request: Mailchimp.UpdateStoreProductVariantEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommerceProductVariant> {
        return core.HttpResponsePromise.fromPromise(this.__updateStoreProductVariant(request, requestOptions));
    }

    private async __updateStoreProductVariant(
        request: Mailchimp.UpdateStoreProductVariantEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommerceProductVariant>> {
        const { storeId, productId, variantId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/products/${core.url.encodePathParam(productId)}/variants/${core.url.encodePathParam(variantId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateStoreProductVariantEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommerceProductVariant.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "PATCH",
            "/3.0/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}",
        );
    }

    /**
     * Get information about a store's promo rules.
     *
     * @param {Mailchimp.ListStorePromoRulesEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.listStorePromoRules({
     *         storeId: "store_id"
     *     })
     */
    public async listStorePromoRules(
        request: Mailchimp.ListStorePromoRulesEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ECommercePromoRule, Mailchimp.ListStorePromoRulesEcommerceResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListStorePromoRulesEcommerceRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListStorePromoRulesEcommerceResponse>> => {
                const { storeId, fields, excludeFields, count, offset } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                };
                const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
                const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
                    _authRequest.headers,
                    this._options?.headers,
                    requestOptions?.headers,
                );
                const _response = await (this._options.fetcher ?? core.fetcher)({
                    url: core.url.join(
                        (await core.Supplier.get(this._options.baseUrl)) ??
                            (await core.Supplier.get(this._options.environment)) ??
                            environments.MailchimpEnvironment.Default,
                        `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/promo-rules`,
                    ),
                    method: "GET",
                    headers: _headers,
                    queryString: core.url
                        .queryBuilder()
                        .addMany(_queryParams)
                        .add("fields", _queryParams.fields, { style: "comma" })
                        .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                        .mergeAdditional(requestOptions?.queryParams)
                        .build(),
                    timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
                    maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                    fetchFn: this._options?.fetch,
                    logging: this._options.logging,
                });
                if (_response.ok) {
                    return {
                        data: serializers.ListStorePromoRulesEcommerceResponse.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        rawResponse: _response.rawResponse,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.MailchimpError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
                }
                return handleNonStatusCodeError(
                    _response.error,
                    _response.rawResponse,
                    "GET",
                    "/3.0/ecommerce/stores/{store_id}/promo-rules",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ECommercePromoRule, Mailchimp.ListStorePromoRulesEcommerceResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.promoRules ?? []).length > 0,
            getItems: (response) => response?.promoRules ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Add a new promo rule to a store.
     *
     * @param {Mailchimp.CreateStorePromoRuleEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.createStorePromoRule({
     *         storeId: "store_id",
     *         amount: 1.1,
     *         description: "Save BIG during our summer sale!",
     *         id: "id",
     *         target: "per_item",
     *         type: "fixed"
     *     })
     */
    public createStorePromoRule(
        request: Mailchimp.CreateStorePromoRuleEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommercePromoRule> {
        return core.HttpResponsePromise.fromPromise(this.__createStorePromoRule(request, requestOptions));
    }

    private async __createStorePromoRule(
        request: Mailchimp.CreateStorePromoRuleEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommercePromoRule>> {
        const { storeId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/promo-rules`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateStorePromoRuleEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommercePromoRule.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "POST",
            "/3.0/ecommerce/stores/{store_id}/promo-rules",
        );
    }

    /**
     * Get information about a specific promo rule.
     *
     * @param {Mailchimp.GetStorePromoRuleEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.getStorePromoRule({
     *         storeId: "store_id",
     *         promoRuleId: "promo_rule_id"
     *     })
     */
    public getStorePromoRule(
        request: Mailchimp.GetStorePromoRuleEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommercePromoRule> {
        return core.HttpResponsePromise.fromPromise(this.__getStorePromoRule(request, requestOptions));
    }

    private async __getStorePromoRule(
        request: Mailchimp.GetStorePromoRuleEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommercePromoRule>> {
        const { storeId, promoRuleId, fields, excludeFields } = request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
        };
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/promo-rules/${core.url.encodePathParam(promoRuleId)}`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .add("fields", _queryParams.fields, { style: "comma" })
                .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommercePromoRule.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "GET",
            "/3.0/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}",
        );
    }

    /**
     * Delete a promo rule from a store.
     *
     * @param {Mailchimp.DeleteStorePromoRuleEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.deleteStorePromoRule({
     *         storeId: "store_id",
     *         promoRuleId: "promo_rule_id"
     *     })
     */
    public deleteStorePromoRule(
        request: Mailchimp.DeleteStorePromoRuleEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteStorePromoRule(request, requestOptions));
    }

    private async __deleteStorePromoRule(
        request: Mailchimp.DeleteStorePromoRuleEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { storeId, promoRuleId } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/promo-rules/${core.url.encodePathParam(promoRuleId)}`,
            ),
            method: "DELETE",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: undefined, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "DELETE",
            "/3.0/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}",
        );
    }

    /**
     * Update a promo rule.
     *
     * @param {Mailchimp.UpdateStorePromoRuleEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.updateStorePromoRule({
     *         storeId: "store_id",
     *         promoRuleId: "promo_rule_id"
     *     })
     */
    public updateStorePromoRule(
        request: Mailchimp.UpdateStorePromoRuleEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommercePromoRule> {
        return core.HttpResponsePromise.fromPromise(this.__updateStorePromoRule(request, requestOptions));
    }

    private async __updateStorePromoRule(
        request: Mailchimp.UpdateStorePromoRuleEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommercePromoRule>> {
        const { storeId, promoRuleId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/promo-rules/${core.url.encodePathParam(promoRuleId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateStorePromoRuleEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommercePromoRule.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "PATCH",
            "/3.0/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}",
        );
    }

    /**
     * Get information about a store's promo codes.
     *
     * @param {Mailchimp.ListStorePromoRulePromoCodesEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.listStorePromoRulePromoCodes({
     *         storeId: "store_id",
     *         promoRuleId: "promo_rule_id"
     *     })
     */
    public async listStorePromoRulePromoCodes(
        request: Mailchimp.ListStorePromoRulePromoCodesEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ECommercePromoCode, Mailchimp.ListStorePromoRulePromoCodesEcommerceResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListStorePromoRulePromoCodesEcommerceRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListStorePromoRulePromoCodesEcommerceResponse>> => {
                const { storeId, promoRuleId, fields, excludeFields, count, offset } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                };
                const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
                const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
                    _authRequest.headers,
                    this._options?.headers,
                    requestOptions?.headers,
                );
                const _response = await (this._options.fetcher ?? core.fetcher)({
                    url: core.url.join(
                        (await core.Supplier.get(this._options.baseUrl)) ??
                            (await core.Supplier.get(this._options.environment)) ??
                            environments.MailchimpEnvironment.Default,
                        `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/promo-rules/${core.url.encodePathParam(promoRuleId)}/promo-codes`,
                    ),
                    method: "GET",
                    headers: _headers,
                    queryString: core.url
                        .queryBuilder()
                        .addMany(_queryParams)
                        .add("fields", _queryParams.fields, { style: "comma" })
                        .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                        .mergeAdditional(requestOptions?.queryParams)
                        .build(),
                    timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
                    maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                    fetchFn: this._options?.fetch,
                    logging: this._options.logging,
                });
                if (_response.ok) {
                    return {
                        data: serializers.ListStorePromoRulePromoCodesEcommerceResponse.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        rawResponse: _response.rawResponse,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.MailchimpError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
                }
                return handleNonStatusCodeError(
                    _response.error,
                    _response.rawResponse,
                    "GET",
                    "/3.0/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ECommercePromoCode, Mailchimp.ListStorePromoRulePromoCodesEcommerceResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.promoCodes ?? []).length > 0,
            getItems: (response) => response?.promoCodes ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Add a new promo code to a store.
     *
     * @param {Mailchimp.CreateStorePromoRulePromoCodeEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.createStorePromoRulePromoCode({
     *         storeId: "store_id",
     *         promoRuleId: "promo_rule_id",
     *         code: "summersale",
     *         id: "id",
     *         redemptionUrl: "A url that applies promo code directly at checkout or a url that points to sale page or store url"
     *     })
     */
    public createStorePromoRulePromoCode(
        request: Mailchimp.CreateStorePromoRulePromoCodeEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommercePromoCode> {
        return core.HttpResponsePromise.fromPromise(this.__createStorePromoRulePromoCode(request, requestOptions));
    }

    private async __createStorePromoRulePromoCode(
        request: Mailchimp.CreateStorePromoRulePromoCodeEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommercePromoCode>> {
        const { storeId, promoRuleId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/promo-rules/${core.url.encodePathParam(promoRuleId)}/promo-codes`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateStorePromoRulePromoCodeEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommercePromoCode.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "POST",
            "/3.0/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes",
        );
    }

    /**
     * Get information about a specific promo code.
     *
     * @param {Mailchimp.GetStorePromoRulePromoCodeEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.getStorePromoRulePromoCode({
     *         storeId: "store_id",
     *         promoRuleId: "promo_rule_id",
     *         promoCodeId: "promo_code_id"
     *     })
     */
    public getStorePromoRulePromoCode(
        request: Mailchimp.GetStorePromoRulePromoCodeEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommercePromoCode> {
        return core.HttpResponsePromise.fromPromise(this.__getStorePromoRulePromoCode(request, requestOptions));
    }

    private async __getStorePromoRulePromoCode(
        request: Mailchimp.GetStorePromoRulePromoCodeEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommercePromoCode>> {
        const { storeId, promoRuleId, promoCodeId, fields, excludeFields } = request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
        };
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/promo-rules/${core.url.encodePathParam(promoRuleId)}/promo-codes/${core.url.encodePathParam(promoCodeId)}`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .add("fields", _queryParams.fields, { style: "comma" })
                .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommercePromoCode.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "GET",
            "/3.0/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes/{promo_code_id}",
        );
    }

    /**
     * Delete a promo code from a store.
     *
     * @param {Mailchimp.DeleteStorePromoRulePromoCodeEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.deleteStorePromoRulePromoCode({
     *         storeId: "store_id",
     *         promoRuleId: "promo_rule_id",
     *         promoCodeId: "promo_code_id"
     *     })
     */
    public deleteStorePromoRulePromoCode(
        request: Mailchimp.DeleteStorePromoRulePromoCodeEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteStorePromoRulePromoCode(request, requestOptions));
    }

    private async __deleteStorePromoRulePromoCode(
        request: Mailchimp.DeleteStorePromoRulePromoCodeEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { storeId, promoRuleId, promoCodeId } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/promo-rules/${core.url.encodePathParam(promoRuleId)}/promo-codes/${core.url.encodePathParam(promoCodeId)}`,
            ),
            method: "DELETE",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: undefined, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "DELETE",
            "/3.0/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes/{promo_code_id}",
        );
    }

    /**
     * Update a promo code.
     *
     * @param {Mailchimp.UpdateStorePromoRulePromoCodeEcommerceRequest} request
     * @param {EcommerceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.ecommerce.updateStorePromoRulePromoCode({
     *         storeId: "store_id",
     *         promoRuleId: "promo_rule_id",
     *         promoCodeId: "promo_code_id"
     *     })
     */
    public updateStorePromoRulePromoCode(
        request: Mailchimp.UpdateStorePromoRulePromoCodeEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ECommercePromoCode> {
        return core.HttpResponsePromise.fromPromise(this.__updateStorePromoRulePromoCode(request, requestOptions));
    }

    private async __updateStorePromoRulePromoCode(
        request: Mailchimp.UpdateStorePromoRulePromoCodeEcommerceRequest,
        requestOptions?: EcommerceClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ECommercePromoCode>> {
        const { storeId, promoRuleId, promoCodeId, ..._body } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MailchimpEnvironment.Default,
                `3.0/ecommerce/stores/${core.url.encodePathParam(storeId)}/promo-rules/${core.url.encodePathParam(promoRuleId)}/promo-codes/${core.url.encodePathParam(promoCodeId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateStorePromoRulePromoCodeEcommerceRequest.jsonOrThrow(_body, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                }),
                requestOptions?.additionalBodyParameters,
            ),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: serializers.ECommercePromoCode.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "PATCH",
            "/3.0/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes/{promo_code_id}",
        );
    }
}
