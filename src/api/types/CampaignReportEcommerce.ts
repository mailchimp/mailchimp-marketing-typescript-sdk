//  This file was auto-generated from our API Definition.

/**
 * E-Commerce stats for a campaign.
 */
export interface CampaignReportEcommerce {
    currencyCode?: string;
    /** The total orders for a campaign. */
    totalOrders?: number;
    /** The total revenue for a campaign. Calculated as the sum of all order totals minus shipping and tax totals. */
    totalRevenue?: number;
    /** The total spent for a campaign. Calculated as the sum of all order totals with no deductions. */
    totalSpent?: number;
}
