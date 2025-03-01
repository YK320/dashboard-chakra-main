// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Progress,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
  Divider,
  List,
  ListItem,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import PieChart from "components/Charts/PieChart"; // Import PieChart component
// React
import React from "react";

// Sample data for charts
const lineChartData = [
  {
    name: "User Activity",
    data: [200, 750, 400, 850, 150, 650],
  },
];

// Sample data for tables
const pageVisits = [
  {
    pageName: "Dashboard",
    visitors: "4,569",
    uniqueUsers: "340",
    bounceRate: "46.15%"
  },
  {
    pageName: "Data Lab",
    visitors: "3,985",
    uniqueUsers: "319",
    bounceRate: "42.63%"
  },
  {
    pageName: "Surveys",
    visitors: "3,490",
    uniqueUsers: "294",
    bounceRate: "36.82%"
  },
  {
    pageName: "Library",
    visitors: "2,420",
    uniqueUsers: "201",
    bounceRate: "29.30%"
  },
];

const socialTraffic = [
  {
    referral: "Microsoft",
    visitors: "2,845",
    percentage: 45,
    color: "blue"
  },
  {
    referral: "SAML",
    visitors: "1,795",
    percentage: 30,
    color: "purple"
  },
  {
    referral: "Internal",
    visitors: "1,590",
    percentage: 25,
    color: "green"
  }
];

// Activity log data
const activityLog = [
  {
    user: "User name here",
    action: "Permissions changed to admin by admin123",
    time: "2hrs ago"
  },
  {
    user: "User name",
    action: "Successfully logged in",
    time: "2hrs ago"
  }
];

// User distribution data
const userDistribution = [
  { category: "Staff", count: 151 },
  { category: "Students", count: 400 },
  { category: "Other", count: 500 }
];

