import React, { Component } from 'react'
import citydata from '../../json/city.json'
import BScroll from 'better-scroll'

export default class Map extends Component {

    render() {
        return (
            <div>
                <div style={{ position: 'fixed', width: '15px', height: '100px', right: 0, top: 100 }}>
                    {
                        citydata.citys.map(obj => <p onClick={this.changlist.bind(this, obj.title)}>{obj.title}</p>)
                    }
                </div>
                <div id='selectcity_div' style={{ height: '100%', overflow: 'scroll', paddingRight: '20px' }}>
                    <ul className="content">
                        <h1>热门城市</h1>
                        {
                            citydata.hotcity.map(obj => {
                                return <p>{obj}</p>
                            })
                        }
                        {
                            citydata.citys.map(obj => <div id={obj.title}>
                                <h1>{obj.title}</h1>
                                {
                                    obj.child.map(cn => <p>{cn}</p>)
                                }
                            </div>)
                        }
                    </ul>
                </div>
            </div >
        )
    }
    changlist(lab) {
        this.myscroll.scrollToElement('#' + lab, 300)
    }
    componentDidMount() {
        //初始化
        this.myscroll = new BScroll('#selectcity_div', {})
    }
}
