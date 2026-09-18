//  This file was auto-generated from our API Definition.

/**
 * Choose whether the campaign should use [Batch Delivery](https://mailchimp.com/help/schedule-batch-delivery/). Cannot be set to `true` for campaigns using [Timewarp](https://mailchimp.com/help/use-timewarp/).
 */
export interface CreateActionScheduleCampaignsRequestBatchDelivery {
    /** The number of batches for the campaign send. */
    batchCount: number;
    /** The delay, in minutes, between batches. */
    batchDelay: number;
}
