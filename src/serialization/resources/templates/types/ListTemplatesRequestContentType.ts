//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListTemplatesRequestContentType: core.serialization.Schema<
    serializers.ListTemplatesRequestContentType.Raw,
    Mailchimp.ListTemplatesRequestContentType
> = core.serialization.enum_(["html", "template", "multichannel"]);

export declare namespace ListTemplatesRequestContentType {
    export type Raw = "html" | "template" | "multichannel";
}
