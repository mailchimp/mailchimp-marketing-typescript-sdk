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

export declare namespace AudiencesClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class AudiencesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<AudiencesClient.Options>;

    constructor(options: AudiencesClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Get a list of omni-channel contacts for a given audience.
     *
     * @param {Mailchimp.GetAudienceContactListRequest} request
     * @param {AudiencesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.audiences.getAudienceContactList({
     *         audienceId: "audience_id"
     *     })
     */
    public getAudienceContactList(
        request: Mailchimp.GetAudienceContactListRequest,
        requestOptions?: AudiencesClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.GetAudienceContactListResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getAudienceContactList(request, requestOptions));
    }

    private async __getAudienceContactList(
        request: Mailchimp.GetAudienceContactListRequest,
        requestOptions?: AudiencesClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.GetAudienceContactListResponse>> {
        const {
            audienceId,
            fields,
            excludeFields,
            count,
            cursor,
            createdBefore,
            createdSince,
            updatedBefore,
            updatedSince,
            sortField,
            sortDir,
        } = request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
            count,
            cursor,
            created_before: createdBefore != null ? createdBefore?.toISOString() : undefined,
            created_since: createdSince != null ? createdSince?.toISOString() : undefined,
            updated_before: updatedBefore != null ? updatedBefore?.toISOString() : undefined,
            updated_since: updatedSince != null ? updatedSince?.toISOString() : undefined,
            sort_field:
                sortField != null
                    ? serializers.GetAudienceContactListRequestSortField.jsonOrThrow(sortField, {
                          unrecognizedObjectKeys: "strip",
                          omitUndefined: true,
                      })
                    : undefined,
            sort_dir:
                sortDir != null
                    ? serializers.GetAudienceContactListRequestSortDir.jsonOrThrow(sortDir, {
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
                `3.0/audiences/${core.url.encodePathParam(audienceId)}/contacts`,
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
                data: serializers.GetAudienceContactListResponse.parseOrThrow(_response.body, {
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
            "/3.0/audiences/{audience_id}/contacts",
        );
    }

    /**
     * Create a new omni-channel contact for an audience.
     *
     * @param {Mailchimp.CreateAudienceContactRequest} request
     * @param {AudiencesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.audiences.createAudienceContact({
     *         audienceId: "audience_id"
     *     })
     */
    public createAudienceContact(
        request: Mailchimp.CreateAudienceContactRequest,
        requestOptions?: AudiencesClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.AudiencesContact> {
        return core.HttpResponsePromise.fromPromise(this.__createAudienceContact(request, requestOptions));
    }

    private async __createAudienceContact(
        request: Mailchimp.CreateAudienceContactRequest,
        requestOptions?: AudiencesClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.AudiencesContact>> {
        const { audienceId, mergeFieldValidationMode, dataMode, ..._body } = request;
        const _queryParams: Record<string, unknown> = {
            merge_field_validation_mode:
                mergeFieldValidationMode != null
                    ? serializers.CreateAudienceContactRequestMergeFieldValidationMode.jsonOrThrow(
                          mergeFieldValidationMode,
                          { unrecognizedObjectKeys: "strip", omitUndefined: true },
                      )
                    : undefined,
            data_mode:
                dataMode != null
                    ? serializers.CreateAudienceContactRequestDataMode.jsonOrThrow(dataMode, {
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
                `3.0/audiences/${core.url.encodePathParam(audienceId)}/contacts`,
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
                serializers.CreateAudienceContactRequest.jsonOrThrow(_body, {
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
                data: serializers.AudiencesContact.parseOrThrow(_response.body, {
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
            "/3.0/audiences/{audience_id}/contacts",
        );
    }

    /**
     * Retrieve a specific omni-channel contact in an audience.
     *
     * @param {Mailchimp.GetAudienceContactRequest} request
     * @param {AudiencesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.audiences.getAudienceContact({
     *         audienceId: "audience_id",
     *         contactId: "contact_id"
     *     })
     */
    public getAudienceContact(
        request: Mailchimp.GetAudienceContactRequest,
        requestOptions?: AudiencesClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.AudiencesContact> {
        return core.HttpResponsePromise.fromPromise(this.__getAudienceContact(request, requestOptions));
    }

    private async __getAudienceContact(
        request: Mailchimp.GetAudienceContactRequest,
        requestOptions?: AudiencesClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.AudiencesContact>> {
        const { audienceId, contactId, fields, excludeFields } = request;
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
                `3.0/audiences/${core.url.encodePathParam(audienceId)}/contacts/${core.url.encodePathParam(contactId)}`,
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
                data: serializers.AudiencesContact.parseOrThrow(_response.body, {
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
            "/3.0/audiences/{audience_id}/contacts/{contact_id}",
        );
    }

    /**
     * Update an existing omni-channel contact.
     *
     * @param {Mailchimp.PatchAudienceContactRequest} request
     * @param {AudiencesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.audiences.patchAudienceContact({
     *         audienceId: "audience_id",
     *         contactId: "contact_id"
     *     })
     */
    public patchAudienceContact(
        request: Mailchimp.PatchAudienceContactRequest,
        requestOptions?: AudiencesClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.AudiencesContact> {
        return core.HttpResponsePromise.fromPromise(this.__patchAudienceContact(request, requestOptions));
    }

    private async __patchAudienceContact(
        request: Mailchimp.PatchAudienceContactRequest,
        requestOptions?: AudiencesClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.AudiencesContact>> {
        const { audienceId, contactId, mergeFieldValidationMode, dataMode, ..._body } = request;
        const _queryParams: Record<string, unknown> = {
            merge_field_validation_mode:
                mergeFieldValidationMode != null
                    ? serializers.PatchAudienceContactRequestMergeFieldValidationMode.jsonOrThrow(
                          mergeFieldValidationMode,
                          { unrecognizedObjectKeys: "strip", omitUndefined: true },
                      )
                    : undefined,
            data_mode:
                dataMode != null
                    ? serializers.PatchAudienceContactRequestDataMode.jsonOrThrow(dataMode, {
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
                `3.0/audiences/${core.url.encodePathParam(audienceId)}/contacts/${core.url.encodePathParam(contactId)}`,
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
                serializers.PatchAudienceContactRequest.jsonOrThrow(_body, {
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
                data: serializers.AudiencesContact.parseOrThrow(_response.body, {
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
            "/3.0/audiences/{audience_id}/contacts/{contact_id}",
        );
    }

    /**
     * Archives a Contact.
     *
     * @param {Mailchimp.PostAudiencesContactsActionsArchiveRequest} request
     * @param {AudiencesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.audiences.postAudiencesContactsActionsArchive({
     *         audienceId: "audience_id",
     *         contactId: "contact_id"
     *     })
     */
    public postAudiencesContactsActionsArchive(
        request: Mailchimp.PostAudiencesContactsActionsArchiveRequest,
        requestOptions?: AudiencesClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(
            this.__postAudiencesContactsActionsArchive(request, requestOptions),
        );
    }

    private async __postAudiencesContactsActionsArchive(
        request: Mailchimp.PostAudiencesContactsActionsArchiveRequest,
        requestOptions?: AudiencesClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { audienceId, contactId } = request;
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
                `3.0/audiences/${core.url.encodePathParam(audienceId)}/contacts/${core.url.encodePathParam(contactId)}/actions/archive`,
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
            "/3.0/audiences/{audience_id}/contacts/{contact_id}/actions/archive",
        );
    }

    /**
     * Forgets a Contact.
     *
     * @param {Mailchimp.PostAudiencesContactsActionsForgetRequest} request
     * @param {AudiencesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.audiences.postAudiencesContactsActionsForget({
     *         audienceId: "audience_id",
     *         contactId: "contact_id"
     *     })
     */
    public postAudiencesContactsActionsForget(
        request: Mailchimp.PostAudiencesContactsActionsForgetRequest,
        requestOptions?: AudiencesClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__postAudiencesContactsActionsForget(request, requestOptions));
    }

    private async __postAudiencesContactsActionsForget(
        request: Mailchimp.PostAudiencesContactsActionsForgetRequest,
        requestOptions?: AudiencesClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { audienceId, contactId } = request;
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
                `3.0/audiences/${core.url.encodePathParam(audienceId)}/contacts/${core.url.encodePathParam(contactId)}/actions/forget`,
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
            "/3.0/audiences/{audience_id}/contacts/{contact_id}/actions/forget",
        );
    }
}
