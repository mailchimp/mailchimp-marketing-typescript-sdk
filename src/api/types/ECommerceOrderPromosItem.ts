//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

export interface ECommerceOrderPromosItem {
    /** The amount of discount applied on the total price. For example if the total cost was $100 and the customer paid $95.5, amount_discounted will be 4.5 For free shipping set amount_discounted to 0 */
    amountDiscounted?: number;
    /** The Promo Code */
    code?: string;
    /** Type of discount. For free shipping set type to fixed */
    type?: Mailchimp.ECommerceOrderPromosItemType;
}
