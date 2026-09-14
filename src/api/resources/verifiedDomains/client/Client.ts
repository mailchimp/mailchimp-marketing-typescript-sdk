//  This file was auto-generated from our API Definition.

import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../BaseClient.js";
import { mergeHeaders } from "../../../../core/headers.js";
import * as core from "../../../../core/index.js";
import { mergeAdditionalBodyParameters } from "../../../../core/requestBody.js";
import * as environments from "../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../errors/index.js";
import type * as Mailchimp from "../../../index.js";

export declare namespace VerifiedDomainsClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class VerifiedDomainsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<VerifiedDomainsClient.Options>;

    constructor(options: VerifiedDomainsClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Get all of the sending domains on the account.
     *
     * @param {VerifiedDomainsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.verifiedDomains.list()
     */
    public list(
        requestOptions?: VerifiedDomainsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListVerifiedDomainsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__list(requestOptions));
    }

    private async __list(
        requestOptions?: VerifiedDomainsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListVerifiedDomainsResponse>> {
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
                "3.0/verified-domains",
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
                data: _response.body as Mailchimp.ListVerifiedDomainsResponse,
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/verified-domains");
    }

    /**
     * Add a domain to the account.
     *
     * @param {Mailchimp.CreateVerifiedDomainsRequest} request
     * @param {VerifiedDomainsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.verifiedDomains.create({
     *         verification_email: "verification_email"
     *     })
     */
    public create(
        request: Mailchimp.CreateVerifiedDomainsRequest,
        requestOptions?: VerifiedDomainsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.CreateVerifiedDomainsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Mailchimp.CreateVerifiedDomainsRequest,
        requestOptions?: VerifiedDomainsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.CreateVerifiedDomainsResponse>> {
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
                "3.0/verified-domains",
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(request, requestOptions?.additionalBodyParameters),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: _response.body as Mailchimp.CreateVerifiedDomainsResponse,
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/3.0/verified-domains");
    }

    /**
     * Get the details for a single domain on the account.
     *
     * @param {Mailchimp.GetVerifiedDomainsRequest} request
     * @param {VerifiedDomainsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.verifiedDomains.get({
     *         domain_name: "domain_name"
     *     })
     */
    public get(
        request: Mailchimp.GetVerifiedDomainsRequest,
        requestOptions?: VerifiedDomainsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.GetVerifiedDomainsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__get(request, requestOptions));
    }

    private async __get(
        request: Mailchimp.GetVerifiedDomainsRequest,
        requestOptions?: VerifiedDomainsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.GetVerifiedDomainsResponse>> {
        const { domain_name: domainName } = request;
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
                `3.0/verified-domains/${core.url.encodePathParam(domainName)}`,
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
            return { data: _response.body as Mailchimp.GetVerifiedDomainsResponse, rawResponse: _response.rawResponse };
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
            "/3.0/verified-domains/{domain_name}",
        );
    }

    /**
     * Delete a verified domain from the account.
     *
     * @param {Mailchimp.DeleteVerifiedDomainsRequest} request
     * @param {VerifiedDomainsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.verifiedDomains.delete({
     *         domain_name: "domain_name"
     *     })
     */
    public delete(
        request: Mailchimp.DeleteVerifiedDomainsRequest,
        requestOptions?: VerifiedDomainsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__delete(request, requestOptions));
    }

    private async __delete(
        request: Mailchimp.DeleteVerifiedDomainsRequest,
        requestOptions?: VerifiedDomainsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { domain_name: domainName } = request;
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
                `3.0/verified-domains/${core.url.encodePathParam(domainName)}`,
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
            "/3.0/verified-domains/{domain_name}",
        );
    }

    /**
     * Verify a domain for sending.
     *
     * @param {Mailchimp.CreateActionVerifyVerifiedDomainsRequest} request
     * @param {VerifiedDomainsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.verifiedDomains.createActionVerify({
     *         domain_name: "domain_name",
     *         code: "code"
     *     })
     */
    public createActionVerify(
        request: Mailchimp.CreateActionVerifyVerifiedDomainsRequest,
        requestOptions?: VerifiedDomainsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.CreateActionVerifyVerifiedDomainsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__createActionVerify(request, requestOptions));
    }

    private async __createActionVerify(
        request: Mailchimp.CreateActionVerifyVerifiedDomainsRequest,
        requestOptions?: VerifiedDomainsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.CreateActionVerifyVerifiedDomainsResponse>> {
        const { domain_name: domainName, ..._body } = request;
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
                `3.0/verified-domains/${core.url.encodePathParam(domainName)}/actions/verify`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(_body, requestOptions?.additionalBodyParameters),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: _response.body as Mailchimp.CreateActionVerifyVerifiedDomainsResponse,
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
            "/3.0/verified-domains/{domain_name}/actions/verify",
        );
    }
}
