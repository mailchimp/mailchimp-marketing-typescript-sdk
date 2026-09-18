//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         domainName: "domain_name",
 *         code: "code"
 *     }
 */
export interface CreateActionVerifyVerifiedDomainsRequest {
    /** The domain name. */
    domainName: string;
    /** The code that was sent to the email address provided when adding a new domain to verify. */
    code: string;
}
