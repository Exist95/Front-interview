import { SafeAreaProvider } from "react-native-safe-area-context";
import { TabBar } from "./router";

export default function App() {
  return (
    <SafeAreaProvider>
      <TabBar />
    </SafeAreaProvider>
  );
}
