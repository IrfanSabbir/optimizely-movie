import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

const limits = [25, 50, 100, 200, 300];

const SearchParams = ({
  searchParams,
  setSearchParams,
  refresh,
  setRefresh,
}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setRefresh(refresh + 1);
    }
  };
  return (
    <div style={{ textAlign: "right" }}>
      <div>
        <FormControl
          variant="filled"
          sx={{ m: 2, minWidth: 0 }}
          color="secondary"
          style={{ background: "white" }}
        >
          <TextField
            variant="filled"
            label="Search with Title"
            type="search"
            onKeyDown={handleKeyDown}
            onChange={(e) =>
              setSearchParams({ ...searchParams, title: e.target.value })
            }
          />
        </FormControl>

        <FormControl
          variant="filled"
          sx={{ m: 2, minWidth: 120 }}
          color="secondary"
          style={{ background: "white" }}
        >
          <InputLabel style={{ fontSize: "20px" }}>Limit</InputLabel>
          <Select
            color="primary"
            value={searchParams.limit}
            label="Limit"
            onChange={(e) => {
              setSearchParams({ ...searchParams, limit: e.target.value });
              setRefresh(refresh + 1);
            }}
          >
            {limits.map((limit) => (
              <MenuItem key={limit} value={limit}>
                {limit}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default SearchParams;
