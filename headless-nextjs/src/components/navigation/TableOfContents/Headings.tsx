import React, { useEffect, useState } from "react";
import { IHeading } from "./TableOfContents";
import { TextLink } from "../TextLink";

export function Headings({ headings }: { headings: IHeading[] }): JSX.Element {
  const [activeId, setActiveId] = useState(
    headings?.length > 0 ? headings[0].id : null
  );

  useEffect(() => {
    const flattenHeadings = (headings: any) => {
      return headings.reduce((acc: any, heading: any) => {
        acc.push({
          id: heading.id,
          offsetTop: heading.offsetTop,
          title: heading.title,
        });
        if (heading.items && heading.items.length > 0) {
          acc.push(...flattenHeadings(heading.items)); // Recursively flatten nested items
        }
        return acc;
      }, []);
    };
    const flattenedHeadings = flattenHeadings(headings);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the viewport
      let currentSectionId: string | null = null;

      // Find the last heading that is above the middle of the viewport
      for (let i = flattenedHeadings.length - 1; i >= 0; i--) {
        if (scrollPosition >= flattenedHeadings[i].offsetTop) {
          currentSectionId = flattenedHeadings[i].id;
          break;
        }
      }

      // Set the activeId state to the section id
      if (currentSectionId) setActiveId(currentSectionId);
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ol className={`space-y-2 list-inside leading-8 counter-reset-item`}>
      {headings.map((heading) => (
        <li key={heading.id} className={`leading-6 font-normal`}>
          <TextLink
            href={`#${heading.id}`}
            label={heading.title}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(`${heading.id}`)?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className={`${
              heading.id === activeId
                ? "text-primary dark:text-primary-light mb-2 inline-block"
                : ""
            }`}
          />
          {heading.items.length > 0 && (
            <ol className={`space-y-2 list-inside counter-reset-item`}>
              {heading.items.map((child) => (
                <li key={child.id} className={`ml-4 font-normal`}>
                  <TextLink
                    href={`#${child.id}`}
                    label={child.title}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(`${child.id}`)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className={`${
                      child.id === activeId
                        ? "text-primary dark:text-primary-light mb-2 inline-block"
                        : ""
                    }`}
                  />
                </li>
              ))}
            </ol>
          )}
        </li>
      ))}
    </ol>
  );
}
