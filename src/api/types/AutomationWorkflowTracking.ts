//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * The tracking options for the Automation.
 */
export interface AutomationWorkflowTracking {
    /** Deprecated */
    capsule?: Mailchimp.AutomationWorkflowTrackingCapsule;
    /** The custom slug for [ClickTale](https://mailchimp.com/help/additional-tracking-options-for-campaigns/) tracking (max of 50 bytes). */
    clicktale?: string;
    /** Whether to enable e-commerce tracking. */
    ecomm360?: boolean;
    /** Deprecated */
    goalTracking?: boolean;
    /** The custom slug for [Google Analytics](https://mailchimp.com/help/integrate-google-analytics-with-mailchimp/) tracking (max of 50 bytes). */
    googleAnalytics?: string;
    /** Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the HTML version of the Automation. Defaults to `true`. */
    htmlClicks?: boolean;
    /** Whether to [track opens](https://mailchimp.com/help/about-open-tracking/). Defaults to `true`. */
    opens?: boolean;
    /** Deprecated */
    salesforce?: Mailchimp.AutomationWorkflowTrackingSalesforce;
    /** Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the plain-text version of the Automation. Defaults to `true`. */
    textClicks?: boolean;
}
