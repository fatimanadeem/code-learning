import React, { useState } from "react";

/*
Nail the Javascript technical interview - Catherine Li
https://www.youtube.com/watch?v=yyZzbrC5Jr0
https://playcode.io/1621643 

Part 1: Display each item in list of calls in the following format "Name: ##"
Part 2: Sort the data to see which friend calls you the most
Part 3: Return the friend that calls you the most
Part 4a: Highlight the name (at each entry) in the existing list of the friend whose called you the most
Part 4b: Implement a search feature that returns the entries of the name the user has searched for 

This is similiar to a front-end technical interview I've recently done
*/

const Calls = () => {
  const [searchInput, setSearchInput] = useState("");

  const calls = [
    { id: "c_01", name: "Rose Roberts", numOfCalls: 7 },
    { id: "c_02", name: "Chris Cook", numOfCalls: 5 },
    { id: "c_03", name: "Mary Martin", numOfCalls: 9 },
    { id: "c_04", name: "Susan Smith", numOfCalls: 1 },
    { id: "c_05", name: "Rose Roberts", numOfCalls: 8 },
    { id: "c_06", name: "Rose Roberts", numOfCalls: 7 },
    { id: "c_07", name: "Susan Smith", numOfCalls: 7 },
    { id: "c_08", name: "Larry Lewis", numOfCalls: 4 },
    { id: "c_09", name: "Mary Martin", numOfCalls: 9 },
    { id: "c_10", name: "Chris Cook", numOfCalls: 12 },
    { id: "c_11", name: "Susan Smith", numOfCalls: 4 },
    { id: "c_12", name: "Larry Lewis", numOfCalls: 3 },
    { id: "c_13", name: "Rose Roberts", numOfCalls: 9 },
    { id: "c_14", name: "Ryan Roberts", numOfCalls: 6 },
  ];

  const totalCallsPerPerson = calls.reduce((callsByName, call) => {
    const currentName = call.name;

    if (callsByName[currentName] === undefined) {
      callsByName[currentName] = 0;
    }
    callsByName[currentName] += call.numOfCalls;

    return callsByName;
  }, {});

  const getTopCaller = () => {
    let topCallerName = "";
    let topCallerCalls = 0;

    for (const name in totalCallsPerPerson) {
      if (totalCallsPerPerson[name] > topCallerCalls) {
        topCallerCalls = totalCallsPerPerson[name];
        topCallerName = name;
      }
    }
    return [topCallerName, topCallerCalls];
  };

  const filteredArray = calls.filter((item) =>
    item.name.toLowerCase().startsWith(searchInput.toLowerCase())
  );

  const isTopCaller = (callerName) => {
    return callerName === getTopCaller()[0];
  };

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>
      </form>
      <ul>
        {filteredArray.map((call) => (
          <li
            style={{
              backgroundColor: isTopCaller(call.name)
                ? "yellow"
                : "transparent",
            }}
            key={call.id}
          >
            {call.name}: {call.numOfCalls}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calls;
