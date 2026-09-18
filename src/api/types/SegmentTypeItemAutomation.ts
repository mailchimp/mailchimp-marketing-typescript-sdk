//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by interaction with an Automation workflow.
 */
export interface SegmentTypeItemAutomation {
    /** Segment by interaction with an Automation workflow. */
    field: Mailchimp.SegmentTypeItemAutomationField;
    /** The status of the member with regard to the automation workflow. One of the following: has started the workflow, has completed the workflow, has not started the workflow, or has not completed the workflow. */
    op: Mailchimp.SegmentTypeItemAutomationOp;
    /** The web id for the automation workflow to segment against. */
    value: string;
}
