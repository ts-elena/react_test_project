import React, { useState, useEffect, useRef } from "react";
import PictureRow from "./PictureRow";
import { useIntersectionObserver } from "../IntersectionObserver/useIntersect";

const RowList: React.FC<{ initialDataRequestLink: string }> = props => {
  // State
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userInfoArray, setUserInfoArray] = useState([]);
  const [isThingIntersecting, setThingIntersecting] = useState(false);

  // REFs
  const listRef = useRef<HTMLDivElement>(document.createElement("div"));
  // const observerRef = useRef<HTMLDivElement>(document.createElement("div"));

  // Functions

  const [observerRef, entry] = useIntersectionObserver({
    threshold: 0
  });

  function loadUserList(link: string, pageNum: number): void {
    if (isLastPage) return;

    let formatedLink = link + "?page=" + pageNum;
    fetch(formatedLink)
      .then(response => response.json())
      .then(json => {
        let joined = userInfoArray.concat(json.data);
        setUserInfoArray(joined);
        setCurrentPage(json.page);

        if (json.page === json.total_pages) {
          setIsLastPage(true);
        }
        if (!isInitialized) setIsInitialized(true);
      })
      .catch(console.log);
  }

  function scrollCallBack(entries: IntersectionObserverEntry[]) {
    if (entries[1].intersectionRatio === 1) {
      console.log("observer is here");
      if (isLastPage) return;
      setIsLoading(true);
      loadUserList(props.initialDataRequestLink, currentPage + 1);
    }
  }

  return (
    <div className="InfiniteList" ref={listRef}>
      {userInfoArray === [] ? (
        <div>Nothing to display</div>
      ) : (
        userInfoArray.map((item: any) => {
          return (
            <>
              <PictureRow
                key={item.id}
                pictureUrl={item.avatar}
                firstName={item.first_name}
                lastName={item.last_name}
              />
            </>
          );
        })
      )}
      <div className="observer" ref={observerRef}>
        Text!
      </div>
      {isLastPage ? <div>End!</div> : null}
    </div>
  );
};

export default RowList;
