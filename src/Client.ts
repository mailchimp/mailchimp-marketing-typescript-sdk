//  This file was auto-generated from our API Definition.

import { AccountExportsClient } from "./api/resources/accountExports/client/Client.js";
import { ActivityFeedClient } from "./api/resources/activityFeed/client/Client.js";
import { AuthorizedAppsClient } from "./api/resources/authorizedApps/client/Client.js";
import { AutomationsClient } from "./api/resources/automations/client/Client.js";
import { BatchesClient } from "./api/resources/batches/client/Client.js";
import { BatchWebhooksClient } from "./api/resources/batchWebhooks/client/Client.js";
import { CampaignFoldersClient } from "./api/resources/campaignFolders/client/Client.js";
import { CampaignsClient } from "./api/resources/campaigns/client/Client.js";
import { ConnectedSitesClient } from "./api/resources/connectedSites/client/Client.js";
import { ConversationsClient } from "./api/resources/conversations/client/Client.js";
import { CustomerJourneysClient } from "./api/resources/customerJourneys/client/Client.js";
import { EcommerceClient } from "./api/resources/ecommerce/client/Client.js";
import { FacebookAdsClient } from "./api/resources/facebookAds/client/Client.js";
import { FileManagerClient } from "./api/resources/fileManager/client/Client.js";
import { LandingPagesClient } from "./api/resources/landingPages/client/Client.js";
import { ListsClient } from "./api/resources/lists/client/Client.js";
import { PingClient } from "./api/resources/ping/client/Client.js";
import { ReportingClient } from "./api/resources/reporting/client/Client.js";
import { ReportsClient } from "./api/resources/reports/client/Client.js";
import { RootClient } from "./api/resources/root/client/Client.js";
import { SearchCampaignsClient } from "./api/resources/searchCampaigns/client/Client.js";
import { SearchMembersClient } from "./api/resources/searchMembers/client/Client.js";
import { SmsCampaignsClient } from "./api/resources/smsCampaigns/client/Client.js";
import { SurveysClient } from "./api/resources/surveys/client/Client.js";
import { TemplateFoldersClient } from "./api/resources/templateFolders/client/Client.js";
import { TemplatesClient } from "./api/resources/templates/client/Client.js";
import { VerifiedDomainsClient } from "./api/resources/verifiedDomains/client/Client.js";
import type { BaseClientOptions, BaseRequestOptions } from "./BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "./BaseClient.js";
import * as core from "./core/index.js";

