import React from 'react';
// import docuSign from "docusign-esign"


class Docusign extends React.Component {

  componentDidMount () {
     const script = document.createElement("script");

     script.src = "https://demo.docusign.net/clickapi/sdk/latest/docusign-click.js";
     script.async = true;

     document.body.appendChild(script);
     

     // const script2
     // script.async = true;



  }

  render() {
    return (
      <div>
        <div id="ds-clickwrap">hello world</div>
      </div>
    );
  }
}

export default Docusign;