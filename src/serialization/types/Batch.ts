//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { BatchCompletedAt } from "./BatchCompletedAt.js";
import { BatchLinksItem } from "./BatchLinksItem.js";
import { BatchStatus } from "./BatchStatus.js";

export const Batch: core.serialization.ObjectSchema<serializers.Batch.Raw, Mailchimp.Batch> = core.serialization.object(
    {
        links: core.serialization.property("_links", core.serialization.list(BatchLinksItem).optional()),
        completedAt: core.serialization.property("completed_at", BatchCompletedAt.optional()),
        erroredOperations: core.serialization.property("errored_operations", core.serialization.number().optional()),
        finishedOperations: core.serialization.property("finished_operations", core.serialization.number().optional()),
        id: core.serialization.string().optional(),
        responseBodyUrl: core.serialization.property("response_body_url", core.serialization.string().optional()),
        status: BatchStatus.optional(),
        submittedAt: core.serialization.property("submitted_at", core.serialization.date().optional()),
        totalOperations: core.serialization.property("total_operations", core.serialization.number().optional()),
    },
);

export declare namespace Batch {
    export interface Raw {
        _links?: BatchLinksItem.Raw[] | null;
        completed_at?: BatchCompletedAt.Raw | null;
        errored_operations?: number | null;
        finished_operations?: number | null;
        id?: string | null;
        response_body_url?: string | null;
        status?: BatchStatus.Raw | null;
        submitted_at?: string | null;
        total_operations?: number | null;
    }
}
