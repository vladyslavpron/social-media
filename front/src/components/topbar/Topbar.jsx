import "./Topbar.css";
import { Search } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span>dalviSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search />
          <input
            placeholder="search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
      </div>
      Topbar
    </div>
  );
}
