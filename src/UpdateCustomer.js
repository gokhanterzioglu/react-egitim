import { Button, Form, Input, Spin } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dataServices } from './services';

function UpdateCustomer() {

    let { id } = useParams();
    const form = useRef(null);

    const navigate = useNavigate();

    const [customer, setCustomer] = useState({});
    const [loading, setloading] = useState(true);

    useEffect(() => {
        dataServices.getCustomerById('/customers', id)
            .then(data => {
                setCustomer(data);
                
                setTimeout(() => {
                    form.current.resetFields()
                    setloading(false);
                }, 1000);
            })
    }, [])


    const onFinish = (values) => {
        dataServices.updateCustomer("customers", values, id)
            .then(res => {
                navigate('/customers')
            })
    }

    return (
        <>
            <Spin spinning={loading}>
                <Form onFinish={onFinish} layout='vertical' size='large' ref={form} initialValues={customer}>
                    <Form.Item
                        label='Id'
                        name='id'
                        rules={[{ required: true, message: 'Id girilmesi zorunludur.' }]}
                    >
                        <Input readOnly='readonly' style={{ width: '60%' }} />
                    </Form.Item>

                    <Form.Item
                        label='Şirket Adı'
                        name='companyName'
                        rules={[{ required: true, message: 'Şirket Adı girilmesi zorunludur.' }]}
                    >
                        <Input style={{ width: '60%' }} />
                    </Form.Item>

                    <Form.Item
                        label='Contact Name'
                        name='contactName'
                        rules={[{ required: true, message: 'Yetkili Adı girilmesi zorunludur.' }]}
                    >
                        <Input  style={{ width: '60%' }} />
                    </Form.Item>

                    <Form.Item
                        label='Contact Title'
                        name='contactTitle'
                    >
                        <Input  style={{ width: '60%' }} />
                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            Güncelle
                        </Button>
                    </Form.Item>
                </Form>
            </Spin>
        </>
    )
}

export default UpdateCustomer