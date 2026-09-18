//  This file was auto-generated from our API Definition.

import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../BaseClient.js";
import { mergeHeaders } from "../../../../core/headers.js";
import * as core from "../../../../core/index.js";
import * as environments from "../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../errors/index.js";
import * as serializers from "../../../../serialization/index.js";
import type * as Mailchimp from "../../../index.js";

export declare namespace ReportsClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Campaign reports: opens, clicks, bounces, ecommerce, and domain performance.
 */
export class ReportsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ReportsClient.Options>;

    constructor(options: ReportsClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Get campaign reports.
     *
     * @param {Mailchimp.ListReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.list()
     */
    public async list(
        request: Mailchimp.ListReportsRequest = {},
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.CampaignReport, Mailchimp.ListReportsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListReportsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListReportsResponse>> => {
                const { fields, excludeFields, count, offset, type: type_, beforeSendTime, sinceSendTime } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    type:
                        type_ != null
                            ? serializers.ListReportsRequestType.jsonOrThrow(type_, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
                    before_send_time: beforeSendTime != null ? beforeSendTime?.toISOString() : undefined,
                    since_send_time: sinceSendTime != null ? sinceSendTime?.toISOString() : undefined,
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
                        "3.0/reports",
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
                        data: serializers.ListReportsResponse.parseOrThrow(_response.body, {
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
                return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/reports");
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.CampaignReport, Mailchimp.ListReportsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.reports ?? []).length > 0,
            getItems: (response) => response?.reports ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Get report details for a specific sent campaign.
     *
     * @param {Mailchimp.GetReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.get({
     *         campaignId: "campaign_id"
     *     })
     */
    public get(
        request: Mailchimp.GetReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.CampaignReport> {
        return core.HttpResponsePromise.fromPromise(this.__get(request, requestOptions));
    }

    private async __get(
        request: Mailchimp.GetReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.CampaignReport>> {
        const { campaignId, fields, excludeFields } = request;
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
                `3.0/reports/${core.url.encodePathParam(campaignId)}`,
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
                data: serializers.CampaignReport.parseOrThrow(_response.body, {
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/reports/{campaign_id}");
    }

    /**
     * Get a list of abuse complaints for a specific campaign.
     *
     * @param {Mailchimp.ListAbuseReportsReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.listAbuseReports({
     *         campaignId: "campaign_id"
     *     })
     */
    public listAbuseReports(
        request: Mailchimp.ListAbuseReportsReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListAbuseReportsReportsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listAbuseReports(request, requestOptions));
    }

    private async __listAbuseReports(
        request: Mailchimp.ListAbuseReportsReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListAbuseReportsReportsResponse>> {
        const { campaignId, fields, excludeFields } = request;
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
                `3.0/reports/${core.url.encodePathParam(campaignId)}/abuse-reports`,
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
                data: serializers.ListAbuseReportsReportsResponse.parseOrThrow(_response.body, {
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
            "/3.0/reports/{campaign_id}/abuse-reports",
        );
    }

    /**
     * Get information about a specific abuse report for a campaign.
     *
     * @param {Mailchimp.GetAbuseReportReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.getAbuseReport({
     *         campaignId: "campaign_id",
     *         reportId: "report_id"
     *     })
     */
    public getAbuseReport(
        request: Mailchimp.GetAbuseReportReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.AbuseComplaint> {
        return core.HttpResponsePromise.fromPromise(this.__getAbuseReport(request, requestOptions));
    }

    private async __getAbuseReport(
        request: Mailchimp.GetAbuseReportReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.AbuseComplaint>> {
        const { campaignId, reportId, fields, excludeFields } = request;
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
                `3.0/reports/${core.url.encodePathParam(campaignId)}/abuse-reports/${core.url.encodePathParam(reportId)}`,
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
                data: serializers.AbuseComplaint.parseOrThrow(_response.body, {
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
            "/3.0/reports/{campaign_id}/abuse-reports/{report_id}",
        );
    }

    /**
     * Get feedback based on a campaign's statistics. Advice feedback is based on campaign stats like opens, clicks, unsubscribes, bounces, and more.
     *
     * @param {Mailchimp.ListAdviceReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.listAdvice({
     *         campaignId: "campaign_id"
     *     })
     */
    public listAdvice(
        request: Mailchimp.ListAdviceReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListAdviceReportsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listAdvice(request, requestOptions));
    }

    private async __listAdvice(
        request: Mailchimp.ListAdviceReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListAdviceReportsResponse>> {
        const { campaignId, fields, excludeFields } = request;
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
                `3.0/reports/${core.url.encodePathParam(campaignId)}/advice`,
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
                data: serializers.ListAdviceReportsResponse.parseOrThrow(_response.body, {
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
            "/3.0/reports/{campaign_id}/advice",
        );
    }

    /**
     * Get information about clicks on specific links in your Mailchimp campaigns.
     *
     * @param {Mailchimp.ListClickDetailsReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.listClickDetails({
     *         campaignId: "campaign_id"
     *     })
     */
    public async listClickDetails(
        request: Mailchimp.ListClickDetailsReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ClickDetailReport, Mailchimp.ListClickDetailsReportsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListClickDetailsReportsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListClickDetailsReportsResponse>> => {
                const { campaignId, fields, excludeFields, count, offset, sortField, sortDir, filterBots } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    sort_field:
                        sortField != null
                            ? serializers.ListClickDetailsReportsRequestSortField.jsonOrThrow(sortField, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
                    sort_dir:
                        sortDir != null
                            ? serializers.ListClickDetailsReportsRequestSortDir.jsonOrThrow(sortDir, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
                    filter_bots: filterBots,
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
                        `3.0/reports/${core.url.encodePathParam(campaignId)}/click-details`,
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
                        data: serializers.ListClickDetailsReportsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/reports/{campaign_id}/click-details",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ClickDetailReport, Mailchimp.ListClickDetailsReportsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.urlsClicked ?? []).length > 0,
            getItems: (response) => response?.urlsClicked ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Get click details for a specific link in a campaign.
     *
     * @param {Mailchimp.GetClickDetailReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.getClickDetail({
     *         campaignId: "campaign_id",
     *         linkId: "link_id"
     *     })
     */
    public getClickDetail(
        request: Mailchimp.GetClickDetailReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ClickDetailReport> {
        return core.HttpResponsePromise.fromPromise(this.__getClickDetail(request, requestOptions));
    }

    private async __getClickDetail(
        request: Mailchimp.GetClickDetailReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ClickDetailReport>> {
        const { campaignId, linkId, fields, excludeFields, filterBots } = request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
            filter_bots: filterBots,
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
                `3.0/reports/${core.url.encodePathParam(campaignId)}/click-details/${core.url.encodePathParam(linkId)}`,
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
                data: serializers.ClickDetailReport.parseOrThrow(_response.body, {
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
            "/3.0/reports/{campaign_id}/click-details/{link_id}",
        );
    }

    /**
     * Get information about list members who clicked on a specific link in a campaign.
     *
     * @param {Mailchimp.ListClickDetailMembersReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.listClickDetailMembers({
     *         campaignId: "campaign_id",
     *         linkId: "link_id"
     *     })
     */
    public async listClickDetailMembers(
        request: Mailchimp.ListClickDetailMembersReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ClickDetailMember, Mailchimp.ListClickDetailMembersReportsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListClickDetailMembersReportsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListClickDetailMembersReportsResponse>> => {
                const { campaignId, linkId, fields, excludeFields, count, offset } = request;
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
                        `3.0/reports/${core.url.encodePathParam(campaignId)}/click-details/${core.url.encodePathParam(linkId)}/members`,
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
                        data: serializers.ListClickDetailMembersReportsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/reports/{campaign_id}/click-details/{link_id}/members",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ClickDetailMember, Mailchimp.ListClickDetailMembersReportsResponse>({
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
     * Get information about a specific subscriber who clicked a link in a specific campaign.
     *
     * @param {Mailchimp.GetClickDetailMemberReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.getClickDetailMember({
     *         campaignId: "campaign_id",
     *         linkId: "link_id",
     *         subscriberHash: "subscriber_hash"
     *     })
     */
    public getClickDetailMember(
        request: Mailchimp.GetClickDetailMemberReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ClickDetailMember> {
        return core.HttpResponsePromise.fromPromise(this.__getClickDetailMember(request, requestOptions));
    }

    private async __getClickDetailMember(
        request: Mailchimp.GetClickDetailMemberReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ClickDetailMember>> {
        const { campaignId, linkId, subscriberHash, fields, excludeFields } = request;
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
                `3.0/reports/${core.url.encodePathParam(campaignId)}/click-details/${core.url.encodePathParam(linkId)}/members/${core.url.encodePathParam(subscriberHash)}`,
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
                data: serializers.ClickDetailMember.parseOrThrow(_response.body, {
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
            "/3.0/reports/{campaign_id}/click-details/{link_id}/members/{subscriber_hash}",
        );
    }

    /**
     * Get statistics for the top-performing email domains in a campaign.
     *
     * @param {Mailchimp.ListDomainPerformanceReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.listDomainPerformance({
     *         campaignId: "campaign_id"
     *     })
     */
    public listDomainPerformance(
        request: Mailchimp.ListDomainPerformanceReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListDomainPerformanceReportsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listDomainPerformance(request, requestOptions));
    }

    private async __listDomainPerformance(
        request: Mailchimp.ListDomainPerformanceReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListDomainPerformanceReportsResponse>> {
        const { campaignId, fields, excludeFields } = request;
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
                `3.0/reports/${core.url.encodePathParam(campaignId)}/domain-performance`,
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
                data: serializers.ListDomainPerformanceReportsResponse.parseOrThrow(_response.body, {
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
            "/3.0/reports/{campaign_id}/domain-performance",
        );
    }

    /**
     * Get breakdown of product activity for a campaign
     *
     * @param {Mailchimp.ListEcommerceProductActivityReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.listEcommerceProductActivity({
     *         campaignId: "campaign_id"
     *     })
     */
    public async listEcommerceProductActivity(
        request: Mailchimp.ListEcommerceProductActivityReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<
        core.Page<
            Mailchimp.ListEcommerceProductActivityReportsResponseProductsItem,
            Mailchimp.ListEcommerceProductActivityReportsResponse
        >
    > {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListEcommerceProductActivityReportsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListEcommerceProductActivityReportsResponse>> => {
                const { campaignId, fields, excludeFields, count, offset, sortField } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    sort_field:
                        sortField != null
                            ? serializers.ListEcommerceProductActivityReportsRequestSortField.jsonOrThrow(sortField, {
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
                        `3.0/reports/${core.url.encodePathParam(campaignId)}/ecommerce-product-activity`,
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
                        data: serializers.ListEcommerceProductActivityReportsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/reports/{campaign_id}/ecommerce-product-activity",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<
            Mailchimp.ListEcommerceProductActivityReportsResponseProductsItem,
            Mailchimp.ListEcommerceProductActivityReportsResponse
        >({
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
     * Get a summary of social activity for the campaign, tracked by EepURL.
     *
     * @param {Mailchimp.ListEepurlReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.listEepurl({
     *         campaignId: "campaign_id"
     *     })
     */
    public listEepurl(
        request: Mailchimp.ListEepurlReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListEepurlReportsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listEepurl(request, requestOptions));
    }

    private async __listEepurl(
        request: Mailchimp.ListEepurlReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListEepurlReportsResponse>> {
        const { campaignId, fields, excludeFields } = request;
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
                `3.0/reports/${core.url.encodePathParam(campaignId)}/eepurl`,
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
                data: serializers.ListEepurlReportsResponse.parseOrThrow(_response.body, {
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
            "/3.0/reports/{campaign_id}/eepurl",
        );
    }

    /**
     * Get a list of member's subscriber activity in a specific campaign.
     *
     * @param {Mailchimp.ListEmailActivityReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.listEmailActivity({
     *         campaignId: "campaign_id"
     *     })
     */
    public async listEmailActivity(
        request: Mailchimp.ListEmailActivityReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.EmailActivity, Mailchimp.ListEmailActivityReportsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListEmailActivityReportsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListEmailActivityReportsResponse>> => {
                const { campaignId, fields, excludeFields, count, offset, since, filterBots } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    since,
                    filter_bots: filterBots,
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
                        `3.0/reports/${core.url.encodePathParam(campaignId)}/email-activity`,
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
                        data: serializers.ListEmailActivityReportsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/reports/{campaign_id}/email-activity",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.EmailActivity, Mailchimp.ListEmailActivityReportsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.emails ?? []).length > 0,
            getItems: (response) => response?.emails ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Get a specific list member's activity in a campaign including opens, clicks, and bounces.
     *
     * @param {Mailchimp.GetEmailActivityReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.getEmailActivity({
     *         campaignId: "campaign_id",
     *         subscriberHash: "subscriber_hash"
     *     })
     */
    public getEmailActivity(
        request: Mailchimp.GetEmailActivityReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.EmailActivity> {
        return core.HttpResponsePromise.fromPromise(this.__getEmailActivity(request, requestOptions));
    }

    private async __getEmailActivity(
        request: Mailchimp.GetEmailActivityReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.EmailActivity>> {
        const { campaignId, subscriberHash, fields, excludeFields, since, filterBots } = request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
            since,
            filter_bots: filterBots,
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
                `3.0/reports/${core.url.encodePathParam(campaignId)}/email-activity/${core.url.encodePathParam(subscriberHash)}`,
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
                data: serializers.EmailActivity.parseOrThrow(_response.body, {
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
            "/3.0/reports/{campaign_id}/email-activity/{subscriber_hash}",
        );
    }

    /**
     * Get top open locations for a specific campaign.
     *
     * @param {Mailchimp.ListLocationsReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.listLocations({
     *         campaignId: "campaign_id"
     *     })
     */
    public async listLocations(
        request: Mailchimp.ListLocationsReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ListLocationsReportsResponseLocationsItem, Mailchimp.ListLocationsReportsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListLocationsReportsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListLocationsReportsResponse>> => {
                const { campaignId, fields, excludeFields, count, offset } = request;
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
                        `3.0/reports/${core.url.encodePathParam(campaignId)}/locations`,
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
                        data: serializers.ListLocationsReportsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/reports/{campaign_id}/locations",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<
            Mailchimp.ListLocationsReportsResponseLocationsItem,
            Mailchimp.ListLocationsReportsResponse
        >({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.locations ?? []).length > 0,
            getItems: (response) => response?.locations ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Get detailed information about any campaign emails that were opened by a list member.
     *
     * @param {Mailchimp.ListOpenDetailsReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.listOpenDetails({
     *         campaignId: "campaign_id",
     *         since: "2016-04-12 12:00:00"
     *     })
     */
    public async listOpenDetails(
        request: Mailchimp.ListOpenDetailsReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.OpenActivity, Mailchimp.ListOpenDetailsReportsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListOpenDetailsReportsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListOpenDetailsReportsResponse>> => {
                const { campaignId, fields, excludeFields, count, offset, since, sortField, sortDir, filterBots } =
                    request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    since,
                    sort_field:
                        sortField != null
                            ? serializers.ListOpenDetailsReportsRequestSortField.jsonOrThrow(sortField, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
                    sort_dir:
                        sortDir != null
                            ? serializers.ListOpenDetailsReportsRequestSortDir.jsonOrThrow(sortDir, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
                    filter_bots: filterBots,
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
                        `3.0/reports/${core.url.encodePathParam(campaignId)}/open-details`,
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
                        data: serializers.ListOpenDetailsReportsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/reports/{campaign_id}/open-details",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.OpenActivity, Mailchimp.ListOpenDetailsReportsResponse>({
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
     * Get information about a specific subscriber who opened a campaign.
     *
     * @param {Mailchimp.GetOpenDetailReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.getOpenDetail({
     *         campaignId: "campaign_id",
     *         subscriberHash: "subscriber_hash"
     *     })
     */
    public getOpenDetail(
        request: Mailchimp.GetOpenDetailReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.OpenActivity> {
        return core.HttpResponsePromise.fromPromise(this.__getOpenDetail(request, requestOptions));
    }

    private async __getOpenDetail(
        request: Mailchimp.GetOpenDetailReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.OpenActivity>> {
        const { campaignId, subscriberHash, fields, excludeFields, filterBots } = request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
            filter_bots: filterBots,
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
                `3.0/reports/${core.url.encodePathParam(campaignId)}/open-details/${core.url.encodePathParam(subscriberHash)}`,
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
                data: serializers.OpenActivity.parseOrThrow(_response.body, {
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
            "/3.0/reports/{campaign_id}/open-details/{subscriber_hash}",
        );
    }

    /**
     * Get information about campaign recipients.
     *
     * @param {Mailchimp.ListSentToReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.listSentTo({
     *         campaignId: "campaign_id"
     *     })
     */
    public async listSentTo(
        request: Mailchimp.ListSentToReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.SentTo, Mailchimp.ListSentToReportsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListSentToReportsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListSentToReportsResponse>> => {
                const { campaignId, fields, excludeFields, count, offset } = request;
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
                        `3.0/reports/${core.url.encodePathParam(campaignId)}/sent-to`,
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
                        data: serializers.ListSentToReportsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/reports/{campaign_id}/sent-to",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.SentTo, Mailchimp.ListSentToReportsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.sentTo ?? []).length > 0,
            getItems: (response) => response?.sentTo ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Get information about a specific campaign recipient.
     *
     * @param {Mailchimp.GetSentToReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.getSentTo({
     *         campaignId: "campaign_id",
     *         subscriberHash: "subscriber_hash"
     *     })
     */
    public getSentTo(
        request: Mailchimp.GetSentToReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.SentTo> {
        return core.HttpResponsePromise.fromPromise(this.__getSentTo(request, requestOptions));
    }

    private async __getSentTo(
        request: Mailchimp.GetSentToReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.SentTo>> {
        const { campaignId, subscriberHash, fields, excludeFields } = request;
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
                `3.0/reports/${core.url.encodePathParam(campaignId)}/sent-to/${core.url.encodePathParam(subscriberHash)}`,
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
                data: serializers.SentTo.parseOrThrow(_response.body, {
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
            "/3.0/reports/{campaign_id}/sent-to/{subscriber_hash}",
        );
    }

    /**
     * Get a list of reports with child campaigns for a specific parent campaign.
     *
     * @param {Mailchimp.ListSubReportsReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.listSubReports({
     *         campaignId: "campaign_id"
     *     })
     */
    public listSubReports(
        request: Mailchimp.ListSubReportsReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListSubReportsReportsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listSubReports(request, requestOptions));
    }

    private async __listSubReports(
        request: Mailchimp.ListSubReportsReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListSubReportsReportsResponse>> {
        const { campaignId, fields, excludeFields } = request;
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
                `3.0/reports/${core.url.encodePathParam(campaignId)}/sub-reports`,
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
                data: serializers.ListSubReportsReportsResponse.parseOrThrow(_response.body, {
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
            "/3.0/reports/{campaign_id}/sub-reports",
        );
    }

    /**
     * Get information about members who have unsubscribed from a specific campaign.
     *
     * @param {Mailchimp.ListUnsubscribedReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.listUnsubscribed({
     *         campaignId: "campaign_id"
     *     })
     */
    public async listUnsubscribed(
        request: Mailchimp.ListUnsubscribedReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.Unsubscribes, Mailchimp.ListUnsubscribedReportsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListUnsubscribedReportsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListUnsubscribedReportsResponse>> => {
                const { campaignId, fields, excludeFields, count, offset } = request;
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
                        `3.0/reports/${core.url.encodePathParam(campaignId)}/unsubscribed`,
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
                        data: serializers.ListUnsubscribedReportsResponse.parseOrThrow(_response.body, {
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
                    "/3.0/reports/{campaign_id}/unsubscribed",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.Unsubscribes, Mailchimp.ListUnsubscribedReportsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.unsubscribes ?? []).length > 0,
            getItems: (response) => response?.unsubscribes ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Get information about a specific list member who unsubscribed from a campaign.
     *
     * @param {Mailchimp.GetUnsubscribedReportsRequest} request
     * @param {ReportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reports.getUnsubscribed({
     *         campaignId: "campaign_id",
     *         subscriberHash: "subscriber_hash"
     *     })
     */
    public getUnsubscribed(
        request: Mailchimp.GetUnsubscribedReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.Unsubscribes> {
        return core.HttpResponsePromise.fromPromise(this.__getUnsubscribed(request, requestOptions));
    }

    private async __getUnsubscribed(
        request: Mailchimp.GetUnsubscribedReportsRequest,
        requestOptions?: ReportsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.Unsubscribes>> {
        const { campaignId, subscriberHash, fields, excludeFields } = request;
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
                `3.0/reports/${core.url.encodePathParam(campaignId)}/unsubscribed/${core.url.encodePathParam(subscriberHash)}`,
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
                data: serializers.Unsubscribes.parseOrThrow(_response.body, {
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
            "/3.0/reports/{campaign_id}/unsubscribed/{subscriber_hash}",
        );
    }
}
