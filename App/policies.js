/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
<<<<<<< HEAD
        signUpSignIn: "B2C_1_susi",
        forgotPassword: "B2C_1_reset",
        editProfile: "B2C_1_edit_profile"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/B2C_1_susi",
        },
        forgotPassword: {
            authority: "https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/B2C_1_reset",
        },
        editProfile: {
            authority: "https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/B2C_1_edit_profile"
=======
        signUpSignIn: "b2c_1_susi",
        forgotPassword: "b2c_1_password_reset",
        editProfile: "b2c_1_edit_profile"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://cmatdevb2c.b2clogin.com/cmatdevb2c.onmicrosoft.com/b2c_1_susi",
        },
        forgotPassword: {
            authority: "https://cmatdevb2c.b2clogin.com/cmatdevb2c.onmicrosoft.com/b2c_1_password_reset",
        },
        editProfile: {
            authority: "https://cmatdevb2c.b2clogin.com/cmatdevb2c.onmicrosoft.com/b2c_1_edit_profile"
>>>>>>> bc44f6f (simplified the solution and implemented password reset)
        }
    },
    authorityDomain: "cmatdevb2c.b2clogin.com"
}