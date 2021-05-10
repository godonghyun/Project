import React from 'react';
import { BsBucket, BsBarChart } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import * as S from './style'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ACHIEVEMENT_IMAGES, SLIDER_SETTINGS } from '../../lib/constants/slider'

function Home() {
	return (
		<S.HomeContainer>
			<S.TitleDiv />
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
				<Link to="/about">
					<S.MenuItem>
						<S.MenuIcon>
							<BsBarChart />
						</S.MenuIcon>
						<S.MenuTitle>간단한 기능?</S.MenuTitle>
					</S.MenuItem>
				</Link>
			</S.MenuCard>
			<S.SliderTitle>⭐오늘의 추천 가게⭐</S.SliderTitle>
			<S.SliderBox>
				<Slider {...SLIDER_SETTINGS}>
					{
						ACHIEVEMENT_IMAGES.map((image) => (
							<S.SliderContainer>
								<S.SliderImage src={image} />
							</S.SliderContainer>
						))
					}
				</Slider>
			</S.SliderBox>
		</S.HomeContainer>
	);
}

export default Home;
