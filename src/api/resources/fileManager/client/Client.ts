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

export declare namespace FileManagerClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class FileManagerClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<FileManagerClient.Options>;

    constructor(options: FileManagerClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Get information about the file-manager endpoint's resources
     *
     * @param {FileManagerClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.fileManager.list()
     */
    public list(
        requestOptions?: FileManagerClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListFileManagerResponseItem[]> {
        return core.HttpResponsePromise.fromPromise(this.__list(requestOptions));
    }

    private async __list(
        requestOptions?: FileManagerClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListFileManagerResponseItem[]>> {
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
                "3.0/file-manager",
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
                data: serializers.fileManager.list.Response.parseOrThrow(_response.body, {
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/file-manager");
    }

    /**
     * Get a list of available images and files stored in the File Manager for the account.
     *
     * @param {Mailchimp.ListFilesFileManagerRequest} request
     * @param {FileManagerClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.fileManager.listFiles()
     */
    public async listFiles(
        request: Mailchimp.ListFilesFileManagerRequest = {},
        requestOptions?: FileManagerClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.GalleryFile, Mailchimp.ListFilesFileManagerResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListFilesFileManagerRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListFilesFileManagerResponse>> => {
                const {
                    fields,
                    excludeFields,
                    count,
                    offset,
                    type: type_,
                    createdBy,
                    beforeCreatedAt,
                    sinceCreatedAt,
                    sortField,
                    sortDir,
                } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    type: type_,
                    created_by: createdBy,
                    before_created_at: beforeCreatedAt,
                    since_created_at: sinceCreatedAt,
                    sort_field:
                        sortField != null
                            ? serializers.ListFilesFileManagerRequestSortField.jsonOrThrow(sortField, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
                    sort_dir:
                        sortDir != null
                            ? serializers.ListFilesFileManagerRequestSortDir.jsonOrThrow(sortDir, {
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
                        "3.0/file-manager/files",
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
                        data: serializers.ListFilesFileManagerResponse.parseOrThrow(_response.body, {
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
                    "/3.0/file-manager/files",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.GalleryFile, Mailchimp.ListFilesFileManagerResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.files ?? []).length > 0,
            getItems: (response) => response?.files ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Upload a new image or file to the File Manager.
     *
     * @param {Mailchimp.CreateFileFileManagerRequest} request
     * @param {FileManagerClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.fileManager.createFile({
     *         fileData: "file_data",
     *         name: "name"
     *     })
     */
    public createFile(
        request: Mailchimp.CreateFileFileManagerRequest,
        requestOptions?: FileManagerClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.GalleryFile> {
        return core.HttpResponsePromise.fromPromise(this.__createFile(request, requestOptions));
    }

    private async __createFile(
        request: Mailchimp.CreateFileFileManagerRequest,
        requestOptions?: FileManagerClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.GalleryFile>> {
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
                "3.0/file-manager/files",
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateFileFileManagerRequest.jsonOrThrow(request, {
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
                data: serializers.GalleryFile.parseOrThrow(_response.body, {
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/3.0/file-manager/files");
    }

    /**
     * Get information about a specific file in the File Manager.
     *
     * @param {Mailchimp.GetFileFileManagerRequest} request
     * @param {FileManagerClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.fileManager.getFile({
     *         fileId: "file_id"
     *     })
     */
    public getFile(
        request: Mailchimp.GetFileFileManagerRequest,
        requestOptions?: FileManagerClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.GalleryFile> {
        return core.HttpResponsePromise.fromPromise(this.__getFile(request, requestOptions));
    }

    private async __getFile(
        request: Mailchimp.GetFileFileManagerRequest,
        requestOptions?: FileManagerClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.GalleryFile>> {
        const { fileId, fields, excludeFields } = request;
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
                `3.0/file-manager/files/${core.url.encodePathParam(fileId)}`,
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
                data: serializers.GalleryFile.parseOrThrow(_response.body, {
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
            "/3.0/file-manager/files/{file_id}",
        );
    }

    /**
     * Remove a specific file from the File Manager.
     *
     * @param {Mailchimp.DeleteFileFileManagerRequest} request
     * @param {FileManagerClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.fileManager.deleteFile({
     *         fileId: "file_id"
     *     })
     */
    public deleteFile(
        request: Mailchimp.DeleteFileFileManagerRequest,
        requestOptions?: FileManagerClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteFile(request, requestOptions));
    }

    private async __deleteFile(
        request: Mailchimp.DeleteFileFileManagerRequest,
        requestOptions?: FileManagerClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { fileId } = request;
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
                `3.0/file-manager/files/${core.url.encodePathParam(fileId)}`,
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
            "/3.0/file-manager/files/{file_id}",
        );
    }

    /**
     * Update a file in the File Manager.
     *
     * @param {Mailchimp.UpdateFileFileManagerRequest} request
     * @param {FileManagerClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.fileManager.updateFile({
     *         fileId: "file_id"
     *     })
     */
    public updateFile(
        request: Mailchimp.UpdateFileFileManagerRequest,
        requestOptions?: FileManagerClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.GalleryFile> {
        return core.HttpResponsePromise.fromPromise(this.__updateFile(request, requestOptions));
    }

    private async __updateFile(
        request: Mailchimp.UpdateFileFileManagerRequest,
        requestOptions?: FileManagerClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.GalleryFile>> {
        const { fileId, ..._body } = request;
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
                `3.0/file-manager/files/${core.url.encodePathParam(fileId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateFileFileManagerRequest.jsonOrThrow(_body, {
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
                data: serializers.GalleryFile.parseOrThrow(_response.body, {
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
            "/3.0/file-manager/files/{file_id}",
        );
    }

    /**
     * Get a list of all folders in the File Manager.
     *
     * @param {Mailchimp.ListFoldersFileManagerRequest} request
     * @param {FileManagerClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.fileManager.listFolders()
     */
    public async listFolders(
        request: Mailchimp.ListFoldersFileManagerRequest = {},
        requestOptions?: FileManagerClient.RequestOptions,
    ): Promise<
        core.Page<Mailchimp.ListFoldersFileManagerResponseFoldersItem, Mailchimp.ListFoldersFileManagerResponse>
    > {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListFoldersFileManagerRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListFoldersFileManagerResponse>> => {
                const { fields, excludeFields, count, offset, createdBy, beforeCreatedAt, sinceCreatedAt } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    created_by: createdBy,
                    before_created_at: beforeCreatedAt,
                    since_created_at: sinceCreatedAt,
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
                        "3.0/file-manager/folders",
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
                        data: serializers.ListFoldersFileManagerResponse.parseOrThrow(_response.body, {
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
                    "/3.0/file-manager/folders",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<
            Mailchimp.ListFoldersFileManagerResponseFoldersItem,
            Mailchimp.ListFoldersFileManagerResponse
        >({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.folders ?? []).length > 0,
            getItems: (response) => response?.folders ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Create a new folder in the File Manager.
     *
     * @param {Mailchimp.CreateFolderFileManagerRequest} request
     * @param {FileManagerClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.fileManager.createFolder({
     *         name: "name"
     *     })
     */
    public createFolder(
        request: Mailchimp.CreateFolderFileManagerRequest,
        requestOptions?: FileManagerClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.CreateFolderFileManagerResponse> {
        return core.HttpResponsePromise.fromPromise(this.__createFolder(request, requestOptions));
    }

    private async __createFolder(
        request: Mailchimp.CreateFolderFileManagerRequest,
        requestOptions?: FileManagerClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.CreateFolderFileManagerResponse>> {
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
                "3.0/file-manager/folders",
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateFolderFileManagerRequest.jsonOrThrow(request, {
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
                data: serializers.CreateFolderFileManagerResponse.parseOrThrow(_response.body, {
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/3.0/file-manager/folders");
    }

    /**
     * Get information about a specific folder in the File Manager.
     *
     * @param {Mailchimp.GetFolderFileManagerRequest} request
     * @param {FileManagerClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.fileManager.getFolder({
     *         folderId: "folder_id"
     *     })
     */
    public getFolder(
        request: Mailchimp.GetFolderFileManagerRequest,
        requestOptions?: FileManagerClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.GetFolderFileManagerResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getFolder(request, requestOptions));
    }

    private async __getFolder(
        request: Mailchimp.GetFolderFileManagerRequest,
        requestOptions?: FileManagerClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.GetFolderFileManagerResponse>> {
        const { folderId, fields, excludeFields } = request;
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
                `3.0/file-manager/folders/${core.url.encodePathParam(folderId)}`,
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
                data: serializers.GetFolderFileManagerResponse.parseOrThrow(_response.body, {
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
            "/3.0/file-manager/folders/{folder_id}",
        );
    }

    /**
     * Delete a specific folder in the File Manager.
     *
     * @param {Mailchimp.DeleteFolderFileManagerRequest} request
     * @param {FileManagerClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.fileManager.deleteFolder({
     *         folderId: "folder_id"
     *     })
     */
    public deleteFolder(
        request: Mailchimp.DeleteFolderFileManagerRequest,
        requestOptions?: FileManagerClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteFolder(request, requestOptions));
    }

    private async __deleteFolder(
        request: Mailchimp.DeleteFolderFileManagerRequest,
        requestOptions?: FileManagerClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { folderId } = request;
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
                `3.0/file-manager/folders/${core.url.encodePathParam(folderId)}`,
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
            "/3.0/file-manager/folders/{folder_id}",
        );
    }

    /**
     * Update a specific File Manager folder.
     *
     * @param {Mailchimp.UpdateFolderFileManagerRequest} request
     * @param {FileManagerClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.fileManager.updateFolder({
     *         folderId: "folder_id",
     *         name: "name"
     *     })
     */
    public updateFolder(
        request: Mailchimp.UpdateFolderFileManagerRequest,
        requestOptions?: FileManagerClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.UpdateFolderFileManagerResponse> {
        return core.HttpResponsePromise.fromPromise(this.__updateFolder(request, requestOptions));
    }

    private async __updateFolder(
        request: Mailchimp.UpdateFolderFileManagerRequest,
        requestOptions?: FileManagerClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.UpdateFolderFileManagerResponse>> {
        const { folderId, ..._body } = request;
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
                `3.0/file-manager/folders/${core.url.encodePathParam(folderId)}`,
            ),
            method: "PATCH",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.UpdateFolderFileManagerRequest.jsonOrThrow(_body, {
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
                data: serializers.UpdateFolderFileManagerResponse.parseOrThrow(_response.body, {
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
            "/3.0/file-manager/folders/{folder_id}",
        );
    }

    /**
     * Get a list of available images and files stored in this folder.
     *
     * @param {Mailchimp.ListFolderFilesFileManagerRequest} request
     * @param {FileManagerClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.fileManager.listFolderFiles({
     *         folderId: "folder_id"
     *     })
     */
    public async listFolderFiles(
        request: Mailchimp.ListFolderFilesFileManagerRequest,
        requestOptions?: FileManagerClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.GalleryFile, Mailchimp.ListFolderFilesFileManagerResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListFolderFilesFileManagerRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListFolderFilesFileManagerResponse>> => {
                const {
                    folderId,
                    fields,
                    excludeFields,
                    count,
                    offset,
                    type: type_,
                    createdBy,
                    beforeCreatedAt,
                    sinceCreatedAt,
                    sortField,
                    sortDir,
                } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    type: type_,
                    created_by: createdBy,
                    before_created_at: beforeCreatedAt,
                    since_created_at: sinceCreatedAt,
                    sort_field:
                        sortField != null
                            ? serializers.ListFolderFilesFileManagerRequestSortField.jsonOrThrow(sortField, {
                                  unrecognizedObjectKeys: "strip",
                                  omitUndefined: true,
                              })
                            : undefined,
                    sort_dir:
                        sortDir != null
                            ? serializers.ListFolderFilesFileManagerRequestSortDir.jsonOrThrow(sortDir, {
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
                        `3.0/file-manager/folders/${core.url.encodePathParam(folderId)}/files`,
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
                        data: serializers.ListFolderFilesFileManagerResponse.parseOrThrow(_response.body, {
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
                    "/3.0/file-manager/folders/{folder_id}/files",
                );
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.GalleryFile, Mailchimp.ListFolderFilesFileManagerResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.files ?? []).length > 0,
            getItems: (response) => response?.files ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }
}
