import {
  Card,
  CardHeader,
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  CardBody,
  CardFooter,
  IconButton,
} from "@chakra-ui/react";
import { RxDotsHorizontal } from "react-icons/rx";
import  "./CardGit.css";

const CardGit = ({ image, UserName, repos, gists }) => {
  return (
    <Card maxW="md">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name={UserName} src={image} />

            <Box>
              <Heading size="sm">Segun Adebayo</Heading>
              <Text>{gists}</Text>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
            icon={<RxDotsHorizontal />}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{repos}</Text>
      </CardBody>
      {/* <Image objectFit="cover" src={image} alt="Avatar" /> */}

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      ></CardFooter>
    </Card>
  );
};

export default CardGit;
