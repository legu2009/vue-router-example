<template lang="jade">
div.vauth
    header.header
        div.header-left
            a(v-touch:tap="history.go(-1)")
                img.ib(src="http://m.mall.snail.com/globalCard/images/head-left.png")
        div.header-title 实名认证
    top-step(:name="['选择行程', '实名认证', '订单确认']", :active="1")
    group
        x-input(:value.sync="value", title="姓名：", placeholder="请填写真实姓名")
        x-input(:value.sync="value", title="身份证号：", placeholder="请填15到18位身份证号码")
        x-input(:value.sync="value", title="手机号码：", placeholder="请填11位的手机号码")
   div.auth-picture
        h3 请上传证件照
        p.auth-picture-info 根据国家工信部《电话用户真实身份信息登记规定》 要求，用户在我司办理电话租赁业务时需进行实名登记。
        div.auth-picture-item
            div#filePicker1.fileupload(name="filePicker1", data-index="1")
                img(:src="photo_path[0]")
            p 拍照时手持证件，面部不要遮挡，请确保姓名、证件号等信息清晰可见！
        div.auth-picture-item
            div#filePicker2.fileupload(name="filePicker2", data-index="2")
                img(:src="photo_path[1]")
            p 拍照时请确保姓名、证件号码等信息清晰可见！
        div.auth-picture-item
            div#filePicker3.fileupload(name="filePicker3", data-index="3")
                img(:src="photo_path[2]")
            p 拍照时请确保签发机关、有效期限等信息清晰可见！
    div.auth-protocol(:class="{'sel':protocol}")
        p 我已阅读并接受
            a(href="javascript:;", v-touch:tap="readProtocol").
                《蜗牛移动国际云机测试租赁使用协议》
        i(v-touch:tap="protocol = !protocol")
    div.footer-margin.footer-btn
    footer.footer-btn
        a(href="javascript:;", v-touch:tap="goNext") 下一步  
