//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         domain_name: "domain_name",
 *         code: "code"
 *     }
 */
export interface CreateActionVerifyVerifiedDomainsRequest {
    /** The domain name. */
    domain_name: string;
    /** The code that was sent to the email address provided when adding a new domain to verify. */
    code: string;
}
