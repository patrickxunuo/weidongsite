import React from "react";
import Feedback from "../Feedback/Feedback";
import './ContactUs.css'

const ContactUs = () => {

  return (
    <div className="contactus-container">
      <div>
      <pre>
          {`Factory:

ADD: No. 3 Building, Daerxun Technology Ind. Zone, No.29, Pingxin North Road, Pinghu Town, Longgang, Shenzhen, China

Tel: +86-755-28213226

Fax: +86-755-26723710

Email: sales@apm-print.com

Web: www.autopack-system.com


APM in Spain:

c/ Girona, 27, 08291- Ripollet

Tel: +34-932252916

Fax: +34-932253276

Email: sales@apm-print.com

Attn: Jordi García Márquez


APM in USA:

P.O. Box 821 Brooklyn, MI 49230

Tel: +1-517-292-2388

Cel: +1-517-740-4841

Email:sales@apm-print.com

Attn: John Arce`}
      </pre>
      </div>
      <div>
        <Feedback/>
      </div>
    </div>
  )
}

export default ContactUs
