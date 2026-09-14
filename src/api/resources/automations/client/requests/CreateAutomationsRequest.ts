//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         recipients: {},
 *         trigger_settings: {
 *             workflow_type: "abandonedBrowse"
 *         }
 *     }
 */
export interface CreateAutomationsRequest {
    /** List settings for the Automation. */
    recipients: CreateAutomationsRequest.Recipients;
    /** The settings for the Automation workflow. */
    settings?: CreateAutomationsRequest.Settings;
    /** Trigger settings for the Automation. */
    trigger_settings: CreateAutomationsRequest.TriggerSettings;
}

export namespace CreateAutomationsRequest {
    /**
     * List settings for the Automation.
     */
    export interface Recipients {
        /** The id of the List. */
        list_id?: string | undefined;
        /** The id of the store. */
        store_id?: string | undefined;
    }

    /**
     * The settings for the Automation workflow.
     */
    export interface Settings {
        /** The 'from' name for the Automation (not an email address). */
        from_name?: string | undefined;
        /** The reply-to email address for the Automation. */
        reply_to?: string | undefined;
    }

    /**
     * Trigger settings for the Automation.
     */
    export interface TriggerSettings {
        /** The type of Automation workflow. */
        workflow_type: TriggerSettings.WorkflowType;
    }

    export namespace TriggerSettings {
        /** The type of Automation workflow. */
        export const WorkflowType = {
            AbandonedBrowse: "abandonedBrowse",
            AbandonedCart: "abandonedCart",
            EmailFollowup: "emailFollowup",
            SingleWelcome: "singleWelcome",
        } as const;
        export type WorkflowType = (typeof WorkflowType)[keyof typeof WorkflowType];
    }
}
