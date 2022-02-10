import React from 'react';
import MenuItem from '../menu-item/menu-item.jsx'
import './directory.scss'

import a from '../../assets/images/1.jpeg'
import b from '../../assets/images/2.jpeg'
import c from '../../assets/images/3.jpeg'
import d from '../../assets/images/4.jpeg'
import e from '../../assets/images/5.jpeg'
import f from '../../assets/images/6.jpeg'
import g from '../../assets/images/7.jpeg'
import h from '../../assets/images/8.jpeg'
import i from '../../assets/images/9.jpeg'
import j from '../../assets/images/10.jpeg'
import k from '../../assets/images/11.jpeg'
import l from '../../assets/images/12.jpeg'
import m from '../../assets/images/13.jpeg'
import n from '../../assets/images/14.jpeg'
import o from '../../assets/images/15.jpeg'
import p from '../../assets/images/16.jpeg'
import q from '../../assets/images/17.jpeg'
import r from '../../assets/images/18.jpeg'
import s from '../../assets/images/19.png'
import t from '../../assets/images/20.jpeg'

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                  title: '一、',
                  imageUrl: a,
                  id: 1,
                  linkUrl: '章节/一',
                  subtitle1: '会计学、财务管理学、经济学与金融学的区别',
                  subtitle2: 'Differences between Accounting, Financial Management, Economics and Finance'
                },
                {
                  title: '二、',
                  imageUrl: b,
                  id: 2,
                  linkUrl: '章节/二',
                  subtitle1: '会计为企业与投资者提供决策依据',
                  subtitle2: 'The decision-making basis that Accounting provides for enterprises and investors'
                },
                {
                  title: '三、',
                  imageUrl: c,
                  id: 3,
                  linkUrl: '章节/三',
                  subtitle1: '企业如何记账——复式记账法与会计准则',
                  subtitle2: 'How to keep accounts in an enterprise——Double-entry bookkeeping and accounting standards'
                },
                {
                  title: '四、',
                  imageUrl: d,
                  id: 4,
                  linkUrl: '章节/四',
                  subtitle1: '财务的基本概念（1）：资产、负债、所有者权益、收入、费用、利润',
                  subtitle2: "Basic Concepts of Finance (1): Assets, Liabilities, Owner's Equity, Income, Expenses, Profits"
                },
                {
                  title: '五、',
                  imageUrl: e,
                  id: 5,
                  linkUrl: '章节/五',
                  subtitle1: '财务的基本概念（2）：成本、费用与支出',
                  subtitle2: 'Basic Concepts of Finance (2): Costs, Fees and Expenses'
                },
                {
                    title: '六、',
                    imageUrl: f,
                    id: 6,
                    linkUrl: '章节/六',
                    subtitle1: '财务的基本概念（3）：无形资产、商誉、折旧与摊销',
                    subtitle2: 'Basic Concepts of Finance (3): Intangible Assets, Goodwill, Depreciation and Amortization'
                },
                {
                    title: '七、',
                    imageUrl: g,
                    id: 7,
                    linkUrl: '章节/七',
                    subtitle1: '认识三张财务报表',
                    subtitle2: 'Recognizing the three financial statements'
                },
                {
                    title: '八、',
                    imageUrl: h,
                    id: 8,
                    linkUrl: '章节/八',
                    subtitle1: '读懂资产负债表之资产',
                    subtitle2: 'Read the assets of the balance sheet'
                },
                {
                    title: '九、',
                    imageUrl: i,
                    id: 9,
                    linkUrl: '章节/九',
                    subtitle1: '读懂资产负债表之负债',
                    subtitle2: 'Read the liabilities of the balance sheet'
                },
                {
                    title: '十、',
                    imageUrl: j,
                    id: 10,
                    linkUrl: '章节/十',
                    subtitle1: '读懂资产负债表之所有者权益',
                    subtitle2: "Read the owner's equity of the balance sheet"
                },
                {
                    title: '十一、',
                    imageUrl: k,
                    id: 11,
                    linkUrl: '章节/十一',
                    subtitle1: '读懂资产负债表之所有者权益的变动',
                    subtitle2: "Read the changes in owner's equity in the balance sheet"
                },
                {
                    title: '十二、',
                    imageUrl: l,
                    id: 12,
                    linkUrl: '章节/十二',
                    subtitle1: '读懂损益表',
                    subtitle2: 'Read the income statement'
                },
                {
                    title: '十三、',
                    imageUrl: m,
                    id: 13,
                    linkUrl: '章节/十三',
                    subtitle1: '读懂现金流量表',
                    subtitle2: 'Read the cash flow statement'
                },
                {
                    title: '十四、',
                    imageUrl: n,
                    id: 14,
                    linkUrl: '章节/十四',
                    subtitle1: '财务报表分析：概述',
                    subtitle2: 'Financial Statement Analysis: An Overview'
                },
                {
                    title: '十五、',
                    imageUrl: o,
                    id: 15,
                    linkUrl: '章节/十五',
                    subtitle1: '财务报表分析：方法与内容',
                    subtitle2: 'Financial Statement Analysis: Method and Content'
                },
                {
                    title: '十六、',
                    imageUrl: p,
                    id: 16,
                    linkUrl: '章节/十六',
                    subtitle1: '财务造假的动机与手段',
                    subtitle2: 'Motives and Means of Financial Fraud'
                },
                {
                    title: '十七、',
                    imageUrl: q,
                    id: 17,
                    linkUrl: '章节/十七',
                    subtitle1: '如何识别财务造假',
                    subtitle2: 'How to Identify Financial Fraud'
                },
                {
                    title: '十八、',
                    imageUrl: r,
                    id: 18,
                    linkUrl: '章节/十八',
                    subtitle1: '什么事EPS、市盈率、市净率',
                    subtitle2: 'What is EPS, price-earnings ratio, price-to-book ratio'
                },
                {
                    title: '十九、',
                    imageUrl: s,
                    id: 19,
                    linkUrl: '章节/十九',
                    subtitle1: '有价证卷解析',
                    subtitle2: 'Valuable Certificate Analysis'
                },
                {
                    title: '二十、',
                    imageUrl: t,
                    id: 20,
                    linkUrl: '章节/二十',
                    subtitle1: '价值与价值评估方法',
                    subtitle2: 'Value and Valuation Methods'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ title, imageUrl, id, subtitle1, subtitle2 }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} subtitle1={subtitle1} subtitle2={subtitle2} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;