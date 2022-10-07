import React from 'react'
import icss from "../../media/css.png"
import ihtml from "../../media/html.png"
import ijs from "../../media/js.png"
import iai from "../../media/ai.png"
import ips from "../../media/ps.png"
import ibs from "../../media/bs.png"
import ira from "../../media/ra.png"
import ird from "../../media/rd.png"
import ipr from "../../media/pr.png"
import "../AboutMe/aboutMe.css"

let icons = [icss,ihtml,ijs,ira,ird,ibs,iai,ips,ipr]

export const Icons = () => {
  return (
    <div className="contTec">
        {icons.map((e) =>
            <spam><img className="iconTec" src={e} alt={e}/></spam>
        )}
    </div>
  )
}
