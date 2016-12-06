/**
 * Created by flori on 06.12.2016.
 */
import React, { Component } from 'react';

import Datatable from '../components/Datatable';


const tableColumns = [{
    title: 'Name',
    dataIndex: 'name',
    render: (text, key) => <a href="#/list/">{text}</a>,
}, {
    title: '# Receipts',
    dataIndex: 'age'
},
    {
        title: 'Action',
        dataIndex: ''
    }
];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}];



class List extends Component {
    render(){
        return (

            <div className="List">
                <h1>Receipt lists</h1>
                <Datatable columns={tableColumns} data={data}/>
            </div>

        )
    }
}

export default List;