import { Pagination, Stack } from '@mui/material';

function PaginationComponent({ page, onChange, totalPages }) {
  return (
    <Stack>
      <Pagination
        count={totalPages > 500 ? 500 : totalPages}
        variant="outlined"
        shape="rounded"
        showFirstButton
        showLastButton
        page={page}
        onChange={(_, num) => onChange(num)}
        sx={{ marginY: 3, marginX: 'auto' }}
      />
    </Stack>
  );
}

export default PaginationComponent;
