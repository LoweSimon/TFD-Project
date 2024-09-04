"use client"

import React, { useState } from "react";

const LevelSelector = ({ descendants }) => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleLevelChange = (event) => {
    const level = event.target.value;
    setSelectedLevel(level);
  };

  return (
    <div>
      <select
        id="level"
        className="levels select select-primary"
        onChange={handleLevelChange}
      >
        <option disabled selected>
          Select Level
        </option>
        {descendants.levels.map((level) => (
          <option key={level.level} value={level.level}>
            {level.level}
          </option>
        ))}
      </select>

      <div>
        {selectedLevel ? (
          descendants.levels
            .filter((level) => level.level == selectedLevel)
            .map((level) => (
              <div key={level.level} className="flex flex-col">
                {level.stats.map((d, index) => (
                  <div key={index} className="py-4">
                    <p className="mb-2">Max HP: {d.hp_value}</p>
                    <hr />
                    <p className="mb-2">Max Shield: {d.shield_value}</p>
                    <hr />
                    <p className="mb-2">Max MP: {d.mp_value}</p>
                    <hr />
                    <p className="mb-2">Defense: {d.def_value}</p>
                    <hr />
                    <p className="mb-2">Shield Recovery Out of Combat: {d.out_of_combat_value}</p>
                    <hr />
                    <p className="mb-2">Shield Recovery In Combat: {d.in_combat_value}</p>
                    <hr />
                  </div>
                ))}
              </div>
            ))
        ) : (
          <p>default text when nothing is selected</p>
        )}
      </div>
    </div>
  );
};

export default LevelSelector;