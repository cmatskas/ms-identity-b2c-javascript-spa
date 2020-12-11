// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
const myMSALObj = new msal.PublicClientApplication(msalConfig);

let accountId = "";
let username = "";

function selectAccount () {

    /**
     * See here for more info on account retrieval: 
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
     */

    const currentAccounts = myMSALObj.getAllAccounts();

    if (currentAccounts.length === 0) {
        return;
    } else if (currentAccounts.length > 1) {
        // Add your account choosing logic here
        console.log("Multiple accounts detected.");
    } else if (currentAccounts.length === 1) {
        accountId = currentAccounts[0].homeAccountId;
        username = currentAccounts[0].username;
        welcomeUser(username);
    }
}

// in case of page refresh
selectAccount();

function handleResponse(response) {
    /**
     * To see the full list of response object properties, visit:
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/request-response-object.md#response
     */

    if (response !== null) {
        accountId = response.account.homeAccountId;
        username = response.account.username;
        welcomeUser(username);
    } else {
        selectAccount();
    }
}

function signIn() {

    /**
     * You can pass a custom request object below. This will override the initial configuration. For more information, visit:
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/request-response-object.md#request
     */

    myMSALObj.loginPopup(loginRequest)
        .then(handleResponse)
        .catch(error => {
            console.log(error);
                
            // Error handling
            if (error.errorMessage) {
                // Check for forgot password error
                // Learn more about AAD error codes at https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-aadsts-error-codes
                if (error.errorMessage.indexOf("AADB2C90118") > -1) {
                    myMSALObj.loginPopup(b2cPolicies.authorities.forgotPassword)
                        .then(response => handlePolicyChange(response));
                }
            }
        });
}

function signOut() {

    /**
     * You can pass a custom request object below. This will override the initial configuration. For more information, visit:
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/request-response-object.md#request
     */

    // Choose which account to logout from.
    
    const logoutRequest = {
        account: myMSALObj.getAccountByHomeId(accountId)
    };
    
    myMSALObj.logout(logoutRequest).then(goodbyUser);
}

function editProfile() {
    myMSALObj.loginPopup(b2cPolicies.authorities.editProfile)
      .then(response => handlePolicyChange(response));
}

function handlePolicyChange(response) {
    /**
     * We need to reject id tokens that were not issued with the default sign-in policy.
     * "acr" claim in the token tells us what policy is used (NOTE: for new policies (v2.0), use "tfp" instead of "acr").
     * To learn more about B2C tokens, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/tokens-overview
     */

    if (response.idTokenClaims['acr'] === b2cPolicies.names.editProfile) {
        window.alert("Profile has been updated successfully. \nPlease sign-in again.");
        myMSALObj.logout();
    } else if (response.idTokenClaims['acr'] === b2cPolicies.names.forgotPassword) {
        window.alert("Password has been reset successfully. \nPlease sign-in with your new password.");
        myMSALObj.logout();
    }
}