//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SurveySectionRequestQuestion } from "./SurveySectionRequestQuestion.js";
import { SurveySectionRequestType } from "./SurveySectionRequestType.js";

export const SurveySectionRequest: core.serialization.ObjectSchema<
    serializers.SurveySectionRequest.Raw,
    Mailchimp.SurveySectionRequest
> = core.serialization.object({
    id: core.serialization.string().optional(),
    type: SurveySectionRequestType,
    text: core.serialization.string().optional(),
    options: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    question: SurveySectionRequestQuestion.optional(),
});

export declare namespace SurveySectionRequest {
    export interface Raw {
        id?: string | null;
        type: SurveySectionRequestType.Raw;
        text?: string | null;
        options?: Record<string, unknown> | null;
        question?: SurveySectionRequestQuestion.Raw | null;
    }
}
