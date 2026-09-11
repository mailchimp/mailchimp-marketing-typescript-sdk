//  This file was auto-generated from our API Definition.

import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../BaseClient.js";
import { mergeHeaders } from "../../../../core/headers.js";
import * as core from "../../../../core/index.js";
import * as environments from "../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../errors/index.js";
import type * as Mailchimp from "../../../index.js";

export declare namespace ConversationsClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class ConversationsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ConversationsClient.Options>;

    constructor(options: ConversationsClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Get a list of conversations for the account. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.
     *
     * @param {Mailchimp.ListConversationsRequest} request
     * @param {ConversationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.conversations.list()
     */
    public async list(
        request: Mailchimp.ListConversationsRequest = {},
        requestOptions?: ConversationsClient.RequestOptions,
    ): Promise<core.Page<Mailchimp.Conversation, Mailchimp.ListConversationsResponse>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Mailchimp.ListConversationsRequest,
            ): Promise<core.WithRawResponse<Mailchimp.ListConversationsResponse>> => {
                const {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    has_unread_messages: hasUnreadMessages,
                    list_id: listId,
                    campaign_id: campaignId,
                } = request;
                const _queryParams: Record<string, unknown> = {
                    fields,
                    exclude_fields: excludeFields,
                    count,
                    offset,
                    has_unread_messages: hasUnreadMessages != null ? hasUnreadMessages : undefined,
                    list_id: listId,
                    campaign_id: campaignId,
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
                        "3.0/conversations",
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
                        data: _response.body as Mailchimp.ListConversationsResponse,
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
                return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/3.0/conversations");
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Page<Mailchimp.Conversation, Mailchimp.ListConversationsResponse>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.conversations ?? []).length > 0,
            getItems: (response) => response?.conversations ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Get details about an individual conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.
     *
     * @param {Mailchimp.GetConversationsRequest} request
     * @param {ConversationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.conversations.get({
     *         conversation_id: "conversation_id"
     *     })
     */
    public get(
        request: Mailchimp.GetConversationsRequest,
        requestOptions?: ConversationsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.Conversation> {
        return core.HttpResponsePromise.fromPromise(this.__get(request, requestOptions));
    }

    private async __get(
        request: Mailchimp.GetConversationsRequest,
        requestOptions?: ConversationsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.Conversation>> {
        const { conversation_id: conversationId, fields, exclude_fields: excludeFields } = request;
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
                `3.0/conversations/${core.url.encodePathParam(conversationId)}`,
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
            return { data: _response.body as Mailchimp.Conversation, rawResponse: _response.rawResponse };
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
            "/3.0/conversations/{conversation_id}",
        );
    }

    /**
     * Get messages from a specific conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.
     *
     * @param {Mailchimp.ListMessagesConversationsRequest} request
     * @param {ConversationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.conversations.listMessages({
     *         conversation_id: "conversation_id"
     *     })
     */
    public listMessages(
        request: Mailchimp.ListMessagesConversationsRequest,
        requestOptions?: ConversationsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ListMessagesConversationsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listMessages(request, requestOptions));
    }

    private async __listMessages(
        request: Mailchimp.ListMessagesConversationsRequest,
        requestOptions?: ConversationsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ListMessagesConversationsResponse>> {
        const {
            conversation_id: conversationId,
            fields,
            exclude_fields: excludeFields,
            is_read: isRead,
            before_timestamp: beforeTimestamp,
            since_timestamp: sinceTimestamp,
        } = request;
        const _queryParams: Record<string, unknown> = {
            fields,
            exclude_fields: excludeFields,
            is_read: isRead != null ? isRead : undefined,
            before_timestamp: beforeTimestamp != null ? beforeTimestamp : undefined,
            since_timestamp: sinceTimestamp != null ? sinceTimestamp : undefined,
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
                `3.0/conversations/${core.url.encodePathParam(conversationId)}/messages`,
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
                data: _response.body as Mailchimp.ListMessagesConversationsResponse,
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
            "/3.0/conversations/{conversation_id}/messages",
        );
    }

    /**
     * Get an individual message in a conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.
     *
     * @param {Mailchimp.GetMessageConversationsRequest} request
     * @param {ConversationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.conversations.getMessage({
     *         conversation_id: "conversation_id",
     *         message_id: "message_id"
     *     })
     */
    public getMessage(
        request: Mailchimp.GetMessageConversationsRequest,
        requestOptions?: ConversationsClient.RequestOptions,
    ): core.HttpResponsePromise<Mailchimp.ConversationMessage> {
        return core.HttpResponsePromise.fromPromise(this.__getMessage(request, requestOptions));
    }

    private async __getMessage(
        request: Mailchimp.GetMessageConversationsRequest,
        requestOptions?: ConversationsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mailchimp.ConversationMessage>> {
        const {
            conversation_id: conversationId,
            message_id: messageId,
            fields,
            exclude_fields: excludeFields,
        } = request;
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
                `3.0/conversations/${core.url.encodePathParam(conversationId)}/messages/${core.url.encodePathParam(messageId)}`,
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
            return { data: _response.body as Mailchimp.ConversationMessage, rawResponse: _response.rawResponse };
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
            "/3.0/conversations/{conversation_id}/messages/{message_id}",
        );
    }
}
