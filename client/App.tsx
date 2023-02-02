import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactNativeRecoilPersist, {
  ReactNativeRecoilPersistGate,
} from "react-native-recoil-persist";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";
import { AuthNavigator } from "./router/AuthStack";
import { StackNavigator } from "./router/Stack";
import { LoginViewModel } from "./vm/LoginViewModel";

const queryClient = new QueryClient();

export default function App() {
  return (
    <RecoilRoot>
      <ReactNativeRecoilPersistGate store={ReactNativeRecoilPersist}>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <StackNavigator />
          </SafeAreaProvider>
        </QueryClientProvider>
      </ReactNativeRecoilPersistGate>
    </RecoilRoot>
  );
}
