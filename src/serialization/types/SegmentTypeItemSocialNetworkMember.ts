//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemSocialNetworkMemberField } from "./SegmentTypeItemSocialNetworkMemberField.js";
import { SegmentTypeItemSocialNetworkMemberOp } from "./SegmentTypeItemSocialNetworkMemberOp.js";
import { SegmentTypeItemSocialNetworkMemberValue } from "./SegmentTypeItemSocialNetworkMemberValue.js";

export const SegmentTypeItemSocialNetworkMember: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemSocialNetworkMember.Raw,
    Mailchimp.SegmentTypeItemSocialNetworkMember
> = core.serialization.object({
    field: SegmentTypeItemSocialNetworkMemberField,
    op: SegmentTypeItemSocialNetworkMemberOp,
    value: SegmentTypeItemSocialNetworkMemberValue,
});

export declare namespace SegmentTypeItemSocialNetworkMember {
    export interface Raw {
        field: SegmentTypeItemSocialNetworkMemberField.Raw;
        op: SegmentTypeItemSocialNetworkMemberOp.Raw;
        value: SegmentTypeItemSocialNetworkMemberValue.Raw;
    }
}
