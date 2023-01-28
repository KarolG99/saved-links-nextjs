"use client";
import { link } from "fs";
import React, { useState } from "react";
import AddLinkButton from "../AddLinkButton/AddLinkButton";
import SingleLink from "../SingleLink/SingleLink";
import SingleTag from "../SingleTag/SingleTag";

export default function DisplayLinks({
  id,
  tags,
  links,
}: {
  id: string;
  tags: any;
  links: any;
}) {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchResults, setIsSearchResults] = useState(false);
  const [currentSearchingText, setCurrentSearchingText] = useState("");
  const [activeButtonIndex, setActiveButtonIndex] = useState<number>();

  const handleSearch = (searchingText: string, index: number) => {
    if (!isSearchResults) {
      const results = links.filter((link: { tag: string }) =>
        link.tag.includes(searchingText)
      );
      setSearchResults(results);
      setIsSearchResults(true);
      setActiveButtonIndex(index);
    } else if (searchResults && currentSearchingText === searchingText) {
      setSearchResults([]);
      setIsSearchResults(false);
    } else if (searchResults && currentSearchingText !== searchingText) {
      const results = links.filter((link: { tag: string }) =>
        link.tag.includes(searchingText)
      );
      setSearchResults(results);
      setActiveButtonIndex(index);
    }
  };

  return (
    <div className="max-w-[600px] mx-auto p-[10px]">
      {tags.length > 0 && (
        <div className="flex flex-wrap">
          {tags.map((tag: string, index: number) => (
            <React.Fragment key={tag}>
              {tag.length > 0 && (
                <SingleTag
                  tag={tag}
                  onClick={(e) => {
                    setCurrentSearchingText(e.target.innerText.slice(1));
                    handleSearch(e.target.innerText.slice(1), index);
                    setActiveButtonIndex(index);
                  }}
                  isActive={activeButtonIndex === index && isSearchResults}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      {isSearchResults &&
        searchResults.length > 0 &&
        searchResults.map((link: { id: string }) => (
          <SingleLink key={link.id} link={link} />
        ))}

      {!isSearchResults &&
        links.length > 0 &&
        links.map((link: any) => <SingleLink key={link.id} link={link} />)}

      {links.length === 0 && (
        <div className="text-center mt-5">
          <p>No link yet.</p>
          <p>Click the green button on the bottom right to add a link.</p>
        </div>
      )}

      <AddLinkButton id={id} />
    </div>
  );
}
