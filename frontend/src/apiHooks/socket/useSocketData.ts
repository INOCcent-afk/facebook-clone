import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import io from "socket.io-client";

const socket = io("http://localhost:4000");

export const useSocketData = () => {
	const queryClient = useQueryClient();

	useEffect(() => {
		// Set up Socket.IO event listeners
		socket.on("connection", (data) => {
			// Update React Query cache when new data arrives
			queryClient.setQueryData(["socketData"], data);
		});

		// Clean up event listeners when the component unmounts
		return () => {
			socket.off("connection");
		};
	}, [queryClient]);

	// Fetch initial data using React Query
	return useQuery(["socketData"], async () => {
		// Fetch initial data from the server (if needed)
		// You can skip this part if you only want to update data via Socket.IO
		try {
			const response = await fetch("http://localhost:4000");
			console.log(response);
			// const data = await response.json();
			// return data;
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	});
};
