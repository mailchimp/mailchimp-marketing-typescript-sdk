//  This file was auto-generated from our API Definition.

/** The Domain's current status. */
export const CreateVerifiedDomainsResponseStatus = {
    VerificationInProgress: "VERIFICATION_IN_PROGRESS",
    Verified: "VERIFIED",
    Expired: "EXPIRED",
    Error: "ERROR",
    AuthenticationInProgress: "AUTHENTICATION_IN_PROGRESS",
    AuthenticationError: "AUTHENTICATION_ERROR",
    Authenticated: "AUTHENTICATED",
} as const;
export type CreateVerifiedDomainsResponseStatus =
    (typeof CreateVerifiedDomainsResponseStatus)[keyof typeof CreateVerifiedDomainsResponseStatus];
