import React, { Component } from 'react'
import { Carousel, Grid, Card } from 'antd-mobile';
import '../main/Mian'
import './Mian.css'
import { iflike, IP } from '../../../api/apis'

export default class Mian extends Component {
    constructor() {
        super()
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            listicon: [{ i: 'icon1.png', t: '新房' },
            { i: 'icon2.png', t: '二手房' },
            { i: 'icon3.png', t: '租房' },
            { i: 'icon4.png', t: '商铺写字楼' },
            { i: 'icon5.png', t: '卖房' },
            { i: 'icon6.png', t: '海外房产' },
            { i: 'icon7.png', t: '小区房价' },
            { i: 'icon8.png', t: '问答' },
            ].map((obj) => {
                return { icon: require('../../../assets/imgs/' + obj.i), text: obj.t }
            }),
            listicon2: [{ i: 'icon9.png', t: '我要贷款' },
            { i: 'icon10.png', t: '房贷计算' },
            { i: 'icon11.png', t: '知识' },
            { i: 'icon12.png', t: '扫一扫' },
            ].map((obj) => {
                return { icon: require('../../../assets/imgs/' + obj.i), text: obj.t }
            }),
            list: [],
            city: ''

        }
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: [{ id: "1", img: 'AiyWuByWklrrUDlFignR', hash: '#/login' }, { id: "2", img: 'TekJlZRVCjLFexlOCuWn', hash: '#/reg' }, { id:"3", img: 'IJOtIlfsYdTyaDTRVrLI', hash: '#/' }],
            });
        }, 100);
    }

    render() {
        return (
            <div>
                {/* 搜索栏 */}
                <div className='searchbox'>
                    <div>{this.state.city}</div>
                    <div className='middiv'>
                        <input placeholder='请输入地址' ></input>
                    </div>
                    <div className='rightdiv'>
                        <img src={require('../../../assets/imgs/icon6.png')} onClick={this.linkmap.bind(this)}></img>
                    </div>

                </div>
                <div id='mymap' style={{ width: '100%', height: '200px' }}></div>
                {/* 轮播图 */}
                <div>
                    <Carousel
                        autoplay
                        infinite
                    >
                        {this.state.data.map(obj => (
                            <a
                                key={obj.id}
                                href={obj.hash}
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`https://zos.alipayobjects.com/rmsportal/${obj.img}.png`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </div>
                {/* 中间栅格 */}
                <div>
                    <Grid data={this.state.listicon} activeStyle={false} hasLine={false} />
                </div>
                {/* 房产百科 */}
                <div>
                    <Card full>
                        <Card.Header
                            title="房产全百科"
                            extra={<span className='fontstyle'>专业的买房攻略</span>}
                        />
                        <Card.Body>
                            <Grid data={this.state.listicon2} activeStyle={false} hasLine={false} />
                        </Card.Body>
                    </Card>
                </div>
                {/* 猜你喜欢 */}
                <div>
                    <h3>猜你喜欢</h3>
                    {this.state.list.map(obj => {
                        return <div className='youlike'>
                            <img src={IP + obj.imgs}></img>
                            <div>
                                <h2>{obj.name}</h2>
                                <p>{obj.area} {obj.range}</p>
                                <p>{obj.type} {obj.point}平</p>
                            </div>
                            <p>{obj.price}元/平</p>
                        </div>
                    })
                    }

                </div>
            </div>
        )
    }
    linkmap() {
        this.props.h.push('/map')
    }
    componentDidMount() {
        const _this = this
        var map = new window.AMap.Map("mymap", {
            resizeEnable: true,
            zoom: 13
        });
        //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    _this.setState({
                        city: cityinfo
                    })
                    //地图显示当前城市
                    map.setBounds(citybounds);
                }
            } else {
                console.log(result.info)
            }
        });
    }
    componentWillMount() {
        iflike().then(msg => {
            this.setState({
                list: msg.data
            })
        })
    }
}
