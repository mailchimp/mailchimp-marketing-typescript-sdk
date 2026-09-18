//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListRootResponseFirstPaymentOne } from "./ListRootResponseFirstPaymentOne.js";

export const ListRootResponseFirstPayment: core.serialization.Schema<
    serializers.ListRootResponseFirstPayment.Raw,
    Mailchimp.ListRootResponseFirstPayment
> = core.serialization.undiscriminatedUnion([core.serialization.date(), ListRootResponseFirstPaymentOne]);

export declare namespace ListRootResponseFirstPayment {
    export type Raw = string | ListRootResponseFirstPaymentOne.Raw;
}
