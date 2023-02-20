'use client';

import {
  Button,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  post: string;
  country: string;
  cardName: string;
  cardNumber: string;
  expireDate: string;
  cvv: string;
};

function Checkout() {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    post: yup
      .string()
      .matches(/^[0-9]{5}$/, 'Provide a valid post code')
      .required(),
    country: yup.string().required().min(5),
    cardName: yup.string().required(),
    cardNumber: yup
      .string()
      .matches(/^[0-9]*$/)
      .min(15, 'Not Valid')
      .max(16, 'Not Valid')
      .required(),

    expireDate: yup
      .string()
      .matches(/^[0-9]{2}\/[0-9]{2}$/, 'Not valid')
      .max(5, 'Please Provide as MM/YY')
      .required(),
    cvv: yup
      .string()
      .matches(/^[0-9]{3,4}$/, 'Not Valid')
      .required(),

    // password: yup.string().min(8).max(32).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Container maxW="4xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack w="full" h="full" p={10} spacing={5} alignItems="center">
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="2xl">Check Out</Heading>
            <Text> Provide Your details for the chekout</Text>
          </VStack>
          <Divider />
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={1}>
              {' '}
              <FormControl isRequired isInvalid={Boolean(errors.firstName)}>
                <FormLabel>Fisrt Name:</FormLabel>
                <Input
                  placeholder="First Name"
                  {...register('firstName', { required: true })}
                />
                <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl isRequired isInvalid={Boolean(errors.lastName)}>
                <FormLabel>Last Name::</FormLabel>
                <Input
                  placeholder="Last Name"
                  {...register('lastName', { required: true })}
                />
                <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl isRequired isInvalid={Boolean(errors.email)}>
                <FormLabel>Email:</FormLabel>
                <Input placeholder="Email" {...register('email')} />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl isRequired isInvalid={Boolean(errors.address)}>
                <FormLabel>Address:</FormLabel>
                <Input placeholder="Address" {...register('address')} />
                <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <SimpleGrid columns={3} columnGap={1} w="full">
                <GridItem colSpan={1}>
                  {' '}
                  <FormControl isRequired isInvalid={Boolean(errors.city)}>
                    <FormLabel>City:</FormLabel>
                    <Input placeholder="City" {...register('city')} />
                    <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormControl isRequired isInvalid={Boolean(errors.post)}>
                    <FormLabel>Post:</FormLabel>
                    <Input
                      {...register('email')}
                      placeholder="Post Code"
                      {...register('post')}
                      type="number"
                    />
                    <FormErrorMessage>{errors.post?.message}</FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormControl isRequired isInvalid={Boolean(errors.country)}>
                    <FormLabel>Country:</FormLabel>
                    <Input {...register('country')} placeholder="Country" />
                    <FormErrorMessage>
                      {errors.country?.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
              </SimpleGrid>
            </GridItem>

            <VStack mt={4} spacing={3} alignItems="flex-start">
              <Text> Provide the card Details </Text>
            </VStack>
            <GridItem colSpan={2}>
              <FormControl isRequired isInvalid={Boolean(errors.cardName)}>
                <FormLabel>Name:</FormLabel>
                <Input
                  {...register('cardName')}
                  placeholder="As on your Card"
                />
                <FormErrorMessage>{errors.cardName?.message}</FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl isRequired isInvalid={Boolean(errors.cardNumber)}>
                <FormLabel>Card Number:</FormLabel>
                <Input
                  {...register('cardNumber')}
                  placeholder="You debit or credit card number"
                  type="number"
                />
                <FormErrorMessage>
                  {errors.cardNumber ? 'Provide a valid Card Number' : ''}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl isRequired isInvalid={Boolean(errors.expireDate)}>
                <FormLabel>Expiring Date:</FormLabel>
                <Input
                  {...register('expireDate')}
                  placeholder="Expration date "
                />
                <FormHelperText> MM/YY </FormHelperText>
                <FormErrorMessage>
                  {errors.expireDate?.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl isRequired isInvalid={Boolean(errors.cvv)}>
                <FormLabel>CVV:</FormLabel>
                <Input {...register('cvv')} placeholder="CVV" />
                <FormHelperText> CVV on your card </FormHelperText>
                <FormErrorMessage>{errors.cvv?.message}</FormErrorMessage>
              </FormControl>
            </GridItem>
          </SimpleGrid>
          <Button
            size="lg"
            mt={4}
            colorScheme="teal"
            // isLoading={props.isSubmitting}
            type="submit"
          >
            Check Out
          </Button>
        </VStack>
      </form>
    </Container>
  );
}

export default Checkout;
