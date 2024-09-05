"use client"

import React, { useState } from "react";

const ModuleLevel = ({ modules }) => {

    const [moduleLevel, setModuleLevel] = useState(null);

    const handleLevelChange = (e) => {
        const selectedLevel = e.target.value;
        setModuleLevel(selectedLevel);
    };

    return (
        <div>
            <select 
                id="module-level"
                className="module-levels select select-primary"
                onChange={handleLevelChange}
            >
                <option selected>
                    Select Level
                </option>
                {modules.module_stat.map((stat) => (
                    <option key={stat.level} value={stat.level}>
                        {stat.level}
                    </option>
                ))}
            </select>
            
            <div>
                {moduleLevel ? (
                    modules.module_stat
                        .filter((stat) => stat.level == moduleLevel)
                        .map((stat) => (
                        <div key={stat.level} className="flex flex-col">
                            <div className="py-4">
                                <p className="mb-2"></p>
                                <hr />
                                <p className="mb-2">{stat.value}</p>
                                <hr />
                            </div>
                        </div>
                        ))
                ) : (
                    <p>No level selected</p>
                )}
            </div>
        </div>
    )

}

export default ModuleLevel;