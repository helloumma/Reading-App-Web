import { useState } from "react";
import Page from "../Pages/Page";
import Search from "../Components/Search";
import Calendar from "../Components/Calendar";
import ResultData from "../Components/Result";
import Data from "../Data/Data.json";
import CSS from "csstype";

const Home = () => {
	const [Result, setResult] = useState<{}[]>([]);
	const [startDate, setStartDate] = useState<any | number>();
	const [endDate, setEndDate] = useState<any | number>();

	const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchResult = Data.data.filter((element) =>
			element.title.includes(e.target.value),
		);
		setResult(searchResult);
	};

	const row: CSS.Properties = {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		width: "100%",
	};

	const column: CSS.Properties = {
		display: "flex",
		flexDirection: "column",
		flexBasis: "100%",
		flex: "1",
	};

	const average: CSS.Properties = {
		color: "#2938fa",
		fontSize: "2rem",
	};

	const noDays: number = Math.ceil(
		Math.abs(endDate - startDate) / (1000 * 60 * 60 * 24),
	);
	// to do [fix var types for pags and parsePage]
	const pages = Result.map((a: Object) => Object.values(a)[3]);
	console.log(pages);
	const parsePage: any = [...pages];

	return (
		<Page variant="regular">
			<Search onChange={searchChange} />
			<div style={row}>
				<div style={column}>
					<Calendar
						startDate={startDate}
						setStartDate={setStartDate}
						endDate={endDate}
						setEndDate={setEndDate}
					/>
				</div>
				<div style={column}>
					<p id="my-test-id" style={average}>
						{/* display message if no book input */}
						{Math.round(parsePage / noDays)} pages to read each day!
					</p>
				</div>
			</div>

			<ResultData data={Result !== null ? Result : Data.data} />
		</Page>
	);
};

export default Home;
