import React from 'react';
import { Link } from "react-router-dom";
import HomePage from '../../../pages/homepage/homepage';

import { Card } from 'antd';

const Four = () => (

    <Card
        hoverable
        style={{ width: 1750 }}
    >
        <onClick>
            <Link to={`/`} element={<HomePage />} >
                <h1>财务的基本概念（1）：资产、负债、所有者权益、收入、费用、利润</h1>
                <h1>Basic Concepts of Finance (1): Assets, Liabilities, Owner's Equity, Income, Expenses, Profits</h1>
                <h1>六大要素为资产、负债、所有者权益、收入、费用、利润。此六者构成了企业财务的全部。关系具体如下：</h1>
                <h2>资产由固定资产、流动资产等组成；</h2>
                <h2>负债由流动负债、长期负债等组成；</h2>
                <h2>所有者权益由实收资本、盈余公积等组成；</h2>
                <h2>收入由主营业务收入、营业外收入等组成；</h2>
                <h2>费用由制造费用、经营费用、管理费用、财务费用等组成；</h2>
                <h2>利润由营业利润扣除各项开支后的项目等组成；</h2>
                <h2>资产=负债+所有者权益；</h2>
                <h2>所有者权益=资本+利润；</h2>
                <h2>利润=收入-费用；</h2>
                <h2>资产+费用（成本）=负债+资本+收入；</h2>
                <h2>资产类科目余额+成本类科目余额 = 负债类科目余额+所有者权益类科目余额 +损益类科目余额。</h2>
                <h1>会计等式(1)：</h1>
                <h2>
                    资产=负债+所有者权益，即：资金运用=资金来源。该等式是会计记账、核算的基础，也是编资产负债表的基础，它表明了股东与债权人两者在企业的资产中到底占了多大份额。在负债不变时资产与所有者权益同方向变化，所有者权益不变呢，资产就与负债同方向变化，而当所有者权益与负债都变化的时候，其资产的变化则等于两者之和。
                </h2>
                <h1>会计等式(2)：</h1>
                <h2>
                    收入－费用=利润（或亏损），即：得到的－付出的=赚的（或亏的）企业的目标就是赚钱，只有取得的收入抵消为这笔收入所花的费用还有剩余，
                </h2>
                <h1>会计等式(3综合式)：</h1>
                <h2>
                企业才算是盈利了。资产=负债+所有者权益+收入－费用会计恒等式企业在经营中，“收入－费用=利润”中的利润就表明现金流入大于现金流出，也就是企业资产增多，从另一个方面说，这一时刻负债不变，赚与赔都是股东的。新的所有者权益=旧的所有者权益+利润=旧的所有者权益+收入－费用；而，新资产=负债+新所有者权益=负债+旧的所有者权益+收入－费用
                </h2>
            </Link>
        </onClick>
    </Card>

);

export default Four;

