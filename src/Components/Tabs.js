/** @format */

import React, { useState } from "react";
import Header from "./Header";

function Tabs() {
  const content = [
    {
      name: "Tab 1",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea voluptate velit tempora modi, quos veritatis eligendi suscipit cupiditate similique repellendus neque consequatur nostrum, delectus exercitationem quas ducimus nobis.",
      id: 1,
    },
    {
      name: "Tab 2",
      text: "modi, quos veritatis eligendi suscipit cupiditate similique repellendus neque consequatur nostrum, delectus exercitationem quas ducimus nobis.",
      id: 2,
    },
    {
      name: "Tab 3",
      text: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea voluptate velit tempora modi, quos veritatis eligendi suscipit cupiditate similique repellendus neque consequatur nostrum,",
      id: 3,
    },
  ];
  const showDefault = Object.values(content[0]);
  //   console.log(showDefault);

  const [tabContent, setTabContent] = useState(showDefault);
  //   console.log(tabContent[0].text);
  return (
    <div>
      <Header />

      <div className='tabs-container'>
        {/* <h1>Tabs</h1> */}
        <div className='tabs'>
          {content.map((button) => {
            {
              /* console.log(button); */
            }
            return (
              <button
                className='tab-btn'
                key={button.id}
                onClick={() => setTabContent(Object.values(button))}>
                {button.name}
              </button>
            );
          })}

          <div className='tab-content'>
            <div className='tab-content-text'>{tabContent[1]}</div>
            <div className='tab-content-btn'>{tabContent[2]}</div>
            {/* {tabContent} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
