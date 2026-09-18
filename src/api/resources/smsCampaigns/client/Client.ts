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

export declare namespace SmsCampaignsClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class SmsCampaignsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SmsCampaignsClient.Options>;

    constructor(options: SmsCampaignsClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Get all SMS campaigns in an account.
     *
     * @param {Mailchimp.ListSmsCampaignsRequest} request
     * @param {SmsCampaignsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.smsCampaigns.list()
     */
    public async list(
        request: Mailchimp.ListSmsCampaignsRequest = {},
        requestOptions?: SmsCampaignsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.SmsCampaign, Mailchimp.ListSmsCampaignsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListSmsCampaignsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListSmsCampaignsResponse>> => {
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
                        "3.0/sms-campaigns",
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
                        data: serializers.ListSmsCampaignsResponse.parseOrThrow(_response.body, {
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
                return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/sms-campaigns");
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.SmsCampaign, Mailchimp.ListSmsCampaignsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.smsCampaigns ?? []).length > 0,
            getItems: (response) => response?.smsCampaigns ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Create a new SMS campaign.
     *
     * @param {Mailchimp.CreateSmsCampaignsRequest} request
     * @param {SmsCampaignsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.smsCampaigns.create({
     *         name: "name"
     *     })
     */
    public create(
        request: Mailchimp.CreateSmsCampaignsRequest,
        requestOptions?: SmsCampaignsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.SmsCampaign> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Mailchimp.CreateSmsCampaignsRequest,
        requestOptions?: SmsCampaignsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.SmsCampaign>> {
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
                "3.0/sms-campaigns",
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateSmsCampaignsRequest.jsonOrThrow(request, {
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
                data: serializers.SmsCampaign.parseOrThrow(_response.body, {
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/3.0/sms-campaigns");
    }

    /**
     * Get the details for a single SMS campaign.
     *
     * @param {Mailchimp.GetSmsCampaignsRequest} request
     * @param {SmsCampaignsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.smsCampaigns.get({
     *         smsCampaignId: "sms_campaign_id"
     *     })
     */
    public get(
        request: Mailchimp.GetSmsCampaignsRequest,
        requestOptions?: SmsCampaignsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.SmsCampaign> {
        return core.HttpResponsePromise.fromPromise(this.__get(request, requestOptions));
    }

    private async __get(
        request: Mailchimp.GetSmsCampaignsRequest,
        requestOptions?: SmsCampaignsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.SmsCampaign>> {
        const { smsCampaignId, fields, excludeFields } = request;
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
                `3.0/sms-campaigns/${core.url.encodePathParam(smsCampaignId)}`,
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
                data: serializers.SmsCampaign.parseOrThrow(_response.body, {
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
            "/3.0/sms-campaigns/{sms_campaign_id}",
        );
    }

    /**
     * Remove a campaign from your Mailchimp account.
     *
     * @param {Mailchimp.DeleteSmsCampaignsRequest} request
     * @param {SmsCampaignsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.smsCampaigns.delete({
     *         smsCampaignId: "sms_campaign_id"
     *     })
     */
    public delete(
        request: Mailchimp.DeleteSmsCampaignsRequest,
        requestOptions?: SmsCampaignsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__delete(request, requestOptions));
    }

    private async __delete(
        request: Mailchimp.DeleteSmsCampaignsRequest,
        requestOptions?: SmsCampaignsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { smsCampaignId } = request;
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
                `3.0/sms-campaigns/${core.url.encodePathParam(smsCampaignId)}`,
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
            "/3.0/sms-campaigns/{sms_campaign_id}",
        );
    }

    /**
     * Update an SMS campaign.
     *
     * @param {Mailchimp.UpdateSmsCampaignsRequest} request
     * @param {SmsCampaignsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.smsCampaigns.update({
     *         smsCampaignId: "sms_campaign_id"
     *     })
     */
    public update(
        request: Mailchimp.UpdateSmsCampaignsRequest,
        requestOptions?: SmsCampaignsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.SmsCampaign> {
        return core.HttpResponsePromise.fromPromise(this.__update(request, requestOptions));
    }

    private async __update(
        request: Mailchimp.UpdateSmsCampaignsRequest,
        requestOptions?: SmsCampaignsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.SmsCampaign>> {
        const { smsCampaignId, ..._body } = request;
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
                `3.0/sms-campaigns/${core.url.encodePathParam(smsCampaignId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateSmsCampaignsRequest.jsonOrThrow(_body, {
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
                data: serializers.SmsCampaign.parseOrThrow(_response.body, {
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
            "/3.0/sms-campaigns/{sms_campaign_id}",
        );
    }

    /**
     * Cancel a scheduled or sending SMS campaign.
     *
     * @param {Mailchimp.CreateActionCancelSendSmsCampaignsRequest} request
     * @param {SmsCampaignsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.smsCampaigns.createActionCancelSend({
     *         smsCampaignId: "sms_campaign_id"
     *     })
     */
    public createActionCancelSend(
        request: Mailchimp.CreateActionCancelSendSmsCampaignsRequest,
        requestOptions?: SmsCampaignsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__createActionCancelSend(request, requestOptions));
    }

    private async __createActionCancelSend(
        request: Mailchimp.CreateActionCancelSendSmsCampaignsRequest,
        requestOptions?: SmsCampaignsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { smsCampaignId } = request;
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
                `3.0/sms-campaigns/${core.url.encodePathParam(smsCampaignId)}/actions/cancel-send`,
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
            "/3.0/sms-campaigns/{sms_campaign_id}/actions/cancel-send",
        );
    }

    /**
     * Schedule an SMS campaign for delivery.
     *
     * @param {Mailchimp.CreateActionScheduleSmsCampaignsRequest} request
     * @param {SmsCampaignsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.smsCampaigns.createActionSchedule({
     *         smsCampaignId: "sms_campaign_id",
     *         scheduleTime: new Date("2024-01-15T09:30:00.000Z")
     *     })
     */
    public createActionSchedule(
        request: Mailchimp.CreateActionScheduleSmsCampaignsRequest,
        requestOptions?: SmsCampaignsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__createActionSchedule(request, requestOptions));
    }

    private async __createActionSchedule(
        request: Mailchimp.CreateActionScheduleSmsCampaignsRequest,
        requestOptions?: SmsCampaignsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { smsCampaignId, ..._body } = request;
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
                `3.0/sms-campaigns/${core.url.encodePathParam(smsCampaignId)}/actions/schedule`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateActionScheduleSmsCampaignsRequest.jsonOrThrow(_body, {
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
            "/3.0/sms-campaigns/{sms_campaign_id}/actions/schedule",
        );
    }

    /**
     * Send an SMS campaign.
     *
     * @param {Mailchimp.CreateActionSendSmsCampaignsRequest} request
     * @param {SmsCampaignsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.smsCampaigns.createActionSend({
     *         smsCampaignId: "sms_campaign_id"
     *     })
     */
    public createActionSend(
        request: Mailchimp.CreateActionSendSmsCampaignsRequest,
        requestOptions?: SmsCampaignsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__createActionSend(request, requestOptions));
    }

    private async __createActionSend(
        request: Mailchimp.CreateActionSendSmsCampaignsRequest,
        requestOptions?: SmsCampaignsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { smsCampaignId } = request;
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
                `3.0/sms-campaigns/${core.url.encodePathParam(smsCampaignId)}/actions/send`,
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
            "/3.0/sms-campaigns/{sms_campaign_id}/actions/send",
        );
    }

    /**
     * Get the content for an SMS campaign.
     *
     * @param {Mailchimp.GetContentSmsCampaignsRequest} request
     * @param {SmsCampaignsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.smsCampaigns.getContent({
     *         smsCampaignId: "sms_campaign_id"
     *     })
     */
    public getContent(
        request: Mailchimp.GetContentSmsCampaignsRequest,
        requestOptions?: SmsCampaignsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.SmsCampaignContent> {
        return core.HttpResponsePromise.fromPromise(this.__getContent(request, requestOptions));
    }

    private async __getContent(
        request: Mailchimp.GetContentSmsCampaignsRequest,
        requestOptions?: SmsCampaignsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.SmsCampaignContent>> {
        const { smsCampaignId, fields, excludeFields } = request;
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
                `3.0/sms-campaigns/${core.url.encodePathParam(smsCampaignId)}/content`,
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
                data: serializers.SmsCampaignContent.parseOrThrow(_response.body, {
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
            "/3.0/sms-campaigns/{sms_campaign_id}/content",
        );
    }

    /**
     * Set the content for an SMS campaign.
     *
     * @param {Mailchimp.UpsertContentSmsCampaignsRequest} request
     * @param {SmsCampaignsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.smsCampaigns.upsertContent({
     *         smsCampaignId: "sms_campaign_id",
     *         messageBody: "message_body"
     *     })
     */
    public upsertContent(
        request: Mailchimp.UpsertContentSmsCampaignsRequest,
        requestOptions?: SmsCampaignsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.SmsCampaignContent> {
        return core.HttpResponsePromise.fromPromise(this.__upsertContent(request, requestOptions));
    }

    private async __upsertContent(
        request: Mailchimp.UpsertContentSmsCampaignsRequest,
        requestOptions?: SmsCampaignsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.SmsCampaignContent>> {
        const { smsCampaignId, ..._body } = request;
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
                `3.0/sms-campaigns/${core.url.encodePathParam(smsCampaignId)}/content`,
            ),
            method: "PUT",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpsertContentSmsCampaignsRequest.jsonOrThrow(_body, {
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
                data: serializers.SmsCampaignContent.parseOrThrow(_response.body, {
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
            "/3.0/sms-campaigns/{sms_campaign_id}/content",
        );
    }
}
