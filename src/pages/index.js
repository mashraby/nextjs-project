import { useState, useEffect } from "react";
import Layout from "@/components/layout/layout";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { getProducts } from "@/services/api";
import Link from "next/link";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Layout title="home page">
        <Heading my="20px" as="h2" size="lg">
          Products
        </Heading>

        <Flex wrap="wrap" justifyContent="center" gap="50px">
          {products?.map((product) => (
            <Card maxW="sm">
              <Link key={product.id} href={`/${product.id}`}>
                <CardBody>
                  <Image
                    src={product.image}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{product.title}</Heading>
                    <Text>{product.description}</Text>
                    <Text color="blue.600" fontSize="2xl">
                      ${product.price}
                    </Text>
                  </Stack>
                </CardBody>
              </Link>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </Flex>
      </Layout>
    </>
  );
}
