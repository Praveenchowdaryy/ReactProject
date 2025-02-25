import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { saveUserData } from '../store/userSlice';
import { v4 as uuidv4 } from 'uuid';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [isDirty, setIsDirty] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  const handleSubmit = () => {
    const userData = {
      id: uuidv4(),
      ...formData
    };
    dispatch(saveUserData(userData));
    setIsDirty(false);
    toast({
      title: 'Success',
      description: 'User data saved successfully',
      status: 'success',
    });
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              setIsDirty(true);
            }}
          />
        </FormControl>
        {/* Add similar FormControl components for email, phone, and address */}
        <Button onClick={handleSubmit}>Submit</Button>
      </VStack>
      <AlertDialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Unsaved Changes</AlertDialogHeader>
            <AlertDialogBody>
              You have unsaved changes. Do you want to save them?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button colorScheme="blue" onClick={handleSubmit} ml={3}>
                Save
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default UserForm;
