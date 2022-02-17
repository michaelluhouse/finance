import React from 'react';
import { Link } from "react-router-dom";
import HomePage from '../../../pages/homepage/homepage';

import { Card } from 'antd';

const Two = () => (

    <Card
        hoverable
        style={{ width: 1750 }}
    >
        <onClick>
            <Link to={`/`} element={<HomePage />} >
                <h1>会计为企业与投资者提供决策依据</h1>
                <h1>The decision-making basis that Accounting provides for enterprises and investors</h1>
                <h2>
                    财务分析是会计人员工作重要内容之一。财务分析是企业领导了解企业财务状况，同时也是企业财务人员参与企业管理，提出合理化建议最有效途径。财务分析要达到重点突出、说明清楚、报送及时、预测准确、措施得力的目的，进入财务工作“灵魂”之境界，充分发挥其诊断企业“听诊器”，观察企业运行状况“显微镜”之功能。
                    企业财务分析质量对企业发展非常重要，财务分析是指以财务报告和其他相关资料为依据和起点，系统地分析企业过去经营成果、现在财务状况以及预测未来企业发展趋势，以便利益相关集团进行科学有效决策。从目前来看，财务分析是一项复杂的工作，需要分析人员倾注大量的时间和精力。然而，从事财务分析的专业人员经常抱怨，自己殚精竭虑撰写出来的“详细而专业”的分析报告，却常常得不到领导的重视，其他部门的管理者也无人关心。久而久之，财务人员对自己工作的价值渐生怀疑，工作热情逐渐衰减，分析报告的质量不断降低，最后变成为完成报告而完成报告，例行公事，应付交差。
                    另一方面，公司管理层或各个责任中心管理者却常常为缺乏决策数据参考而苦恼。他们常常责怪财务部门不能提供及时有用信息，不能提供针对性强，适用性高的分析。有的时候，责任中心管理者还会认为财务人员提供分析是在挑他们毛病，对财务分析人员抱有抵触心理。他们指责财务人员分析纸上谈兵，闭门造车，过于肤浅。
                    因此，财务人员要发挥财务分析作用，应当明了“作用”二字含义。在这里，“作用”二字应当等同于“贡献”。与其他任何工作一样，只有对公司最终绩效改善必不可少且有所帮助，这项工作才有价值。财务分析本身并不能直接带来公司绩效的改善，能够直接带来成果的唯有“行动”。财务分析只能透过其他人才能发挥作用。因此，发挥财务分析作用，唯一途径是促成行动。一份财务分析报告，若能为管理层有意识的决策提供帮助，为责任中心的管理者有意识的行动调整提供参考和验证，就是有价值，或者说是发挥了“作用”。
                </h2>
                <h1>1、尽可能的收集所需资料，掌握真实情况。</h1>
                <h2>
                    财务分析依据是所掌握信息资料。由于财务分析目标相关性，要求我们在进行分析前，既要掌握分析目标所需指标的资料，又要了解相关指标的因果情况；既要收集企业内部的报表资料，又要掌握企业环境的变化情况；既要有客观数据资料，又要有文字意见资料。只有充分地占有信息资料，才能作出正确的分析结论。 一个新情况、新信息的出现，有可能改变分析结论。
                </h2>
                <h1>2、指标对比，综合判断。</h1>
                <h2>
                    企业经济业务是相互制约和相互促进的，指标数值也具有相对性。同一指标数值，在不同的情况下反映不同问题。 要通过指标对比、指标综合，来分析问题，揭露矛盾。比如，企业拥有大量银行存款，这可能是企业销售量剧增结果，也可能是企业无事可做、不善于利用资金反映。要通过指标联系，综合分析判断，得出分析结论。
                </h2>
                <h1>3、点面结合，抓住重点。</h1>
                <h2>
                    在进行财务分析时，往往一两个指标不能说明问题，既要对指标本身的数值进行分析解释，又要对该指标数值对其他方面所产生的影响作出解释。要通过一个指标的变化，追溯到其他指标的变化。要既见树木又要见森林，不能就指标论指标。比如，企业资金结构的恶化，要同企业实现利润情况，企业资金增减情况结合分析，看是否导致企业财务状况的恶化。要通过分析，抓住关键和本质。              
                </h2>
                <h1>4、定性分析与定量分析相结合。</h1>
                <h2>
                    任何事物都是质与量的统一，财务分析也要定性与定量相结合。由于现代企业面临复杂而多变的外部环境，而这些外部环境有时很难定量，但环境的变化却对企业的产业发展、投资目标的实现以及企业的销售情况，起重要影响。因此在定量分析的同时，要作出定性判断，在定性判断的基础上，再进一步进行定量分析和判断。                
                </h2>
                <h1>5、静态与动态相结合。</h1>
                <h2>
                    企业生产经营业务，是一个动态发展过程。我们所收集到信息资料，特别是财务报表资料，一般是过去情况反映。在新形势下，同样投入，可能会有不同产出。因此，要时刻注意数值时间性，在弄清过去情况的基础上，分析在当前情况下可能结果。 要通过指标对比、指标综合，来分析问题，揭露矛盾。比如，企业拥有大量银行存款，这可能是企业销售量剧增结果，也可能是企业无事可做、不善于利用资金反映。要通过指标联系，综合分析判断，得出分析结论。
                </h2>
                <h2>
                    要联系企业和投资者、决策者的实际情况，静态和动态相结合，对指标值的含义作出判断，以便为决策服务。不结合具体的发展变化实际情况，就不可能提出建设性分析意见。
                    为推进企业长远发展，增强企业财务分析人员对财务分析认识度，北京合力中税科技发展有限公司作为国内最早的财税供应链协同解决方案提供商和国内首家电子票据综合服务平台服务商，凭借在财税管理领域多年来运筹帷幄和深耕细作，以行业内普遍认同的三角财务（战略财务+业务财务+共享财务）为支撑、智能财务为保障，基于报账、核算、资金、发票、档案、税务等财务云模块，构建“战略财务+业务财务+共享财务+智能财务”财务管理新体系，为企业管理提供决策支撑、辅助经营、高效满意和提供技术保障，实现价值保值、增值目标。通过连接发票云、档案云和业务云，实现企业内部信息系统互联互通、数据协同、信息共享，为企业提供自动化实时响应的记账、算账、报账和报告，包括预算、核算和结算三算合一，实时账表、实时分析和财务桌面服务，实现企业内外系统的互联互通、信息共享，为经营赋能，为管理创变。
                    如今是一个崭新时代，无论是从财务人员个人价值成长，还是从企业效率提升、成本下降，抑或是从企业获得数据精准和高效上，摒弃重复性高的人工、优化财务流程作业、释放劳动力投入到高价值的工作中是很有必要的。
                </h2>
            </Link>
        </onClick>
    </Card>

);

export default Two;