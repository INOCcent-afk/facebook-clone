export const getFormmatedDate = (createdAt: Date) => {
	const date = new Date(createdAt);

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const month = months[date.getMonth()];
	const day = date.getDate();
	const hours = date.getHours() % 12 || 12;
	const minutes = ("0" + date.getMinutes()).slice(-2);
	const ampm = date.getHours() < 12 ? "AM" : "PM";

	const formattedDate = `${month} ${day} at ${hours}:${minutes} ${ampm}`;

	return formattedDate;
};
