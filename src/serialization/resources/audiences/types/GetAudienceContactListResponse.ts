//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { AudiencesContact } from "../../../types/AudiencesContact.js";
import { GetAudienceContactListResponseLinksItem } from "./GetAudienceContactListResponseLinksItem.js";

export const GetAudienceContactListResponse: core.serialization.ObjectSchema<
    serializers.GetAudienceContactListResponse.Raw,
    Mailchimp.GetAudienceContactListResponse
> = core.serialization.object({
    contacts: core.serialization.list(AudiencesContact).optional(),
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
    links: core.serialization.property(
        "_links",
        core.serialization.list(GetAudienceContactListResponseLinksItem).optional(),
    ),
});

export declare namespace GetAudienceContactListResponse {
    export interface Raw {
        contacts?: AudiencesContact.Raw[] | null;
        next_cursor?: string | null;
        _links?: GetAudienceContactListResponseLinksItem.Raw[] | null;
    }
}
