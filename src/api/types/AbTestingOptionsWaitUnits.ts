//  This file was auto-generated from our API Definition.

/** How unit of time for measuring the winner ('hours' or 'days'). This cannot be changed after a campaign is sent. */
export const AbTestingOptionsWaitUnits = {
    Hours: "hours",
    Days: "days",
} as const;
export type AbTestingOptionsWaitUnits = (typeof AbTestingOptionsWaitUnits)[keyof typeof AbTestingOptionsWaitUnits];
