import React from 'react';
import { Link } from "react-router-dom";

// import { Card, Typography } from 'antd';
import './menu-item.scss';
// const { Meta } = Card;
// const { Text } = Typography;

const MenuItem = ({ title, imageUrl, subtitle1, subtitle2, size, id }) => (

    <div className={`${size} menu-item`}>
        <div 
        className='background-image' 
        style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        
        <div className='content'>
            <onClick>
                <Link to={`/${id}`}>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>{subtitle1}</span>
                    <div>_</div>
                    <span className='subtitle'>{subtitle2.toUpperCase()}</span>
                </Link>
            </onClick>
        </div>
    </div>
    // <Card
    //     hoverable
    //     style={{ width: 240 }}
    //     cover={<img alt={title} src={imageUrl} />}
    // >
    //     <Meta title={title} />
    //     <Text>{subtitle1}</Text>
    //     <p></p>
    //     <Text>{subtitle2}</Text>
    // </Card>

);

export default MenuItem;

