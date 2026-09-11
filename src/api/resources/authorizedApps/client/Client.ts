//  This file was auto-generated from our API Definition.

import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../BaseClient.js";
import { mergeHeaders } from "../../../../core/headers.js";
import * as core from "../../../../core/index.js";
import * as environments from "../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../errors/index.js";
import type * as Mailchimp from "../../../index.js";

export declare namespace AuthorizedAppsClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class AuthorizedAppsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<AuthorizedAppsClient.Options>;

    constructor(options: AuthorizedAppsClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Get a list of an account's registered, connected applications.
     *
     * @param {Mailchimp.ListAuthorizedAppsRequest} request
     * @param {AuthorizedAppsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.authorizedApps.list()
     */
    public async list(
        request: Mailchimp.ListAuthorizedAppsRequest = {},
        requestOptions?: AuthorizedAppsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.ListAuthorizedAppsResponse.Apps.Item, Mailchimp.ListAuthorizedAppsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListAuthorizedAppsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListAuthorizedAppsResponse>> => {
                const { fields, exclude_fields: excludeFields, count, offset } = request;
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
                        "3.0/authorized-apps",
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
                        data: _response.body as Mailchimp.ListAuthorizedAppsResponse,
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
                return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/authorized-apps");
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.ListAuthorizedAppsResponse.Apps.Item, Mailchimp.ListAuthorizedAppsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.apps ?? []).length > 0,
            getItems: (response) => response?.apps ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Get information about a specific authorized application.
     *
     * @param {Mailchimp.GetAuthorizedAppsRequest} request
     * @param {AuthorizedAppsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.authorizedApps.get({
     *         app_id: "app_id"
     *     })
     */
    public get(
        request: Mailchimp.GetAuthorizedAppsRequest,
        requestOptions?: AuthorizedAppsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.GetAuthorizedAppsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__get(request, requestOptions));
    }

    private async __get(
        request: Mailchimp.GetAuthorizedAppsRequest,
        requestOptions?: AuthorizedAppsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.GetAuthorizedAppsResponse>> {
        const { app_id: appId, fields, exclude_fields: excludeFields } = request;
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
                `3.0/authorized-apps/${core.url.encodePathParam(appId)}`,
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
            return { data: _response.body as Mailchimp.GetAuthorizedAppsResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/authorized-apps/{app_id}");
    }
}