export default function Dashboard() {
  // Chakra Color Mode
  const textColor = useColorModeValue("gray.700", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");

  const { colorMode } = useColorMode();

  // Chart data for user activity
  const chartData = [
    {
      name: "User Activity",
      data: [200, 750, 400, 850, 150, 650],
    },
  ];

  // Chart options
  const chartOptions = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    markers: {
      size: 4,
    },
    xaxis: {
      categories: ["1 Sep", "2 Sep", "3 Sep", "4 Sep", "5 Sep", "6 Sep"],
      title: {
        text: "Date",
      },
    },
    yaxis: {
      min: 0,
      max: 1200,
      tickAmount: 6,
      title: {
        text: "Users",
      },
    },
    grid: {
      borderColor: borderColor,
    },
    tooltip: {
      theme: "dark",
    },
  };

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
  
      

      {/* Main content area with left margin to account for sidebar */}
      <Box ml="200px" p={4}>
        {/* Metrics Cards */}
        <SimpleGrid columns={{ sm: 1, md: 3, xl: 3 }} spacing="24px" mb="20px">
          <Card minH="125px">
            <Flex direction="column">
              <Flex
                flexDirection="row"
                align="center"
                justify="center"
                w="100%"
                mb="25px">
                <Stat me="auto">
                  <StatLabel
                    fontSize="xs"
                    color="gray.400"
                    fontWeight="bold"
                    textTransform="uppercase">
                    Daily Active Users
                  </StatLabel>
                  <Flex>
                    <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                      1051
                    </StatNumber>
                  </Flex>
                </Stat>
              </Flex>
              <Text color="gray.400" fontSize="sm">
                <Text as="span" color="green.400" fontWeight="bold">
                  18 Mar 2020{" "}
                </Text>
              </Text>
            </Flex>
          </Card>
          <Card minH="125px">
            <Flex direction="column">
              <Flex
                flexDirection="row"
                align="center"
                justify="center"
                w="100%"
                mb="25px">
                <Stat me="auto">
                  <StatLabel
                    fontSize="xs"
                    color="gray.400"
                    fontWeight="bold"
                    textTransform="uppercase">
                    Monthly Active Users
                  </StatLabel>
                  <Flex>
                    <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                      1051
                    </StatNumber>
                  </Flex>
                </Stat>
              </Flex>
              <Text color="gray.400" fontSize="sm">
                <Text as="span" color="green.400" fontWeight="bold">
                  18 Mar 2020{" "}
                </Text>
              </Text>
            </Flex>
          </Card>
          <Card minH="125px">
            <Flex direction="column">
              <Flex
                flexDirection="row"
                align="center"
                justify="center"
                w="100%"
                mb="25px">
                <Stat me="auto">
                  <StatLabel
                    fontSize="xs"
                    color="gray.400"
                    fontWeight="bold"
                    textTransform="uppercase">
                    Daily Time Per Active User
                  </StatLabel>
                  <Flex>
                    <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                      1051
                    </StatNumber>
                  </Flex>
                </Stat>
              </Flex>
              <Text color="gray.400" fontSize="sm">
                <Text as="span" color="green.400" fontWeight="bold">
                  18 Mar 2020{" "}
                </Text>
              </Text>
            </Flex>
          </Card>
        </SimpleGrid>
        

        {/* Second row with charts and user distribution */}
        <Grid
          templateColumns={{ sm: "1fr", md: "2fr 1fr" }}
          gap="20px"
          mb="20px">
          
          {/* User Activity Chart */}
          <Card p="0px">
            <Flex direction="column" mb="10px" p="20px">
              <Text color="gray.400" fontSize="sm" fontWeight="bold" mb="6px">
                User activity
              </Text>
            </Flex>
            <Box minH="300px" p="20px">
              {/* Use the LineChart component instead of BarChart */}
              <LineChart chartData={chartData} chartOptions={chartOptions} title="User Activity" />
            </Box>
          </Card>

          {/* User Distribution Card */}
          <Card p="20px">
            <Text fontSize="lg" color={textColor} fontWeight="bold" mb="15px">
              Daily active users
            </Text>
            <Text fontSize="3xl" color={textColor} fontWeight="bold" mb="20px">
              1051
            </Text>
            {/* User distribution pie chart */}
            <PieChart
              chartData={userDistribution.map(item => item.count)} // Pass counts as chart data
              labels={userDistribution.map(item => item.category)} // Pass categories as labels
              colors={["#3182CE", "#180a66", "#1fceed"]} // Custom colors for the pie chart
            />
            {/* User distribution list */}
            <List spacing={3} mb="20px">
              {userDistribution.map((item, index) => (
                <ListItem key={index} display="flex" justifyContent="space-between">
                  <Flex alignItems="center">
                    <Box w="8px" h="8px" borderRadius="full" bg={index === 0 ? "blue.500" : index === 1 ? "purple.500" : "gray.500"} mr="2" />
                    <Text color={textColor}>{item.category}</Text>
                  </Flex>
                  <Text color={textColor}>- {item.count}</Text>
                </ListItem>
              ))}
            </List>

            <Divider my="20px" />
            

            {/* Authentication Method Section */}
            <Text fontSize="md" color={textColor} fontWeight="bold" mb="15px">
              By Authentication Method
            </Text>

            <SimpleGrid columns={3} spacing={5}>
              <Box>
                <Text fontSize="sm" color="gray.500">Microsoft</Text>
                <Text fontSize="xl" fontWeight="bold">100</Text>
              </Box>
              <Box>
                <Text fontSize="sm" color="gray.500">Internal</Text>
                <Text fontSize="xl" fontWeight="bold">100</Text>
              </Box>
              <Box>
                <Text fontSize="sm" color="gray.500">SAML</Text>
                <Text fontSize="xl" fontWeight="bold">100</Text>
              </Box>
            </SimpleGrid>
          </Card>
        </Grid>

        {/* Activity Log */}
        <Card p="20px" mb="20px">
          <Text fontSize="lg" color={textColor} fontWeight="bold" mb="15px">
            Activity log
          </Text>
          
          <List spacing={4}>
            {activityLog.map((log, index) => (
              <ListItem key={index}>
                <Text fontWeight="medium">{log.user} {log.action}</Text>
                <Text fontSize="sm" color="gray.500">{log.time}</Text>
                <Text fontWeight="medium">{log.user} {log.action}</Text>
                <Text fontSize="sm" color="gray.500">{log.time}</Text>
                
              </ListItem>
            ))}
          </List>
        </Card>

        {/* Tables Section */}
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr" }}
          gap="20px">
          
         
          
        </Grid>
      </Box>
    </Flex>
  );
}
