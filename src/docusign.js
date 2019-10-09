<div id="ds-clickwrap"></div>

<script src="https://demo.docusign.net/clickapi/sdk/latest/docusign-click.js"></script>

<script>docuSignClick.Clickwrap.render({
    environment: 'https://demo.docusign.net',
    accountId: 'aac8309d-b03d-49a9-8e60-9030f783691b',
    clickwrapId: '5dd120eb-3bdf-4493-a69f-f1c0b51eff48',
    clientUserId: 'UNIQUE_USER_ID'
  }, '#ds-clickwrap');</script>


// Documentation Notes from DocuSign

// The JavaScript code for a clickwrap includes these tags:

// Tag	        Description
// div	        Identifies where on your web page the clickwrap to render
// script #1	  Calls the DocuSign clickwrap JavaScript library.
// script #2	  Calls the DocuSign Clickwrap.render method, providing the parameters you need to identify your account, t                 he clickwrap to render, and the unique user information to accept the clickwrap.

// The elements of script #2 are:

// Element	        Description
// src	            URL path of the docusign-click.js file that performs authentication, clickwrap rendering, and click                       tracking.
// environment	    URL base path that generates the iframe for the clickwrap.
// accountId	      The API Account ID GUID value, as shown in the API & Keys page in the Admin console for your account.
// clickwrapId	    GUID value for the specific clickwrap you’d like to embed.
// clientUserId	    Unique value that will be used to identify each specific user that acknowledges the clickwrap                             agreement. A few things about the clientUserId value:

//                 The value you specify can be anything your backend system will use to track individual users. Examples                    include employee IDs, email addresses, surrogate key values, or any other valid identifier.
                
//                 Because all other values in the JavaScript are the same for each user, the clientUserId value is the                      only way to differentiate between those who have accepted the clickwrap.
                
//                 Using the combination of accountId, clickwrapId, and clientUserId, DocuSign is able to track which                        specific users have accepted each clickwrap agreement and alert each user if they attempt to accept a                     clickwrap agreement more than once.