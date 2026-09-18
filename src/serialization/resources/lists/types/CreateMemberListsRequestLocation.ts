//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateMemberListsRequestLocationLatitude } from "./CreateMemberListsRequestLocationLatitude.js";
import { CreateMemberListsRequestLocationLongitude } from "./CreateMemberListsRequestLocationLongitude.js";

export const CreateMemberListsRequestLocation: core.serialization.ObjectSchema<
    serializers.CreateMemberListsRequestLocation.Raw,
    Mailchimp.CreateMemberListsRequestLocation
> = core.serialization.object({
    latitude: CreateMemberListsRequestLocationLatitude.optional(),
    longitude: CreateMemberListsRequestLocationLongitude.optional(),
});

export declare namespace CreateMemberListsRequestLocation {
    export interface Raw {
        latitude?: CreateMemberListsRequestLocationLatitude.Raw | null;
        longitude?: CreateMemberListsRequestLocationLongitude.Raw | null;
    }
}
