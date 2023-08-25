import React from "react";
import "./Sidebar.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSidebarStatus, setSidebarOff } from "../../store/sidebarSlice";
import { Link } from "react-router-dom";

function Sidebar() {
  const isSidebarOn = useSelector(getSidebarStatus);
  const allCategories = useSelector(state => state.category.categories)
  const dispatch = useDispatch();
  return (
    <aside className={`sidebar ${isSidebarOn ? "show-sidebar" : ""}`}>
      <button
        className="sidebar-hide-btn"
        onClick={() => {
          dispatch(setSidebarOff());
        }}
      >
<i className="fa-solid fa-x"></i>
      </button>
      <div className="sidebar-cnt">
        <div className="cat-title fs-17 text-uppercase fw-6 ls-1h">
          {" "}
          All Categories
        </div>
        <ul className="cat-list">
          {
            allCategories.map((category , idx) =>{
              return(
                <li key={idx}>
                <Link to={`category/${category}`} className=" car-list-link text-capitalize">{category}</Link>
              </li>
              )
            })
          }

        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
