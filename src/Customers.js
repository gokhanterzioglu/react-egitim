import { Button, Modal, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { dataServices } from './services';
import { InfoCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { confirm } = Modal;

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {

    getCustomers();

  }, []);

  const deleteCustomer = (id) => {
    setLoading(true);
    dataServices.deleteCustomer('/customers', id)
      .then(res => {
        getCustomers();
        setLoading(false);
      })
  }

  const updateCustomer = (id) => {
    navigate('/updatecustomer/' + id)
  }

  const getCustomers = () => {
    dataServices.getCustomers('/customers')
      .then(data => {
        setTimeout(() => {
          setCustomers(data);
          setLoading(false);
        }, 2000);
      })
  }

  const goCustomerDetail = (id) => {
    navigate('/customerDetail/' + id)
  }

  const showDeleteConfirm = (id) => {
    confirm({
      title: 'Müşteriyi silmek istiyor musunuz?',
      icon: <ExclamationCircleOutlined />,
      content: 'Silmek istediğiniz müşteri halihazırda kullanılıyor olabilir.',
      okText: 'Evet',
      okType: 'danger',
      cancelText: 'Hayır',
      onOk() {
        deleteCustomer(id);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      sorter: (a, b) => a.id.localeCompare(b.id)
    },
    {
      title: 'Müşteri Adı',
      dataIndex: 'companyName',
      sorter: (a, b) => a.companyName.localeCompare(b.companyName)
    },
    {
      title: 'Yetkili Adı',
      dataIndex: 'contactName',
      sorter: (a, b) => a.contactName.localeCompare(b.contactName)
    },
    {
      title: 'Yetkili Ünvanı',
      dataIndex: 'contactTitle',
      sorter: (a, b) => a.contactTitle.localeCompare(b.contactTitle)
    },
    {
      title: 'Silme',
      dataIndex: 'id',
      render: (id) => <Button onClick={() => showDeleteConfirm(id)} type="primary" shape="circle" size="large" danger>Sil</Button>
    },
    {
      title: 'Güncelleme',
      dataIndex: 'id',
      render: (id) => <Button onClick={() => updateCustomer(id)} type="primary" shape="round" size="large" >Güncelle</Button>
    }
    ,
    {
      title: 'Detay',
      dataIndex: 'id',
      render: (id) => <Button onClick={() => goCustomerDetail(id)} type="primary" shape="circle" size="large" icon={<InfoCircleOutlined />}></Button>
    }
  ]

  return (<>
    <Table dataSource={customers} columns={columns} pagination={{ pageSize: 10 }} rowKey='id' loading={loading}></Table>
  </>
  )
}

export default Customers