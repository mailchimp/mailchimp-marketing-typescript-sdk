//  This file was auto-generated from our API Definition.

/** The Domain's current status. */
export const GetVerifiedDomainsResponseStatus = {
    VerificationInProgress: "VERIFICATION_IN_PROGRESS",
    Verified: "VERIFIED",
    Expired: "EXPIRED",
    Error: "ERROR",
    AuthenticationInProgress: "AUTHENTICATION_IN_PROGRESS",
    AuthenticationError: "AUTHENTICATION_ERROR",
    Authenticated: "AUTHENTICATED",
} as const;
export type GetVerifiedDomainsResponseStatus =
    (typeof GetVerifiedDomainsResponseStatus)[keyof typeof GetVerifiedDomainsResponseStatus];
