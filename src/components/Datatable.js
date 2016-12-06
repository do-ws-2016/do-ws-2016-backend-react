/**
 * Created by flori on 06.12.2016.
 */

import React, { Component } from 'react';

import { Breadcrumb } from 'antd';

import { Table } from 'antd';


// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
    }),
};

//class Datatable extends Component {
//    render(data, columns){
//        return (
//            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
//        )
//    }
//}
//
//export default Datatable;

export default ({columns, data}) => (
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
)
