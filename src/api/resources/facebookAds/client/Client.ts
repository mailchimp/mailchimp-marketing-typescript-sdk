//  This file was auto-generated from our API Definition.

import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../BaseClient.js";
import { mergeHeaders } from "../../../../core/headers.js";
import * as core from "../../../../core/index.js";
import * as environments from "../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../errors/index.js";
import type * as Mailchimp from "../../../index.js";

export declare namespace FacebookAdsClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class FacebookAdsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<FacebookAdsClient.Options>;

    constructor(options: FacebookAdsClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Get list of Facebook ads.
     *
     * @param {Mailchimp.ListFacebookAdsRequest} request
     * @param {FacebookAdsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.facebookAds.list()
     */
    public async list(
        request: Mailchimp.ListFacebookAdsRequest = {},
        requestOptions?: FacebookAdsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.FacebookAds, Mailchimp.ListFacebookAdsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListFacebookAdsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListFacebookAdsResponse>> => {
                const {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    sort_field: sortField,
                    sort_dir: sortDir,
                } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    sort_field: sortField != null ? sortField : undefined,
                    sort_dir: sortDir != null ? sortDir : undefined,
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
                        "3.0/facebook-ads",
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
                        data: _response.body as Mailchimp.ListFacebookAdsResponse,
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
                return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/facebook-ads");
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.FacebookAds, Mailchimp.ListFacebookAdsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.facebook_ads ?? []).length > 0,
            getItems: (response) => response?.facebook_ads ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Get details of a Facebook ad.
     *
     * @param {Mailchimp.GetFacebookAdsRequest} request
     * @param {FacebookAdsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.facebookAds.get({
     *         outreach_id: "outreach_id"
     *     })
     */
    public get(
        request: Mailchimp.GetFacebookAdsRequest,
        requestOptions?: FacebookAdsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.FacebookAds> {
        return core.HttpResponsePromise.fromPromise(this.__get(request, requestOptions));
    }

    private async __get(
        request: Mailchimp.GetFacebookAdsRequest,
        requestOptions?: FacebookAdsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.FacebookAds>> {
        const { outreach_id: outreachId, fields, exclude_fields: excludeFields } = request;
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
                `3.0/facebook-ads/${core.url.encodePathParam(outreachId)}`,
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
            return { data: _response.body as Mailchimp.FacebookAds, rawResponse: _response.rawResponse };
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
            "/3.0/facebook-ads/{outreach_id}",
        );
    }
}
