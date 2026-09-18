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

export declare namespace AutomationsClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Classic automation workflows, their emails, and queued subscribers.
 */
export class AutomationsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<AutomationsClient.Options>;

    constructor(options: AutomationsClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Get a summary of an account's classic automations.
     *
     * @param {Mailchimp.ListAutomationsRequest} request
     * @param {AutomationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.automations.list()
     */
    public async list(
        request: Mailchimp.ListAutomationsRequest = {},
        requestOptions?: AutomationsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.AutomationWorkflow, Mailchimp.ListAutomationsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListAutomationsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListAutomationsResponse>> => {
                const {
                    count,
                    offset,
                    fields,
                    excludeFields,
                    beforeCreateTime,
                    sinceCreateTime,
                    beforeStartTime,
                    sinceStartTime,
                    status,
                } = request;
                const _queryParams: Record<string, unknown> = {
                    count,
                    offset,
                    fields,
                    exclude_fields: excludeFields,
                    before_create_time: beforeCreateTime != null ? beforeCreateTime?.toISOString() : undefined,
                    since_create_time: sinceCreateTime != null ? sinceCreateTime?.toISOString() : undefined,
                    before_start_time: beforeStartTime != null ? beforeStartTime?.toISOString() : undefined,
                    since_start_time: sinceStartTime != null ? sinceStartTime?.toISOString() : undefined,
                    status:
                        status != null
                            ? serializers.ListAutomationsRequestStatus.jsonOrThrow(status, {
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
                        "3.0/automations",
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
                        data: serializers.ListAutomationsResponse.parseOrThrow(_response.body, {
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
                return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/automations");
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.AutomationWorkflow, Mailchimp.ListAutomationsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.automations ?? []).length > 0,
            getItems: (response) => response?.automations ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Create a new classic automation in your Mailchimp account.
     *
     * @param {Mailchimp.CreateAutomationsRequest} request
     * @param {AutomationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.automations.create({
     *         recipients: {},
     *         triggerSettings: {
     *             workflowType: "abandonedBrowse"
     *         }
     *     })
     */
    public create(
        request: Mailchimp.CreateAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.AutomationWorkflow> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Mailchimp.CreateAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.AutomationWorkflow>> {
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
                "3.0/automations",
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateAutomationsRequest.jsonOrThrow(request, {
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
                data: serializers.AutomationWorkflow.parseOrThrow(_response.body, {
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/3.0/automations");
    }

    /**
     * Get a summary of an individual classic automation workflow's settings and content. The `trigger_settings` object returns information for the first email in the workflow.
     *
     * @param {Mailchimp.GetAutomationsRequest} request
     * @param {AutomationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.automations.get({
     *         workflowId: "workflow_id"
     *     })
     */
    public get(
        request: Mailchimp.GetAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.AutomationWorkflow> {
        return core.HttpResponsePromise.fromPromise(this.__get(request, requestOptions));
    }

    private async __get(
        request: Mailchimp.GetAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.AutomationWorkflow>> {
        const { workflowId, fields, excludeFields } = request;
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
                `3.0/automations/${core.url.encodePathParam(workflowId)}`,
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
                data: serializers.AutomationWorkflow.parseOrThrow(_response.body, {
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
            "/3.0/automations/{workflow_id}",
        );
    }

    /**
     * Archiving will permanently end your automation and keep the report data. You’ll be able to replicate your archived automation, but you can’t restart it.
     *
     * @param {Mailchimp.CreateActionArchiveAutomationsRequest} request
     * @param {AutomationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.automations.createActionArchive({
     *         workflowId: "workflow_id"
     *     })
     */
    public createActionArchive(
        request: Mailchimp.CreateActionArchiveAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__createActionArchive(request, requestOptions));
    }

    private async __createActionArchive(
        request: Mailchimp.CreateActionArchiveAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { workflowId } = request;
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
                `3.0/automations/${core.url.encodePathParam(workflowId)}/actions/archive`,
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
            "/3.0/automations/{workflow_id}/actions/archive",
        );
    }

    /**
     * Pause all emails in a specific classic automation workflow.
     *
     * @param {Mailchimp.CreateActionPauseAllEmailAutomationsRequest} request
     * @param {AutomationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.automations.createActionPauseAllEmail({
     *         workflowId: "workflow_id"
     *     })
     */
    public createActionPauseAllEmail(
        request: Mailchimp.CreateActionPauseAllEmailAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__createActionPauseAllEmail(request, requestOptions));
    }

    private async __createActionPauseAllEmail(
        request: Mailchimp.CreateActionPauseAllEmailAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { workflowId } = request;
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
                `3.0/automations/${core.url.encodePathParam(workflowId)}/actions/pause-all-emails`,
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
            "/3.0/automations/{workflow_id}/actions/pause-all-emails",
        );
    }

    /**
     * Start all emails in a classic automation workflow.
     *
     * @param {Mailchimp.CreateActionStartAllEmailAutomationsRequest} request
     * @param {AutomationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.automations.createActionStartAllEmail({
     *         workflowId: "workflow_id"
     *     })
     */
    public createActionStartAllEmail(
        request: Mailchimp.CreateActionStartAllEmailAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__createActionStartAllEmail(request, requestOptions));
    }

    private async __createActionStartAllEmail(
        request: Mailchimp.CreateActionStartAllEmailAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { workflowId } = request;
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
                `3.0/automations/${core.url.encodePathParam(workflowId)}/actions/start-all-emails`,
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
            "/3.0/automations/{workflow_id}/actions/start-all-emails",
        );
    }

    /**
     * Get a summary of the emails in a classic automation workflow.
     *
     * @param {Mailchimp.ListEmailsAutomationsRequest} request
     * @param {AutomationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.automations.listEmails({
     *         workflowId: "workflow_id"
     *     })
     */
    public listEmails(
        request: Mailchimp.ListEmailsAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListEmailsAutomationsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listEmails(request, requestOptions));
    }

    private async __listEmails(
        request: Mailchimp.ListEmailsAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListEmailsAutomationsResponse>> {
        const { workflowId } = request;
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
                `3.0/automations/${core.url.encodePathParam(workflowId)}/emails`,
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
                data: serializers.ListEmailsAutomationsResponse.parseOrThrow(_response.body, {
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
            "/3.0/automations/{workflow_id}/emails",
        );
    }

    /**
     * Get information about an individual classic automation workflow email.
     *
     * @param {Mailchimp.GetEmailAutomationsRequest} request
     * @param {AutomationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.automations.getEmail({
     *         workflowId: "workflow_id",
     *         workflowEmailId: "workflow_email_id"
     *     })
     */
    public getEmail(
        request: Mailchimp.GetEmailAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.AutomationWorkflowEmail> {
        return core.HttpResponsePromise.fromPromise(this.__getEmail(request, requestOptions));
    }

    private async __getEmail(
        request: Mailchimp.GetEmailAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.AutomationWorkflowEmail>> {
        const { workflowId, workflowEmailId } = request;
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
                `3.0/automations/${core.url.encodePathParam(workflowId)}/emails/${core.url.encodePathParam(workflowEmailId)}`,
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
                data: serializers.AutomationWorkflowEmail.parseOrThrow(_response.body, {
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
            "/3.0/automations/{workflow_id}/emails/{workflow_email_id}",
        );
    }

    /**
     * Removes an individual classic automation workflow email. Emails from certain workflow types, including the Abandoned Cart Email (abandonedCart) and Product Retargeting Email (abandonedBrowse) Workflows, cannot be deleted.
     *
     * @param {Mailchimp.DeleteEmailAutomationsRequest} request
     * @param {AutomationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.automations.deleteEmail({
     *         workflowId: "workflow_id",
     *         workflowEmailId: "workflow_email_id"
     *     })
     */
    public deleteEmail(
        request: Mailchimp.DeleteEmailAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteEmail(request, requestOptions));
    }

    private async __deleteEmail(
        request: Mailchimp.DeleteEmailAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { workflowId, workflowEmailId } = request;
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
                `3.0/automations/${core.url.encodePathParam(workflowId)}/emails/${core.url.encodePathParam(workflowEmailId)}`,
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
            "/3.0/automations/{workflow_id}/emails/{workflow_email_id}",
        );
    }

    /**
     * Update settings for a classic automation workflow email.  Only works with workflows of type: abandonedBrowse, abandonedCart, emailFollowup, or singleWelcome.
     *
     * @param {Mailchimp.UpdateEmailAutomationsRequest} request
     * @param {AutomationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.automations.updateEmail({
     *         workflowId: "workflow_id",
     *         workflowEmailId: "workflow_email_id"
     *     })
     */
    public updateEmail(
        request: Mailchimp.UpdateEmailAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.AutomationWorkflowEmail> {
        return core.HttpResponsePromise.fromPromise(this.__updateEmail(request, requestOptions));
    }

    private async __updateEmail(
        request: Mailchimp.UpdateEmailAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.AutomationWorkflowEmail>> {
        const { workflowId, workflowEmailId, ..._body } = request;
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
                `3.0/automations/${core.url.encodePathParam(workflowId)}/emails/${core.url.encodePathParam(workflowEmailId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateEmailAutomationsRequest.jsonOrThrow(_body, {
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
                data: serializers.AutomationWorkflowEmail.parseOrThrow(_response.body, {
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
            "/3.0/automations/{workflow_id}/emails/{workflow_email_id}",
        );
    }

    /**
     * Pause an automated email.
     *
     * @param {Mailchimp.CreateEmailActionPauseAutomationsRequest} request
     * @param {AutomationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.automations.createEmailActionPause({
     *         workflowId: "workflow_id",
     *         workflowEmailId: "workflow_email_id"
     *     })
     */
    public createEmailActionPause(
        request: Mailchimp.CreateEmailActionPauseAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__createEmailActionPause(request, requestOptions));
    }

    private async __createEmailActionPause(
        request: Mailchimp.CreateEmailActionPauseAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { workflowId, workflowEmailId } = request;
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
                `3.0/automations/${core.url.encodePathParam(workflowId)}/emails/${core.url.encodePathParam(workflowEmailId)}/actions/pause`,
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
            "/3.0/automations/{workflow_id}/emails/{workflow_email_id}/actions/pause",
        );
    }

    /**
     * Start an automated email.
     *
     * @param {Mailchimp.CreateEmailActionStartAutomationsRequest} request
     * @param {AutomationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.automations.createEmailActionStart({
     *         workflowId: "workflow_id",
     *         workflowEmailId: "workflow_email_id"
     *     })
     */
    public createEmailActionStart(
        request: Mailchimp.CreateEmailActionStartAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__createEmailActionStart(request, requestOptions));
    }

    private async __createEmailActionStart(
        request: Mailchimp.CreateEmailActionStartAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { workflowId, workflowEmailId } = request;
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
                `3.0/automations/${core.url.encodePathParam(workflowId)}/emails/${core.url.encodePathParam(workflowEmailId)}/actions/start`,
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
            "/3.0/automations/{workflow_id}/emails/{workflow_email_id}/actions/start",
        );
    }

    /**
     * Get information about a classic automation email queue.
     *
     * @param {Mailchimp.ListEmailQueueAutomationsRequest} request
     * @param {AutomationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.automations.listEmailQueue({
     *         workflowId: "workflow_id",
     *         workflowEmailId: "workflow_email_id"
     *     })
     */
    public listEmailQueue(
        request: Mailchimp.ListEmailQueueAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListEmailQueueAutomationsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listEmailQueue(request, requestOptions));
    }

    private async __listEmailQueue(
        request: Mailchimp.ListEmailQueueAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListEmailQueueAutomationsResponse>> {
        const { workflowId, workflowEmailId } = request;
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
                `3.0/automations/${core.url.encodePathParam(workflowId)}/emails/${core.url.encodePathParam(workflowEmailId)}/queue`,
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
                data: serializers.ListEmailQueueAutomationsResponse.parseOrThrow(_response.body, {
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
            "/3.0/automations/{workflow_id}/emails/{workflow_email_id}/queue",
        );
    }

    /**
     * Manually add a subscriber to a workflow, bypassing the default trigger settings. You can also use this endpoint to trigger a series of automated emails in an API 3.0 workflow type.
     *
     * @param {Mailchimp.CreateEmailQueueAutomationsRequest} request
     * @param {AutomationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.automations.createEmailQueue({
     *         workflowId: "workflow_id",
     *         workflowEmailId: "workflow_email_id",
     *         emailAddress: "email_address"
     *     })
     */
    public createEmailQueue(
        request: Mailchimp.CreateEmailQueueAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.SubscriberInAutomationQueue> {
        return core.HttpResponsePromise.fromPromise(this.__createEmailQueue(request, requestOptions));
    }

    private async __createEmailQueue(
        request: Mailchimp.CreateEmailQueueAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.SubscriberInAutomationQueue>> {
        const { workflowId, workflowEmailId, ..._body } = request;
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
                `3.0/automations/${core.url.encodePathParam(workflowId)}/emails/${core.url.encodePathParam(workflowEmailId)}/queue`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateEmailQueueAutomationsRequest.jsonOrThrow(_body, {
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
                data: serializers.SubscriberInAutomationQueue.parseOrThrow(_response.body, {
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
            "/3.0/automations/{workflow_id}/emails/{workflow_email_id}/queue",
        );
    }

    /**
     * Get information about a specific subscriber in a classic automation email queue.
     *
     * @param {Mailchimp.GetEmailQueueAutomationsRequest} request
     * @param {AutomationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.automations.getEmailQueue({
     *         workflowId: "workflow_id",
     *         workflowEmailId: "workflow_email_id",
     *         subscriberHash: "subscriber_hash"
     *     })
     */
    public getEmailQueue(
        request: Mailchimp.GetEmailQueueAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.SubscriberInAutomationQueue> {
        return core.HttpResponsePromise.fromPromise(this.__getEmailQueue(request, requestOptions));
    }

    private async __getEmailQueue(
        request: Mailchimp.GetEmailQueueAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.SubscriberInAutomationQueue>> {
        const { workflowId, workflowEmailId, subscriberHash } = request;
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
                `3.0/automations/${core.url.encodePathParam(workflowId)}/emails/${core.url.encodePathParam(workflowEmailId)}/queue/${core.url.encodePathParam(subscriberHash)}`,
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
                data: serializers.SubscriberInAutomationQueue.parseOrThrow(_response.body, {
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
            "/3.0/automations/{workflow_id}/emails/{workflow_email_id}/queue/{subscriber_hash}",
        );
    }

    /**
     * Get information about subscribers who were removed from a classic automation workflow.
     *
     * @param {Mailchimp.ListRemovedSubscribersAutomationsRequest} request
     * @param {AutomationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.automations.listRemovedSubscribers({
     *         workflowId: "workflow_id"
     *     })
     */
    public listRemovedSubscribers(
        request: Mailchimp.ListRemovedSubscribersAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListRemovedSubscribersAutomationsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listRemovedSubscribers(request, requestOptions));
    }

    private async __listRemovedSubscribers(
        request: Mailchimp.ListRemovedSubscribersAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListRemovedSubscribersAutomationsResponse>> {
        const { workflowId } = request;
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
                `3.0/automations/${core.url.encodePathParam(workflowId)}/removed-subscribers`,
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
                data: serializers.ListRemovedSubscribersAutomationsResponse.parseOrThrow(_response.body, {
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
            "/3.0/automations/{workflow_id}/removed-subscribers",
        );
    }

    /**
     * Remove a subscriber from a specific classic automation workflow. You can remove a subscriber at any point in an automation workflow, regardless of how many emails they've been sent from that workflow. Once they're removed, they can never be added back to the same workflow.
     *
     * @param {Mailchimp.CreateRemovedSubscriberAutomationsRequest} request
     * @param {AutomationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.automations.createRemovedSubscriber({
     *         workflowId: "workflow_id",
     *         emailAddress: "email_address"
     *     })
     */
    public createRemovedSubscriber(
        request: Mailchimp.CreateRemovedSubscriberAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.SubscriberRemovedFromAutomationWorkflow> {
        return core.HttpResponsePromise.fromPromise(this.__createRemovedSubscriber(request, requestOptions));
    }

    private async __createRemovedSubscriber(
        request: Mailchimp.CreateRemovedSubscriberAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.SubscriberRemovedFromAutomationWorkflow>> {
        const { workflowId, ..._body } = request;
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
                `3.0/automations/${core.url.encodePathParam(workflowId)}/removed-subscribers`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateRemovedSubscriberAutomationsRequest.jsonOrThrow(_body, {
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
                data: serializers.SubscriberRemovedFromAutomationWorkflow.parseOrThrow(_response.body, {
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
            "/3.0/automations/{workflow_id}/removed-subscribers",
        );
    }

    /**
     * Get information about a specific subscriber who was removed from a classic automation workflow.
     *
     * @param {Mailchimp.GetRemovedSubscriberAutomationsRequest} request
     * @param {AutomationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.automations.getRemovedSubscriber({
     *         workflowId: "workflow_id",
     *         subscriberHash: "subscriber_hash"
     *     })
     */
    public getRemovedSubscriber(
        request: Mailchimp.GetRemovedSubscriberAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.SubscriberRemovedFromAutomationWorkflow> {
        return core.HttpResponsePromise.fromPromise(this.__getRemovedSubscriber(request, requestOptions));
    }

    private async __getRemovedSubscriber(
        request: Mailchimp.GetRemovedSubscriberAutomationsRequest,
        requestOptions?: AutomationsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.SubscriberRemovedFromAutomationWorkflow>> {
        const { workflowId, subscriberHash } = request;
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
                `3.0/automations/${core.url.encodePathParam(workflowId)}/removed-subscribers/${core.url.encodePathParam(subscriberHash)}`,
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
                data: serializers.SubscriberRemovedFromAutomationWorkflow.parseOrThrow(_response.body, {
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
            "/3.0/automations/{workflow_id}/removed-subscribers/{subscriber_hash}",
        );
    }
}
