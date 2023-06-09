"use client";

import { autocomplete } from "@algolia/autocomplete-js";
import React, { createElement, Fragment, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

import "./algolia.css";

export function Autocomplete({ setSearchAPI, ...rest }) {
  const containerRef = useRef(null);
  const panelRootRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = autocomplete({
      container: containerRef.current,
      classNames: {
        form: "!rounded-full hover:shadow-md !w-full !px-2 !py-2 !border-none !outline-none focus-within:!shadow-none",
        detachedSearchButton:
          "!rounded-full hover:shadow-md !w-full !px-2 !py-2 !border-none !outline-none focus-within:!shadow-none",
        panel: "!rounded-xl",
        item: "!rounded-md !p-0 mb-2",
      },
      renderer: { createElement, Fragment, render: () => {} },
      render({ children }, root) {
        if (!panelRootRef.current || rootRef.current !== root) {
          rootRef.current = root;

          panelRootRef.current?.unmount();
          panelRootRef.current = createRoot(root);
        }

        panelRootRef.current.render(children);
      },

      ...rest,
    });

    if (setSearchAPI) setSearchAPI(search);

    return () => {
      search.destroy();
    };
  }, [rest]);

  return <div ref={containerRef} />;
}

export default Autocomplete;
