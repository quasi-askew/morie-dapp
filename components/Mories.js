import NextImage from "next/image";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  WrapItem,
  useDisclosure,
  Button,
  Center,
  Fade,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";

const Mories = ({ mories }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentMorie, setCurrentMorie] = useState(null);

  const handleSetCurrentMorie = (token) => {
    setCurrentMorie(token);
    onOpen();
  };

  const handleCloseModal = () => {
    onClose();
    setCurrentMorie(null);
  };

  if (!mories) {
    return null;
  }

  return (
    <>
      {mories &&
        mories.map((token) => {
          return (
            <WrapItem key={token.tokenID}>
              <Button
                onClick={() => handleSetCurrentMorie(token)}
                variant="ghost"
                p={0}
              >
                <NextImage
                  height={30}
                  width={30}
                  src={token.imageURI}
                  alt={token.tokenID}
                />
              </Button>
            </WrapItem>
          );
        })}
      <Modal isOpen={isOpen} onClose={handleCloseModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Morie #{currentMorie?.tokenID}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p={4}>
              <Center>
                <NextImage
                  height={500}
                  width={500}
                  src={currentMorie?.imageURI}
                  alt={currentMorie?.tokenID}
                />
              </Center>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Mories;
