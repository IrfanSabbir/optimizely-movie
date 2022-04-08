import React, { useState } from "react";
import ItemList from "./ListMovies/Items";

const list = [true, false];

function IndexPage() {
  const [showTabs, setShowTabs] = useState([...list]);

  const changeRead = (val) => {
    let listBoool = [false, false];
    listBoool[val] = true;
    setShowTabs(listBoool);
  };

  return (
    <React.Fragment>
      <div className="Tabs">
        <div className="TabItem">
          <p
            className={`${showTabs[0] ? "TabItemActive" : ""}`}
            onClick={() => changeRead(0)}
          >
            All Movies
          </p>
        </div>
        <div className="TabItem">
          <p
            className={`${showTabs[1] ? "TabItemActive" : ""}`}
            onClick={() => changeRead(1)}
          >
            Trending
          </p>
        </div>
      </div>
      <div
        style={{
          paddingBottom: "20px",
          width: "100%",
        }}
      >
        {showTabs[0] && <ItemList title="All Movies"/>}
        {showTabs[1] && <ItemList title="Trending Movies" popular="2021"/>}
      </div>
    </React.Fragment>
  );
}

export default IndexPage;
