//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Audience settings
 */
export interface ReportingFacebookAdAudience {
    emailSource?: Mailchimp.ReportingFacebookAdAudienceEmailSource;
    /** To include list contacts as part of audience */
    includeSourceInTarget?: boolean;
    /** To find similar audience in given country */
    lookalikeCountryCode?: string;
    /** List or Facebook based audience */
    sourceType?: Mailchimp.ReportingFacebookAdAudienceSourceType;
    targetingSpecs?: Mailchimp.ReportingFacebookAdAudienceTargetingSpecs;
    /** Type of the audience */
    type?: Mailchimp.ReportingFacebookAdAudienceType;
}
