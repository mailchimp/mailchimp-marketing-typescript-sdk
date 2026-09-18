//  This file was auto-generated from our API Definition.

/** The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue -- or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_criteria is ignored. For Multivariate Campaigns with 'manual' as the winner_criteria, the winner must be chosen in the Mailchimp web application. */
export const CreateCampaignsRequestVariateSettingsWinnerCriteria = {
    Opens: "opens",
    Clicks: "clicks",
    Manual: "manual",
    TotalRevenue: "total_revenue",
} as const;
export type CreateCampaignsRequestVariateSettingsWinnerCriteria =
    (typeof CreateCampaignsRequestVariateSettingsWinnerCriteria)[keyof typeof CreateCampaignsRequestVariateSettingsWinnerCriteria];
