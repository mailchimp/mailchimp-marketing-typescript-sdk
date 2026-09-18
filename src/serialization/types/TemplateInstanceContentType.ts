//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const TemplateInstanceContentType: core.serialization.Schema<
    serializers.TemplateInstanceContentType.Raw,
    Mailchimp.TemplateInstanceContentType
> = core.serialization.enum_(["template", "multichannel", "html"]);

export declare namespace TemplateInstanceContentType {
    export type Raw = "template" | "multichannel" | "html";
}
