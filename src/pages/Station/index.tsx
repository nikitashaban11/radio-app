import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Spinner } from "../../components/UI/Spinner";
import { useGetStationsQuery } from "../../services/station";
import { RadioPlayer } from "../../components/RadioPlayer";
import { ErrorPage } from "../Error";

export const Station = () => {
  const { data, error, isLoading } = useGetStationsQuery();

  const { stationId } = useParams();

  if (isLoading) {
    return <Spinner />;
  }

  const currentStation = data?.find((station) => station.id === stationId);

  if (error) {
    return <ErrorPage />;
  }

  if (!currentStation) {
    return <Typography>Sorry, this station does not exist</Typography>;
  }

  return (
    <Box sx={{ padding: 3 }}>
      <RadioPlayer {...currentStation} />
    </Box>
  );
};
