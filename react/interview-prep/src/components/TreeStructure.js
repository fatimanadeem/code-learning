import React, { useState } from "react";

// Web Dev Cody - Solving a practical intermediate react interview challenge
// https://www.youtube.com/watch?v=ixgxx_um8r8

const files = {
  children: [
    {
      name: "node_modules",
      children: [{ name: "babel", children: [{ name: "package.json" }] }],
    },
    { name: "vite.config.ts" },
    { name: "package.json" },
  ],
};

function Entry({ entry, depth }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      {entry.children ? (
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {(isExpanded ? "-" : "+") + entry.name}
        </button>
      ) : (
        <div>{entry.name}</div>
      )}

      {isExpanded && (
        <div style={{ paddingLeft: `${depth + 10}px` }}>
          {entry.children?.map((entry) => (
            <Entry entry={entry} depth={depth + 1}></Entry>
          ))}
        </div>
      )}
    </div>
  );
}

const TreeStructure = () => {
  return (
    <div>
      {files.children.map((entry) => (
        <Entry entry={entry} depth={1}></Entry>
      ))}
    </div>
  );
};

export default TreeStructure;
