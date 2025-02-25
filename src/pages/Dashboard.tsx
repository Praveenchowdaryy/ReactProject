import { Grid, Box } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import Counter from '../components/Counter';
import UserForm from '../components/UserForm';
import RichTextEditor from '../components/RichTextEditor';

const Dashboard = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'User Activity',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6} p={4}>
      <Box>
        <Counter />
      </Box>
      <Box>
        <Line data={chartData} />
      </Box>
      <Box>
        <UserForm />
      </Box>
      <Box>
        <RichTextEditor />
      </Box>
    </Grid>
  );
};

export default Dashboard;
