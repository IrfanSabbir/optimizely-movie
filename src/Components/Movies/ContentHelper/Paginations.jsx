
import { Button } from "@mui/material";

const Paginations = ({ searchParams, setSearchParams, refresh, setRefresh }) => (
  <div style={{ textAlign: "center", width: "100%", marginTop: "20px" }}>
        {searchParams.page !== 1 && (
          <Button
            style={{ textTransform: "none" }}
            onClick={() => {
              setSearchParams({ ...searchParams, page: 1 });
              setRefresh(refresh + 1);
            }}
          >
            First Page
          </Button>
        )}
        {searchParams.page !== 1 && (
          <Button
            style={{ textTransform: "none" }}
            onClick={() => {
              setSearchParams({ ...searchParams, page: searchParams.page - 1 });
              setRefresh(refresh + 1);
            }}
          >
            Previous Page
          </Button>
        )}

        <Button
          variant="contained"
          color="secondary"
          style={{ textTransform: "none" }}
        >
          Current Page {searchParams.page}
        </Button>

        <Button
          style={{ textTransform: "none" }}
          onClick={() => {
            setSearchParams({ ...searchParams, page: searchParams.page + 1 });
            setRefresh(refresh + 1);
          }}
        >
          Next Page
        </Button>
        <Button
          style={{ textTransform: "none" }}
          onClick={() => {
            setSearchParams({ ...searchParams, page: searchParams.page + 2 });
            setRefresh(refresh + 1);
          }}
        >
          Last Page
        </Button>
      </div>
)

export default Paginations;