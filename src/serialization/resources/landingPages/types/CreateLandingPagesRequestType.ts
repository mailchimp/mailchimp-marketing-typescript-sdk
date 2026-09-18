//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateLandingPagesRequestType: core.serialization.Schema<
    serializers.CreateLandingPagesRequestType.Raw,
    Mailchimp.CreateLandingPagesRequestType
> = core.serialization.enum_(["signup", "product"]);

export declare namespace CreateLandingPagesRequestType {
    export type Raw = "signup" | "product";
}
