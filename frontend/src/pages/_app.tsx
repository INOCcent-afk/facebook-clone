import { theme } from "@/styles/chakra/theme";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import "firebase/compat/auth";
import "../firebase/firebase-config";
import { AuthProvider } from "@/contexts/";
import { AppTemplate } from "@/containers/AppTemplate/AppTemplate";

const queryClient = new QueryClient({});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<ChakraProvider theme={theme}>
					<AppTemplate>
						<Component {...pageProps} />
					</AppTemplate>
				</ChakraProvider>
			</QueryClientProvider>
		</AuthProvider>
	);
}
