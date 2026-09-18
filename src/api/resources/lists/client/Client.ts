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

export declare namespace ListsClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Audiences and their contacts, tags, segments, merge fields, and webhooks.
 */
export class ListsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ListsClient.Options>;

    constructor(options: ListsClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Get information about all lists in the account.
     *
     * @param {Mailchimp.ListListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.list()
     */
    public async list(
        request: Mailchimp.ListListsRequest = {},
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.SubscriberList, Mailchimp.ListListsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (request: Mailchimp.ListListsRequest): Promise<core.WithRawResponse<Mailchimp.ListListsResponse>> => {
                const {
                    fields,
                    excludeFields,
                    count,
                    offset,
                    beforeDateCreated,
                    sinceDateCreated,
                    beforeCampaignLastSent,
                    sinceCampaignLastSent,
                    email,
                    sortField,
                    sortDir,
                    hasEcommerceStore,
                    includeTotalContacts,
                } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    before_date_created: beforeDateCreated,
                    since_date_created: sinceDateCreated,
                    before_campaign_last_sent: beforeCampaignLastSent,
                    since_campaign_last_sent: sinceCampaignLastSent,
                    email,
                    sort_field:
                        sortField != null
                            ? serializers.ListListsRequestSortField.jsonOrThrow(sortField, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
                    sort_dir:
                        sortDir != null
                            ? serializers.ListListsRequestSortDir.jsonOrThrow(sortDir, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
                    has_ecommerce_store: hasEcommerceStore,
                    include_total_contacts: includeTotalContacts,
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
                        "3.0/lists",
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
                        data: serializers.ListListsResponse.parseOrThrow(_response.body, {
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
                return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/lists");
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.SubscriberList, Mailchimp.ListListsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.lists ?? []).length > 0,
            getItems: (response) => response?.lists ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Create a new list in your Mailchimp account.
     *
     * @param {Mailchimp.CreateListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.create({
     *         campaignDefaults: {
     *             fromEmail: "from_email",
     *             fromName: "from_name",
     *             language: "language",
     *             subject: "subject"
     *         },
     *         contact: {
     *             address1: "address1",
     *             city: "city",
     *             company: "company",
     *             country: "country"
     *         },
     *         emailTypeOption: true,
     *         name: "name",
     *         permissionReminder: "permission_reminder"
     *     })
     */
    public create(
        request: Mailchimp.CreateListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.SubscriberList> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Mailchimp.CreateListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.SubscriberList>> {
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
                "3.0/lists",
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateListsRequest.jsonOrThrow(request, {
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
                data: serializers.SubscriberList.parseOrThrow(_response.body, {
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/3.0/lists");
    }

    /**
     * Get information about a specific list in your Mailchimp account. Results include list members who have signed up but haven't confirmed their subscription yet and unsubscribed or cleaned.
     *
     * @param {Mailchimp.GetListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.get({
     *         listId: "list_id"
     *     })
     */
    public get(
        request: Mailchimp.GetListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.SubscriberList> {
        return core.HttpResponsePromise.fromPromise(this.__get(request, requestOptions));
    }

    private async __get(
        request: Mailchimp.GetListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.SubscriberList>> {
        const { listId, fields, excludeFields, includeTotalContacts } = request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
            include_total_contacts: includeTotalContacts,
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
                `3.0/lists/${core.url.encodePathParam(listId)}`,
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
                data: serializers.SubscriberList.parseOrThrow(_response.body, {
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/lists/{list_id}");
    }

    /**
     * Batch subscribe or unsubscribe list members.
     *
     * @param {Mailchimp.BatchSubscribeOrUnsubscribeListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.batchSubscribeOrUnsubscribe({
     *         listId: "list_id",
     *         members: []
     *     })
     */
    public batchSubscribeOrUnsubscribe(
        request: Mailchimp.BatchSubscribeOrUnsubscribeListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.BatchSubscribeOrUnsubscribeListsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__batchSubscribeOrUnsubscribe(request, requestOptions));
    }

    private async __batchSubscribeOrUnsubscribe(
        request: Mailchimp.BatchSubscribeOrUnsubscribeListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.BatchSubscribeOrUnsubscribeListsResponse>> {
        const { listId, skipMergeValidation, skipDuplicateCheck, ..._body } = request;
        const _queryParams: Record<string, unknown> = {
            skip_merge_validation: skipMergeValidation,
            skip_duplicate_check: skipDuplicateCheck,
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
                `3.0/lists/${core.url.encodePathParam(listId)}`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.BatchSubscribeOrUnsubscribeListsRequest.jsonOrThrow(_body, {
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
                data: serializers.BatchSubscribeOrUnsubscribeListsResponse.parseOrThrow(_response.body, {
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/3.0/lists/{list_id}");
    }

    /**
     * Delete a list from your Mailchimp account. If you delete a list, you'll lose the list history—including subscriber activity, unsubscribes, complaints, and bounces. You’ll also lose subscribers’ email addresses, unless you exported and backed up your list.
     *
     * @param {Mailchimp.DeleteListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.delete({
     *         listId: "list_id"
     *     })
     */
    public delete(
        request: Mailchimp.DeleteListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__delete(request, requestOptions));
    }

    private async __delete(
        request: Mailchimp.DeleteListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { listId } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}`,
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "DELETE", "/3.0/lists/{list_id}");
    }

    /**
     * Update the settings for a specific list.
     *
     * @param {Mailchimp.UpdateListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.update({
     *         listId: "list_id"
     *     })
     */
    public update(
        request: Mailchimp.UpdateListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.SubscriberList> {
        return core.HttpResponsePromise.fromPromise(this.__update(request, requestOptions));
    }

    private async __update(
        request: Mailchimp.UpdateListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.SubscriberList>> {
        const { listId, ..._body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateListsRequest.jsonOrThrow(_body, {
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
                data: serializers.SubscriberList.parseOrThrow(_response.body, {
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "PATCH", "/3.0/lists/{list_id}");
    }

    /**
     * Get all abuse reports for a specific list.
     *
     * @param {Mailchimp.ListAbuseReportsListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listAbuseReports({
     *         listId: "list_id"
     *     })
     */
    public async listAbuseReports(
        request: Mailchimp.ListAbuseReportsListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ListsAbuseReports, Mailchimp.ListAbuseReportsListsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListAbuseReportsListsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListAbuseReportsListsResponse>> => {
                const { listId, fields, excludeFields, count, offset } = request;
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
                        `3.0/lists/${core.url.encodePathParam(listId)}/abuse-reports`,
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
                        data: serializers.ListAbuseReportsListsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/lists/{list_id}/abuse-reports",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ListsAbuseReports, Mailchimp.ListAbuseReportsListsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.abuseReports ?? []).length > 0,
            getItems: (response) => response?.abuseReports ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Get details about a specific abuse report.
     *
     * @param {Mailchimp.GetAbuseReportListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.getAbuseReport({
     *         listId: "list_id",
     *         reportId: "report_id"
     *     })
     */
    public getAbuseReport(
        request: Mailchimp.GetAbuseReportListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListsAbuseReports> {
        return core.HttpResponsePromise.fromPromise(this.__getAbuseReport(request, requestOptions));
    }

    private async __getAbuseReport(
        request: Mailchimp.GetAbuseReportListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListsAbuseReports>> {
        const { listId, reportId, fields, excludeFields, count, offset } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/abuse-reports/${core.url.encodePathParam(reportId)}`,
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
                data: serializers.ListsAbuseReports.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/abuse-reports/{report_id}",
        );
    }

    /**
     * Get up to the previous 180 days of daily detailed aggregated activity stats for a list, not including Automation activity.
     *
     * @param {Mailchimp.ListActivityListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listActivity({
     *         listId: "list_id"
     *     })
     */
    public async listActivity(
        request: Mailchimp.ListActivityListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ListActivityListsResponseActivityItem, Mailchimp.ListActivityListsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListActivityListsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListActivityListsResponse>> => {
                const { listId, fields, excludeFields, count, offset } = request;
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
                        `3.0/lists/${core.url.encodePathParam(listId)}/activity`,
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
                        data: serializers.ListActivityListsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/lists/{list_id}/activity",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ListActivityListsResponseActivityItem, Mailchimp.ListActivityListsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.activity ?? []).length > 0,
            getItems: (response) => response?.activity ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Get a list of the top email clients based on user-agent strings.
     *
     * @param {Mailchimp.ListClientsListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listClients({
     *         listId: "list_id"
     *     })
     */
    public listClients(
        request: Mailchimp.ListClientsListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListClientsListsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listClients(request, requestOptions));
    }

    private async __listClients(
        request: Mailchimp.ListClientsListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListClientsListsResponse>> {
        const { listId, fields, excludeFields } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/clients`,
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
                data: serializers.ListClientsListsResponse.parseOrThrow(_response.body, {
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/lists/{list_id}/clients");
    }

    /**
     * Get a month-by-month summary of a specific list's growth activity.
     *
     * @param {Mailchimp.ListGrowthHistoryListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listGrowthHistory({
     *         listId: "list_id"
     *     })
     */
    public async listGrowthHistory(
        request: Mailchimp.ListGrowthHistoryListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.GrowthHistory, Mailchimp.ListGrowthHistoryListsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListGrowthHistoryListsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListGrowthHistoryListsResponse>> => {
                const { listId, fields, excludeFields, count, offset, sortField, sortDir } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    sort_field:
                        sortField != null
                            ? serializers.ListGrowthHistoryListsRequestSortField.jsonOrThrow(sortField, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
                    sort_dir:
                        sortDir != null
                            ? serializers.ListGrowthHistoryListsRequestSortDir.jsonOrThrow(sortDir, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
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
                        `3.0/lists/${core.url.encodePathParam(listId)}/growth-history`,
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
                        data: serializers.ListGrowthHistoryListsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/lists/{list_id}/growth-history",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.GrowthHistory, Mailchimp.ListGrowthHistoryListsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.history ?? []).length > 0,
            getItems: (response) => response?.history ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Get a summary of a specific list's growth activity for a specific month and year.
     *
     * @param {Mailchimp.GetGrowthHistoryListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.getGrowthHistory({
     *         listId: "list_id",
     *         month: "month"
     *     })
     */
    public getGrowthHistory(
        request: Mailchimp.GetGrowthHistoryListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.GrowthHistory> {
        return core.HttpResponsePromise.fromPromise(this.__getGrowthHistory(request, requestOptions));
    }

    private async __getGrowthHistory(
        request: Mailchimp.GetGrowthHistoryListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.GrowthHistory>> {
        const { listId, month, fields, excludeFields } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/growth-history/${core.url.encodePathParam(month)}`,
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
                data: serializers.GrowthHistory.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/growth-history/{month}",
        );
    }

    /**
     * Get information about a list's interest categories.
     *
     * @param {Mailchimp.ListInterestCategoriesListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listInterestCategories({
     *         listId: "list_id"
     *     })
     */
    public async listInterestCategories(
        request: Mailchimp.ListInterestCategoriesListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.InterestCategory, Mailchimp.ListInterestCategoriesListsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListInterestCategoriesListsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListInterestCategoriesListsResponse>> => {
                const { listId, fields, excludeFields, count, offset, type: type_, sortField, sortDir } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    type: type_,
                    sort_field:
                        sortField != null
                            ? serializers.ListInterestCategoriesListsRequestSortField.jsonOrThrow(sortField, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
                    sort_dir:
                        sortDir != null
                            ? serializers.ListInterestCategoriesListsRequestSortDir.jsonOrThrow(sortDir, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
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
                        `3.0/lists/${core.url.encodePathParam(listId)}/interest-categories`,
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
                        data: serializers.ListInterestCategoriesListsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/lists/{list_id}/interest-categories",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.InterestCategory, Mailchimp.ListInterestCategoriesListsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.categories ?? []).length > 0,
            getItems: (response) => response?.categories ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Create a new interest category.
     *
     * @param {Mailchimp.CreateInterestCategoryListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.createInterestCategory({
     *         listId: "list_id",
     *         title: "title",
     *         type: "checkboxes"
     *     })
     */
    public createInterestCategory(
        request: Mailchimp.CreateInterestCategoryListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.InterestCategory> {
        return core.HttpResponsePromise.fromPromise(this.__createInterestCategory(request, requestOptions));
    }

    private async __createInterestCategory(
        request: Mailchimp.CreateInterestCategoryListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.InterestCategory>> {
        const { listId, ..._body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/interest-categories`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateInterestCategoryListsRequest.jsonOrThrow(_body, {
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
                data: serializers.InterestCategory.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/interest-categories",
        );
    }

    /**
     * Get information about a specific interest category.
     *
     * @param {Mailchimp.GetInterestCategoryListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.getInterestCategory({
     *         listId: "list_id",
     *         interestCategoryId: "interest_category_id"
     *     })
     */
    public getInterestCategory(
        request: Mailchimp.GetInterestCategoryListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.InterestCategory> {
        return core.HttpResponsePromise.fromPromise(this.__getInterestCategory(request, requestOptions));
    }

    private async __getInterestCategory(
        request: Mailchimp.GetInterestCategoryListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.InterestCategory>> {
        const { listId, interestCategoryId, fields, excludeFields } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/interest-categories/${core.url.encodePathParam(interestCategoryId)}`,
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
                data: serializers.InterestCategory.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/interest-categories/{interest_category_id}",
        );
    }

    /**
     * Delete a specific interest category.
     *
     * @param {Mailchimp.DeleteInterestCategoryListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.deleteInterestCategory({
     *         listId: "list_id",
     *         interestCategoryId: "interest_category_id"
     *     })
     */
    public deleteInterestCategory(
        request: Mailchimp.DeleteInterestCategoryListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteInterestCategory(request, requestOptions));
    }

    private async __deleteInterestCategory(
        request: Mailchimp.DeleteInterestCategoryListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { listId, interestCategoryId } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/interest-categories/${core.url.encodePathParam(interestCategoryId)}`,
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
            "/3.0/lists/{list_id}/interest-categories/{interest_category_id}",
        );
    }

    /**
     * Update a specific interest category.
     *
     * @param {Mailchimp.UpdateInterestCategoryListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.updateInterestCategory({
     *         listId: "list_id",
     *         interestCategoryId: "interest_category_id"
     *     })
     */
    public updateInterestCategory(
        request: Mailchimp.UpdateInterestCategoryListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.InterestCategory> {
        return core.HttpResponsePromise.fromPromise(this.__updateInterestCategory(request, requestOptions));
    }

    private async __updateInterestCategory(
        request: Mailchimp.UpdateInterestCategoryListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.InterestCategory>> {
        const { listId, interestCategoryId, ..._body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/interest-categories/${core.url.encodePathParam(interestCategoryId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateInterestCategoryListsRequest.jsonOrThrow(_body, {
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
                data: serializers.InterestCategory.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/interest-categories/{interest_category_id}",
        );
    }

    /**
     * Get a list of this category's interests.
     *
     * @param {Mailchimp.ListInterestCategoryInterestsListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listInterestCategoryInterests({
     *         listId: "list_id",
     *         interestCategoryId: "interest_category_id"
     *     })
     */
    public async listInterestCategoryInterests(
        request: Mailchimp.ListInterestCategoryInterestsListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.Interest, Mailchimp.ListInterestCategoryInterestsListsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListInterestCategoryInterestsListsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListInterestCategoryInterestsListsResponse>> => {
                const { listId, interestCategoryId, fields, excludeFields, count, offset } = request;
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
                        `3.0/lists/${core.url.encodePathParam(listId)}/interest-categories/${core.url.encodePathParam(interestCategoryId)}/interests`,
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
                        data: serializers.ListInterestCategoryInterestsListsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/lists/{list_id}/interest-categories/{interest_category_id}/interests",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.Interest, Mailchimp.ListInterestCategoryInterestsListsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.interests ?? []).length > 0,
            getItems: (response) => response?.interests ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Create a new interest or 'group name' for a specific category.
     *
     * @param {Mailchimp.CreateInterestCategoryInterestListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.createInterestCategoryInterest({
     *         listId: "list_id",
     *         interestCategoryId: "interest_category_id",
     *         name: "name"
     *     })
     */
    public createInterestCategoryInterest(
        request: Mailchimp.CreateInterestCategoryInterestListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.Interest> {
        return core.HttpResponsePromise.fromPromise(this.__createInterestCategoryInterest(request, requestOptions));
    }

    private async __createInterestCategoryInterest(
        request: Mailchimp.CreateInterestCategoryInterestListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.Interest>> {
        const { listId, interestCategoryId, ..._body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/interest-categories/${core.url.encodePathParam(interestCategoryId)}/interests`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateInterestCategoryInterestListsRequest.jsonOrThrow(_body, {
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
                data: serializers.Interest.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/interest-categories/{interest_category_id}/interests",
        );
    }

    /**
     * Get interests or 'group names' for a specific category.
     *
     * @param {Mailchimp.GetInterestCategoryInterestListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.getInterestCategoryInterest({
     *         listId: "list_id",
     *         interestCategoryId: "interest_category_id",
     *         interestId: "interest_id"
     *     })
     */
    public getInterestCategoryInterest(
        request: Mailchimp.GetInterestCategoryInterestListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.Interest> {
        return core.HttpResponsePromise.fromPromise(this.__getInterestCategoryInterest(request, requestOptions));
    }

    private async __getInterestCategoryInterest(
        request: Mailchimp.GetInterestCategoryInterestListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.Interest>> {
        const { listId, interestCategoryId, interestId, fields, excludeFields } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/interest-categories/${core.url.encodePathParam(interestCategoryId)}/interests/${core.url.encodePathParam(interestId)}`,
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
                data: serializers.Interest.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}",
        );
    }

    /**
     * Delete interests or group names in a specific category.
     *
     * @param {Mailchimp.DeleteInterestCategoryInterestListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.deleteInterestCategoryInterest({
     *         listId: "list_id",
     *         interestCategoryId: "interest_category_id",
     *         interestId: "interest_id"
     *     })
     */
    public deleteInterestCategoryInterest(
        request: Mailchimp.DeleteInterestCategoryInterestListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteInterestCategoryInterest(request, requestOptions));
    }

    private async __deleteInterestCategoryInterest(
        request: Mailchimp.DeleteInterestCategoryInterestListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { listId, interestCategoryId, interestId } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/interest-categories/${core.url.encodePathParam(interestCategoryId)}/interests/${core.url.encodePathParam(interestId)}`,
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
            "/3.0/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}",
        );
    }

    /**
     * Update interests or 'group names' for a specific category.
     *
     * @param {Mailchimp.UpdateInterestCategoryInterestListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.updateInterestCategoryInterest({
     *         listId: "list_id",
     *         interestCategoryId: "interest_category_id",
     *         interestId: "interest_id"
     *     })
     */
    public updateInterestCategoryInterest(
        request: Mailchimp.UpdateInterestCategoryInterestListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.Interest> {
        return core.HttpResponsePromise.fromPromise(this.__updateInterestCategoryInterest(request, requestOptions));
    }

    private async __updateInterestCategoryInterest(
        request: Mailchimp.UpdateInterestCategoryInterestListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.Interest>> {
        const { listId, interestCategoryId, interestId, ..._body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/interest-categories/${core.url.encodePathParam(interestCategoryId)}/interests/${core.url.encodePathParam(interestId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateInterestCategoryInterestListsRequest.jsonOrThrow(_body, {
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
                data: serializers.Interest.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}",
        );
    }

    /**
     * Get the locations (countries) that the list's subscribers have been tagged to based on geocoding their IP address.
     *
     * @param {Mailchimp.ListLocationsListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listLocations({
     *         listId: "list_id"
     *     })
     */
    public listLocations(
        request: Mailchimp.ListLocationsListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListLocationsListsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listLocations(request, requestOptions));
    }

    private async __listLocations(
        request: Mailchimp.ListLocationsListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListLocationsListsResponse>> {
        const { listId, fields, excludeFields } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/locations`,
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
                data: serializers.ListLocationsListsResponse.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/locations",
        );
    }

    /**
     * Get information about members in a specific Mailchimp list.
     *
     * @param {Mailchimp.ListMembersListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listMembers({
     *         listId: "list_id"
     *     })
     */
    public async listMembers(
        request: Mailchimp.ListMembersListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ListMembers, Mailchimp.ListMembersListsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListMembersListsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListMembersListsResponse>> => {
                const {
                    listId,
                    fields,
                    excludeFields,
                    count,
                    offset,
                    emailType,
                    status,
                    sinceTimestampOpt,
                    beforeTimestampOpt,
                    sinceLastChanged,
                    beforeLastChanged,
                    uniqueEmailId,
                    vipOnly,
                    interestCategoryId,
                    interestIds,
                    interestMatch,
                    sortField,
                    sortDir,
                    sinceLastCampaign,
                    unsubscribedSince,
                } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    email_type: emailType,
                    status:
                        status != null
                            ? serializers.ListMembersListsRequestStatus.jsonOrThrow(status, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
                    since_timestamp_opt: sinceTimestampOpt,
                    before_timestamp_opt: beforeTimestampOpt,
                    since_last_changed: sinceLastChanged,
                    before_last_changed: beforeLastChanged,
                    unique_email_id: uniqueEmailId,
                    vip_only: vipOnly,
                    interest_category_id: interestCategoryId,
                    interest_ids: interestIds,
                    interest_match:
                        interestMatch != null
                            ? serializers.ListMembersListsRequestInterestMatch.jsonOrThrow(interestMatch, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
                    sort_field:
                        sortField != null
                            ? serializers.ListMembersListsRequestSortField.jsonOrThrow(sortField, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
                    sort_dir:
                        sortDir != null
                            ? serializers.ListMembersListsRequestSortDir.jsonOrThrow(sortDir, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
                    since_last_campaign: sinceLastCampaign,
                    unsubscribed_since: unsubscribedSince,
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
                        `3.0/lists/${core.url.encodePathParam(listId)}/members`,
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
                        data: serializers.ListMembersListsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/lists/{list_id}/members",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ListMembers, Mailchimp.ListMembersListsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.members ?? []).length > 0,
            getItems: (response) => response?.members ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Add a new member to the list.
     *
     * @param {Mailchimp.CreateMemberListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.createMember({
     *         listId: "list_id",
     *         emailAddress: "email_address",
     *         status: "subscribed"
     *     })
     */
    public createMember(
        request: Mailchimp.CreateMemberListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListMembers> {
        return core.HttpResponsePromise.fromPromise(this.__createMember(request, requestOptions));
    }

    private async __createMember(
        request: Mailchimp.CreateMemberListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListMembers>> {
        const { listId, skipMergeValidation, ..._body } = request;
        const _queryParams: Record<string, unknown> = {
            skip_merge_validation: skipMergeValidation,
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
                `3.0/lists/${core.url.encodePathParam(listId)}/members`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateMemberListsRequest.jsonOrThrow(_body, {
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
                data: serializers.ListMembers.parseOrThrow(_response.body, {
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/3.0/lists/{list_id}/members");
    }

    /**
     * Get information about a specific list member, including a currently subscribed, unsubscribed, or bounced member.
     *
     * @param {Mailchimp.GetMemberListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.getMember({
     *         listId: "list_id",
     *         subscriberHash: "subscriber_hash"
     *     })
     */
    public getMember(
        request: Mailchimp.GetMemberListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListMembers> {
        return core.HttpResponsePromise.fromPromise(this.__getMember(request, requestOptions));
    }

    private async __getMember(
        request: Mailchimp.GetMemberListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListMembers>> {
        const { listId, subscriberHash, fields, excludeFields } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/members/${core.url.encodePathParam(subscriberHash)}`,
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
                data: serializers.ListMembers.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/members/{subscriber_hash}",
        );
    }

    /**
     * Add or update a list member.
     *
     * @param {Mailchimp.UpsertMemberListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.upsertMember({
     *         listId: "list_id",
     *         subscriberHash: "subscriber_hash",
     *         emailAddress: "email_address"
     *     })
     */
    public upsertMember(
        request: Mailchimp.UpsertMemberListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListMembers> {
        return core.HttpResponsePromise.fromPromise(this.__upsertMember(request, requestOptions));
    }

    private async __upsertMember(
        request: Mailchimp.UpsertMemberListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListMembers>> {
        const { listId, subscriberHash, skipMergeValidation, ..._body } = request;
        const _queryParams: Record<string, unknown> = {
            skip_merge_validation: skipMergeValidation,
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
                `3.0/lists/${core.url.encodePathParam(listId)}/members/${core.url.encodePathParam(subscriberHash)}`,
            ),
            method: "PUT",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpsertMemberListsRequest.jsonOrThrow(_body, {
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
                data: serializers.ListMembers.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/members/{subscriber_hash}",
        );
    }

    /**
     * Archive a list member. To permanently delete, use the delete-permanent action.
     *
     * @param {Mailchimp.DeleteMemberListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.deleteMember({
     *         listId: "list_id",
     *         subscriberHash: "subscriber_hash"
     *     })
     */
    public deleteMember(
        request: Mailchimp.DeleteMemberListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteMember(request, requestOptions));
    }

    private async __deleteMember(
        request: Mailchimp.DeleteMemberListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { listId, subscriberHash } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/members/${core.url.encodePathParam(subscriberHash)}`,
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
            "/3.0/lists/{list_id}/members/{subscriber_hash}",
        );
    }

    /**
     * Update information for a specific list member.
     *
     * @param {Mailchimp.UpdateMemberListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.updateMember({
     *         listId: "list_id",
     *         subscriberHash: "subscriber_hash"
     *     })
     */
    public updateMember(
        request: Mailchimp.UpdateMemberListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListMembers> {
        return core.HttpResponsePromise.fromPromise(this.__updateMember(request, requestOptions));
    }

    private async __updateMember(
        request: Mailchimp.UpdateMemberListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListMembers>> {
        const { listId, subscriberHash, skipMergeValidation, ..._body } = request;
        const _queryParams: Record<string, unknown> = {
            skip_merge_validation: skipMergeValidation,
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
                `3.0/lists/${core.url.encodePathParam(listId)}/members/${core.url.encodePathParam(subscriberHash)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateMemberListsRequest.jsonOrThrow(_body, {
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
                data: serializers.ListMembers.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/members/{subscriber_hash}",
        );
    }

    /**
     * Delete all personally identifiable information related to a list member, and remove them from a list. This will make it impossible to re-import the list member.
     *
     * @param {Mailchimp.CreateMemberActionDeletePermanentListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.createMemberActionDeletePermanent({
     *         listId: "list_id",
     *         subscriberHash: "subscriber_hash"
     *     })
     */
    public createMemberActionDeletePermanent(
        request: Mailchimp.CreateMemberActionDeletePermanentListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__createMemberActionDeletePermanent(request, requestOptions));
    }

    private async __createMemberActionDeletePermanent(
        request: Mailchimp.CreateMemberActionDeletePermanentListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { listId, subscriberHash } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/members/${core.url.encodePathParam(subscriberHash)}/actions/delete-permanent`,
            ),
            method: "POST",
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
            "POST",
            "/3.0/lists/{list_id}/members/{subscriber_hash}/actions/delete-permanent",
        );
    }

    /**
     * Get the last 50 events of a member's activity on a specific list, including opens, clicks, and unsubscribes.
     *
     * @param {Mailchimp.ListMemberActivityListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listMemberActivity({
     *         listId: "list_id",
     *         subscriberHash: "subscriber_hash"
     *     })
     */
    public listMemberActivity(
        request: Mailchimp.ListMemberActivityListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListMemberActivityListsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listMemberActivity(request, requestOptions));
    }

    private async __listMemberActivity(
        request: Mailchimp.ListMemberActivityListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListMemberActivityListsResponse>> {
        const { listId, subscriberHash, fields, excludeFields, action } = request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
            action: Array.isArray(action)
                ? action.map((item) =>
                      serializers.ListMemberActivityListsRequestActionItem.jsonOrThrow(item, {
                          unrecognizedObjectKeys: "strip",
                          omitUndefined: true,
                      }),
                  )
                : action != null
                  ? serializers.ListMemberActivityListsRequestActionItem.jsonOrThrow(action, {
                        unrecognizedObjectKeys: "strip",
                        omitUndefined: true,
                    })
                  : undefined,
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
                `3.0/lists/${core.url.encodePathParam(listId)}/members/${core.url.encodePathParam(subscriberHash)}/activity`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .add("fields", _queryParams.fields, { style: "comma" })
                .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                .add("action", _queryParams.action, { style: "comma" })
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
                data: serializers.ListMemberActivityListsResponse.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/members/{subscriber_hash}/activity",
        );
    }

    /**
     * Get a member's activity on a specific list, including opens, clicks, and unsubscribes.
     *
     * @param {Mailchimp.ListMemberActivityFeedListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listMemberActivityFeed({
     *         listId: "list_id",
     *         subscriberHash: "subscriber_hash"
     *     })
     */
    public async listMemberActivityFeed(
        request: Mailchimp.ListMemberActivityFeedListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.Page<unknown, Mailchimp.ListMemberActivityFeedListsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListMemberActivityFeedListsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListMemberActivityFeedListsResponse>> => {
                const { listId, subscriberHash, fields, excludeFields, count, offset, activityFilters } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    activity_filters: Array.isArray(activityFilters)
                        ? activityFilters.map((item) =>
                              serializers.ListMemberActivityFeedListsRequestActivityFiltersItem.jsonOrThrow(item, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              }),
                          )
                        : activityFilters != null
                          ? serializers.ListMemberActivityFeedListsRequestActivityFiltersItem.jsonOrThrow(
                                activityFilters,
                                { unrecognizedObjectKeys: "strip", omitUndefined: true },
                            )
                          : undefined,
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
                        `3.0/lists/${core.url.encodePathParam(listId)}/members/${core.url.encodePathParam(subscriberHash)}/activity-feed`,
                    ),
                    method: "GET",
                    headers: _headers,
                    queryString: core.url
                        .queryBuilder()
                        .addMany(_queryParams)
                        .add("fields", _queryParams.fields, { style: "comma" })
                        .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                        .add("activity_filters", _queryParams.activity_filters, { style: "comma" })
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
                        data: serializers.ListMemberActivityFeedListsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/lists/{list_id}/members/{subscriber_hash}/activity-feed",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<unknown, Mailchimp.ListMemberActivityFeedListsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.activity ?? []).length > 0,
            getItems: (response) => response?.activity ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Get events for a contact.
     *
     * @param {Mailchimp.ListMemberEventsListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listMemberEvents({
     *         listId: "list_id",
     *         subscriberHash: "subscriber_hash"
     *     })
     */
    public async listMemberEvents(
        request: Mailchimp.ListMemberEventsListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ListMemberEventsListsResponseEventsItem, Mailchimp.ListMemberEventsListsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListMemberEventsListsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListMemberEventsListsResponse>> => {
                const { listId, subscriberHash, count, offset, fields, excludeFields } = request;
                const _queryParams: Record<string, unknown> = {
                    count,
                    offset,
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
                        `3.0/lists/${core.url.encodePathParam(listId)}/members/${core.url.encodePathParam(subscriberHash)}/events`,
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
                        data: serializers.ListMemberEventsListsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/lists/{list_id}/members/{subscriber_hash}/events",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<
            Mailchimp.ListMemberEventsListsResponseEventsItem,
            Mailchimp.ListMemberEventsListsResponse
        >({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.events ?? []).length > 0,
            getItems: (response) => response?.events ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Add an event for a list member.
     *
     * @param {Mailchimp.CreateMemberEventListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.createMemberEvent({
     *         listId: "list_id",
     *         subscriberHash: "subscriber_hash",
     *         name: "name"
     *     })
     */
    public createMemberEvent(
        request: Mailchimp.CreateMemberEventListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__createMemberEvent(request, requestOptions));
    }

    private async __createMemberEvent(
        request: Mailchimp.CreateMemberEventListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { listId, subscriberHash, ..._body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/members/${core.url.encodePathParam(subscriberHash)}/events`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateMemberEventListsRequest.jsonOrThrow(_body, {
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
            "POST",
            "/3.0/lists/{list_id}/members/{subscriber_hash}/events",
        );
    }

    /**
     * Get the last 50 Goal events for a member on a specific list.
     *
     * @param {Mailchimp.ListMemberGoalsListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listMemberGoals({
     *         listId: "list_id",
     *         subscriberHash: "subscriber_hash"
     *     })
     */
    public listMemberGoals(
        request: Mailchimp.ListMemberGoalsListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListMemberGoalsListsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listMemberGoals(request, requestOptions));
    }

    private async __listMemberGoals(
        request: Mailchimp.ListMemberGoalsListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListMemberGoalsListsResponse>> {
        const { listId, subscriberHash, fields, excludeFields } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/members/${core.url.encodePathParam(subscriberHash)}/goals`,
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
                data: serializers.ListMemberGoalsListsResponse.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/members/{subscriber_hash}/goals",
        );
    }

    /**
     * Get recent notes for a specific list member.
     *
     * @param {Mailchimp.ListMemberNotesListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listMemberNotes({
     *         listId: "list_id",
     *         subscriberHash: "subscriber_hash"
     *     })
     */
    public async listMemberNotes(
        request: Mailchimp.ListMemberNotesListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.MemberNotes, Mailchimp.ListMemberNotesListsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListMemberNotesListsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListMemberNotesListsResponse>> => {
                const { listId, subscriberHash, sortField, sortDir, fields, excludeFields, count, offset } = request;
                const _queryParams: Record<string, unknown> = {
                    sort_field:
                        sortField != null
                            ? serializers.ListMemberNotesListsRequestSortField.jsonOrThrow(sortField, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
                    sort_dir:
                        sortDir != null
                            ? serializers.ListMemberNotesListsRequestSortDir.jsonOrThrow(sortDir, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
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
                        `3.0/lists/${core.url.encodePathParam(listId)}/members/${core.url.encodePathParam(subscriberHash)}/notes`,
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
                        data: serializers.ListMemberNotesListsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/lists/{list_id}/members/{subscriber_hash}/notes",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.MemberNotes, Mailchimp.ListMemberNotesListsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.notes ?? []).length > 0,
            getItems: (response) => response?.notes ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Add a new note for a specific subscriber.
     *
     * @param {Mailchimp.CreateMemberNoteListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.createMemberNote({
     *         listId: "list_id",
     *         subscriberHash: "subscriber_hash"
     *     })
     */
    public createMemberNote(
        request: Mailchimp.CreateMemberNoteListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.MemberNotes> {
        return core.HttpResponsePromise.fromPromise(this.__createMemberNote(request, requestOptions));
    }

    private async __createMemberNote(
        request: Mailchimp.CreateMemberNoteListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.MemberNotes>> {
        const { listId, subscriberHash, ..._body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/members/${core.url.encodePathParam(subscriberHash)}/notes`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateMemberNoteListsRequest.jsonOrThrow(_body, {
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
                data: serializers.MemberNotes.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/members/{subscriber_hash}/notes",
        );
    }

    /**
     * Get a specific note for a specific list member.
     *
     * @param {Mailchimp.GetMemberNoteListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.getMemberNote({
     *         listId: "list_id",
     *         subscriberHash: "subscriber_hash",
     *         noteId: "note_id"
     *     })
     */
    public getMemberNote(
        request: Mailchimp.GetMemberNoteListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.MemberNotes> {
        return core.HttpResponsePromise.fromPromise(this.__getMemberNote(request, requestOptions));
    }

    private async __getMemberNote(
        request: Mailchimp.GetMemberNoteListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.MemberNotes>> {
        const { listId, subscriberHash, noteId, fields, excludeFields } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/members/${core.url.encodePathParam(subscriberHash)}/notes/${core.url.encodePathParam(noteId)}`,
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
                data: serializers.MemberNotes.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}",
        );
    }

    /**
     * Delete a specific note for a specific list member.
     *
     * @param {Mailchimp.DeleteMemberNoteListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.deleteMemberNote({
     *         listId: "list_id",
     *         subscriberHash: "subscriber_hash",
     *         noteId: "note_id"
     *     })
     */
    public deleteMemberNote(
        request: Mailchimp.DeleteMemberNoteListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteMemberNote(request, requestOptions));
    }

    private async __deleteMemberNote(
        request: Mailchimp.DeleteMemberNoteListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { listId, subscriberHash, noteId } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/members/${core.url.encodePathParam(subscriberHash)}/notes/${core.url.encodePathParam(noteId)}`,
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
            "/3.0/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}",
        );
    }

    /**
     * Update a specific note for a specific list member.
     *
     * @param {Mailchimp.UpdateMemberNoteListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.updateMemberNote({
     *         listId: "list_id",
     *         subscriberHash: "subscriber_hash",
     *         noteId: "note_id"
     *     })
     */
    public updateMemberNote(
        request: Mailchimp.UpdateMemberNoteListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.MemberNotes> {
        return core.HttpResponsePromise.fromPromise(this.__updateMemberNote(request, requestOptions));
    }

    private async __updateMemberNote(
        request: Mailchimp.UpdateMemberNoteListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.MemberNotes>> {
        const { listId, subscriberHash, noteId, ..._body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/members/${core.url.encodePathParam(subscriberHash)}/notes/${core.url.encodePathParam(noteId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateMemberNoteListsRequest.jsonOrThrow(_body, {
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
                data: serializers.MemberNotes.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}",
        );
    }

    /**
     * Get the tags on a list member.
     *
     * @param {Mailchimp.ListMemberTagsListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listMemberTags({
     *         listId: "list_id",
     *         subscriberHash: "subscriber_hash"
     *     })
     */
    public async listMemberTags(
        request: Mailchimp.ListMemberTagsListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ListMemberTagsListsResponseTagsItem, Mailchimp.ListMemberTagsListsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListMemberTagsListsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListMemberTagsListsResponse>> => {
                const { listId, subscriberHash, fields, excludeFields, count, offset } = request;
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
                        `3.0/lists/${core.url.encodePathParam(listId)}/members/${core.url.encodePathParam(subscriberHash)}/tags`,
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
                        data: serializers.ListMemberTagsListsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/lists/{list_id}/members/{subscriber_hash}/tags",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ListMemberTagsListsResponseTagsItem, Mailchimp.ListMemberTagsListsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.tags ?? []).length > 0,
            getItems: (response) => response?.tags ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Add or remove tags from a list member. If a tag that does not exist is passed in and set as 'active', a new tag will be created.
     *
     * @param {Mailchimp.CreateMemberTagListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.createMemberTag({
     *         listId: "list_id",
     *         subscriberHash: "subscriber_hash",
     *         tags: [{
     *                 name: "name",
     *                 status: "inactive"
     *             }]
     *     })
     */
    public createMemberTag(
        request: Mailchimp.CreateMemberTagListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__createMemberTag(request, requestOptions));
    }

    private async __createMemberTag(
        request: Mailchimp.CreateMemberTagListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { listId, subscriberHash, ..._body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/members/${core.url.encodePathParam(subscriberHash)}/tags`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateMemberTagListsRequest.jsonOrThrow(_body, {
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
            "POST",
            "/3.0/lists/{list_id}/members/{subscriber_hash}/tags",
        );
    }

    /**
     * Get a list of all merge fields for an audience.
     *
     * @param {Mailchimp.ListMergeFieldsListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listMergeFields({
     *         listId: "list_id"
     *     })
     */
    public async listMergeFields(
        request: Mailchimp.ListMergeFieldsListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.MergeField, Mailchimp.ListMergeFieldsListsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListMergeFieldsListsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListMergeFieldsListsResponse>> => {
                const { listId, fields, excludeFields, count, offset, type: type_, required } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    type: type_,
                    required,
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
                        `3.0/lists/${core.url.encodePathParam(listId)}/merge-fields`,
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
                        data: serializers.ListMergeFieldsListsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/lists/{list_id}/merge-fields",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.MergeField, Mailchimp.ListMergeFieldsListsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.mergeFields ?? []).length > 0,
            getItems: (response) => response?.mergeFields ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Add a new merge field for a specific audience.
     *
     * @param {Mailchimp.CreateMergeFieldListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.createMergeField({
     *         listId: "list_id",
     *         name: "name",
     *         type: "text"
     *     })
     */
    public createMergeField(
        request: Mailchimp.CreateMergeFieldListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.MergeField> {
        return core.HttpResponsePromise.fromPromise(this.__createMergeField(request, requestOptions));
    }

    private async __createMergeField(
        request: Mailchimp.CreateMergeFieldListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.MergeField>> {
        const { listId, ..._body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/merge-fields`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateMergeFieldListsRequest.jsonOrThrow(_body, {
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
                data: serializers.MergeField.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/merge-fields",
        );
    }

    /**
     * Get information about a specific merge field.
     *
     * @param {Mailchimp.GetMergeFieldListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.getMergeField({
     *         listId: "list_id",
     *         mergeId: "merge_id"
     *     })
     */
    public getMergeField(
        request: Mailchimp.GetMergeFieldListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.MergeField> {
        return core.HttpResponsePromise.fromPromise(this.__getMergeField(request, requestOptions));
    }

    private async __getMergeField(
        request: Mailchimp.GetMergeFieldListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.MergeField>> {
        const { listId, mergeId, excludeFields, fields } = request;
        const _queryParams: Record<string, unknown> = {
            exclude_fields: excludeFields,
            fields,
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
                `3.0/lists/${core.url.encodePathParam(listId)}/merge-fields/${core.url.encodePathParam(mergeId)}`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .add("exclude_fields", _queryParams.exclude_fields, { style: "comma" })
                .add("fields", _queryParams.fields, { style: "comma" })
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
                data: serializers.MergeField.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/merge-fields/{merge_id}",
        );
    }

    /**
     * Delete a specific merge field.
     *
     * @param {Mailchimp.DeleteMergeFieldListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.deleteMergeField({
     *         listId: "list_id",
     *         mergeId: "merge_id"
     *     })
     */
    public deleteMergeField(
        request: Mailchimp.DeleteMergeFieldListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteMergeField(request, requestOptions));
    }

    private async __deleteMergeField(
        request: Mailchimp.DeleteMergeFieldListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { listId, mergeId } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/merge-fields/${core.url.encodePathParam(mergeId)}`,
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
            "/3.0/lists/{list_id}/merge-fields/{merge_id}",
        );
    }

    /**
     * Update a specific merge field.
     *
     * @param {Mailchimp.UpdateMergeFieldListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.updateMergeField({
     *         listId: "list_id",
     *         mergeId: "merge_id"
     *     })
     */
    public updateMergeField(
        request: Mailchimp.UpdateMergeFieldListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.MergeField> {
        return core.HttpResponsePromise.fromPromise(this.__updateMergeField(request, requestOptions));
    }

    private async __updateMergeField(
        request: Mailchimp.UpdateMergeFieldListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.MergeField>> {
        const { listId, mergeId, ..._body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/merge-fields/${core.url.encodePathParam(mergeId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateMergeFieldListsRequest.jsonOrThrow(_body, {
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
                data: serializers.MergeField.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/merge-fields/{merge_id}",
        );
    }

    /**
     * Get information about all available segments for a specific list.
     *
     * @param {Mailchimp.ListSegmentsListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listSegments({
     *         listId: "list_id"
     *     })
     */
    public async listSegments(
        request: Mailchimp.ListSegmentsListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.List, Mailchimp.ListSegmentsListsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListSegmentsListsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListSegmentsListsResponse>> => {
                const {
                    listId,
                    fields,
                    excludeFields,
                    count,
                    offset,
                    type: type_,
                    sinceCreatedAt,
                    beforeCreatedAt,
                    includeCleaned,
                    includeTransactional,
                    includeUnsubscribed,
                    sinceUpdatedAt,
                    beforeUpdatedAt,
                    excludeType,
                } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    type: type_,
                    since_created_at: sinceCreatedAt,
                    before_created_at: beforeCreatedAt,
                    include_cleaned: includeCleaned,
                    include_transactional: includeTransactional,
                    include_unsubscribed: includeUnsubscribed,
                    since_updated_at: sinceUpdatedAt,
                    before_updated_at: beforeUpdatedAt,
                    exclude_type:
                        excludeType != null
                            ? serializers.ListSegmentsListsRequestExcludeType.jsonOrThrow(excludeType, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
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
                        `3.0/lists/${core.url.encodePathParam(listId)}/segments`,
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
                        data: serializers.ListSegmentsListsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/lists/{list_id}/segments",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.List, Mailchimp.ListSegmentsListsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.segments ?? []).length > 0,
            getItems: (response) => response?.segments ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Create a new segment in a specific list.
     *
     * @param {Mailchimp.CreateSegmentListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.createSegment({
     *         listId: "list_id",
     *         name: "name"
     *     })
     */
    public createSegment(
        request: Mailchimp.CreateSegmentListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.List> {
        return core.HttpResponsePromise.fromPromise(this.__createSegment(request, requestOptions));
    }

    private async __createSegment(
        request: Mailchimp.CreateSegmentListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.List>> {
        const { listId, ..._body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/segments`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateSegmentListsRequest.jsonOrThrow(_body, {
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
                data: serializers.List.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/segments",
        );
    }

    /**
     * Get information about a specific segment.
     *
     * @param {Mailchimp.GetSegmentListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.getSegment({
     *         listId: "list_id",
     *         segmentId: "segment_id"
     *     })
     */
    public getSegment(
        request: Mailchimp.GetSegmentListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.List> {
        return core.HttpResponsePromise.fromPromise(this.__getSegment(request, requestOptions));
    }

    private async __getSegment(
        request: Mailchimp.GetSegmentListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.List>> {
        const { listId, segmentId, fields, excludeFields, includeCleaned, includeTransactional, includeUnsubscribed } =
            request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
            include_cleaned: includeCleaned,
            include_transactional: includeTransactional,
            include_unsubscribed: includeUnsubscribed,
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
                `3.0/lists/${core.url.encodePathParam(listId)}/segments/${core.url.encodePathParam(segmentId)}`,
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
                data: serializers.List.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/segments/{segment_id}",
        );
    }

    /**
     * Batch add/remove list members to static segment
     *
     * @param {Mailchimp.BatchAddOrRemoveMembersListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.batchAddOrRemoveMembers({
     *         listId: "list_id",
     *         segmentId: "segment_id"
     *     })
     */
    public batchAddOrRemoveMembers(
        request: Mailchimp.BatchAddOrRemoveMembersListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.BatchAddOrRemoveMembersListsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__batchAddOrRemoveMembers(request, requestOptions));
    }

    private async __batchAddOrRemoveMembers(
        request: Mailchimp.BatchAddOrRemoveMembersListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.BatchAddOrRemoveMembersListsResponse>> {
        const { listId, segmentId, ..._body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/segments/${core.url.encodePathParam(segmentId)}`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.BatchAddOrRemoveMembersListsRequest.jsonOrThrow(_body, {
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
                data: serializers.BatchAddOrRemoveMembersListsResponse.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/segments/{segment_id}",
        );
    }

    /**
     * Delete a specific segment in a list.
     *
     * @param {Mailchimp.DeleteSegmentListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.deleteSegment({
     *         listId: "list_id",
     *         segmentId: "segment_id"
     *     })
     */
    public deleteSegment(
        request: Mailchimp.DeleteSegmentListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteSegment(request, requestOptions));
    }

    private async __deleteSegment(
        request: Mailchimp.DeleteSegmentListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { listId, segmentId } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/segments/${core.url.encodePathParam(segmentId)}`,
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
            "/3.0/lists/{list_id}/segments/{segment_id}",
        );
    }

    /**
     * Update a specific segment in a list.
     *
     * @param {Mailchimp.UpdateSegmentListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.updateSegment({
     *         listId: "list_id",
     *         segmentId: "segment_id"
     *     })
     */
    public updateSegment(
        request: Mailchimp.UpdateSegmentListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.List> {
        return core.HttpResponsePromise.fromPromise(this.__updateSegment(request, requestOptions));
    }

    private async __updateSegment(
        request: Mailchimp.UpdateSegmentListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.List>> {
        const { listId, segmentId, ..._body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/segments/${core.url.encodePathParam(segmentId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateSegmentListsRequest.jsonOrThrow(_body, {
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
                data: serializers.List.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/segments/{segment_id}",
        );
    }

    /**
     * Get information about members in a saved segment.
     *
     * @param {Mailchimp.ListSegmentMembersListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listSegmentMembers({
     *         listId: "list_id",
     *         segmentId: "segment_id"
     *     })
     */
    public async listSegmentMembers(
        request: Mailchimp.ListSegmentMembersListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ListsSegmentsMembers, Mailchimp.ListSegmentMembersListsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListSegmentMembersListsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListSegmentMembersListsResponse>> => {
                const {
                    listId,
                    segmentId,
                    fields,
                    excludeFields,
                    count,
                    offset,
                    includeCleaned,
                    includeTransactional,
                    includeUnsubscribed,
                } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    include_cleaned: includeCleaned,
                    include_transactional: includeTransactional,
                    include_unsubscribed: includeUnsubscribed,
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
                        `3.0/lists/${core.url.encodePathParam(listId)}/segments/${core.url.encodePathParam(segmentId)}/members`,
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
                        data: serializers.ListSegmentMembersListsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/lists/{list_id}/segments/{segment_id}/members",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ListsSegmentsMembers, Mailchimp.ListSegmentMembersListsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.members ?? []).length > 0,
            getItems: (response) => response?.members ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Add a member to a static segment.
     *
     * @param {Mailchimp.CreateSegmentMemberListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.createSegmentMember({
     *         listId: "list_id",
     *         segmentId: "segment_id",
     *         emailAddress: "email_address"
     *     })
     */
    public createSegmentMember(
        request: Mailchimp.CreateSegmentMemberListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListsSegmentsMembers> {
        return core.HttpResponsePromise.fromPromise(this.__createSegmentMember(request, requestOptions));
    }

    private async __createSegmentMember(
        request: Mailchimp.CreateSegmentMemberListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListsSegmentsMembers>> {
        const { listId, segmentId, ..._body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/segments/${core.url.encodePathParam(segmentId)}/members`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateSegmentMemberListsRequest.jsonOrThrow(_body, {
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
                data: serializers.ListsSegmentsMembers.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/segments/{segment_id}/members",
        );
    }

    /**
     * Remove a member from the specified static segment.
     *
     * @param {Mailchimp.DeleteSegmentMemberListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.deleteSegmentMember({
     *         listId: "list_id",
     *         segmentId: "segment_id",
     *         subscriberHash: "subscriber_hash"
     *     })
     */
    public deleteSegmentMember(
        request: Mailchimp.DeleteSegmentMemberListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteSegmentMember(request, requestOptions));
    }

    private async __deleteSegmentMember(
        request: Mailchimp.DeleteSegmentMemberListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { listId, segmentId, subscriberHash } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/segments/${core.url.encodePathParam(segmentId)}/members/${core.url.encodePathParam(subscriberHash)}`,
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
            "/3.0/lists/{list_id}/segments/{segment_id}/members/{subscriber_hash}",
        );
    }

    /**
     * Get signup forms for a specific list.
     *
     * @param {Mailchimp.ListSignupFormsListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listSignupForms({
     *         listId: "list_id"
     *     })
     */
    public listSignupForms(
        request: Mailchimp.ListSignupFormsListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListSignupFormsListsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listSignupForms(request, requestOptions));
    }

    private async __listSignupForms(
        request: Mailchimp.ListSignupFormsListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListSignupFormsListsResponse>> {
        const { listId } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/signup-forms`,
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
                data: serializers.ListSignupFormsListsResponse.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/signup-forms",
        );
    }

    /**
     * Customize a list's default signup form.
     *
     * @param {Mailchimp.CreateSignupFormListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.createSignupForm({
     *         listId: "list_id"
     *     })
     */
    public createSignupForm(
        request: Mailchimp.CreateSignupFormListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.SignupForm> {
        return core.HttpResponsePromise.fromPromise(this.__createSignupForm(request, requestOptions));
    }

    private async __createSignupForm(
        request: Mailchimp.CreateSignupFormListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.SignupForm>> {
        const { listId, ..._body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/signup-forms`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateSignupFormListsRequest.jsonOrThrow(_body, {
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
                data: serializers.SignupForm.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/signup-forms",
        );
    }

    /**
     * Get information about all available surveys for a specific list.
     *
     * @param {Mailchimp.ListSurveysListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listSurveys({
     *         listId: "list_id"
     *     })
     */
    public listSurveys(
        request: Mailchimp.ListSurveysListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<unknown> {
        return core.HttpResponsePromise.fromPromise(this.__listSurveys(request, requestOptions));
    }

    private async __listSurveys(
        request: Mailchimp.ListSurveysListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<unknown>> {
        const { listId } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/surveys`,
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
            return { data: _response.body, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/lists/{list_id}/surveys");
    }

    /**
     * Create a draft survey for an audience.
     *
     * @param {Mailchimp.CreateSurveyListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.createSurvey({
     *         listId: "list_id"
     *     })
     */
    public createSurvey(
        request: Mailchimp.CreateSurveyListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<unknown> {
        return core.HttpResponsePromise.fromPromise(this.__createSurvey(request, requestOptions));
    }

    private async __createSurvey(
        request: Mailchimp.CreateSurveyListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<unknown>> {
        const { listId, ..._body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/surveys`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateSurveyListsRequest.jsonOrThrow(_body, {
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
            return { data: _response.body, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/3.0/lists/{list_id}/surveys");
    }

    /**
     * Get details about a specific survey.
     *
     * @param {Mailchimp.GetSurveyListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.getSurvey({
     *         listId: "list_id",
     *         surveyId: "survey_id"
     *     })
     */
    public getSurvey(
        request: Mailchimp.GetSurveyListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<unknown> {
        return core.HttpResponsePromise.fromPromise(this.__getSurvey(request, requestOptions));
    }

    private async __getSurvey(
        request: Mailchimp.GetSurveyListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<unknown>> {
        const { listId, surveyId } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/surveys/${core.url.encodePathParam(surveyId)}`,
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
            return { data: _response.body, rawResponse: _response.rawResponse };
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
            "/3.0/lists/{list_id}/surveys/{survey_id}",
        );
    }

    /**
     * Delete a survey.
     *
     * @param {Mailchimp.DeleteSurveyListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.deleteSurvey({
     *         listId: "list_id",
     *         surveyId: "survey_id"
     *     })
     */
    public deleteSurvey(
        request: Mailchimp.DeleteSurveyListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteSurvey(request, requestOptions));
    }

    private async __deleteSurvey(
        request: Mailchimp.DeleteSurveyListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { listId, surveyId } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/surveys/${core.url.encodePathParam(surveyId)}`,
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
            "/3.0/lists/{list_id}/surveys/{survey_id}",
        );
    }

    /**
     * Update a survey. When sections is provided, send the complete section list in display order. Any existing section not included is deleted.
     *
     * @param {Mailchimp.UpdateSurveyListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.updateSurvey({
     *         listId: "list_id",
     *         surveyId: "survey_id"
     *     })
     */
    public updateSurvey(
        request: Mailchimp.UpdateSurveyListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<unknown> {
        return core.HttpResponsePromise.fromPromise(this.__updateSurvey(request, requestOptions));
    }

    private async __updateSurvey(
        request: Mailchimp.UpdateSurveyListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<unknown>> {
        const { listId, surveyId, ..._body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/surveys/${core.url.encodePathParam(surveyId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateSurveyListsRequest.jsonOrThrow(_body, {
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
            return { data: _response.body, rawResponse: _response.rawResponse };
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
            "/3.0/lists/{list_id}/surveys/{survey_id}",
        );
    }

    /**
     * Replicate a survey.
     *
     * @param {Mailchimp.CreateListSurveyActionReplicateListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.createListSurveyActionReplicate({
     *         listIdPathParam: "list_id",
     *         surveyId: "survey_id"
     *     })
     */
    public createListSurveyActionReplicate(
        request: Mailchimp.CreateListSurveyActionReplicateListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<unknown> {
        return core.HttpResponsePromise.fromPromise(this.__createListSurveyActionReplicate(request, requestOptions));
    }

    private async __createListSurveyActionReplicate(
        request: Mailchimp.CreateListSurveyActionReplicateListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<unknown>> {
        const { listIdPathParam, surveyId, ..._body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listIdPathParam)}/surveys/${core.url.encodePathParam(surveyId)}/actions/replicate`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateListSurveyActionReplicateListsRequest.jsonOrThrow(_body, {
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
            return { data: _response.body, rawResponse: _response.rawResponse };
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
            "/3.0/lists/{list_idPathParam}/surveys/{survey_id}/actions/replicate",
        );
    }

    /**
     * Search for tags on a list by name. If no name is provided, will return all tags on the list.
     *
     * @param {Mailchimp.ListTagSearchListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listTagSearch({
     *         listId: "list_id"
     *     })
     */
    public listTagSearch(
        request: Mailchimp.ListTagSearchListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListTagSearchListsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listTagSearch(request, requestOptions));
    }

    private async __listTagSearch(
        request: Mailchimp.ListTagSearchListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListTagSearchListsResponse>> {
        const { listId, name } = request;
        const _queryParams: Record<string, unknown> = {
            name,
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
                `3.0/lists/${core.url.encodePathParam(listId)}/tag-search`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
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
                data: serializers.ListTagSearchListsResponse.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/tag-search",
        );
    }

    /**
     * Get information about all webhooks for a specific list.
     *
     * @param {Mailchimp.ListWebhooksListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.listWebhooks({
     *         listId: "list_id"
     *     })
     */
    public listWebhooks(
        request: Mailchimp.ListWebhooksListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListWebhooksListsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listWebhooks(request, requestOptions));
    }

    private async __listWebhooks(
        request: Mailchimp.ListWebhooksListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListWebhooksListsResponse>> {
        const { listId } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/webhooks`,
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
                data: serializers.ListWebhooksListsResponse.parseOrThrow(_response.body, {
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/lists/{list_id}/webhooks");
    }

    /**
     * Create a new webhook for a specific list.
     *
     * @param {Mailchimp.CreateWebhookListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.createWebhook({
     *         listId: "list_id",
     *         body: {}
     *     })
     */
    public createWebhook(
        request: Mailchimp.CreateWebhookListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.CreateWebhookListsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__createWebhook(request, requestOptions));
    }

    private async __createWebhook(
        request: Mailchimp.CreateWebhookListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.CreateWebhookListsResponse>> {
        const { listId, body: _body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/webhooks`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.AddWebhook.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip", omitUndefined: true }),
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
                data: serializers.CreateWebhookListsResponse.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/webhooks",
        );
    }

    /**
     * Get information about a specific webhook.
     *
     * @param {Mailchimp.GetWebhookListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.getWebhook({
     *         listId: "list_id",
     *         webhookId: "webhook_id"
     *     })
     */
    public getWebhook(
        request: Mailchimp.GetWebhookListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListWebhooks> {
        return core.HttpResponsePromise.fromPromise(this.__getWebhook(request, requestOptions));
    }

    private async __getWebhook(
        request: Mailchimp.GetWebhookListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListWebhooks>> {
        const { listId, webhookId } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/webhooks/${core.url.encodePathParam(webhookId)}`,
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
                data: serializers.ListWebhooks.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/webhooks/{webhook_id}",
        );
    }

    /**
     * Delete a specific webhook in a list.
     *
     * @param {Mailchimp.DeleteWebhookListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.deleteWebhook({
     *         listId: "list_id",
     *         webhookId: "webhook_id"
     *     })
     */
    public deleteWebhook(
        request: Mailchimp.DeleteWebhookListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteWebhook(request, requestOptions));
    }

    private async __deleteWebhook(
        request: Mailchimp.DeleteWebhookListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { listId, webhookId } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/webhooks/${core.url.encodePathParam(webhookId)}`,
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
            "/3.0/lists/{list_id}/webhooks/{webhook_id}",
        );
    }

    /**
     * Update the settings for an existing webhook.
     *
     * @param {Mailchimp.UpdateWebhookListsRequest} request
     * @param {ListsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.lists.updateWebhook({
     *         listId: "list_id",
     *         webhookId: "webhook_id",
     *         body: {}
     *     })
     */
    public updateWebhook(
        request: Mailchimp.UpdateWebhookListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListWebhooks> {
        return core.HttpResponsePromise.fromPromise(this.__updateWebhook(request, requestOptions));
    }

    private async __updateWebhook(
        request: Mailchimp.UpdateWebhookListsRequest,
        requestOptions?: ListsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListWebhooks>> {
        const { listId, webhookId, body: _body } = request;
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
                `3.0/lists/${core.url.encodePathParam(listId)}/webhooks/${core.url.encodePathParam(webhookId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.AddWebhook.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip", omitUndefined: true }),
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
                data: serializers.ListWebhooks.parseOrThrow(_response.body, {
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
            "/3.0/lists/{list_id}/webhooks/{webhook_id}",
        );
    }
}
