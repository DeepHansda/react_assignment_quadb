import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { useGetShowsQuery } from "../Redux/slices/apiSlice";
import ShowsCard from "./ShowsCard";
import Spinner from "./Spinner/Spinner";

function Home() {
  const { data,isFetching } = useGetShowsQuery();

  if(isFetching){
    return <Spinner/>
  }
  return (
    <div>
      <Container>
        <Box my={15}>
          <Grid container rowGap={4}>
            {data?.map((item, index) => (
              <Grid item key={index} xl={3}>
                <ShowsCard show={item?.show} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
