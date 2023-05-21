"use client";

import { autocomplete } from "@algolia/autocomplete-js";
import React, { createElement, Fragment, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

import "./algolia.scss";

export function Autocomplete(props) {
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
        form: "!rounded-full !w-full !px-2 !py-2 !border-none !outline-none focus-within:!shadow-none",
        detachedSearchButton:
          "!rounded-full !w-full !px-2 !py-2 !border-none !outline-none focus-within:!shadow-none",
        panel: "!rounded-xl",
        item: "!rounded-md mb-2",
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
      ...props,
    });

    return () => {
      search.destroy();
    };
  }, [props]);

  return <div ref={containerRef} />;
}

export default Autocomplete;
