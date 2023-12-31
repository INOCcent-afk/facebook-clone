import { theme } from "@/styles/chakra/theme";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import "firebase/compat/auth";
import "../firebase/firebase-config";
import { AuthProvider } from "@/contexts/";
import { AppTemplate } from "@/containers/AppTemplate/AppTemplate";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MessengerProvider } from "@/contexts/MessengerContext/MessengerContext";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<MessengerProvider>
				<QueryClientProvider client={queryClient}>
					{/* <ReactQueryDevtools initialIsOpen={false} /> */}
					<ChakraProvider theme={theme}>
						<AppTemplate>
							<Component {...pageProps} />
						</AppTemplate>
					</ChakraProvider>
				</QueryClientProvider>
			</MessengerProvider>
		</AuthProvider>
	);
}
