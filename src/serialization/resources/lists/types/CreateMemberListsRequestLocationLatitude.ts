//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateMemberListsRequestLocationLatitude: core.serialization.Schema<
    serializers.CreateMemberListsRequestLocationLatitude.Raw,
    Mailchimp.CreateMemberListsRequestLocationLatitude
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string()]);

export declare namespace CreateMemberListsRequestLocationLatitude {
    export type Raw = number | string;
}
