import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import {Topbar} from "./scenes/global/Topbar";
import {Sidebar} from "./scenes/global/Sidebar";
import {Dashboard} from "./scenes/Dashboard/dashboard";
import {Team} from "./scenes/Team/team";
import {Receipt} from "./scenes/Invoices/receipt";
import {Contacts} from "./scenes/Contacts/contacts";
import {Bar} from "./scenes/Bar/bar";
import {Form} from "./scenes/Form/form";
import {LineChart} from "./scenes/Line/lineChart";
import {PieChart} from "./scenes/Pie/pieChart";
import {Faq} from "./scenes/FAQ/faq";
import {Geography} from "./scenes/Geography/geography";
import {Calendar} from "./scenes/Calendar/calendar";

function App() {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<Sidebar 	/>
					<main className="content">
						<Topbar />
						<Routes>
							<Route path="/" element={<Dashboard />}/>
							<Route path="/team" element={<Team />}/>
							<Route path="/invoices" element={<Receipt />}/>
							<Route path="/contacts" element={<Contacts />}/>
							<Route path="/bar" element={<Bar />}/>
							<Route path="/form" element={<Form />}/>
							<Route path="/line" element={<LineChart />}/>
							<Route path="/pie" element={<PieChart />}/>
							<Route path="/FAQ" element={<Faq />}/>
							<Route path="/geography" element={<Geography />}/>
							<Route path="/calendar" element={<Calendar />}/>
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