export declare namespace MailchimpClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class MailchimpClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<MailchimpClient.Options>;
    protected _root: RootClient | undefined;
    protected _accountExports: AccountExportsClient | undefined;
    protected _activityFeed: ActivityFeedClient | undefined;
    protected _authorizedApps: AuthorizedAppsClient | undefined;
    protected _automations: AutomationsClient | undefined;
    protected _batchWebhooks: BatchWebhooksClient | undefined;
    protected _batches: BatchesClient | undefined;
    protected _campaignFolders: CampaignFoldersClient | undefined;
    protected _campaigns: CampaignsClient | undefined;
    protected _connectedSites: ConnectedSitesClient | undefined;
    protected _conversations: ConversationsClient | undefined;
    protected _customerJourneys: CustomerJourneysClient | undefined;
    protected _ecommerce: EcommerceClient | undefined;
    protected _facebookAds: FacebookAdsClient | undefined;
    protected _fileManager: FileManagerClient | undefined;
    protected _landingPages: LandingPagesClient | undefined;
    protected _lists: ListsClient | undefined;
    protected _surveys: SurveysClient | undefined;
    protected _ping: PingClient | undefined;
    protected _reporting: ReportingClient | undefined;
    protected _reports: ReportsClient | undefined;
    protected _searchCampaigns: SearchCampaignsClient | undefined;
    protected _smsCampaigns: SmsCampaignsClient | undefined;
    protected _searchMembers: SearchMembersClient | undefined;
    protected _templateFolders: TemplateFoldersClient | undefined;
    protected _templates: TemplatesClient | undefined;
    protected _verifiedDomains: VerifiedDomainsClient | undefined;

    constructor(options: MailchimpClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    public get root(): RootClient {
        return (this._root ??= new RootClient(this._options));
    }

    public get accountExports(): AccountExportsClient {
        return (this._accountExports ??= new AccountExportsClient(this._options));
    }

    public get activityFeed(): ActivityFeedClient {
        return (this._activityFeed ??= new ActivityFeedClient(this._options));
    }

    public get authorizedApps(): AuthorizedAppsClient {
        return (this._authorizedApps ??= new AuthorizedAppsClient(this._options));
    }

    public get automations(): AutomationsClient {
        return (this._automations ??= new AutomationsClient(this._options));
    }

    public get batchWebhooks(): BatchWebhooksClient {
        return (this._batchWebhooks ??= new BatchWebhooksClient(this._options));
    }

    public get batches(): BatchesClient {
        return (this._batches ??= new BatchesClient(this._options));
    }

    public get campaignFolders(): CampaignFoldersClient {
        return (this._campaignFolders ??= new CampaignFoldersClient(this._options));
    }

    public get campaigns(): CampaignsClient {
        return (this._campaigns ??= new CampaignsClient(this._options));
    }

    public get connectedSites(): ConnectedSitesClient {
        return (this._connectedSites ??= new ConnectedSitesClient(this._options));
    }

    public get conversations(): ConversationsClient {
        return (this._conversations ??= new ConversationsClient(this._options));
    }

    public get customerJourneys(): CustomerJourneysClient {
        return (this._customerJourneys ??= new CustomerJourneysClient(this._options));
    }

    public get ecommerce(): EcommerceClient {
        return (this._ecommerce ??= new EcommerceClient(this._options));
    }

    public get facebookAds(): FacebookAdsClient {
        return (this._facebookAds ??= new FacebookAdsClient(this._options));
    }

    public get fileManager(): FileManagerClient {
        return (this._fileManager ??= new FileManagerClient(this._options));
    }

    public get landingPages(): LandingPagesClient {
        return (this._landingPages ??= new LandingPagesClient(this._options));
    }

    public get lists(): ListsClient {
        return (this._lists ??= new ListsClient(this._options));
    }

    public get surveys(): SurveysClient {
        return (this._surveys ??= new SurveysClient(this._options));
    }

    public get ping(): PingClient {
        return (this._ping ??= new PingClient(this._options));
    }

    public get reporting(): ReportingClient {
        return (this._reporting ??= new ReportingClient(this._options));
    }

    public get reports(): ReportsClient {
        return (this._reports ??= new ReportsClient(this._options));
    }

    public get searchCampaigns(): SearchCampaignsClient {
        return (this._searchCampaigns ??= new SearchCampaignsClient(this._options));
    }

    public get smsCampaigns(): SmsCampaignsClient {
        return (this._smsCampaigns ??= new SmsCampaignsClient(this._options));
    }

    public get searchMembers(): SearchMembersClient {
        return (this._searchMembers ??= new SearchMembersClient(this._options));
    }

    public get templateFolders(): TemplateFoldersClient {
        return (this._templateFolders ??= new TemplateFoldersClient(this._options));
    }

    public get templates(): TemplatesClient {
        return (this._templates ??= new TemplatesClient(this._options));
    }

    public get verifiedDomains(): VerifiedDomainsClient {
        return (this._verifiedDomains ??= new VerifiedDomainsClient(this._options));
    }

    /**
     * Make a passthrough request using the SDK's configured auth, retry, logging, etc.
     * This is useful for making requests to endpoints not yet supported in the SDK.
     * The input can be a URL string, URL object, or Request object. Relative paths are resolved against the configured base URL.
     *
     * @param {Request | string | URL} input - The URL, path, or Request object.
     * @param {RequestInit} init - Standard fetch RequestInit options.
     * @param {core.PassthroughRequest.RequestOptions} requestOptions - Per-request overrides (timeout, retries, headers, abort signal).
     * @returns {Promise<Response>} A standard Response object.
     */
    public async fetch(
        input: Request | string | URL,
        init?: RequestInit,
        requestOptions?: core.PassthroughRequest.RequestOptions,
    ): Promise<Response> {
        return core.makePassthroughRequest(
            input,
            init,
            {
                baseUrl: this._options.baseUrl ?? this._options.environment,
                headers: this._options.headers,
                timeoutInSeconds: this._options.timeoutInSeconds,
                maxRetries: this._options.maxRetries,
                fetch: this._options.fetch,
                logging: this._options.logging,
                getAuthHeaders: async () => (await this._options.authProvider.getAuthRequest()).headers,
            },
            requestOptions,
        );
    }
}
