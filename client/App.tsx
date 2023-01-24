import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";
import { TabBar } from "./router/index";

export default function App() {
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <TabBar />
      </SafeAreaProvider>
    </RecoilRoot>
  );
}
