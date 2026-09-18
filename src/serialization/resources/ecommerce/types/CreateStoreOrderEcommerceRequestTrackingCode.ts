//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateStoreOrderEcommerceRequestTrackingCode: core.serialization.Schema<
    serializers.CreateStoreOrderEcommerceRequestTrackingCode.Raw,
    Mailchimp.CreateStoreOrderEcommerceRequestTrackingCode
> = core.serialization.enum_(["prec"]);

export declare namespace CreateStoreOrderEcommerceRequestTrackingCode {
    export type Raw = "prec";
}
