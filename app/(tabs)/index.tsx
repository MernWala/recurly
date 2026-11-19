import { Link } from "expo-router";
import { Text } from "react-native";
import { styled } from 'nativewind'
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView)

export default function Index() {
  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">Edit app/index.tsx to edit this screen.</Text>
      <Link href="/onboarding" className="p-3 mb-2 bg-primary text-white rounded"> Onboard </Link>
      <Link href="/(auth)/sign-in" className="p-3 mb-2 bg-primary text-white rounded"> Register </Link>
      <Link href="/(auth)/sign-up" className="p-3 mb-2 bg-primary text-white rounded"> Login </Link>
      <Link href="/insights" className="p-3 mb-2 bg-primary text-white rounded"> Insights </Link>
      <Link href="/subscription" className="p-3 mb-2 bg-primary text-white rounded"> Subscriptions </Link>
      <Link href="/settings" className="p-3 mb-2 bg-primary text-white rounded"> Settings </Link>
    </SafeAreaView>
  );
}
