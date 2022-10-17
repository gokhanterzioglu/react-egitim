import { Button, Form, Input, Modal, PageHeader } from 'antd'
import React from 'react'
import { dataServices } from './services'

function AddCustomer() {

    const onFinish = (values) => {
        dataServices.addCustomer('customers', values)
            .then((res) => {
                Modal.success({
                    content: 'Müşteri başarıyla eklendi.'
                });
            })
    }

    return (
        <>
            <PageHeader
                className='site-page-header'
                title="Müşteri Ekle" />
            <Form onFinish={onFinish} layout='vertical' size='large'>
                <Form.Item
                    label='Id'
                    name='id'
                    rules={[{ required: true, message: 'Id girilmesi zorunludur.' }]}
                >
                    <Input placeholder="Id bilgisi giriniz..." style={{ width: '60%' }} />
                </Form.Item>

                <Form.Item
                    label='Şirket Adı'
                    name='companyName'
                    rules={[{ required: true, message: 'Şirket Adı girilmesi zorunludur.' }]}
                >
                    <Input placeholder="Şirket adını giriniz..." style={{ width: '60%' }} />
                </Form.Item>

                <Form.Item
                    label='Contact Name'
                    name='contactName'
                    rules={[{ required: true, message: 'Yetkili Adı girilmesi zorunludur.' }]}
                >
                    <Input placeholder="Yetkili adını giriniz..." style={{ width: '60%' }} />
                </Form.Item>

                <Form.Item
                    label='Contact Title'
                    name='contactTitle'
                >
                    <Input placeholder="Yetkili ünvanını giriniz..." style={{ width: '60%' }} />
                </Form.Item>

                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Ekle
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default AddCustomer