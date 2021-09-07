import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <a href="http://www.anarchy.bloodbowlleague.net/">
        <img src={"/images/logo.png"} alt="Logo" width="519" height="106" />
      </a>
    </div>

    <div>
      <p>
        <a id="fumbbl" href="https://www.dropbox.com/s/4n0wbxplirwx8p0/Tapletop%20Blood%20Bowl%20using%20FUMBBL%20-%20AnBBL%20edition.pdf?dl=0" target="_blank">
          <img src={"/images/fumbbl.png?1"} alt="Tabletop Blood Bowl @ FUMBBL" width="516" />
        </a>
      </p>
      <p>
        <a id="facebook" href="https://www.facebook.com/groups/441495535894617">
          <img src={"/images/team-anarchy-facebook.png?1"} alt="Team Anarchy Facebook" width="516" />
        </a>
      </p>
      <p>
        <a id="belugacampaign" href="https://www.dropbox.com/sh/zpwkajnlvv1ar6p/AABZur6vJE2oDM4d8urrZNM1a?dl=0" target="_blank">
          <img src={"/images/belugacampaign.jpg"} alt="The Beluga Campaign" width="516" />
        </a>
      </p>
      <p><a id="ttb-intervju" href="images/ttb_intervju.png" target="_blank"><img src={"/images/ttb_intervju_thumb.png"} alt="TTB Intervju" width="720" /></a></p>
      <p>
        <a href="https://www.zoho.com/mail/login.html" target="_blank" class="button">E-post innlogging</a>
      </p>
      <p><img src={"/images/team-anarchy-forum.png?1"} alt="Team Anarchy Forum" height="258" /></p>
      <p><a id="keffokup18" href="http://www.anarchy.bloodbowlleague.net/default.asp?p=sr&s=32" target="_blank"><img src={"/images/daKeffoKup18.jpg"} alt="Keffo Kup 18" /></a></p>
      <p><a id="keffokup17" href="http://www.anarchy.bloodbowlleague.net/default.asp?p=sr&s=28" target="_blank"><img src={"/images/da_keffo_kup_17.png"} alt="Keffo Kup 17" /></a></p>
      <p><a id="plakat4" href="https://www.facebook.com/groups/441495535894617/search/?query=%C3%A5pen%20dag&__mref=message_bubble"><img src={"/images/plakat-4.jpg"} alt="&Aring;pen dag l&oslash;rdag 9. april" width="664" /></a></p>
      <p><a id="plakat3" href="https://www.facebook.com/groups/441495535894617/search/?query=%C3%A5pen%20dag&__mref=message_bubble"><img src={"/images/plakat-3.jpg"} alt="Plakat" width="664" /></a></p>
      <p><a id="plakat2" href="https://www.facebook.com/events/836640579729194"><img src={"/images/northernbattlefieldsii.png"} alt="Plakat" width="664" /></a></p>
      <p><a id="plakat" href="https://www.facebook.com/groups/441495535894617/search/?query=%C3%A5pen%20dag&__mref=message_bubble"><img src={"/images/plakat.jpg"} alt="Plakat" width="664" /></a></p>
    </div>
  </Layout>
)

export default IndexPage
