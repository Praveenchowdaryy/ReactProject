import { Box, Button, VStack } from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../store/counterSlice';

const Counter = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  const props = useSpring({
    from: { height: '0%' },
    to: { height: `${Math.min(count * 10, 100)}%` },
    config: { tension: 280, friction: 60 }
  });

  return (
    <Box position="relative" h="400px" w="100%">
      <animated.div
        style={{
          ...props,
          position: 'absolute',
          bottom: 0,
          width: '100%',
          background: 'linear-gradient(to top, #2196f3, #64b5f6)',
          borderRadius: '8px',
        }}
      />
      <VStack spacing={4} position="relative" zIndex={1}>
        <Box fontSize="2xl" fontWeight="bold">{count}</Box>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        <Button onClick={() => dispatch(reset())}>Reset</Button>
      </VStack>
    </Box>
  );
};

export default Counter;
