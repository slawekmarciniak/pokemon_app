import ListItem from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const ListElement = ({ name, url }) => {
  const handleClick = () => {
    console.log(url);
  };
  return (
    <ListItem onClick={handleClick}>
      <ListItemAvatar>
        <Avatar alt={name} src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText style={{ textTransform: "uppercase" }} primary={name} />
    </ListItem>
  );
};

export default ListElement;
