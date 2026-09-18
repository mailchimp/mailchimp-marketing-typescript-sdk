//  This file was auto-generated from our API Definition.

/** The type of template the landing page has. */
export const CreateLandingPagesRequestType = {
    Signup: "signup",
    Product: "product",
} as const;
export type CreateLandingPagesRequestType =
    (typeof CreateLandingPagesRequestType)[keyof typeof CreateLandingPagesRequestType];
