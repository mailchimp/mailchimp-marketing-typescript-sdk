//  This file was auto-generated from our API Definition.

/** The type of Automation workflow. */
export const AutomationWorkflowEmailTriggerSettingsWorkflowType = {
    AbandonedBrowse: "abandonedBrowse",
    AbandonedCart: "abandonedCart",
    Api: "api",
    BestCustomers: "bestCustomers",
    CategoryFollowup: "categoryFollowup",
    DateAdded: "dateAdded",
    EmailFollowup: "emailFollowup",
    EmailSeries: "emailSeries",
    GroupAdd: "groupAdd",
    GroupRemove: "groupRemove",
    Mandrill: "mandrill",
    ProductFollowup: "productFollowup",
    PurchaseFollowup: "purchaseFollowup",
    RecurringEvent: "recurringEvent",
    SpecialEvent: "specialEvent",
    VisitUrl: "visitUrl",
    WelcomeSeries: "welcomeSeries",
} as const;
export type AutomationWorkflowEmailTriggerSettingsWorkflowType =
    (typeof AutomationWorkflowEmailTriggerSettingsWorkflowType)[keyof typeof AutomationWorkflowEmailTriggerSettingsWorkflowType];
