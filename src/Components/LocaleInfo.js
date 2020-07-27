import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import Time from './Time';
import Weather from './Weather';

const InfoWrapper = styled.div`
    display: inline-block;
    float: right;
`;
const LocaleInfo = () => {
    return (
        <InfoWrapper>
            <Time></Time>
            <Weather></Weather>
        </InfoWrapper>
    );
}

export default LocaleInfo;