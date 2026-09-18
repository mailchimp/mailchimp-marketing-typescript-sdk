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

export declare namespace ReportingClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Reporting for Facebook ads and survey responses.
 */
export class ReportingClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ReportingClient.Options>;

    constructor(options: ReportingClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Get information about the reporting endpoint's resources.
     *
     * @param {ReportingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reporting.list()
     */
    public list(
        requestOptions?: ReportingClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListReportingResponseItem[]> {
        return core.HttpResponsePromise.fromPromise(this.__list(requestOptions));
    }

    private async __list(
        requestOptions?: ReportingClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListReportingResponseItem[]>> {
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
                "3.0/reporting",
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
                data: serializers.reporting.list.Response.parseOrThrow(_response.body, {
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/reporting");
    }

    /**
     * Get reports of Facebook ads.
     *
     * @param {Mailchimp.ListFacebookAdsReportingRequest} request
     * @param {ReportingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reporting.listFacebookAds()
     */
    public async listFacebookAds(
        request: Mailchimp.ListFacebookAdsReportingRequest = {},
        requestOptions?: ReportingClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ReportingFacebookAd, Mailchimp.ListFacebookAdsReportingResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListFacebookAdsReportingRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListFacebookAdsReportingResponse>> => {
                const { fields, excludeFields, count, offset, sortField, sortDir } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    sort_field:
                        sortField != null
                            ? serializers.ListFacebookAdsReportingRequestSortField.jsonOrThrow(sortField, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
                    sort_dir:
                        sortDir != null
                            ? serializers.ListFacebookAdsReportingRequestSortDir.jsonOrThrow(sortDir, {
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
                        "3.0/reporting/facebook-ads",
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
                        data: serializers.ListFacebookAdsReportingResponse.parseOrThrow(_response.body, {
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
                    "/3.0/reporting/facebook-ads",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ReportingFacebookAd, Mailchimp.ListFacebookAdsReportingResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.facebookAds ?? []).length > 0,
            getItems: (response) => response?.facebookAds ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Get report of a Facebook ad.
     *
     * @param {Mailchimp.GetFacebookAdReportingRequest} request
     * @param {ReportingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reporting.getFacebookAd({
     *         outreachId: "outreach_id"
     *     })
     */
    public getFacebookAd(
        request: Mailchimp.GetFacebookAdReportingRequest,
        requestOptions?: ReportingClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ReportingFacebookAd> {
        return core.HttpResponsePromise.fromPromise(this.__getFacebookAd(request, requestOptions));
    }

    private async __getFacebookAd(
        request: Mailchimp.GetFacebookAdReportingRequest,
        requestOptions?: ReportingClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ReportingFacebookAd>> {
        const { outreachId, fields, excludeFields } = request;
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
                `3.0/reporting/facebook-ads/${core.url.encodePathParam(outreachId)}`,
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
                data: serializers.ReportingFacebookAd.parseOrThrow(_response.body, {
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
            "/3.0/reporting/facebook-ads/{outreach_id}",
        );
    }

    /**
     * Get breakdown of product activity for an outreach.
     *
     * @param {Mailchimp.ListFacebookAdEcommerceProductActivityReportingRequest} request
     * @param {ReportingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reporting.listFacebookAdEcommerceProductActivity({
     *         outreachId: "outreach_id"
     *     })
     */
    public async listFacebookAdEcommerceProductActivity(
        request: Mailchimp.ListFacebookAdEcommerceProductActivityReportingRequest,
        requestOptions?: ReportingClient.RequestOptions,
    ): Promise<
        core.Page<
            Mailchimp.ListFacebookAdEcommerceProductActivityReportingResponseProductsItem,
            Mailchimp.ListFacebookAdEcommerceProductActivityReportingResponse
        >
    > {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListFacebookAdEcommerceProductActivityReportingRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListFacebookAdEcommerceProductActivityReportingResponse>> => {
                const { outreachId, fields, excludeFields, count, offset, sortField } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    sort_field:
                        sortField != null
                            ? serializers.ListFacebookAdEcommerceProductActivityReportingRequestSortField.jsonOrThrow(
                                  sortField,
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
                        `3.0/reporting/facebook-ads/${core.url.encodePathParam(outreachId)}/ecommerce-product-activity`,
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
                        data: serializers.ListFacebookAdEcommerceProductActivityReportingResponse.parseOrThrow(
                            _response.body,
                            {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                skipValidation: true,
                                breadcrumbsPrefix: ["response"],
                            },
                        ),
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
                    "/3.0/reporting/facebook-ads/{outreach_id}/ecommerce-product-activity",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<
            Mailchimp.ListFacebookAdEcommerceProductActivityReportingResponseProductsItem,
            Mailchimp.ListFacebookAdEcommerceProductActivityReportingResponse
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
     * Get reports of landing pages.
     *
     * @param {Mailchimp.ListLandingPagesReportingRequest} request
     * @param {ReportingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reporting.listLandingPages()
     */
    public async listLandingPages(
        request: Mailchimp.ListLandingPagesReportingRequest = {},
        requestOptions?: ReportingClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.LandingPageReport, Mailchimp.ListLandingPagesReportingResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListLandingPagesReportingRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListLandingPagesReportingResponse>> => {
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
                        "3.0/reporting/landing-pages",
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
                        data: serializers.ListLandingPagesReportingResponse.parseOrThrow(_response.body, {
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
                    "/3.0/reporting/landing-pages",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.LandingPageReport, Mailchimp.ListLandingPagesReportingResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.landingPages ?? []).length > 0,
            getItems: (response) => response?.landingPages ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Get report of a landing page.
     *
     * @param {Mailchimp.GetLandingPageReportingRequest} request
     * @param {ReportingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reporting.getLandingPage({
     *         outreachId: "outreach_id"
     *     })
     */
    public getLandingPage(
        request: Mailchimp.GetLandingPageReportingRequest,
        requestOptions?: ReportingClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.LandingPageReport> {
        return core.HttpResponsePromise.fromPromise(this.__getLandingPage(request, requestOptions));
    }

    private async __getLandingPage(
        request: Mailchimp.GetLandingPageReportingRequest,
        requestOptions?: ReportingClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.LandingPageReport>> {
        const { outreachId, fields, excludeFields } = request;
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
                `3.0/reporting/landing-pages/${core.url.encodePathParam(outreachId)}`,
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
                data: serializers.LandingPageReport.parseOrThrow(_response.body, {
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
            "/3.0/reporting/landing-pages/{outreach_id}",
        );
    }

    /**
     * Get reports for surveys.
     *
     * @param {Mailchimp.ListSurveysReportingRequest} request
     * @param {ReportingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reporting.listSurveys()
     */
    public async listSurveys(
        request: Mailchimp.ListSurveysReportingRequest = {},
        requestOptions?: ReportingClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ListSurveysReportingResponseSurveysItem, Mailchimp.ListSurveysReportingResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListSurveysReportingRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListSurveysReportingResponse>> => {
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
                        "3.0/reporting/surveys",
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
                        data: serializers.ListSurveysReportingResponse.parseOrThrow(_response.body, {
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
                    "/3.0/reporting/surveys",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ListSurveysReportingResponseSurveysItem, Mailchimp.ListSurveysReportingResponse>(
            {
                response: dataWithRawResponse.data,
                rawResponse: dataWithRawResponse.rawResponse,
                hasNextPage: (response) => (response?.surveys ?? []).length > 0,
                getItems: (response) => response?.surveys ?? [],
                loadPage: (_response) => {
                    _offset += 1;
                    return list(core.setObjectProperty(request, "offset", _offset));
                },
            },
        );
    }

    /**
     * Get report for a survey.
     *
     * @param {Mailchimp.GetSurveyReportingRequest} request
     * @param {ReportingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reporting.getSurvey({
     *         surveyId: "survey_id"
     *     })
     */
    public getSurvey(
        request: Mailchimp.GetSurveyReportingRequest,
        requestOptions?: ReportingClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.GetSurveyReportingResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getSurvey(request, requestOptions));
    }

    private async __getSurvey(
        request: Mailchimp.GetSurveyReportingRequest,
        requestOptions?: ReportingClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.GetSurveyReportingResponse>> {
        const { surveyId, fields, excludeFields } = request;
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
                `3.0/reporting/surveys/${core.url.encodePathParam(surveyId)}`,
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
                data: serializers.GetSurveyReportingResponse.parseOrThrow(_response.body, {
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
            "/3.0/reporting/surveys/{survey_id}",
        );
    }

    /**
     * Get reports for survey questions.
     *
     * @param {Mailchimp.ListSurveyQuestionsReportingRequest} request
     * @param {ReportingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reporting.listSurveyQuestions({
     *         surveyId: "survey_id"
     *     })
     */
    public listSurveyQuestions(
        request: Mailchimp.ListSurveyQuestionsReportingRequest,
        requestOptions?: ReportingClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListSurveyQuestionsReportingResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listSurveyQuestions(request, requestOptions));
    }

    private async __listSurveyQuestions(
        request: Mailchimp.ListSurveyQuestionsReportingRequest,
        requestOptions?: ReportingClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListSurveyQuestionsReportingResponse>> {
        const { surveyId, fields, excludeFields } = request;
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
                `3.0/reporting/surveys/${core.url.encodePathParam(surveyId)}/questions`,
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
                data: serializers.ListSurveyQuestionsReportingResponse.parseOrThrow(_response.body, {
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
            "/3.0/reporting/surveys/{survey_id}/questions",
        );
    }

    /**
     * Get report for a survey question.
     *
     * @param {Mailchimp.GetSurveyQuestionReportingRequest} request
     * @param {ReportingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reporting.getSurveyQuestion({
     *         surveyId: "survey_id",
     *         questionId: "question_id"
     *     })
     */
    public getSurveyQuestion(
        request: Mailchimp.GetSurveyQuestionReportingRequest,
        requestOptions?: ReportingClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.SurveyQuestionReport> {
        return core.HttpResponsePromise.fromPromise(this.__getSurveyQuestion(request, requestOptions));
    }

    private async __getSurveyQuestion(
        request: Mailchimp.GetSurveyQuestionReportingRequest,
        requestOptions?: ReportingClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.SurveyQuestionReport>> {
        const { surveyId, questionId, fields, excludeFields } = request;
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
                `3.0/reporting/surveys/${core.url.encodePathParam(surveyId)}/questions/${core.url.encodePathParam(questionId)}`,
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
                data: serializers.SurveyQuestionReport.parseOrThrow(_response.body, {
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
            "/3.0/reporting/surveys/{survey_id}/questions/{question_id}",
        );
    }

    /**
     * Get answers for a survey question.
     *
     * @param {Mailchimp.ListSurveyQuestionAnswersReportingRequest} request
     * @param {ReportingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reporting.listSurveyQuestionAnswers({
     *         surveyId: "survey_id",
     *         questionId: "question_id"
     *     })
     */
    public listSurveyQuestionAnswers(
        request: Mailchimp.ListSurveyQuestionAnswersReportingRequest,
        requestOptions?: ReportingClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListSurveyQuestionAnswersReportingResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listSurveyQuestionAnswers(request, requestOptions));
    }

    private async __listSurveyQuestionAnswers(
        request: Mailchimp.ListSurveyQuestionAnswersReportingRequest,
        requestOptions?: ReportingClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListSurveyQuestionAnswersReportingResponse>> {
        const { surveyId, questionId, fields, excludeFields, respondentFamiliarityIs } = request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
            respondent_familiarity_is:
                respondentFamiliarityIs != null
                    ? serializers.ListSurveyQuestionAnswersReportingRequestRespondentFamiliarityIs.jsonOrThrow(
                          respondentFamiliarityIs,
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
                `3.0/reporting/surveys/${core.url.encodePathParam(surveyId)}/questions/${core.url.encodePathParam(questionId)}/answers`,
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
                data: serializers.ListSurveyQuestionAnswersReportingResponse.parseOrThrow(_response.body, {
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
            "/3.0/reporting/surveys/{survey_id}/questions/{question_id}/answers",
        );
    }

    /**
     * Get responses to a survey.
     *
     * @param {Mailchimp.ListSurveyResponsesReportingRequest} request
     * @param {ReportingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reporting.listSurveyResponses({
     *         surveyId: "survey_id"
     *     })
     */
    public listSurveyResponses(
        request: Mailchimp.ListSurveyResponsesReportingRequest,
        requestOptions?: ReportingClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListSurveyResponsesReportingResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listSurveyResponses(request, requestOptions));
    }

    private async __listSurveyResponses(
        request: Mailchimp.ListSurveyResponsesReportingRequest,
        requestOptions?: ReportingClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListSurveyResponsesReportingResponse>> {
        const { surveyId, fields, excludeFields, answeredQuestion, choseAnswer, respondentFamiliarityIs } = request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
            answered_question: answeredQuestion,
            chose_answer: choseAnswer,
            respondent_familiarity_is:
                respondentFamiliarityIs != null
                    ? serializers.ListSurveyResponsesReportingRequestRespondentFamiliarityIs.jsonOrThrow(
                          respondentFamiliarityIs,
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
                `3.0/reporting/surveys/${core.url.encodePathParam(surveyId)}/responses`,
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
                data: serializers.ListSurveyResponsesReportingResponse.parseOrThrow(_response.body, {
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
            "/3.0/reporting/surveys/{survey_id}/responses",
        );
    }

    /**
     * Get a single survey response.
     *
     * @param {Mailchimp.GetSurveyResponsReportingRequest} request
     * @param {ReportingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.reporting.getSurveyRespons({
     *         surveyId: "survey_id",
     *         responseId: "response_id"
     *     })
     */
    public getSurveyRespons(
        request: Mailchimp.GetSurveyResponsReportingRequest,
        requestOptions?: ReportingClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.GetSurveyResponsReportingResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getSurveyRespons(request, requestOptions));
    }

    private async __getSurveyRespons(
        request: Mailchimp.GetSurveyResponsReportingRequest,
        requestOptions?: ReportingClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.GetSurveyResponsReportingResponse>> {
        const { surveyId, responseId } = request;
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
                `3.0/reporting/surveys/${core.url.encodePathParam(surveyId)}/responses/${core.url.encodePathParam(responseId)}`,
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
                data: serializers.GetSurveyResponsReportingResponse.parseOrThrow(_response.body, {
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
            "/3.0/reporting/surveys/{survey_id}/responses/{response_id}",
        );
    }
}
