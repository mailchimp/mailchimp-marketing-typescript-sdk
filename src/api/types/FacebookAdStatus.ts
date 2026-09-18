//  This file was auto-generated from our API Definition.

/** The status of this outreach. */
export const FacebookAdStatus = {
    Save: "save",
    Paused: "paused",
    Schedule: "schedule",
    Scheduled: "scheduled",
    Sending: "sending",
    Sent: "sent",
    Canceled: "canceled",
    Canceling: "canceling",
    Active: "active",
    Disconnected: "disconnected",
    Somepaused: "somepaused",
    Draft: "draft",
    Completed: "completed",
    PartialRejected: "partialRejected",
    Pending: "pending",
    Rejected: "rejected",
    Published: "published",
    Unpublished: "unpublished",
} as const;
export type FacebookAdStatus = (typeof FacebookAdStatus)[keyof typeof FacebookAdStatus];
