//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ECommerceOrderTaxTotal: core.serialization.Schema<
    serializers.ECommerceOrderTaxTotal.Raw,
    Mailchimp.ECommerceOrderTaxTotal
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string()]);

export declare namespace ECommerceOrderTaxTotal {
    export type Raw = number | string;
}
