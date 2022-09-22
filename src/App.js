import styled from "styled-components";
import Button from "./components/Button";
import Console from "./components/Console";
import Flex from "./components/Flex";
import Title from "./components/Title";

const AppWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	padding: 2rem;
	background: #262626;
`;

function App() {
	return (
		<AppWrapper className="App">
			<Flex justify="center">
				<Title>Console using styled components. Jixlen 2022</Title>
			</Flex>
			<Flex direction="column" margin="10px 0">
				<Console />
				<Button color="#db7093" align="flex-end">
					Send
				</Button>
			</Flex>
		</AppWrapper>
	);
}

export default App;
