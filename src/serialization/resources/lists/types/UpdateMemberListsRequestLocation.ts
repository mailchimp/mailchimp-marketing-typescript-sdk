//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateMemberListsRequestLocationLatitude } from "./UpdateMemberListsRequestLocationLatitude.js";
import { UpdateMemberListsRequestLocationLongitude } from "./UpdateMemberListsRequestLocationLongitude.js";

export const UpdateMemberListsRequestLocation: core.serialization.ObjectSchema<
    serializers.UpdateMemberListsRequestLocation.Raw,
    Mailchimp.UpdateMemberListsRequestLocation
> = core.serialization.object({
    latitude: UpdateMemberListsRequestLocationLatitude.optional(),
    longitude: UpdateMemberListsRequestLocationLongitude.optional(),
});

export declare namespace UpdateMemberListsRequestLocation {
    export interface Raw {
        latitude?: UpdateMemberListsRequestLocationLatitude.Raw | null;
        longitude?: UpdateMemberListsRequestLocationLongitude.Raw | null;
    }
}
