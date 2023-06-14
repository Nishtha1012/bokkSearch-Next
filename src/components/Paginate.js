import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Paginate({ page, handleChange }) {
  return (
    <Stack spacing={2} className="max-sm:mb-9">
      <Pagination
        count={10}
        page={page}
        onChange={handleChange}
        className="mx-auto my-5"
        color="primary"
      />
    </Stack>
  );
}
export default Paginate;
