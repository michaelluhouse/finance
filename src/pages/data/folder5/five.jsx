import React from 'react';
import { Link } from "react-router-dom";
import HomePage from '../../../pages/homepage/homepage';

import { Card } from 'antd';

const Five = () => (

    <Card
        hoverable
        style={{ width: 1750 }}
    >
        <onClick>
            <Link to={`/`} element={<HomePage />} >
                <h1>财务的基本概念（2）：成本、费用与支出</h1>
                <h1>Basic Concepts of Finance (2): Costs, Fees and Expenses</h1>
                <h1>一、支出是一个会计主体所有资产的流出.它表现为一个特定主体的人力,财力和物力的耗费和碱少,它可用货币来计量.不论这种支出是否与生产经营活动有关,一般可以把企业的支出划分为资本性支出,收益性支出,利润性支出,营业外支出等四类.</h1>
                <h2>资本性支出</h2>
                <h2>
                    它是指受益期与若干个会计年度有关的支出.它一般对企业的生产经营活动产生重大的影响,决定企业的长期生产经营能力,是企业生产经营的物质基础.
                </h2>
                <h2>收益性支出</h2>
                <h2>
                    它是指受益期在一个会计年度内的支出.它是企业在生产经营活动中所发生的经常性开支.是维持生产经营活动顺利进行的必要支出.收益性支出代表着一个企业正常生产经营的周转,是企业资产不断流动的表现.
                </h2>
                <h2>利润性支出</h2>
                <h2>
                广义的利润性支出.是指企业在弥补生产经营中发生的生产资料和劳动力耗费后所剩余的新增价值中向企业投资人,债权人和国家分配,缴纳的利润,利和税金.它实质上是列新增价值的分配.由于在会计核算中利息和税金都可作为费用,从企业收入中干扣除,因而狭义的利润支出一般仅指向投资人分配的利润(股利).
                </h2>
                <h2>营业外支出</h2>
                <h2>
                它是指在企业流出的各项资产中,那些不属于资本性支出,收益性支出和利润性支出以外的与生产经营活动无关或关联不大的支出.这些支出在正常情况下一般是不会发生的.它属于偶然性的支出.如企业违法经营的罚款,滞纳金,赔偿金和各种非正常损失等.
                </h2>
                <h1>二,成本在非专业用语时.成本的概念等同于支出,费用.但在会计学上,支出,成本与费用的概念还是有较大差异的.</h1>
                <h2>
                1、理论成本.马克思通过成本的考察,既看到了耗费,又重视补偿.认为商品的成本是指商品生产中耗费的物化劳动和劳动的货币表现(+).生产成本是维持简单再生产的补偿尺度.若按生产成本提供的补偿尺度得不到满足.企业的简单再生产就无法进行.马克思对成本的高度理论概括,是符合客观经济内涵的成本.是我国会计学术中成本理论研究的基石,被称为"理论成本.
                </h2>
                <h2>
                2、广义成本.美国会计学会()所属成本概念与标准委员会对成本的定义为:"成本是指为达到特定的日的而发生或应发生的价值牺牲,它可用货币单位加以衡量.也就是说.成本是为实现一定目标而支付的(或应支付的),可以用货币衡量的代价.美国会计师协会()1957年发布的(第四号会计名词公报》对成丰的定义为:成本是指为获取财货或劳务而支付的现金或转移其他资产,发行股票,提供劳务或发生的负债,而以0货币衡量的数额."                </h2>
                <h2>
                3、狭义成本.狭义成本实质是已耗成本中与产品生产直接相关的那部分生产费用,及产品的生产成本.
                </h2>
                <h1>
                三,费用美国会计师协会发布的(第四号会计名词公报)对费用的定义为"最广义的费用系指可由收入中减出的一切已耗成本.在损益表中,已耗成本常有各种不同的名称.包括成本,费用,或损失,例如:销货成本,营业费用,销售费用及出售资产损失."如果把生产经营费用与产品生产鞋系起来看,费用可以划分为生产费用和期间费用两类.
                </h1>
                <h2>
                    1.生产费用.它实质就是产品生产成本.也可以叫做制造成本,它是与产品的生产直接相关的成本.包括产品生产中所消耗的直接费用,直接人工,其他直接费用和制造费用
                </h2>
                <h2>
                    2.期间费用.它是企业生产经营过程中所发生的主要与该会计期间的销售,经营和管理等活动相关的支出.是生产经营费用中的一部分.由于其一旦支付出去,即已耗用.习惯上称作费用,如管理费用,销售费用,财务费用等.
                </h2>
                <h1>
                    四,损失美国会计协会发布的(第四号会计名词公报)对损失的定义为:"损失系指:(1)就广义而言,为某期间所有费用超过收入的数额,或(2)当资产出售,废弃或困意外灾害或冲销而致全部或局部毁损时,其成本超过相关收入的部分.若损失的发生,系困上述(2)的情况时.应列作收入的减项.
                    困其属于广义的费用.损失有两种情况:一是全面地评价企业总的经营情况时,所有费用超过所有收人的部分,即整个企业的损失(亏损);二是评价某一方面,某一部分的经营情况时.对收入没有贡献的部分,或者说没有收人来补偿的部分,如产品生产过程中的废品损失,固定资产清理损失,非正常损失等.                
                </h1>
                <h1>
                五,支出,成本,费用,损失之间的内在联系综上所述,支出,成本与费用的关系是非常密切的由此产生了如下一些会计核算的基本规定:
                </h1>
                <h2>
                (1)应作为资产计价的不能直接计入费用,如固定资产要分期计提折旧,材料要按各期领用额分配材料费用等;
                </h2>
                <h2>
                (2)待摊费用和递延资产的摊销;
                </h2>
                <h2>
                (3)预提费用的计提;
                </h2>
                <h2>
                (4)产品成本(狭义成本)和期间费用的界限,本期费用与非本期费用的界限等等.这都是成本与费用之间的显着差别.
                </h2>
                <h1>
                在会计实务和教学工作中.准确掌握支出,成本,费用,损失的概念.了解它们之间的区别与鞋系.有助于准确核算成本费用,正确进行资产的计价和价值的转移.了解会计学中的假设,要素和重要术语之间的关系,因而具有一定的现实意义.
                </h1>
            </Link>
        </onClick>
    </Card>

);

export default Five;

