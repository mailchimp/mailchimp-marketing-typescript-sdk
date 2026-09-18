//  This file was auto-generated from our API Definition.

/**
 * A single email domain's performance
 */
export interface ListDomainPerformanceReportsResponseDomainsItem {
    /** The number of bounces at a domain. */
    bounces?: number;
    /** The percentage of total bounces from this domain. */
    bouncesPct?: number;
    /** The number of clicks for a domain. */
    clicks?: number;
    /** The percentage of total clicks from this domain. */
    clicksPct?: number;
    /** The number of successful deliveries for a domain. */
    delivered?: number;
    /** The name of the domain (gmail.com, hotmail.com, yahoo.com). */
    domain?: string;
    /** The percentage of total emails that went to this domain. */
    emailsPct?: number;
    /** The number of emails sent to that specific domain. */
    emailsSent?: number;
    /** The number of opens for a domain. */
    opens?: number;
    /** The percentage of total opens from this domain. */
    opensPct?: number;
    /** The total number of unsubscribes for a domain. */
    unsubs?: number;
    /** The percentage of total unsubscribes from this domain. */
    unsubsPct?: number;
}
