import {
  Card,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  CardBody,
  CardFooter,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";

import "./CardGit.css";

const CardGit = ({ data }) => {

  return (
    <Card maxW="sm" className="Card" style={{ width: "fit-content" }}>
      <CardBody>

        <Image
          src={data.avatar_url}
          alt={data.login}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
        <h1>Name</h1>
<Text>{data.login}</Text>
          <Heading size="md">Followers</Heading>
          <Text>
           {data.followers}
          </Text>
        <h3> Repositories:</h3> <Text color="blue.600" fontSize="2xl">
          {data.public_repos}
          </Text>
          <h3> Profile Created On:</h3> <Text color="blue.600" fontSize="2xl">
   {data.updated_at}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
       Leave a Like
          </Button>

        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default CardGit;
