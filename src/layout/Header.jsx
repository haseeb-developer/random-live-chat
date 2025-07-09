import { Grid, GridItem } from "@chakra-ui/react";
import NameForm from "./NameForm";

export default function Header() {
  return (
    <Grid
      templateColumns="1fr"
      justifyItems="center"
      alignItems="center"
      bg="white"
      position="sticky"
      top="0"
      zIndex="10"
      borderBottom="20px solid #edf2f7"
    >
      <GridItem justifySelf="center" alignSelf="center" color="#222" fontSize="lg" fontWeight="bold" py="3">
        <NameForm />
      </GridItem>
    </Grid>
  );
}
