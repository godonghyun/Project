import React, { useEffect, useState } from 'react';
import { BiSearchAlt } from "react-icons/bi";
import axios from 'axios';
import * as S from './style'

const offset = {
    사과: 0, 배: -57, 무: -171, 배추: -114, 양파: -228, 상추: -285, 오이: -342, 애호박: -399, 쇠고기: -456, 돼지고기: -513, 닭고기: -570, 조기: -684, 명태: -741, 오징어: -798,
    고등어: -855, '달걀(10개)': -627, '달걀(30개)': -627, 동태: -1710, 카트: -1767
}

function Intro() {
    const [query, setQuery] = useState("");
    const [average, setAverage] = useState([]);
    const handleQuery = e => {
        setQuery(e.target.value);
    }
    
    const getAverage = async () => {
        const Data = await axios.get('/api/price/average').then(response => response.data);
        setAverage(Data);
    }

    useEffect(() => {
        if (average.length === 0) {
            getAverage();
        }
    }, []);
    
    let [queryResult, ] = query;
    const getAble = (text) => {
        const filteredAverage = average.filter((item) => (
            item.name.indexOf(text) !== -1
        ));

        if (filteredAverage.length === 0) {
            queryResult = {
                name: '카트',
                etc: '검색 결과가 없습니다'
            };
        } else {
            [queryResult, ] = filteredAverage;
        }

        return filteredAverage;
    }

    return (
        <S.PricePage>
            <S.Banner />
            <S.PriceContainer>
                <S.PriceQueryContainer>
                    <S.Title>
                        착한 물가 정보
                    </S.Title>
                    <S.SearchContainer>
                        <S.SearchBar>
                            <BiSearchAlt style={{position:'absolute', margin: '17px 0px 0px 17px', color:'#4f5b66'}} />
                            <S.SearchField type="text" name="search" value={query} onChange={handleQuery} />
                            <S.SearchUl>
                                {
                                    query === '' || getAble(query).length===0 ? null
                                        : getAble(query).map((item, i) => (
                                            <S.SearchLi> {item.name} </S.SearchLi>
                                        ))
                                }
                            </S.SearchUl>
                        </S.SearchBar>
                        {
                            query === '' ? <S.Content>착한 소비를 위한 착한 가격</S.Content>
                                : <FruitBox name={queryResult.name} price={queryResult.price} etc={queryResult.etc} unit={queryResult.unit}/>
                        }
                    </S.SearchContainer>
                </S.PriceQueryContainer>
                <S.PriceListContainer>
                    {
                        average.length === 0 ? null : (average.map((item, i) => (
                                <FruitBox name={item.name} price={item.price} etc={item.etc} unit={item.unit}/>
                            )
                        ))
                    }
                </S.PriceListContainer>
            </S.PriceContainer>
        </S.PricePage>
    );
}

function FruitBox(props) {
    return (
        <S.FruitContainer>
            <tr>
                <S.FruitInfoHolder rowSpan="3">
                    <S.FruitIcon style={{backgroundPositionY:offset[props.name]}}/>
                </S.FruitInfoHolder>
                <S.FruitName>{props.name}<S.FruitBar /></S.FruitName>
                <S.FruitPrice>가격:{props.price}</S.FruitPrice>
            </tr>
            <tr>
                <S.FruitUnit colSpan="2">단위:{props.unit}</S.FruitUnit>
            </tr>
            <tr>
                <S.FruitEtc colSpan="2">{props.etc}</S.FruitEtc>
            </tr>
        </S.FruitContainer>
    )
}

export default Intro;
