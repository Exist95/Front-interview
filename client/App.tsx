import { SafeAreaProvider } from "react-native-safe-area-context";
import { TabBar } from "./router/index";

export default function App() {
  return (
    <SafeAreaProvider>
      <TabBar />
    </SafeAreaProvider>
  );
}
