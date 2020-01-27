import React, { useState, useEffect, useRef } from "react";
import HighlightedBtn from "./HighlightedBtn";
import PictureRow from "./PictureRow";
import debounce from "lodash.debounce";

const InfiniteList: React.FC<{ initialDataRequestLink: string }> = props => {
  const [lastDisplayedPage, setLastDisplayedPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const [userInfoArray, setUserInfoArray] = useState([]);
  const [scrollTop, setScrollTop] = useState(0);
  const [offsetHeight, setOffsetHeight] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);

  const infiniteListWrapper = useRef<HTMLDivElement>(
    document.createElement("div")
  );

  function loadUserList(link: string, pageNum: number = 1): void {
    let formatedLink = link + "?page=" + pageNum;
    fetch(formatedLink)
      .then(response => response.json())
      .then(json => {
        let joined = userInfoArray.concat(json.data);
        setUserInfoArray(joined);
        setLastDisplayedPage(json.page);

        if (json.page === json.total_pages) {
          setIsLastPage(true);
        }
      })
      .catch(console.log);
  }

  useEffect(() => {
    loadUserList(props.initialDataRequestLink, 1);
  }, []);

  const eventHandler = debounce(() => {
    setScrollTop(infiniteListWrapper.current.scrollTop);
    setScrollHeight(infiniteListWrapper.current.scrollHeight);
    setOffsetHeight(infiniteListWrapper.current.offsetHeight);
    if (isLastPage) return;
    if (scrollTop === scrollHeight - offsetHeight) {
      loadUserList(props.initialDataRequestLink, lastDisplayedPage + 1);
    }
  }, 100);

  return (
    <div
      className="infinite-list"
      ref={infiniteListWrapper}
      onScroll={eventHandler}
      onTouchMove={eventHandler}
    >
      {userInfoArray === [] ? (
        <div>Nothing to display</div>
      ) : (
        userInfoArray.map((item: any) => {
          return (
            <PictureRow
              key={item.id}
              pictureUrl={item.avatar}
              firstName={item.first_name}
              lastName={item.last_name}
            />
          );
        })
      )}
      {isLastPage ? <HighlightedBtn message={"Click to join"} /> : null}
    </div>
  );
};

export default InfiniteList;
