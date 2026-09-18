//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const FacebookAdsBudget: core.serialization.ObjectSchema<
    serializers.FacebookAdsBudget.Raw,
    Mailchimp.FacebookAdsBudget
> = core.serialization.object({
    currencyCode: core.serialization.property("currency_code", core.serialization.string().optional()),
    duration: core.serialization.number().optional(),
    totalAmount: core.serialization.property("total_amount", core.serialization.number().optional()),
});

export declare namespace FacebookAdsBudget {
    export interface Raw {
        currency_code?: string | null;
        duration?: number | null;
        total_amount?: number | null;
    }
}
