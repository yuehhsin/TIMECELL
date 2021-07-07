import React from "react";

const Tab = ({ tab, setTab }) => {
  const handleEdit = () => {
    setTab("edit");
  };
  const handleSta = () => {
    setTab("statistic");
  };
  return (
    <div className="tab">
      <h4
        onClick={handleEdit}
        style={tab === "edit" ? { color: "#fff" } : { color: "#878787" }}
      >
        EDIT
      </h4>
      <h4
        onClick={handleSta}
        style={tab === "statistic" ? { color: "#fff" } : { color: "#878787" }}
      >
        STATISTIC
      </h4>
    </div>
  );
};

export default Tab;
