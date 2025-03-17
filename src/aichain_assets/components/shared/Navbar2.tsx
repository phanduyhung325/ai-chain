import React from "react";
import { NavLink } from "react-router-dom";
import "../../src/App.css";
import { Box,  Flex, Heading, Spacer,Image } from "@chakra-ui/react";

function Navbar() {
	
	return (
		<Box className='App-header2' bg={'#1e1b2e'}>
			<Flex as="nav" py='30px' px='80px' alignItems='center' gap='30px' bg='transparent'>
			<Spacer/>
			</Flex>
		</Box>
	);
}

export default Navbar;
