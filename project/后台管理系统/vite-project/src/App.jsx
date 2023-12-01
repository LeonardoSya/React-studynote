import { useEffect, useState } from 'react'
import { Input, Table } from 'antd';
import './App.css'

const App = () => {

  const [filter, setFilter] = useState({
    a: undefined,
    b: undefined,
    c: undefined,
    d: undefined,
    sorter: undefined
  });
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 20 });
  const [total, setTotal] = useState(0)
  const [selectedRows, setSelectedRows] = useState([]);

  const getDataSourceList = () => {
    setLoading(true);
    Promise.then(() => {
      // xxxx
    }).finally(() => {
      setLoading(false);
    })
  };

  useEffect(() => {
    setPagination(p => ({ ...p, current: 1 }));
  }, [filter]);  // 页面初始化时请求

  useEffect(() => {
    getDataSourceList();
  }, [pagination])  // 分页改变时请求

  return (
    <div className='container'>
      <div className='header'>
        <div className='filter'>
          <Input value={filter.a} onChange={(e) => setFilter(f => ({ ...f, a: e.target.value }))} />
          <Input value={filter.b} onChange={(e) => setFilter(f => ({ ...f, b: e.target.value }))} />
          <Input value={filter.c} onChange={(e) => setFilter(f => ({ ...f, c: e.target.value }))} />
        </div>
        <div className='buttonGroup'>按钮区</div>
      </div>
      <div className='content'>
        <Table
          rowSelection={{
            selectedRowKeys,
            onChange: (selected) => setSelectedRows(selected)
          }}
        />
      </div>
    </div>
  );
};

export default App;