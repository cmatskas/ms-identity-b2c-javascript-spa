/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 * For more details on using MSAL.js with Azure AD B2C, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/working-with-b2c.md 
 */

const msalConfig = {
    auth: {
      clientId: "1e3fd043-74aa-4cf4-a863-22c35da505e9", // This is the ONLY mandatory field; everything else is optional.
      authority: "https://cmatdevb2c.b2clogin.com/tfp/cmatdevb2c.onmicrosoft.com/b2c_1_sisu", // Choose sign-up/sign-in user-flow as your default.
      knownAuthorities: ["cmatdevb2c.b2clogin.com"], // You must identify your tenant's domain as a known authority.
      redirectUri: "http://localhost:6420", // You must register this URI on Azure Portal/App Registration. Defaults to "window.location.href".
    },
    cache: {
      cacheLocation: "localStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO.
      storeAuthStateInCookie: false, // If you wish to store cache items in cookies as well as browser cache, set this to "true".
    },
  };
  
/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
const loginRequest = {
  scopes: ["openid","offline_access"],
};