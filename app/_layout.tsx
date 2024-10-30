import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f50ca0',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitle: "Englishgeh"
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