div#authTips.none
    div.auth-tips-head 入网协议
        a.auth-tips-close(href="javascript:;")
    div.auth-tips-content
        p.auth-tips-title 苏州蜗牛数字科技股份有限公司客户入网服务协议
        p 甲方(客户)：
        p 乙方：苏州蜗牛数字科技股份有限公司
        p.auth-tips-title 友好提示：
        p 1.甲方应具有完全的民事行为能力。无民事行为能力或限制民事行为能力的甲方入网时应经过其监护人的同意并签名确认。
        p 2.在签署本协议之前，请甲方或其监护人、代理人仔细阅读本协议各条款，如有疑问请及时咨询。一旦签署本协议，即意味甲方或其监护人、代理人接受并认可协议内容，愿意遵守执行。甲方所需的业务、办理手续以及资费标准请参见乙方的相关业务说明。
        p 根据《中华人民共和国合同法》、《中华人民共和国电信条例》等有关法律、条例规定，甲乙双方在平等、自愿、公平、诚信的基础上，基于对乙方移动通信服务的了解和需求，甲方自愿申请成为乙方移动用户，并达成协议如下：
        p.auth-tips-title 第一条 网络服务
        p 1.乙方在现有技术条件下的网络覆盖范围内，向甲方提供通信服务。国际漫游服务只能在与乙方签订漫游协议的电信运营商网络覆盖范围内享有。
        p 2.乙方提供的网络服务应符合国家规定的通信质量标准。乙方依法保障甲方的通信自由和通信秘密。
        p 3.凡通过甲方号码发生的通信及办理业务的行为均被视为甲方或甲方授权的行为。
        p 4.对于本协议所述的通知，乙方可以通过公告、0512-67621002服务热线、网上营业厅www.snail.com、账单、短信、电子邮件等方式之一通知客户。并且乙方通过受到影响地区的主要报刊、广播或电视任一途径进行公告，也视为已通知客户。
        p.auth-tips-title 第二条 入网要求
        p 1.甲方办理入网、变更手续时，应提交以下登记资料：
        p (1)个人客户：提供个人有效证件原件（委托他人办理的应同时提交本人及代理人/监护人有效证件，及书面委托材料），有效证件包括居民身份证、军/警官证、港澳居民往来内地通行证、台胞证、护照等；
        p (2)单位客户：提供单位介绍信、营业执照副本原件、代理人有效证件原件。
        p 2.甲方应使用国家给予入网许可标志的移动电话终端设备，当申请开通默认服务以外的服务项目时，移动电话终端设备还应具备相应功能，否则将无法支持所选服务，甲方将自行承担损失。
        p 2.甲方应使用国家给予入网许可标志的移动电话终端设备，当申请开通默认服务以外的服务项目时，移动电话终端设备还应具备相应功能，否则将无法支持所选服务，甲方将自行承担损失。如果甲方超过1个月未激活（以SIM卡发货当日时间起算）SIM卡的，在乙方提前3天向甲方登记联系电话发送短信或拨打电话进行提醒后，该卡将自动激活。SIM卡激之日即视为甲方入网之日，业务相关约定及规范协议等开始生效。甲方自入网之日起，方可获得约定的通信服务。
        p.auth-tips-title 第三条　客户资料
        p 1.甲方应保证入网登记资料真实有效、准确完整，并有义务配合乙方对登记资料进行核实。协议有效期内，甲方登记资料如有变更，应主动办理变更手续。如乙方发现甲方登记资料失实或不准确，乙方有权暂停甲方网络服务。
        p 2.因甲方提供的客户资料不详、不实或变更后未通知乙方并办理变更手续等原因，使乙方无法向甲方提供服务的，乙方不承担相应责任。
        p 3.服务密码是甲方办理业务的重要凭证，凡使用服务密码办理业务的行为均被视为甲方或甲方授权的行为。因此引起的后果、义务与责任均由甲方承担。甲方入网后应立即修改初始服务密码，并妥善保管。包括但不限于因甲方未及时修改初始服务密码或不慎泄露服务密码导致的影响和损失，由甲方自行承担。
        p 4.乙方对甲方提供的信息资料依法负有保密义务，但法律法规另行规定的除外。
        p.auth-tips-title 第四条　费用标准和费用交纳
        p 1.乙方应在国家电信资费主管部门允许的范围内设定资费标准、向客户明码标价，公告计费方式、缴费期限等信息；甲方应在乙方明示的期限内足额交纳各项通信费用。
        p 2.如遇国家统一调整通信费用标准的，按国家统一规定的时间执行。如遇乙方发布、调整资费的，在乙方通知确定的生效日起执行。在生效日前，甲方未提出异议的视为同意，协议继续履行；甲方提出异议且未能与乙方达成一致的，协议终止。
        p 3.甲方未在约定期限内足额交纳通信费用的，乙方有权暂停甲方网络服务；甲方超过缴费时限，每日须按欠缴金额３‰的标准支付违约金；甲方缴清欠费和违约金后，除甲方明确提出不开通或已销号外，乙方应在24小时内恢复甲方网络服务。对前述情形，乙方将保留追缴欠费及违约金的权利，也有权以通知单、委托第三方等形式追缴欠费。
        p 4.计费周期为自然月，即每月1日00:00至当月最后一日24:00。（由于网络设备产生话单及相关处理会有时延，可能会发生当月部分话费计入后期话费中收取的情况。）
        p 5.甲方定制第三方增值业务或其它收费业务，则视为同意乙方代第三方向甲方收取信息费、功能费等，甲方使用第三方提供的增值业务或其它收费业务由第三方制定收费标准并公布。若甲方对收取的代收费业务服务费有异议，可在乙方协助下与第三方服务商协商解决。
        p 6.因甲方手机终端中的软件自动升级等原因产生的网络流量，甲方应承担该笔流量所产生的费用。
        p 7.甲方如需开通国际及台港澳业务，乙方可根据甲方的信用评级情况要求甲方交纳一定的预付款。
        p.auth-tips-title 第五条　优惠活动
        p 1.在符合条件的情况下，甲方可自愿参加乙方的优惠活动。
        p 2.优惠活动是指乙方通过“话费优惠（例如存费送费、购机送费）、终端优惠（例如存费送机）、赠送业务或礼品”等方式向符合条件的甲方提供各类优惠通信产品。
        p 3.优惠活动均可能存有时间、人数、条件等诸多限制，并非所有甲方均有资格参加。优惠活动详情以乙方不时发布的优惠活动通知为准。
        p 4.甲方依据本协议使用所购买的通信服务、通信卡、用户号码，同时在协议期内（协议期详见综合业务受理单）连续在网使用乙方通信服务的情况下，在符合优惠活动的具体条件的前提下，甲方基于主动自愿参加的明确意思表示，并与乙方达成合意一致后，方可参加乙方提供的优惠活动。
        p.auth-tips-title 第六条 风险控制
        p 1.甲方应妥善保管自己的移动电话不被非法盗用或非法使用，若发现通信费用异常增长，经初步核查确有问题的，可及时拨打客服热线0512-67621002办理暂时停机手续，并向公安机关报案，乙方应积极配合公安部门调查相关情况，但乙方不承担上述情形对甲方所造成的不良后果。
        p 2.甲方未付的通信费用达到话费信用额度时（信用额度是指甲方可以用于透支消费的最高话费额度，信用额度基于甲方的不同情况存在不同，信用额度可能为0）或存在欠费时，应及时补充交纳通信费用；当甲方未付的通信费用超过话费信用额度时或存在欠费时，乙方有权暂停甲方网络服务（超过信用额度停机不受约定缴费期限的限制）；如暂停满三个月，甲方仍未交清未付费用、欠费和违约金的，乙方有权终止提供电信服务（即：“销户”）和解除协议，并可以通过信函、公告、委托第三方等方式追缴全部欠费和违约金。
        p 3.甲方发送违法及其他违反公序良俗内容的信息，或未经接收客户同意发送商业广告信息的，乙方有权依据接收客户举报或投诉关闭甲方信息发送功能甚至暂停甲方的网络服务
        p 4.甲方在未付的通信费用超过话费信用额度时或存在欠费或存有违法行为的情况下，乙方有权拒绝为甲方开办其他业务，直至其补交全部欠费及违约金货违法行为得到纠正并书面保证不再发生。
        p 5.一方违约给对方造成损失的，应当依法承担赔偿责任，但任何一方应承担的赔偿损失的责任范围不包括对方未实现的预期利润或利益、商业信誉的损失、数据的丢失、第三方损失及其他间接损失。
        p.auth-tips-title 第七条　客户行为规范
        p 1、严禁甲方在乙方提供通信服务期间使用免卡拨打声讯电话，包括但不限于直接拨打或通过呼叫转移等方式拨打；
        p 2、严禁甲方将免卡用于以非法赢利为目的商业活动或交易行为，包括但不限于将免卡以类似公用电话的方式向不特定多数人有偿出租、出借、倒卖、转售免卡或使用免卡向不特定多数人进行电话营销、传播广告等。
        p 3、严禁使用免卡从事违法犯罪活动，包括但不限于用免卡拨打特定号码并实现话费套利或赚取回扣的行为；利用免卡传播非法言论，散播虚假新闻，制造社会恐慌；利用免卡从事电话诈骗行为。
        p 4、严禁将免卡直接投入业务范围或服务内容包含语音呼叫服务（不论有偿或无偿）、短信发送服务（不论有偿或无偿）的企业或实体使用。禁止呼叫中心（包括但不限于企业售后服务中心，客户回访中心）移动秘书台等类似性质的单位利用免卡接听、拨打电话或发送短信。一旦发现，乙方有权立即停机（限制呼入、呼出）甚至销号。
        p 5、严禁甲方在乙方提供通信服务恶意超余量的呼出行为（包括但不限于长期不挂机、超发短信），一经发现立即停机（限制呼入、呼出）甚至销号。
        p 6、当甲方出现上述任何一种情形时，视为已经超出使用权限，乙方有权视情况采用提示、通知、警告、限期整改、限制呼入或呼出、销号等方式阻止甲方超权限使用通信服务。
        p 7、如甲方的行为给乙方造成重大经济损失，乙方有权视情节轻重和甲方主观恶意程度向甲方提出索赔。情节严重涉嫌犯罪的，乙方将依法追究相关人员的刑事责任。
        p 8、乙方对明确禁止的行为已向甲方做了充分的说明和提示。如有调整，乙方将以网站公示的方式通知甲方。乙方对上述使用须知拥有最终解释权。因甲方违反上述禁止约定，导致乙方停止提供通讯服务并销号的，甲方已经支付的购买免卡所支付的款项，无论是否还有余额，乙方均不再退还。
        p.auth-tips-title 第八条　网络及客户服务
        p 1.乙方为甲方提供的移动通信服务应当达到国家的相关标准，不得低于《电信服务规范》所规定的通信质量指标。
        p 2.乙方向甲方提供客户服务电话0512-67621002、网上营业厅www.snail.com，以便甲方咨询了解乙方网络服务、业务推广、各类营销优惠活动等内容。乙方还应向甲方免费提供通话所在地（仅限国内不含台港澳）火警119、匪警110、医疗急救120等公益性电信服务（具体以官网公布信息为准）。
        p 3.乙方免费提供给甲方最近5个月的通话详单查询、月结帐单查询（不含查询当月）。若甲方对乙方收取的费用存有异议，应在异议费用发生后5个月内向乙方提出(系统产生用户话单当月起后5个月，不含当月)。经核实确属乙方责任多收费用的，乙方应将已多收的部分返还甲方。
        p 4.乙方向甲方提供需要甲方支付月功能费的服务项目时，应征得甲方同意；乙方开通服务项目让客户进行体验时，不得收取服务项目月功能费。对于没有约定终止期限的业务，甲方有权提前一个月向乙方申请终止业务，乙方提前一个月通知甲方后有权终止提供该业务。
        p 5.对于甲方通信服务开通/关闭申请，乙方应在承诺的时限内操作完成（双方另有约定的除外）。乙方超过时限未及时开通/关闭的，应减免甲方由此产生的不合理费用。乙方通过网站及短信等方式向甲方公布并提示服务项目、服务时限、服务范围及资费标准等内容。
        p 6.乙方有义务采取公布监督电话等形式受理甲方投诉，并在接到投诉后的合理期限内答复甲方。
        p 7.乙方不得侵害甲方的通信自由和通信秘密，对甲方的客户资料负有保密义务，但根据法律法规，乙方有义务配合法定机关对客户通信、资料、数据的调查取证工作。
        p 8.甲方向乙方申告移动电话通信障碍（指交换设备或传输线路原因造成通信中断等现象，不包括网络覆盖和终端设备故障），乙方应自接到申告之时起48小时内修复或调通。
        p 9.乙方承诺自身不利用移动通信网络向甲方发送违反信息或骚扰信息（不包括乙方为甲方提供业务服务而发生的信息）。
        p 10.乙方因设备搬迁、工程割接、网络及软件升级等可预见的原因，影响或可能影响客户使用的，应提前72小时公告或以其他方式通告所涉及的客户。
        p 11.为保证甲方权益，乙方对销号的移动电话号码至少冻结一定时限后，方可重新投入使用。
        p 12.为方便向甲方提供更好的服务，方便甲方了解蜗牛移动各类业务服务和信息，乙方可以以短信、彩信、wappush、电话、电子邮件、信函等方式与甲方就业务和服务进行沟通。
        p.auth-tips-title 第九条　号码变更与转让
        p 1.由于非甲方原因需要更改其移动号码时，乙方至少提前45日通知甲方，至少提前15日告知甲方新的移动号码。
        p 2.甲方欲转让移动号码使用权应先缴清通信费等所有费用，转让时须由甲方（及其监护人）及第三人各方持有效证件原件（委托他人办理的应同时提交本人及代理人/监护人有效证件及授权书）通过乙方指定方式办理变更登记手续。在甲方结清所有费用后，由第三人与乙方重新签订客户入网服务协议，本协议自动终止；在办理变更手续之前，因使用该号码导致的交费义务及一切后果仍由甲方承担。
        p 3.在甲方通过过户成为新机主的情形下，如因原机主未亲自到场办理过户而导致原机主就此提出异议，甲方应无条件放弃因过户产生的全部权益，并承担由此对原机主及对乙方造成的一切损失。过户代理人对此承担连带责任。
        p.auth-tips-title 第十条　移动通信卡规定
        p 1.甲方可自行设置和清除移动通信卡的个人识别码(初始密码为1234)，连续三次输入错误密码将会锁卡。发生锁卡时，请勿自行解锁，应按照乙方客服人员提示操作步骤进行规定操作。因甲方操作不当致使移动通信卡损坏或锁死的，甲方应自行承担换卡所需费用。
        p 2.协议期内，甲方若发生移动通信卡遗失、被盗、人为损坏等情形，可向乙方申请办理"停机"、"补卡"业务，避免损失扩大。甲方不能以此为由拒绝按本协议约定支付通信费用。
        p.auth-tips-title 第十一条　不可抗力
        p 1.因不可抗力导致本协议部分或全部不能履行的，双方可部分或全部免除责任。
        p.auth-tips-title 第十二条　技术进步
        p 1.因技术进步或依据国家有关政策，乙方为提升服务质量对移动电话网络进行整体换代升级而导致移动通信服务无法继续履行的，乙方应该至少提前90日发布公告，并提出合理的解决方案。甲方可就解决方案与乙方协商，但不得要求乙方继续履行本协议。
        p.auth-tips-title 第十三条　协议的变更
        p 1.乙方在本协议外以公告、使用手册、资费单页等书面形式公开做出的服务承诺，甲方办理各类业务所签署的表单、业务协议等均自动成为本协议的补充协议；与本协议冲突部分以补充协议为准，补充协议中未约定部分以本协议为准。
        p.auth-tips-title 第十四条　协议的解除
        p 1.除双方另有约定外，甲方要求终止网络服务的，应在缴清相关费用后办理退网手续，话费余额等按照乙方业务规定和双方约定进行处理。
        p 2.有下列任一情形的，乙方有权终止提供通信服务（即：“销户”）和解除协议：
        p a)甲方没有预存款，也没有任何业务余量，连续3个月未使用乙方提供的通信服务的（包括但不限于未主动发送短信、未拨打或接听电话、未使用数据流量、未使用呼叫转移）
        p b)由于产品资费升级，甲方订购的原有产品服务已经过期清零并已经退出市场，经乙方提前三个月通知后，而甲方未及时订购新的产品包、新资费套餐的；
        p 3.有下列任一情形的，乙方有权终止提供通信服务（即：“销户”）和解除协议，甲方如有已支付未消耗的通信服务费用不予退还且乙方还可以通过信函、公告、委托第三方等方式追缴全部欠费和违约金。
        p a)甲方提供的有效证件（包括代理人或监护人提供的有效证件）虚假不实；
        p b)利用号码或乙方提供的服务从事违法犯罪活动或损害社会公共利益的活动或其它不当用途；
        p c)乙方收到国家行政管理部门或其他相关部门发文要求停止甲方网络服务；
        p d)甲方欠费停机后（含欠费停机当月）3个月内仍未缴清通信费用和违约金的。
        p e)甲方违反本协议下第七条约定的客户行为规范。
        p.auth-tips-title 第十五条　争议解决方式
        p 1.有关协议争议，双方可沟通协商解决；协商不成的，甲方可向当地通信管理局或消费者协会申请进行调解；任何一方均可向乙方住所地的人民法院起诉。
        p.auth-tips-title 第十六条　协议生效
        p 1.本协议自双方签字盖章且业务开通之日起生效，有效期一年。到期后，若双方均无异议，本协议以一年为周期逐年自动顺延。
        p.auth-tips-title 第十七条　其他
        p 1．客户入网后可委托第三方办理业务（乙方不允许代办的业务除外）；第三方持有客户身份证件即视为客户的代理人，有权代客户办理业务。
        p 2．由于乙方客户号码数量有限，客户名下的号码数量不得超过乙方规定的限额。客户现在或曾经持有的任一号码发生欠费的，客户应缴清欠费才得办理新的号码入网手续。
        p 3．客户入网或者办理业务时，乙方可以复印、扫描或者拍照客户身份证件。
        p 4．客户入网或者办理业务时，乙方可以要求客户通过手写板签字的电子方式签名；客户认可上述手写板签名的数字化图像为可靠、有效的签名。
        p 5.客户办理各类业务所签署的业务受理单、表单、协议等为本协议的补充协议，与本协议冲突部分以补充协议为准，补充协议中未约定部分以本协议为准。
        p 甲方（监护人、代理人）承诺：已详细阅读本协议的全部条款，在签署本协议后即视为完全理解并同意接受本协议的全部条款。即使之前乙方存有任何书面或口头的介绍、广告、演示等，各方均以经书面签署的本协议为约束各方权利义务的有效文本，取代之前所有的可能存在的口头或书面的资料、文本。在本入网协议书中，可能涉及免除乙方责任，或导致甲方承担责任的条款，已经以特别提示和加粗的方式向甲方明确释明，在此，甲方确认，对该等条款已经充分注意，并同意签署本入网协议书。
