//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpsertMemberListsRequestLocationLatitude } from "./UpsertMemberListsRequestLocationLatitude.js";
import { UpsertMemberListsRequestLocationLongitude } from "./UpsertMemberListsRequestLocationLongitude.js";

export const UpsertMemberListsRequestLocation: core.serialization.ObjectSchema<
    serializers.UpsertMemberListsRequestLocation.Raw,
    Mailchimp.UpsertMemberListsRequestLocation
> = core.serialization.object({
    latitude: UpsertMemberListsRequestLocationLatitude.optional(),
    longitude: UpsertMemberListsRequestLocationLongitude.optional(),
});

export declare namespace UpsertMemberListsRequestLocation {
    export interface Raw {
        latitude?: UpsertMemberListsRequestLocationLatitude.Raw | null;
        longitude?: UpsertMemberListsRequestLocationLongitude.Raw | null;
    }
}
