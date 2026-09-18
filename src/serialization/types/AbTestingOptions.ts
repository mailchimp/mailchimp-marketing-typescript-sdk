//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AbTestingOptionsPickWinner } from "./AbTestingOptionsPickWinner.js";
import { AbTestingOptionsSplitTest } from "./AbTestingOptionsSplitTest.js";
import { AbTestingOptionsWaitUnits } from "./AbTestingOptionsWaitUnits.js";

export const AbTestingOptions: core.serialization.ObjectSchema<
    serializers.AbTestingOptions.Raw,
    Mailchimp.AbTestingOptions
> = core.serialization.object({
    fromNameA: core.serialization.property("from_name_a", core.serialization.string().optional()),
    fromNameB: core.serialization.property("from_name_b", core.serialization.string().optional()),
    pickWinner: core.serialization.property("pick_winner", AbTestingOptionsPickWinner.optional()),
    replyEmailA: core.serialization.property("reply_email_a", core.serialization.string().optional()),
    replyEmailB: core.serialization.property("reply_email_b", core.serialization.string().optional()),
    sendTimeA: core.serialization.property("send_time_a", core.serialization.date().optional()),
    sendTimeB: core.serialization.property("send_time_b", core.serialization.date().optional()),
    sendTimeWinner: core.serialization.property("send_time_winner", core.serialization.string().optional()),
    splitSize: core.serialization.property("split_size", core.serialization.number().optional()),
    splitTest: core.serialization.property("split_test", AbTestingOptionsSplitTest.optional()),
    subjectA: core.serialization.property("subject_a", core.serialization.string().optional()),
    subjectB: core.serialization.property("subject_b", core.serialization.string().optional()),
    waitTime: core.serialization.property("wait_time", core.serialization.number().optional()),
    waitUnits: core.serialization.property("wait_units", AbTestingOptionsWaitUnits.optional()),
});

export declare namespace AbTestingOptions {
    export interface Raw {
        from_name_a?: string | null;
        from_name_b?: string | null;
        pick_winner?: AbTestingOptionsPickWinner.Raw | null;
        reply_email_a?: string | null;
        reply_email_b?: string | null;
        send_time_a?: string | null;
        send_time_b?: string | null;
        send_time_winner?: string | null;
        split_size?: number | null;
        split_test?: AbTestingOptionsSplitTest.Raw | null;
        subject_a?: string | null;
        subject_b?: string | null;
        wait_time?: number | null;
        wait_units?: AbTestingOptionsWaitUnits.Raw | null;
    }
}
