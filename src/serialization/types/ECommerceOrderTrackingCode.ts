//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ECommerceOrderTrackingCode: core.serialization.Schema<
    serializers.ECommerceOrderTrackingCode.Raw,
    Mailchimp.ECommerceOrderTrackingCode
> = core.serialization.enum_(["prec"]);

export declare namespace ECommerceOrderTrackingCode {
    export type Raw = "prec";
}
