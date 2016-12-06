/**
 * Created by flori on 06.12.2016.
 */
import React, { Component } from 'react';

import { Menu, Icon, Switch } from 'antd';

const SubMenu = Menu.SubMenu;

class MainMenu extends Component {
    render(){
        return (
            <div className="Menu">
                <Menu
                    theme="dark"
                    mode="horizontal"
                >
                    <Menu.Item>
                        <a href="#/"><Icon type="pie-chart" /> Dashboard</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="#/receipts"><Icon type="file-text" /> Receipts</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="#/list"><Icon type="book" />Lists</a>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default MainMenu;