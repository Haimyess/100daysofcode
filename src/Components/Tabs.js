/** @format */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Header from "./Header";

function Tabs() {
  const content = [
    {
      name: "Tab 1",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea voluptate velit tempora modi, quos veritatis eligendi suscipit cupiditate similique repellendus neque consequatur nostrum, delectus exercitationem quas ducimus nobis.",
      id: 1,
      more: "this is more 1",
    },
    {
      name: "Tab 2",
      text: "modi, quos veritatis eligendi suscipit cupiditate similique repellendus neque consequatur nostrum, delectus exercitationem quas ducimus nobis.",
      id: 2,
      more: "this is more 2",
    },
    {
      name: "Tab 3",
      text: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea voluptate velit tempora modi, quos veritatis eligendi suscipit cupiditate similique repellendus neque consequatur nostrum,",
      id: 3,
      more: "this is more 3",
    },
  ];

  const showDefault = Object.values(content[0]);
  //   console.log(showDefault);

  const [active, setActive] = useState(true);
  const [tabContent, setTabContent] = useState(showDefault);
  //   console.log(tabContent[0].text);

  return (
    <div>
      <Header />

      <div className='tabs-container'>
        {/* <h1>Tabs</h1> */}
        <div className='tabs'>
          {content.map((data) => {
            {
              /* console.log(button); */
            }

            return (
              <Button
                data={data}
                setTabContent={setTabContent}
                state={(active, setActive)}
              />
            );
          })}

          <div className='tab-wrapper'>
            <div className='tab-content'>
              <div className='tab-content-text'>{tabContent[1]}</div>
              <div className='tab-content-btn'>{tabContent[2]}</div>
              {/* {tabContent} */}
            </div>
            <div>
              <div>{tabContent[3]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
