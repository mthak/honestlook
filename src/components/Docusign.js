import React from 'react';
// import docuSign from "docusign-esign"


class Docusign extends React.Component {

  componentDidMount () {
     const script = document.createElement("script");

     script.src = "https://demo.docusign.net/clickapi/sdk/latest/docusign-click.js";
     

     // const script2
     // script.async = true;



  }

  render() {
    return (
      <div>
        <div id="ds-clickwrap"></div>
      </div>
    );
  }
}

export default Docusign;