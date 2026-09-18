//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListActivityListsResponseActivityItemLinksItem } from "./ListActivityListsResponseActivityItemLinksItem.js";

export const ListActivityListsResponseActivityItem: core.serialization.ObjectSchema<
    serializers.ListActivityListsResponseActivityItem.Raw,
    Mailchimp.ListActivityListsResponseActivityItem
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListActivityListsResponseActivityItemLinksItem).optional(),
    ),
    day: core.serialization.string().optional(),
    emailsSent: core.serialization.property("emails_sent", core.serialization.number().optional()),
    hardBounce: core.serialization.property("hard_bounce", core.serialization.number().optional()),
    otherAdds: core.serialization.property("other_adds", core.serialization.number().optional()),
    otherRemoves: core.serialization.property("other_removes", core.serialization.number().optional()),
    recipientClicks: core.serialization.property("recipient_clicks", core.serialization.number().optional()),
    softBounce: core.serialization.property("soft_bounce", core.serialization.number().optional()),
    subs: core.serialization.number().optional(),
    uniqueOpens: core.serialization.property("unique_opens", core.serialization.number().optional()),
    unsubs: core.serialization.number().optional(),
});

export declare namespace ListActivityListsResponseActivityItem {
    export interface Raw {
        _links?: ListActivityListsResponseActivityItemLinksItem.Raw[] | null;
        day?: string | null;
        emails_sent?: number | null;
        hard_bounce?: number | null;
        other_adds?: number | null;
        other_removes?: number | null;
        recipient_clicks?: number | null;
        soft_bounce?: number | null;
        subs?: number | null;
        unique_opens?: number | null;
        unsubs?: number | null;
    }
}
