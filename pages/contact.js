import Layout from "../components/layouts/article"
import React, { useState } from "react"
import {
  Box, 
  Container, 
  Heading,
  FormControl, 
  FormLabel,
  FormErrorMessage,
  Textarea,
  Input,
  useColorModeValue,
  Button,
  Text
} from "@chakra-ui/react"
import {  } from "@chakra-ui/react"

const Contact = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidMessage, setIsValidMessage] = useState(true);

  const [buttonText, setButtonText] = useState("Submit");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;
    setIsSubmitting(true)

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
      setIsValidName(false);
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
      setIsValidEmail(false);
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
      setIsValidMessage(false);
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Submit");
        setIsSubmitting(false);
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Submit");
      setIsSubmitting(false);

      setEmail('');
      setFullName('');
      setMessage('');
    } else {
      setIsSubmitting(false);
      setShowFailureMessage(true);
    }
    
    //console.log(fullname, email, subject, message);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
    setShowSuccessMessage(false);
    setShowFailureMessage(false);
  }
  const handleNameChange = (e) => {
    setFullName(e.target.value);
    setIsValidName(true);
    setShowSuccessMessage(false);
    setShowFailureMessage(false);
  }
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setIsValidMessage(true);
    setShowSuccessMessage(false);
    setShowFailureMessage(false);
  }


  return (
    <Layout title="Contact">
      <Container maxW="container.md" mt={10}>
        <Heading variant="page-title">
          Say Hello
        </Heading>
        <Box maxW="container.md" borderRadius={14} bgGradient="linear(to-r, #ff0f7b, #f89b29)" p={1} mt={10}>
          <Box maxW="container.md" bg={useColorModeValue("#ffffff","#000000")} borderRadius={10} p={10}>
            {showSuccessMessage ? (
              <Text color='green'>
                Message Sent
              </Text>
            ) : ('')}
            {showFailureMessage ? (
              <Text color='red'>
                Message could not be sent
              </Text>
            ) : ('')}
            <FormControl isRequired pb={5} isInvalid={!isValidName}>
              <FormLabel>Name</FormLabel>
              <Input value={fullname} onChange={handleNameChange} />
              {!isValidName ? (<FormErrorMessage>Name is required</FormErrorMessage>) : ('')}
            </FormControl>
            <FormControl isRequired pt={3} pb={5} isInvalid={!isValidEmail}>
              <FormLabel>Email Address</FormLabel>
              <Input type='email' value={email} onChange={handleEmailChange}/>
              {!isValidEmail ? (<FormErrorMessage>Email is required</FormErrorMessage>) : ('')}
            </FormControl>
            <FormControl isRequired pb={5} isInvalid={!isValidMessage}>
              <FormLabel>Message</FormLabel>
              <Textarea value={message} onChange={handleMessageChange} />
              {!isValidMessage ? (<FormErrorMessage>Message is required</FormErrorMessage>) : ('')}
            </FormControl>
            <Box align='center'>
              <Button isLoading={isSubmitting} loadingText='Submitting' colorScheme='gray' onClick={handleSubmit}>
                {buttonText}
              </Button>
            </Box>
          </Box>
        </Box>
        
      </Container>
    </Layout>
  )
}

export default Contact