import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitle: "Learning Words"
      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="wordlist" options={{}} />
      <Stack.Screen name="flash" options={{}} />
      <Stack.Screen name="quiz" options={{}} />
      <Stack.Screen name="koreaQuiz" options={{}} />
    </Stack>
  );
}
