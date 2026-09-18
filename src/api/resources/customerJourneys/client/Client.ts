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

export declare namespace CustomerJourneysClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class CustomerJourneysClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<CustomerJourneysClient.Options>;

    constructor(options: CustomerJourneysClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * A step trigger in an Automation flow. To use it, create a starting point or step from the Automation flow builder in the app using the Customer Journeys API condition. We’ll provide a url during the process that includes the {journey_id} and {step_id}. You’ll then be able to use this endpoint to trigger the condition for the posted contact.
     *
     * @param {Mailchimp.CreateJourneyStepActionTriggerCustomerJourneysRequest} request
     * @param {CustomerJourneysClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.MailchimpError}
     * @throws {@link errors.MailchimpTimeoutError}
     *
     * @example
     *     await client.customerJourneys.createJourneyStepActionTrigger({
     *         journeyId: 1,
     *         stepId: 1,
     *         emailAddress: "email_address"
     *     })
     */
    public createJourneyStepActionTrigger(
        request: Mailchimp.CreateJourneyStepActionTriggerCustomerJourneysRequest,
        requestOptions?: CustomerJourneysClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__createJourneyStepActionTrigger(request, requestOptions));
    }

    private async __createJourneyStepActionTrigger(
        request: Mailchimp.CreateJourneyStepActionTriggerCustomerJourneysRequest,
        requestOptions?: CustomerJourneysClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { journeyId, stepId, ..._body } = request;
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
                `3.0/customer-journeys/journeys/${core.url.encodePathParam(journeyId)}/steps/${core.url.encodePathParam(stepId)}/actions/trigger`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(
                serializers.CreateJourneyStepActionTriggerCustomerJourneysRequest.jsonOrThrow(_body, {
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
            "/3.0/customer-journeys/journeys/{journey_id}/steps/{step_id}/actions/trigger",
        );
    }
}
