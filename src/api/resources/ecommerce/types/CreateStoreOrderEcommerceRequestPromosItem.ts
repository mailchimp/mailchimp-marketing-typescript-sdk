//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

export interface CreateStoreOrderEcommerceRequestPromosItem {
    amountDiscounted: Mailchimp.CreateStoreOrderEcommerceRequestPromosItemAmountDiscounted;
    /** The Promo Code */
    code: string;
    /** Type of discount. For free shipping set type to fixed */
    type: Mailchimp.CreateStoreOrderEcommerceRequestPromosItemType;
}
