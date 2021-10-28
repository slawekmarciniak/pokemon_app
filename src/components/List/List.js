import ListElement from "./ListElement";
import Paper from "@mui/material/Paper";
import ListMUI from "@mui/material/List";

const List = ({ data }) => {
  return (
    <>
      <Paper style={{ width: 800, margin: "auto" }} elevation={5}>
        <ListMUI>
          {data.map((el) => (
            <ListElement name={el.name} url={el.url} />
          ))}
        </ListMUI>
      </Paper>
    </>
  );
};

export default List;
