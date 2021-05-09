import React from 'react';
import { BsBucket, BsBarChart } from "react-icons/bs";
import { Link } from 'react-router-dom';
import * as S from './style'

function Home() {
	return (
		<S.HomeContainer>
			<S.TitleDiv>
				제목
			</S.TitleDiv>
			<S.MenuCard>
				<Link to="/shop">
					<S.MenuItem>
						<S.MenuIcon>
							<BsBucket />
						</S.MenuIcon>
						<S.MenuTitle>착한 업소 정보 얻기</S.MenuTitle>
					</S.MenuItem>
				</Link>
				<Link to="/price">
					<S.MenuItem>
						<S.MenuIcon>
							<BsBarChart />
						</S.MenuIcon>
						<S.MenuTitle>착한 물가 정보 얻기</S.MenuTitle>
					</S.MenuItem>
				</Link>
			</S.MenuCard>
		</S.HomeContainer>
	);
}

export default Home;