</template>
<style lang="stylus">
@import "auth.styl"
</style>
<script>
    //2段之间相隔50px
    import $ from 'jquery'
    import Vue from 'vue'
    import TopStep from 'COMPONENT/top-step.vue'
    import Group from 'VUX/group/index.vue'
    import XInput from 'VUX/x-input/index.vue'
    require("./blockUI.min.js");
    Vue.use(require('vue-touch'));
    export default {
        components: {
            TopStep,
            Group,
            XInput
        },
        route: {
            waitForData: true,
            data(transition) {
                transition.next();
            }
        },
        ready() {
            var creatrWebUploader = function (index) {
                var selector = '#filePicker' + index;
                var $li = $(selector);
                var uploader = WebUploader.create({
                    auto: true,
                    swf:'./webuploader/Uploader.swf',
                    server: 'http://m.mall.snail.com/UValidateRealName/UpLoadPicMob?photo_mark=' + index,
                    pick: selector,
                    accept: {
                        title: 'Images',
                        extensions: 'gif,jpg,jpeg,bmp,png',
                        mimeTypes: 'image/*'
                    }
                });
                uploader.on('uploadProgress', function( file, percentage ) {
                    var $percent = $li.find('.progress span');
                    if ($percent.length == 0 ) {
                        $percent = $('<p class="progress"><span></span></p>')
                            .appendTo( $li )
                            .find('span');
                    }
                    $percent.css('width', percentage * 100 + '%' );
                });
                uploader.on('uploadSuccess', function(file, response) {
                    if (response['msgcode'] == 1) {
                        var $img = $li.find('img');
                        uploader.makeThumb(file, function( error, src ) {
                            if ( error ) {
                                $img.replaceWith('<span>不能预览</span>');
                                self.photo_path[index - 1] = "";
                                return;
                            } else {
                                self.photo_path[index - 1] = src;
                            }
                        },"1","1");
                    } else {
                        alert(response['msg']);
                    }
                });
                uploader.on('uploadError', function( file ) {
                    alert("上传失败");
                });
                uploader.on('uploadComplete', function( file ) {
                    $li.find('.progress').remove();
                });
            }
            creatrWebUploader(1);
            creatrWebUploader(2);
            creatrWebUploader(3);
        },
        methods:{
            goNext() {
                this.$route.router.go({
                    'path': '/index'
                });
            },
            readProtocol() {
                $.blockUI({
                    css: {
                        left:'6%',
                        top:'11%'
                    },
                    onOverlayClick() {
                        $.unblockUI();
                    },
                    message: $("#authTips"),
                    onBlock() {
                        $(".auth-tips-close").on("click", function () {
                            $.unblockUI();
                        });
                    }
                });
            }
        },
        data() {
            return {
                name: "",
                cert_type: "1",
                cert_no: "",
                audit_status: "",
                photo_path: ['http://m.mall.snail.com/globalCard/images/m1.png','http://m.mall.snail.com/globalCard/images/m2.png','http://m.mall.snail.com/globalCard/images/m3.png'],
                enableEdit: false,
                protocol: true,
                city_id: "",
                goods_id: "",
                mix_id: "",
                package_id: "",
                serial_number: "",
                treaty_id: "",
                readyData: false
            }
        }
    }
</script>