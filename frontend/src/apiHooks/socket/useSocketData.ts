import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import io from "socket.io-client";

const socket = io("http://localhost:4000");

export const useSocketData = () => {
	const queryClient = useQueryClient();

	useEffect(() => {
		socket.on("connection", (data) => {
			queryClient.setQueryData(["socketData"], data);
		});

		return () => {
			socket.off("connection");
		};
	}, [queryClient]);

	return useQuery(["socketData"], async () => {
		try {
			await fetch("http://localhost:4000");
		} catch (error) {
			console.log(error);
		}
	});
};
