//  This file was auto-generated from our API Definition.

/**
 * The tracking options for a campaign.
 */
export interface CampaignTrackingOptions {
    /** Deprecated */
    capsule?: CampaignTrackingOptions.Capsule | undefined;
    /** The custom slug for [ClickTale](https://mailchimp.com/help/additional-tracking-options-for-campaigns/) tracking (max of 50 bytes). */
    clicktale?: string | undefined;
    /** Whether to enable e-commerce tracking. */
    ecomm360?: boolean | undefined;
    /** Deprecated */
    goal_tracking?: boolean | undefined;
    /** The custom slug for [Google Analytics](https://mailchimp.com/help/integrate-google-analytics-with-mailchimp/) tracking (max of 50 bytes). */
    google_analytics?: string | undefined;
    /** Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the HTML version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns. */
    html_clicks?: boolean | undefined;
    /** Whether to [track opens](https://mailchimp.com/help/about-open-tracking/). Defaults to `true`. Cannot be set to false for variate campaigns. */
    opens?: boolean | undefined;
    /** Deprecated */
    salesforce?: CampaignTrackingOptions.Salesforce | undefined;
    /** Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the plain-text version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns. */
    text_clicks?: boolean | undefined;
}

export namespace CampaignTrackingOptions {
    /**
     * Deprecated
     */
    export interface Capsule {
        /** Update contact notes for a campaign based on subscriber email addresses. */
        notes?: boolean | undefined;
    }

    /**
     * Deprecated
     */
    export interface Salesforce {
        /** Create a campaign in a connected Salesforce account. */
        campaign?: boolean | undefined;
        /** Update contact notes for a campaign based on subscriber email addresses. */
        notes?: boolean | undefined;
    }
}
