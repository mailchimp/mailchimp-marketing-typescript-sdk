//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { BatchSubscribeOrUnsubscribeListsResponseErrorsItemErrorCode } from "./BatchSubscribeOrUnsubscribeListsResponseErrorsItemErrorCode.js";

export const BatchSubscribeOrUnsubscribeListsResponseErrorsItem: core.serialization.ObjectSchema<
    serializers.BatchSubscribeOrUnsubscribeListsResponseErrorsItem.Raw,
    Mailchimp.BatchSubscribeOrUnsubscribeListsResponseErrorsItem
> = core.serialization.object({
    emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
    error: core.serialization.string().optional(),
    errorCode: core.serialization.property(
        "error_code",
        BatchSubscribeOrUnsubscribeListsResponseErrorsItemErrorCode.optional(),
    ),
    field: core.serialization.string().optional(),
    fieldMessage: core.serialization.property("field_message", core.serialization.string().optional()),
});

export declare namespace BatchSubscribeOrUnsubscribeListsResponseErrorsItem {
    export interface Raw {
        email_address?: string | null;
        error?: string | null;
        error_code?: BatchSubscribeOrUnsubscribeListsResponseErrorsItemErrorCode.Raw | null;
        field?: string | null;
        field_message?: string | null;
    }
}
