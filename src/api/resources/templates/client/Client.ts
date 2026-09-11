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

export declare namespace TemplatesClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class TemplatesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<TemplatesClient.Options>;

    constructor(options: TemplatesClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Get a list of an account's available templates.
     *
     * @param {Mailchimp.ListTemplatesRequest} request
     * @param {TemplatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.templates.list()
     */
    public async list(
        request: Mailchimp.ListTemplatesRequest = {},
        requestOptions?: TemplatesClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.TemplateInstance, Mailchimp.ListTemplatesResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListTemplatesRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListTemplatesResponse>> => {
                const {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    created_by: createdBy,
                    since_date_created: sinceDateCreated,
                    before_date_created: beforeDateCreated,
                    type: type_,
                    category,
                    folder_id: folderId,
                    sort_field: sortField,
                    content_type: contentType,
                    sort_dir: sortDir,
                } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    created_by: createdBy,
                    since_date_created: sinceDateCreated,
                    before_date_created: beforeDateCreated,
                    type: type_,
                    category,
                    folder_id: folderId,
                    sort_field: sortField != null ? sortField : undefined,
                    content_type: contentType != null ? contentType : undefined,
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
                        "3.0/templates",
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
                        data: _response.body as Mailchimp.ListTemplatesResponse,
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
                return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/templates");
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.TemplateInstance, Mailchimp.ListTemplatesResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.templates ?? []).length > 0,
            getItems: (response) => response?.templates ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Create a new template for the account. Only Classic templates are supported.
     *
     * @param {Mailchimp.CreateTemplatesRequest} request
     * @param {TemplatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.templates.create({
     *         html: "html",
     *         name: "Freddie's Jokes"
     *     })
     */
    public create(
        request: Mailchimp.CreateTemplatesRequest,
        requestOptions?: TemplatesClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.TemplateInstance> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Mailchimp.CreateTemplatesRequest,
        requestOptions?: TemplatesClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.TemplateInstance>> {
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
                "3.0/templates",
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
            return { data: _response.body as Mailchimp.TemplateInstance, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/3.0/templates");
    }

    /**
     * Get information about a specific template.
     *
     * @param {Mailchimp.GetTemplatesRequest} request
     * @param {TemplatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.templates.get({
     *         template_id: "template_id"
     *     })
     */
    public get(
        request: Mailchimp.GetTemplatesRequest,
        requestOptions?: TemplatesClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.TemplateInstance> {
        return core.HttpResponsePromise.fromPromise(this.__get(request, requestOptions));
    }

    private async __get(
        request: Mailchimp.GetTemplatesRequest,
        requestOptions?: TemplatesClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.TemplateInstance>> {
        const { template_id: templateId, fields, exclude_fields: excludeFields } = request;
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
                `3.0/templates/${core.url.encodePathParam(templateId)}`,
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
            return { data: _response.body as Mailchimp.TemplateInstance, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MailchimpError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/templates/{template_id}");
    }

    /**
     * Delete a specific template.
     *
     * @param {Mailchimp.DeleteTemplatesRequest} request
     * @param {TemplatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.templates.delete({
     *         template_id: "template_id"
     *     })
     */
    public delete(
        request: Mailchimp.DeleteTemplatesRequest,
        requestOptions?: TemplatesClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__delete(request, requestOptions));
    }

    private async __delete(
        request: Mailchimp.DeleteTemplatesRequest,
        requestOptions?: TemplatesClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { template_id: templateId } = request;
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
                `3.0/templates/${core.url.encodePathParam(templateId)}`,
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
            "/3.0/templates/{template_id}",
        );
    }

    /**
     * Update the name, HTML, or `folder_id` of an existing template.
     *
     * @param {Mailchimp.UpdateTemplatesRequest} request
     * @param {TemplatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.templates.update({
     *         template_id: "template_id"
     *     })
     */
    public update(
        request: Mailchimp.UpdateTemplatesRequest,
        requestOptions?: TemplatesClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.TemplateInstance> {
        return core.HttpResponsePromise.fromPromise(this.__update(request, requestOptions));
    }

    private async __update(
        request: Mailchimp.UpdateTemplatesRequest,
        requestOptions?: TemplatesClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.TemplateInstance>> {
        const { template_id: templateId, ..._body } = request;
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
                `3.0/templates/${core.url.encodePathParam(templateId)}`,
            ),
            method: "PATCH",
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
            return { data: _response.body as Mailchimp.TemplateInstance, rawResponse: _response.rawResponse };
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
            "/3.0/templates/{template_id}",
        );
    }

    /**
     * Get the sections that you can edit in a template, including each section's default content.
     *
     * @param {Mailchimp.ListDefaultContentTemplatesRequest} request
     * @param {TemplatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.templates.listDefaultContent({
     *         template_id: "template_id"
     *     })
     */
    public listDefaultContent(
        request: Mailchimp.ListDefaultContentTemplatesRequest,
        requestOptions?: TemplatesClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListDefaultContentTemplatesResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listDefaultContent(request, requestOptions));
    }

    private async __listDefaultContent(
        request: Mailchimp.ListDefaultContentTemplatesRequest,
        requestOptions?: TemplatesClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListDefaultContentTemplatesResponse>> {
        const { template_id: templateId, fields, exclude_fields: excludeFields } = request;
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
                `3.0/templates/${core.url.encodePathParam(templateId)}/default-content`,
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
                data: _response.body as Mailchimp.ListDefaultContentTemplatesResponse,
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
            "/3.0/templates/{template_id}/default-content",
        );
    }
}
