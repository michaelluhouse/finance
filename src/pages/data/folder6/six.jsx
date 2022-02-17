import React from 'react';
import { Link } from "react-router-dom";
import HomePage from '../../../pages/homepage/homepage';

import { Card } from 'antd';

const Six = () => (

    <Card
        hoverable
        style={{ width: 1750 }}
    >
        <onClick>
            <Link to={`/`} element={<HomePage />} >
                <h1>财务的基本概念（3）：无形资产、商誉、折旧与摊销</h1>
                <h1>Basic Concepts of Finance (3): Intangible Assets, Goodwill, Depreciation and Amortization</h1>
                <h2>固定资产的折旧和无形资产的摊销是类似的概念，表示资产的消耗以其他经济利益流入的方式作为补偿。固定资产折旧的年限一般由企业和行业惯例来决定。无形资产一般有专利、土地使用权等，大部分按照法律规定的年限进行摊销。</h2>
                <h1>联系</h1>
                <h2>
                    1、固定资产折旧与无形资产摊销方法均是根据与其有关的经济利益的预期实现方式选择的。
                </h2>
                <h2>
                    2、无形资产摊销和固定资产折旧在会计处理上都应当考虑该项固定资产、无形资产所服务的对象，并以此为基础将其折旧、摊销价值计入相关资产的成本或者当期损益。                </h2>
                <h1>区别</h1>
                <h2>1、范围不同</h2>
                <h2>
                    无形资产的摊销：企业应对所有使用寿命有限的无形资产进行摊销。
                </h2>
                <h2>
                    固定资产的折旧：企业应对所有的固定资产计提折旧，但已提足折旧仍继续使用的固定资产和单独计价入账的土地除外。
                </h2>
                <h2>2、更新改造不同</h2>
                <h2>
                无形资产的摊销：无形资产不存在更新改造的问题。
                </h2>
                <h2>
                固定资产的折旧：处于更新改造过程而停止使用的固定资产，应将其账面价值转入在建工程，不再计提折旧。
                </h2>
                <h2>3、期间不同</h2>
                <h2>
                固定资产的折旧：固定资产从增加的次月起开始计提折旧，停止使用的当月仍计提折旧。
                </h2>
                <h2>
                无形资产的摊销：无形资产从增加当月起计提摊销，停止使用的当月不计提摊销。
                </h2>
            </Link>
        </onClick>
    </Card>

);

export default Six;

