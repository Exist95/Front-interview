import { SafeAreaProvider } from "react-native-safe-area-context";
import { TabBar } from "./router/Tab";

export default function App() {
  return (
    <SafeAreaProvider>
      <TabBar />
    </SafeAreaProvider>
  );
}
