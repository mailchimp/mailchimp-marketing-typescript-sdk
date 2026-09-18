//  This file was auto-generated from our API Definition.

/**
 * The [average campaign statistics](https://mailchimp.com/resources/research/email-marketing-benchmarks/?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for all campaigns in the account's specified industry.
 */
export interface ListRootResponseIndustryStats {
    /** The average bounce rate for all campaigns in the account's specified industry. */
    bounceRate?: number;
    /** The average unique click rate for all campaigns in the account's specified industry. */
    clickRate?: number;
    /** The average unique open rate for all campaigns in the account's specified industry. */
    openRate?: number;
}
